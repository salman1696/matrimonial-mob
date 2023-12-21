import React, { useEffect, useState } from 'react';
import {
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
import { set } from 'react-native-reanimated';
import { addGuardianWitness, getNafatByUserId } from '../../../services/UserService';
import Toast from 'react-native-simple-toast';


const Guardain = (props: any) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [list, setFavItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);
    const [isWaiting, setWaiting] = useState(false);
    const [result, setResult] = useState(false);
    const [guadId, setGuadId] = useState('')
    const [witness1Id, setWitness1Id] = useState('')
    const [witness2Id, setWitness2Id] = useState('')
    const [guardainNafat, setGuardainNafat] = useState(null)
    const [witnessNafat, setWitnessNafat] = useState(null)
    const [withnees2Nafat, setWithnees2Nafat] = useState(null)


    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const onGetNafat = (id, type) => {
        const data = {
            id: id
        }
        getNafatByUserId(data).then((res) => {
            if (type === 'guardain') {
                setGuardainNafat(res.data)
            } else if (type === 'witness1') {
                setWitnessNafat(res.data)
            } else if (type === 'witness2') {
                setWithnees2Nafat(res.data)
            }
            Toast.show('Nafat Found', Toast.LONG)


        }).catch((err) => {
            if (type === 'guardain') {
                setGuardainNafat(null)
            } else if (type === 'witness1') {
                setWitnessNafat(null)
            } else if (type === 'witness2') {
                setWithnees2Nafat(null)
            }
            console.log(err, "err");

            Toast.show('User not Found', Toast.LONG)
        })
    }


    useEffect(() => {
        if ([...guadId].length === 10) {
            onGetNafat(guadId, 'guardain')
        }
        if ([...witness1Id].length === 10) {
            onGetNafat(witness1Id, 'witness1')
        }
        if ([...witness2Id].length === 10) {
            onGetNafat(witness2Id, 'witness2')
        }
    }, [guadId, witness1Id, witness2Id])


    const onAddGradians = () => {
        const data = {
            "userId": "3d6bcefa-f67c-454c-acd6-951708e733f5",
            "guardianNationalIqamaId": "1111211115",
            "guardianFullName": "user3",
            "guardianMobileNumber": "0900781225",
            "witness1NationalIqamaId": "1111211117",
            "witness1FullName": "user5",
            "witness1MobileNumber": "0900781227",
            "witness2NationalIqamaId": "1111211116",
            "witness2FullName": "user4",
            "witness2MobileNumber": "0900781226"
        }

        addGuardianWitness().then((res) => { }).catch((err) => { })
    }

    useEffect(() => {
        toggleModal();
    }, []);

    return (

        isWaiting && !result ?

            <View style={{ flex: 1, backgroundColor: '#FAFAFA', }}>

                <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center' }}>




                    <TouchableOpacity
                        onPress={() => setResult(true)}
                        style={{ padding: 60, alignSelf: "center", backgroundColor: "#E0FBEA", borderRadius: 100 }}>
                        <Image

                            testID={'brand-img'}
                            style={{
                                height: 74,
                                width: 74,
                                alignSelf: 'flex-start',
                            }}
                            source={Images.sparkles.bg_loading}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>


                    <Text style={{ fontSize: 24, fontWeight: 700, color: Colors.black, marginTop: 10, marginHorizontal: 20, textAlign: 'center' }}>
                        {t("Wait for witnesses and guardian to accept")}
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: 500, color: Colors.textGray200, marginTop: 20, textAlign: 'center', }}>
                        {t("Please wait for your Guardian and Witnesses to accept your request.")}
                    </Text>
                </View>

                <View style={{
                    position: "absolute",
                    flexDirection: "row",
                    backgroundColor: "white",
                    justifyContent: 'space-between',
                    width: '100%',
                    bottom: 0,
                    alignSelf: "center",
                    padding: 20,

                }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Payment')}
                        style={{
                            borderRadius: 7,
                            padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                            alignItems: "center",
                            justifyContent: "center",
                            width: '100%',
                            borderWidth: 1,
                            borderColor: '#00000030'


                            // marginHorizontal: 20,
                        }}
                    >
                        <Text style={{ color: 'red', fontSize: 17, fontWeight: '600' }}>
                            {t("Cancel Process")}
                        </Text>

                    </TouchableOpacity>


                </View>


            </View >


            : result ?
                <View style={{ flex: 1 }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#FAFAFA', marginBottom: 100 }}>
                        <View style={{ flex: 1, marginHorizontal: 20 }}>



                            <Text style={{
                                fontSize: 24, fontWeight: 700, color: Colors.black, marginVertical: 10,
                                textAlign: 'left'
                            }}>
                                {t("Guardian’s Details")}
                            </Text>


                            <View style={{
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

                                    <View style={{ alignItems: 'center', backgroundColor: '#fff', borderRadius: 65, margin: 8 }}>
                                        <Image
                                            testID={'brand-img'}
                                            style={{
                                                height: 70,
                                                padding: 14,
                                                width: 70,
                                                // alignSelf: 'flex-start',
                                            }}
                                            source={Images.sparkles.male_av}
                                            resizeMode={'contain'}
                                        />
                                    </View>


                                    <View style={{ flex: 0.87, alignItems: 'flex-start', justifyContent: 'center' }}>
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontWeight: 500,
                                                color: Colors.black,
                                            }}
                                        >
                                            {t("Sheikh Fareed Hussain")}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                fontWeight: 300,
                                                color: Colors.black,
                                            }}
                                        >
                                            {t("+923 1241411")}
                                        </Text>
                                        <View style={{
                                            backgroundColor: Colors.primary, borderRadius: 15, padding: 5, marginTop: 5, width: 100, alignItems: 'center'
                                        }}>
                                            <Text style={{ color: Colors.white }}>{t("Accepted")}</Text>
                                        </View>

                                    </View>
                                </View>
                            </View>
                            <Text style={{
                                fontSize: 24, fontWeight: 700, color: Colors.black, marginVertical: 10,
                                textAlign: 'left'
                            }}>
                                {t("Witness 1 Details")}
                            </Text>



                            <View style={{
                                width: '99%',
                                padding: 5, backgroundColor: '#f4f4f4',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 3,
                                },
                                borderColor: Colors.textGray200,
                                shadowOpacity: 0.29,
                                shadowRadius: 2.65,
                                alignSelf: "center",
                                elevation: 7,
                                borderRadius: 12, marginVertical: 20
                            }}>
                                <View style={{ width: "90%", flexDirection: 'row', }}>

                                    <View style={{ alignItems: 'center', backgroundColor: '#fff', borderRadius: 65, margin: 8 }}>
                                        <Image
                                            testID={'brand-img'}
                                            style={{
                                                height: 70,
                                                padding: 14,
                                                width: 70,
                                                // alignSelf: 'flex-start',
                                            }}
                                            source={Images.sparkles.male_av}
                                            resizeMode={'contain'}
                                        />
                                    </View>


                                    <View style={{ flex: 0.87, alignItems: 'flex-start', justifyContent: 'center' }}>
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontWeight: 500,
                                                color: Colors.black,
                                            }}
                                        >
                                            {t("Sheikh Fareed Hussain")}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                fontWeight: 300,
                                                color: Colors.black,
                                            }}
                                        >
                                            {t("+923 1241411")}
                                        </Text>

                                        <View style={{
                                            backgroundColor: Colors.primary, borderRadius: 15, padding: 5, marginTop: 5, width: 100, alignItems: 'center'
                                        }}>


                                            <Text style={{ color: Colors.white }}>{t("Accepted")}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Text style={{
                                textAlign: 'left',
                                fontSize: 24, fontWeight: 700, color: Colors.black, marginVertical: 10
                            }}>
                                {t("Witness 2 Details")}
                            </Text>



                            <View style={{
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

                                    <View style={{ alignItems: 'center', backgroundColor: '#fff', borderRadius: 65, margin: 8 }}>
                                        <Image
                                            testID={'brand-img'}
                                            style={{
                                                height: 70,
                                                padding: 14,
                                                width: 70,
                                                // alignSelf: 'flex-start',
                                            }}
                                            source={Images.sparkles.male_av}
                                            resizeMode={'contain'}
                                        />
                                    </View>


                                    <View style={{ flex: 0.87, alignItems: 'flex-start', justifyContent: 'center' }}>
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontWeight: 500,
                                                color: Colors.black,
                                            }}
                                        >
                                            {t("Sheikh Fareed Hussain")}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                fontWeight: 300,
                                                color: Colors.black,
                                            }}
                                        >
                                            {t("+923 1241411")}
                                        </Text>

                                        <View style={{
                                            backgroundColor: 'red', borderRadius: 15, padding: 5, marginTop: 5, width: 100, alignItems: 'center'
                                        }}>


                                            <Text style={{ color: Colors.white }}>{t("Rejected")}</Text>
                                        </View>

                                    </View>
                                </View>
                            </View>




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
                            onPress={() => props.jumpTo('medical')}
                            // onPress={() => setWaiting(true)}
                            style={{
                                backgroundColor: Colors.primary,
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
                                {t("Proceed")}
                            </Text>
                            <Icon name={i18n.language === "ar" ? 'chevron-left' : 'chevron-right'} type='entypo' color={Colors.white} />

                        </TouchableOpacity>
                    </View>
                </View>
                :
                <View style={{ flex: 1 }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#FAFAFA', marginBottom: 100 }}>
                        <View style={{ flex: 1, marginHorizontal: 20 }}>



                            <Text style={{
                                fontSize: 24, fontWeight: 700, color: Colors.black, marginVertical: 10,
                                textAlign: 'left'
                            }}>
                                {t("Guardian’s Details")}
                            </Text>

                            <Text style={{
                                fontSize: 16, fontWeight: 500, color: Colors.black, marginTop: 10,
                                textAlign: 'left'
                                , marginBottom: 5
                            }}>
                                {t("National ID")}
                            </Text>
                            <View
                                style={{
                                    marginTop: 5,
                                    paddingVertical: Platform.OS === 'ios' ? 14 : 0,
                                    borderWidth: 1,
                                    borderColor: Colors.textGray200,
                                    flexDirection: 'row',
                                    borderRadius: 5,
                                    alignItems: 'center',
                                    backgroundColor: '#F6F6F9',
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
                                    placeholder={t("National ID / Iqama Number")}
                                    style={{ alignSelf: 'center', fontSize: 17 }}
                                    value={guadId}
                                    onChangeText={(text) => setGuadId(text)}
                                />
                            </View>

                            {guardainNafat &&
                                <View style={{
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

                                        <View style={{ alignItems: 'center', backgroundColor: '#fff', borderRadius: 65, margin: 8 }}>
                                            <Image
                                                testID={'brand-img'}
                                                style={{
                                                    height: 70,
                                                    padding: 14,
                                                    width: 70,
                                                    // alignSelf: 'flex-start',
                                                }}
                                                source={Images.sparkles.male_av}
                                                resizeMode={'contain'}
                                            />
                                        </View>


                                        <View style={{ flex: 0.87, alignItems: 'flex-start', justifyContent: 'center' }}>
                                            <Text
                                                style={{
                                                    fontSize: 20,
                                                    fontWeight: 500,
                                                    color: Colors.black,
                                                }}
                                            >
                                                {t("Sheikh Fareed Hussain")}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 15,
                                                    fontWeight: 300,
                                                    color: Colors.black,
                                                }}
                                            >
                                                {t("+923 1241411")}
                                            </Text>

                                        </View>
                                    </View>
                                </View>}
                            <Text style={{
                                fontSize: 24, fontWeight: 700, color: Colors.black, marginVertical: 10,
                                textAlign: 'left'
                            }}>
                                {t("Witness 1 Details")}
                            </Text>

                            <Text style={{
                                fontSize: 16, fontWeight: 500, color: Colors.black, marginTop: 10, marginBottom: 5,
                                textAlign: 'left'
                            }}>
                                {t("National ID")}
                            </Text>
                            <View
                                style={{
                                    marginTop: 5,
                                    paddingVertical: Platform.OS === 'ios' ? 14 : 0,
                                    borderWidth: 1,
                                    borderColor: Colors.textGray200,

                                    flexDirection: 'row',
                                    borderRadius: 5,
                                    alignItems: 'center',
                                    backgroundColor: '#F6F6F9',
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
                                    placeholder={t("National ID / Iqama Number")}
                                    style={{
                                        alignSelf: 'center', fontSize: 17,
                                    }}
                                    value={witness1Id}
                                    onChangeText={(text) => setWitness1Id(text)}
                                    maxLength={28}
                                />
                            </View>

                            {witnessNafat && <View style={{
                                width: '99%',
                                padding: 5, backgroundColor: '#f4f4f4',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 3,
                                },
                                borderColor: Colors.textGray200,
                                shadowOpacity: 0.29,
                                shadowRadius: 2.65,
                                alignSelf: "center",
                                elevation: 7,
                                borderRadius: 12, marginVertical: 20
                            }}>
                                <View style={{ width: "90%", flexDirection: 'row', }}>

                                    <View style={{ alignItems: 'center', backgroundColor: '#fff', borderRadius: 65, margin: 8 }}>
                                        <Image
                                            testID={'brand-img'}
                                            style={{
                                                height: 70,
                                                padding: 14,
                                                width: 70,
                                                // alignSelf: 'flex-start',
                                            }}
                                            source={Images.sparkles.male_av}
                                            resizeMode={'contain'}
                                        />
                                    </View>


                                    <View style={{ flex: 0.87, alignItems: 'flex-start', justifyContent: 'center' }}>
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontWeight: 500,
                                                color: Colors.black,
                                            }}
                                        >
                                            {t("Sheikh Fareed Hussain")}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                fontWeight: 300,
                                                color: Colors.black,
                                            }}
                                        >
                                            {t("+923 1241411")}
                                        </Text>

                                    </View>
                                </View>
                            </View>}
                            <Text style={{
                                textAlign: 'left',
                                fontSize: 24, fontWeight: 700, color: Colors.black, marginVertical: 10
                            }}>
                                {t("Witness 2 Details")}
                            </Text>

                            <Text style={{
                                textAlign: 'left',
                                fontSize: 16, fontWeight: 500, color: Colors.black, marginTop: 10, marginBottom: 5
                            }}>
                                {t("National ID")}
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
                                    name="idcard"
                                    type="antdesign"
                                    size={20}
                                    color="black"
                                    style={{ marginHorizontal: 10 }}
                                />
                                <TextInput
                                    placeholder={t("National ID / Iqama Number")}
                                    style={{ alignSelf: 'center', fontSize: 17 }}
                                    maxLength={28}
                                    value={witness2Id}
                                    onChangeText={(text) => setWitness2Id(text)}
                                />
                            </View>

                            {withnees2Nafat
                                && <View style={{
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

                                        <View style={{ alignItems: 'center', backgroundColor: '#fff', borderRadius: 65, margin: 8 }}>
                                            <Image
                                                testID={'brand-img'}
                                                style={{
                                                    height: 70,
                                                    padding: 14,
                                                    width: 70,
                                                    // alignSelf: 'flex-start',
                                                }}
                                                source={Images.sparkles.male_av}
                                                resizeMode={'contain'}
                                            />
                                        </View>


                                        <View style={{ flex: 0.87, alignItems: 'flex-start', justifyContent: 'center' }}>
                                            <Text
                                                style={{
                                                    fontSize: 20,
                                                    fontWeight: 500,
                                                    color: Colors.black,
                                                }}
                                            >
                                                {t("Sheikh Fareed Hussain")}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 15,
                                                    fontWeight: 300,
                                                    color: Colors.black,
                                                }}
                                            >
                                                {t("+923 1241411")}
                                            </Text>

                                        </View>
                                    </View>
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
                            onPress={() => navigation.navigate('Payment')}
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
                            // onPress={() => props.jumpTo('medical')}
                            onPress={() => setWaiting(true)}
                            style={{
                                backgroundColor: (guardainNafat && witnessNafat && withnees2Nafat) ? Colors.primary : Colors.textGray200,

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

export default Guardain;
