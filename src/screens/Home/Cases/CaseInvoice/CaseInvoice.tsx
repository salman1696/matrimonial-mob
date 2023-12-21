import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    ImageBackground,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useTheme } from '../../../../hooks';
import { ApplicationScreenProps } from '../../../../../@types/navigation';
import { useTranslation } from 'react-i18next';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../../../theme/Variables';
import { Image } from 'react-native';
import { useSelector } from 'react-redux';
import i18n from '../../../../translations';


const CaseInvoice = ({ navigation }: ApplicationScreenProps) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { process } = useSelector((state: any) => state.user);
    const [loading, setLoading] = useState(true);

    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [list, setFavItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);


    const Tab = createMaterialTopTabNavigator();


    setTimeout(() => {
        setLoading(false);
    }, 2000);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const subCat = [
        {
            id: 1,
            title: 'Active',
            iconName: 'clock_outline',
        },
        {
            id: 2,
            title: 'Completed',
            iconName: 'check',
        },
    ];

    useEffect(() => {
        toggleModal();
    }, []);

    return (
        loading ? <View style={{ flex: 1, }}>
            <ImageBackground
                testID={'brand-img'}
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                source={Images.sparkles.payment_bg}
                resizeMode={'contain'}
            >
                <ActivityIndicator style={{ alignSelf: 'center' }} size="large" color={Colors.white} />
            </ImageBackground>
        </View> :
            <View style={{ flex: 1 }}>
                <ImageBackground
                    testID={'brand-img'}
                    style={{ flex: 1, alignContent: 'center', }}
                    source={Images.sparkles.payment_bg}
                    resizeMode={'contain'}
                >
                    <SafeAreaView style={{ flex: 1, padding: 20 }}>
                        <View
                            style={{
                                flex: 1,
                                alignSelf: "center"
                            }}
                        >

                            <ImageBackground
                                testID={'brand-img'}
                                style={{ flex: 1, alignSelf: 'center', marginBottom: 70 }}
                                source={Images.sparkles.invoicebg}
                                resizeMode={'cover'}
                            >

                                <Text
                                    style={{
                                        fontFamily: 'RobotoMono-Regular',
                                        fontSize: 36,
                                        fontWeight: 700,
                                        color: Colors.black,
                                        marginTop: 30,
                                        alignSelf: 'center',
                                    }}
                                >
                                    {t(" CASE INVOICE ")}

                                </Text>

                                <Text style={{
                                    fontFamily: 'RobotoMono-Regular',
                                    fontSize: 23,
                                    fontWeight: 400,
                                    color: Colors.black, alignSelf: 'center',
                                }}>
                                    {t("Nikkah")}
                                </Text>

                                <View style={{ height: 1, backgroundColor: Colors.black, marginVertical: 7, marginHorizontal: 20 }} />
                                <View style={{ height: 1, backgroundColor: Colors.black, marginHorizontal: 20 }} />

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 15 }}>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 17, fontWeight: 400, color: Colors.black }}>
                                        {t("Date & Time :")}
                                    </Text>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 17, fontWeight: 400, color: Colors.black }}>
                                        {t("23/3/2022 9:06:18 am")}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 5 }}>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 17, fontWeight: 400, color: Colors.black }}>
                                        {t("Invoice ID :")}
                                    </Text>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 17, fontWeight: 400, color: Colors.black }}>
                                        {t("123456789")}
                                    </Text>
                                </View>
                                <View style={{ height: 1, backgroundColor: Colors.black, marginVertical: 7, marginHorizontal: 20 }} />


                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 5 }}>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', flex: 0.6, fontSize: 11, fontWeight: 400, color: Colors.black }}>
                                        {t("Case")}
                                    </Text>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 11, fontWeight: 600, color: Colors.black }}>
                                        {t("Price")}
                                    </Text>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 11, fontWeight: 600, color: Colors.black }}>
                                        {t("vat%")}
                                    </Text>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 11, fontWeight: 600, color: Colors.black }}>
                                        {t("VAT")}
                                    </Text>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 11, fontWeight: 600, color: Colors.black }}>
                                        {t("Total")}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 5 }}>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', flex: 0.6, fontSize: 11, fontWeight: 400, color: Colors.black }}>
                                        {t("Marriage Process")}
                                    </Text>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 11, fontWeight: 400, color: Colors.black }}>
                                        {t("500 ")}
                                    </Text>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 11, fontWeight: 400, color: Colors.black }}>
                                        {t("17 ")}
                                    </Text>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 11, fontWeight: 400, color: Colors.black }}>
                                        {t("117 ")}
                                    </Text>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 11, fontWeight: 400, color: Colors.black }}>
                                        {t("SAR 617 ")}
                                    </Text>
                                </View>

                                <View style={{ height: 1, backgroundColor: Colors.black, marginVertical: 7, marginHorizontal: 20 }} />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 5 }}>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 17, fontWeight: 400, color: Colors.black }}>
                                        {t("Total Items :")}
                                    </Text>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 17, fontWeight: 400, color: Colors.black }}>
                                        {t("1")}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 5 }}>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 17, fontWeight: 400, color: Colors.black }}>
                                        {t("Invoice Total :")}
                                    </Text>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 17, fontWeight: 400, color: Colors.black }}>
                                        {t("500")}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 5 }}>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 17, fontWeight: 400, color: Colors.black }}>
                                        {t("Total VAT :")}
                                    </Text>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 17, fontWeight: 400, color: Colors.black }}>
                                        {t("117")}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 5 }}>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 17, fontWeight: 400, color: Colors.black }}>
                                        {t("Total :")}
                                    </Text>
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 17, fontWeight: 400, color: Colors.black }}>
                                        {t("617")}
                                    </Text>
                                </View>
                                <View style={{ height: 1, backgroundColor: Colors.black, marginVertical: 7, marginHorizontal: 20 }} />
                                <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 17, fontWeight: 400, color: Colors.black, marginHorizontal: 20, alignSelf: 'center', }}>
                                    {t("Payment ")}
                                </Text>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 5 }}>
                                        <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 17, fontWeight: 400, color: Colors.black }}>
                                            {t("Credit Card :")}
                                        </Text>
                                        <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 17, fontWeight: 400, color: Colors.black }}>
                                            {t("617")}
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 5 }}>
                                        <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 17, fontWeight: 400, color: Colors.black }}>
                                            {t("Cash :")}
                                        </Text>
                                        <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 17, fontWeight: 400, color: Colors.black }}>
                                            {t("0 ")}
                                        </Text>
                                    </View>
                                </View>

                                <View style={{ width: '100%', position: "absolute", bottom: 30, alignSelf: "center", paddingHorizontal: 20 }}>
                                    <View style={{ height: 1, backgroundColor: Colors.black, marginVertical: 7, marginHorizontal: 20 }} />
                                    <View style={{ height: 1, backgroundColor: Colors.black, marginHorizontal: 20 }} />



                                    <Image
                                        testID={'brand-img'}
                                        style={{
                                            height: 50,
                                            flex: 0.4,
                                            marginTop: 10,
                                            alignSelf: 'center',
                                        }}
                                        source={Images.sparkles.barcode}
                                        resizeMode={'contain'}
                                    />

                                    <Text style={{ fontFamily: 'RobotoMono-Regular', fontSize: 17, fontWeight: 800, color: Colors.black, alignSelf: 'center', }}>
                                        {t("Thank you")}
                                    </Text>
                                </View>
                            </ImageBackground>

                        </View>


                        <View style={{ justifyContent: "center", alignItems: "center" }}>

                            <View style={{
                                position: "absolute",
                                bottom: 0,
                                width: '100%',
                                flexDirection: "row",
                                justifyContent: 'space-between'

                            }}>

                                <TouchableOpacity
                                    onPress={() => navigation.pop()}
                                    style={{
                                        borderRadius: 7,
                                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                                        alignItems: "center",
                                        width: '48%', borderWidth: 1,
                                        borderColor: '#fff'
                                        // marginHorizontal: 20,
                                    }}
                                >
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                                        {t("Back")}
                                    </Text>

                                </TouchableOpacity>
                                <TouchableOpacity
                                    // onPress={() => navigation.navigate(process === 'marriage' ? 'Marriage' : process === 'patrimony' ? 'Patrimony' : 'Divorce')}
                                    style={{
                                        backgroundColor: Colors.white,
                                        borderRadius: 7,
                                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                                        alignItems: "center",
                                        width: '48%',
                                        flexDirection: "row",



                                        // marginHorizontal: 20,
                                    }}
                                >
                                    <Icon name="download" type="feather" color={Colors.primary} size={20} />
                                    <Text style={{ fontFamily: 'RobotoMono-Regular', color: Colors.primary, paddingHorizontal: 5, fontSize: 19, fontWeight: '600' }}>
                                        {t("Download")}
                                    </Text>

                                </TouchableOpacity>

                            </View>

                        </View>


                    </SafeAreaView >
                </ImageBackground>
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
});

export default CaseInvoice;
