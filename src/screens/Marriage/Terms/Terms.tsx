import React, { useEffect, useState } from 'react';
import {
    FlatList,
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
import { Image } from 'react-native';
import Waiting from './Waiting';
import PartnerTerms from '../../../components/PartnerTerms/PartnerTerms';
import { Dropdown } from 'react-native-element-dropdown';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { getTerms } from '../../../services/UserService';


const Terms = (props: any) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [addnew, setAddnew] = useState(false);
    const [newTerm, setNewTerm] = useState('');
    const [receives, setRece] = useState(false);
    const [isWait, setWait] = useState(false);
    const [list, setFavItems] = useState([{}, {}, {},]);
    const [adminTerms, setAdminTerms] = useState([]);
    const [partnerTerms, setPartnerTerms] = useState([]);
    const [waitFor, setWaitFor] = useState(false)
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];

    const Tab = createMaterialTopTabNavigator();

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };


    const onGetTerms = () => {
        const params = {
            id: 66
        }
        console.log("caled");

        getTerms(params).then((res) => {
            console.log(res, "res");
            setAdminTerms(res.data.data)
        }).catch((err) => {
            console.log(err, "errrrr");
        })
    }

    useEffect(() => {
        toggleModal();
        onGetTerms()
    }, []);

    const Term = ({ item }: any) => {
        const [value, setValue] = useState(null);
        const [isFocus, setIsFocus] = useState(false);
        const boolean = [
            { label: 'Yes', value: '1' },
            { label: 'No', value: '0' },
        ];

        let mOption = JSON.parse(item?.options);
        console.log(mOption, 'mOption');
        return (
            <View style={{
                marginVertical: 10,
                width: "100%"

            }} >
                <Text style={{
                    fontSize: 18,
                    textAlign: 'left',
                    fontWeight: 600,
                    color: Colors.black,
                    marginVertical: 5,
                }}>{t(item?.category)}</Text>
                <Text style={{
                    fontSize: 15,
                    textAlign: 'left',
                    fontWeight: 400,
                    marginVertical: 5,
                    color: Colors.black,
                }}>{item?.title ?? t("What are you willing to give to your partner as Haq Meher?")}</Text>
                {mOption && <View style={{ marginVertical: 12 }}>

                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        // inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={mOption || []}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        // searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}

                    />
                </View>}
                {item?.inputType === 'boolean' && <View style={{ marginVertical: 12 }}>

                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        // inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={boolean || []}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        // searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}

                    />
                </View>}

                <View style={{ marginVertical: 12 }}>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 16, fontWeight: 500, color: Colors.black }}>
                        {t("Enter Ammount")}
                    </Text>
                    <View
                        style={{
                            marginTop: 5,
                            paddingVertical: Platform.OS === 'ios' ? 14 : 0,
                            borderWidth: 1,
                            flexDirection: 'row',
                            borderColor: '#00000023',
                            borderRadius: 5,
                            alignItems: 'center',
                        }}
                    >

                        <TextInput
                            placeholder={t("Enter Ammount")}
                            style={{ alignSelf: 'center', fontSize: 17, paddingHorizontal: 5 }}
                            maxLength={28}
                        />
                    </View>
                </View>
            </View>


        )
    }


    return (
        isWait ?
            <View style={{ flex: 1, backgroundColor: '#FAFAFA', }}>
                <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => {
                            setWait(false)
                            setRece(true)
                        }}
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
                        {t("Waiting for Partner’s Approval")}
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: 500, color: Colors.textGray200, marginTop: 20, textAlign: 'center', }}>
                        {t("Your Terms & Conditions are forwarded to your partner, please wait for approval from your partner.")}
                    </Text>


                </View>

                <View style={{
                    position: "absolute",
                    flexDirection: "row",
                    backgroundColor: "white",
                    justifyContent: 'space-between',
                    bottom: 0,
                    padding: 20,
                    alignSelf: "center",
                    paddingHorizontal: 10,

                }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Payment')}
                        style={{
                            borderRadius: 7,
                            padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                            alignItems: "center",
                            justifyContent: "center",
                            width: '48%',
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
                        onPress={() => props.jumpTo('counseling')}
                        style={{
                            backgroundColor: Colors.primary,
                            borderRadius: 7,
                            padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                            alignItems: "center",
                            width: '48%',
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderColor: '#00000030',
                            // marginHorizontal: 20,
                        }}
                    >
                        <Text style={{ width: '100%', textAlign: "center", color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                            {t("Change Center")}
                        </Text>


                    </TouchableOpacity>

                </View>


            </View >
            :


            <View
                style={{
                    flex: 1,
                    backgroundColor: '#FAFAFA',
                    alignContent: 'center',
                    paddingBottom: 100
                }}
            >
                <View style={{ padding: 20 }}>
                    <Text
                        onPress={() => setRece(!receives)}
                        style={{
                            fontSize: 22,
                            fontWeight: 700,
                            color: Colors.black,
                            textAlign: 'left',

                        }}
                    >
                        {t("Marriage Agreement Terms & Conditions")}
                    </Text>

                    <Text
                        onPress={() => setWait(true)}
                        style={{
                            fontSize: 17,
                            fontWeight: 400,
                            color: Colors.textGray200,
                            marginVertical: 5,
                            textAlign: 'left',
                        }}
                    >
                        {t("Please choose your agreement for following terms and conditions")}
                    </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={{ padding: 20 }}>
                        <View
                            style={{
                                borderRadius: 12,
                                borderWidth: 1,
                                borderStyle: 'dashed',
                                padding: 15,
                                borderColor: Colors.primary
                            }}
                        >
                            <Text
                                onPress={() => setRece(!receives)}
                                style={{
                                    fontSize: 22,
                                    fontWeight: 700,
                                    color: Colors.black,
                                    marginTop: 4,
                                    marginVertical: 10,
                                    textAlign: 'left',
                                }}
                            >
                                {t("Your Terms & Conditions")}
                            </Text>


                            {!receives && <TouchableOpacity
                                onPress={() => setAddnew(true)}
                                style={{
                                    padding: i18n.language === 'ar' ? 5 : 14,
                                    backgroundColor: Colors.white,
                                    borderColor: Colors.primary,
                                    borderStyle: 'dashed',
                                    borderRadius: 12,
                                    borderWidth: 1,

                                }}>




                                <Text
                                    style={{
                                        fontSize: 20,
                                        textAlign: 'center',
                                        fontWeight: 600,
                                        alignSelf: 'center',
                                        color: Colors.black,
                                        backgroundColor: Colors.white,
                                    }}
                                >
                                    {t("Add New")}
                                </Text>




                            </TouchableOpacity>
                            }
                            {addnew && <View>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: Colors.black,
                                        marginTop: 4,
                                    }}
                                >
                                    {t("Add New Term")}
                                </Text>
                                <View
                                    style={{
                                        paddingVertical: Platform.OS === 'ios' ? 14 : 0,
                                        marginTop: 10,
                                        borderWidth: 1,
                                        borderColor: '#00000023',
                                        flexDirection: 'row',
                                        borderRadius: 5,
                                        alignItems: 'center',
                                        backgroundColor: '#F6F6F9',
                                    }}
                                >

                                    <TextInput
                                        multiline={true}
                                        numberOfLines={4}
                                        value={newTerm}
                                        onChangeText={setNewTerm}
                                        // placeholder="Date of Birth"
                                        style={{ alignSelf: 'center', paddingHorizontal: 15, fontSize: 17, height: 80 }}
                                        placeholderTextColor={'#00000083'}

                                    />
                                </View>

                                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'flex-end' }}>
                                    <TouchableOpacity
                                        style={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                            marginRight: 15

                                        }}>




                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: Colors.primary,
                                                marginTop: 4,

                                            }}
                                        >
                                            {t("Cancel")}
                                        </Text>




                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setAddnew(false)
                                            setFavItems((i) => [...i, { title: newTerm }])
                                        }}

                                        style={{
                                            paddingHorizontal: 15,
                                            backgroundColor: Colors.primary,
                                            borderColor: Colors.primary,
                                            borderRadius: 7,
                                            justifyContent: "center",
                                            borderWidth: 1,
                                            padding: 10,
                                            alignItems: "center"
                                        }}>




                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: Colors.white,
                                            }}
                                        >
                                            {t("Add New")}
                                        </Text>




                                    </TouchableOpacity>

                                </View>


                            </View>}

                            {adminTerms?.map((item: any, index: any) => <Term item={item} />)
                            }
                            {/* <View style={{
                                marginVertical: 10,
                                width: "100%"

                            }} >
                                <Text style={{
                                    fontSize: 18,
                                    textAlign: 'left',
                                    fontWeight: 600,
                                    color: Colors.black,
                                    marginVertical: 5,
                                }}>{t("Marriage")}</Text>
                                <Text style={{
                                    fontSize: 15,
                                    textAlign: 'left',
                                    fontWeight: 400,
                                    marginVertical: 5,
                                    color: Colors.black,
                                }}>{t("What are you willing to give to your partner in Marriage?")}</Text>
                                <View style={{ marginVertical: 12 }}>

                                    <Dropdown
                                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={data}
                                        search
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder={!isFocus ? 'Select item' : '...'}
                                        searchPlaceholder="Search..."
                                        value={value}
                                        onFocus={() => setIsFocus(true)}
                                        onBlur={() => setIsFocus(false)}
                                        onChange={item => {
                                            setValue(item.value);
                                            setIsFocus(false);
                                        }}

                                    />
                                </View>
                                <View style={{ marginVertical: 12 }}>
                                    <Text style={{ alignSelf: 'flex-start', fontSize: 16, fontWeight: 500, color: Colors.black }}>
                                        {t("Enter Ammount")}
                                    </Text>
                                    <View
                                        style={{
                                            marginTop: 5,
                                            paddingVertical: Platform.OS === 'ios' ? 14 : 0,
                                            borderWidth: 1,
                                            flexDirection: 'row',
                                            borderColor: '#00000023',
                                            borderRadius: 5,
                                            alignItems: 'center',
                                        }}
                                    >

                                        <TextInput
                                            placeholder={t("Enter Ammount")}
                                            style={{ alignSelf: 'center', fontSize: 17, paddingHorizontal: 5 }}
                                            maxLength={28}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                marginVertical: 10,
                                width: "100%"

                            }} >
                                <Text style={{
                                    fontSize: 18,
                                    textAlign: 'left',
                                    fontWeight: 600,
                                    color: Colors.black,
                                    marginVertical: 5,
                                }}>{t("Kids")}</Text>
                                <Text style={{
                                    fontSize: 15,
                                    textAlign: 'left',
                                    fontWeight: 400,
                                    marginVertical: 5,
                                    color: Colors.black,
                                }}>{t("Will you be taking care of the kids in case of Divorce?")}</Text>
                                <View style={{ marginVertical: 12 }}>

                                    <Dropdown
                                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={data}
                                        search
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder={!isFocus ? 'Select item' : '...'}
                                        searchPlaceholder="Search..."
                                        value={value}
                                        onFocus={() => setIsFocus(true)}
                                        onBlur={() => setIsFocus(false)}
                                        onChange={item => {
                                            setValue(item.value);
                                            setIsFocus(false);
                                        }}

                                    />
                                </View>
                                <View style={{ marginVertical: 12 }}>
                                    <Text style={{ alignSelf: 'flex-start', fontSize: 16, fontWeight: 500, color: Colors.black }}>
                                        {t("Enter Ammount")}
                                    </Text>
                                    <View
                                        style={{
                                            marginTop: 5,
                                            paddingVertical: Platform.OS === 'ios' ? 14 : 0,
                                            borderWidth: 1,
                                            flexDirection: 'row',
                                            borderColor: '#00000023',
                                            borderRadius: 5,
                                            alignItems: 'center',
                                        }}
                                    >

                                        <TextInput
                                            placeholder={t("Enter Ammount")}
                                            style={{ alignSelf: 'center', fontSize: 17, paddingHorizontal: 5 }}
                                            maxLength={28}
                                        />
                                    </View>
                                </View>
                            </View> */}

                            <Text style={{
                                fontSize: 18,
                                textAlign: 'left',
                                fontWeight: 600,
                                color: Colors.black,
                                marginVertical: 5,
                            }}>{t("Others")}</Text>


                            <FlatList
                                data={list.reverse()}

                                pagingEnabled={true}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    marginTop: 10
                                }}
                                keyExtractor={(key: any) => key.index}
                                renderItem={({ item, index }: any) => {
                                    // console.log(item, "loopitem");

                                    return (
                                        <View
                                            style={{
                                                width: '99%',
                                                flexDirection: 'row',
                                                backgroundColor: Colors.white,
                                                padding: 10,
                                                borderRadius: 10,
                                                marginVertical: 8,
                                                paddingBottom: 20,
                                                shadowColor: "#000",
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 1,
                                                },
                                                shadowOpacity: 0.22,
                                                shadowRadius: 2.22,
                                                elevation: 3,
                                            }}
                                        >

                                            <View style={{
                                                marginTop: 20,
                                            }}>

                                                <View style={{
                                                    alignSelf: "flex-end",
                                                    flexDirection: "row",

                                                }}>

                                                    <Icon name='edit' type='feather' color={Colors.primary} style={{ marginRight: 10 }} />
                                                    <Icon name='closecircle' type='antdesign' color={'red'} />
                                                </View>

                                                {<View style={{ marginVertical: 10, alignSelf: "center", height: 1, width: '100%', backgroundColor: '#00000010' }} />}


                                                <View
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            fontSize: 16,
                                                            fontWeight: 500,
                                                            color: Colors.black,
                                                            textAlign: 'left',

                                                        }}
                                                    >
                                                        {item?.title ?? t("Nikah is intended for use by Muslims who are of legal age to marry in their respective countries. By using Nikah, you represent and warrant that you meet this eligibility requirement.")}
                                                    </Text>

                                                </View>

                                            </View>

                                        </View>
                                    );
                                }}
                            />
                            <TouchableOpacity
                                // onPress={() => navigation.navigate('Marriage')}
                                style={{
                                    backgroundColor: Colors.primary,
                                    borderRadius: 7,
                                    padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                                    marginTop: 5,
                                    alignItems: "center",
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'

                                    // marginHorizontal: 20,
                                }}
                            >
                                <Text style={{ color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                                    {t("Forward to Partner")}
                                </Text>
                                <Icon name={i18n.language === "ar" ? 'chevron-left' : 'chevron-right'} type='entypo' color={Colors.white} />


                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                borderRadius: 12,
                                borderWidth: 1,
                                borderStyle: 'dashed',
                                padding: 15,
                                marginTop: 30,
                                borderColor: Colors.primary
                            }}
                        >
                            <Text
                                // onPress={() => setRece(!receives)}
                                style={{
                                    textAlign: 'left',
                                    fontSize: 24,
                                    fontWeight: 700,
                                    color: Colors.black,
                                    marginTop: 4,
                                    marginVertical: 5,
                                }}
                            >
                                {t("Your Partner’s Terms & Conditions")}
                            </Text>






                            {partnerTerms.length ?
                                <FlatList
                                    data={partnerTerms.reverse()}

                                    pagingEnabled={true}
                                    contentContainerStyle={{
                                        alignItems: 'center',
                                        marginTop: 10
                                    }}
                                    keyExtractor={(key: any) => key.index}
                                    renderItem={({ item, index }: any) => {
                                        // console.log(item, "loopitem");
                                        return (
                                            <PartnerTerms />

                                        );
                                    }}
                                /> : <Waiting setPartnerTerms={setPartnerTerms} />}

                            <TouchableOpacity
                                // onPress={() => navigation.navigate('Marriage')}
                                style={{
                                    backgroundColor: Colors.primary,
                                    borderRadius: 7,
                                    padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                                    marginTop: 5,

                                    alignItems: "center",
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'

                                    // marginHorizontal: 20,
                                }}
                            >
                                <Text style={{ color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                                    {t("Submit Response")}
                                </Text>
                                <Icon name={i18n.language === "ar" ? 'chevron-left' : 'chevron-right'} type='entypo' color={Colors.white} />


                            </TouchableOpacity>

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
                        onPress={() => navigation.navigate('Payment')}
                        style={{
                            borderRadius: 7,
                            padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,

                            alignItems: "center",
                            justifyContent: "center",
                            width: '48%',
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
                        onPress={() => props.jumpTo('counseling')}
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
            </View >
    );
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
    dropdown: {
        height: 50,
        borderColor: Colors.textGray200,
        borderWidth: 1,
        marginTop: 7,
        paddingHorizontal: 8,
        paddingVertical: 1,
        borderRadius: 5,
    }, placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

export default Terms;
