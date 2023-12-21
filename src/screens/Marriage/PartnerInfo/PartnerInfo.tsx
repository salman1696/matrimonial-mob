import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useTheme } from '../../../hooks';
import { ApplicationScreenProps } from '../../../../@types/navigation';
import { useTranslation } from 'react-i18next';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../../theme/Variables';
import i18n from '../../../translations';
import { getNafat, initaiteMarriageProcess } from '../../../services/UserService';
import { useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';


const PartnerInfo = (props: any) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const { user ,tempMarriage} = useSelector((state: any) => state.user)
    const [modalVisible, setModalVisible] = useState(false);
    const [list, setFavItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);
    const [nafat, setNafat] = useState('');
    const [nationalId, setNationalId] = useState('');
    const [phone, setPhone] = useState('');
    const [loadingNafat, setLoadingNafat] = useState(false);
    const [remarks, setRemarks] = useState('');


    const Tab = createMaterialTopTabNavigator();

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const onGetNafat = () => {

        const data = {
            "nationalId": nationalId,
            "phone": phone,
        }

        setLoadingNafat(true);
        getNafat(data).then((res) => {
            console.log(res, 'nafat');
            if (res.status === 200) {
                setNafat(res.data.data);
                setLoadingNafat(false);
            }

        }).catch((err) => {
            console.log(err, 'errreNN');
            Toast.show(err.response.data.message, Toast.SHORT);
            setLoadingNafat(false);
            setNafat(null);


        })
    }

    const onInitiate = () => {
        const id = tempMarriage?.id;
        const data = {
            
            "brideUserId": nafat?.id,// if gender is female then it will be groomUserId
            "message":remarks,
        }
        setLoadingNafat(true);
        initaiteMarriageProcess(id,data).then((res) => {
            console.log(res);
            if (res.status === 200) {
                setLoadingNafat(false);
                props.navigation.push('ProcessOTP')
                props.jumpTo('guardain')
            }
        }).catch((err) => {
            console.log(err, 'errre');
            Toast.show(err.response.data.message, Toast.SHORT);
            setLoadingNafat(false);

        }
        )
    }

    useEffect(() => {
        if ([...nationalId].length === 8 && [...phone].length === 8) {
            onGetNafat();
            console.log('get nafat');
        }

    }, [nationalId, phone])


    useEffect(() => {
        toggleModal();
    }, []);

    return (
        <View style={{ flex: 1 }}>
          {loadingNafat &&
                <View style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    flex: 1,
                    backgroundColor: '#00000020',
                    zIndex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <ActivityIndicator size="large" color={Colors.primary} />
                </View>
            }  
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#FAFAFA', marginBottom: 100 }}>
                <View style={{ flex: 1, marginHorizontal: 20 }}>

                    <Text style={{
                        fontSize: 24, fontWeight: 700, color: Colors.black, marginVertical: 10,
                        textAlign: 'left'
                    }}>
                        {t("Partner's Info")}
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        textAlign: 'left'
                        , fontWeight: 500, color: Colors.black, marginTop: 10, marginBottom: 5
                    }}>
                        {t("National ID")}
                    </Text>
                    <View
                        style={{
                            marginTop: 5,
                            paddingVertical: Platform.OS === 'ios' ? 14 : 0,
                            borderWidth: 1,
                            flexDirection: 'row',
                            borderRadius: 5,
                            alignItems: 'center',
                            backgroundColor: '#F6F6F9',
                            borderColor: Colors.textGray200
                        }}
                    >
                        <Icon
                            name="idcard"
                            type="antdesign"
                            size={20}
                            color="black"
                            style={{ marginHorizontal: 10 }}
                        />
                        <TextInput
                            maxLength={10}
                            inputMode='numeric'
                            placeholder={t("National ID / Iqama Number")}
                            style={{ alignSelf: 'center', fontSize: 17 }}
                            value={nationalId}
                            onChangeText={(text) => setNationalId(text)}
                        />
                    </View>
                    <Text style={{
                        fontSize: 16, fontWeight: 500, color: Colors.black, marginTop: 15,
                        textAlign: 'left'
                    }}>
                        {t("Phone Number")}
                    </Text>

                    <Text style={{
                        fontSize: 14, fontWeight: 400, color: Colors.textGray200, marginBottom: 5,
                        textAlign: 'left'
                    }}>
                        {t("Associated with partner’s National ID")}
                    </Text>
                    <View
                        style={{
                            marginTop: 5,
                            paddingVertical: Platform.OS === 'ios' ? 14 : 0,
                            borderColor: Colors.textGray200,

                            borderWidth: 1,
                            flexDirection: 'row',
                            borderRadius: 5,
                            alignItems: 'center',
                            backgroundColor: '#F6F6F9',
                        }}
                    >
                        <Icon
                            name="phone"
                            type="antdesign"
                            size={20}
                            color="black"
                            style={{
                                marginHorizontal: 10
                                , transform: [{ rotateY: '180deg' }]
                            }}
                        />
                        <TextInput
                            placeholder={t("Phone Number")}
                            style={{ alignSelf: 'center', fontSize: 17 }}
                            maxLength={10}
                            inputMode='numeric'
                            value={phone}
                            onChangeText={(text) => setPhone(text)}
                        />
                    </View>

                    {nafat && <View style={{
                        width: '99%',
                        padding: 5, backgroundColor: '#f4f4f4',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.29,
                        shadowRadius: 2.65,
                        alignSelf: "center",
                        elevation: 7,
                        borderRadius: 12, marginVertical: 20
                    }}>
                        <View style={{ width: "90%", flexDirection: 'row', }}>

                            <View style={{ padding: 10, alignItems: 'center', backgroundColor: '#fff', borderRadius: 65, margin: 8 }}>
                                <Image
                                    testID={'brand-img'}
                                    style={{
                                        height: 30,
                                        padding: 14,
                                        width: 30,
                                        // alignSelf: 'flex-start',
                                    }}
                                    source={nafat?.gender === 'female'? Images.sparkles.female: Images.sparkles.male}
                                    resizeMode={'contain'}
                                />
                            </View>


                            <View style={{ flex: 0.77, alignItems: 'flex-start', justifyContent: 'center' }}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: 500,
                                        color: Colors.black,
                                    }}
                                >
                                    {nafat?.name ?? t("Syeda Haleema")}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        fontWeight: 300,
                                        color: Colors.black,
                                    }}
                                >
                                    {t("Single")}
                                </Text>

                            </View>
                        </View>
                    </View>}

                    {nafat && <Text style={{
                        fontSize: 16, fontWeight: 700, color: Colors.black, marginTop: 5,
                        textAlign: 'left'
                    }}>
                        {t("Add Message / Remarks")}
                    </Text>}

                    {nafat && <View
                        style={{
                            marginTop: 5,
                            padding: 15,
                            borderWidth: 1,
                            borderRadius: 5,
                            backgroundColor: '#F6F6F9',
                            height: 150,
                            borderColor: Colors.textGray200,

                        }}
                    >
                        <TextInput
                            placeholder={t("Enter your message")}
                            style={{ alignSelf: 'flex-start', fontSize: 17 }}
                            maxLength={28}
                            value={remarks}
                            onChangeText={(text) => setRemarks(text)}
                        />
                    </View>}





                </View>
            </ScrollView >
            <View style={{
                position: "absolute",
                width: '100%',
                padding: 20,
                flexDirection: "row",
                justifyContent: 'space-between',
                bottom: 0,
                backgroundColor: '#fff'
            }}>

                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                    style={{
                        borderRadius: 7,
                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                        alignItems: "center",
                        width: '48%',
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: '#00000030'


                        // marginHorizontal: 20,
                    }}
                >
                    <Text style={{ color: 'red', fontSize: 17, fontWeight: '600' }}>
                        {t("Cancel Process")}
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    // onPress={() => props.jumpTo('guardain')}
                    onPress={() => {
                        onInitiate();
                    }}
                    style={{
                        backgroundColor: nafat ? Colors.primary : Colors.textGray200,
                        borderRadius: 7,
                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                        alignItems: "center",
                        width: '48%',
                        borderWidth: 1,
                        borderColor: '#00000030',
                        flexDirection: "row",
                        justifyContent: 'space-between'

                        // marginHorizontal: 20,
                    }}
                >
                    <Text style={{ color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                        {t("Initiate")}
                    </Text>
                    <Icon name={i18n.language === "ar" ? 'chevron-left' : 'chevron-right'} type='entypo' color={Colors.white} />

                </TouchableOpacity>
            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default PartnerInfo;
