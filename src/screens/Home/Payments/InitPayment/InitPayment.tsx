import React, { useEffect, useState } from 'react';
import {
    ImageBackground,
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


const InitPayment = ({ navigation }: ApplicationScreenProps) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();

    const [modalVisible, setModalVisible] = useState(false);
    const [list, setFavItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);

    const { process } = useSelector((state: any) => state.user);

    const Tab = createMaterialTopTabNavigator();

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

        <View style={{ flex: 1 }}>
            <ImageBackground
                testID={'brand-img'}
                style={{ flex: 1, alignContent: 'center', }}
                source={Images.sparkles.payment_bg}
                resizeMode={'cover'}
            >
                <SafeAreaView style={{ flex: 1, padding: 20 }}>
                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >

                        <Image
                            testID={'brand-img'}
                            style={{
                                height: 74,
                                width: 74,
                                alignSelf: 'flex-start',
                            }}
                            source={Images.sparkles.Logo_w}
                            resizeMode={'contain'}
                        />

                        < TouchableOpacity
                            onPress={() => navigation.pop()}
                            style={{
                                padding: 10,
                                marginVertical: 5, borderRadius: 13, borderWidth: 1, borderColor: Colors.white
                            }} >
                            <Icon name={'cross'} type='entypo' color={'#fff'} />
                        </TouchableOpacity>
                    </View>


                    <View style={{ flex: 1, paddingVertical: 15 }}>

                        <Text style={{ fontSize: 16, fontWeight: 400, color: Colors.white, textAlign: 'left' }}>
                            {t("Welcome to Nikah, a marriage portal app designed to help you find a suitable partner for marriage based on Islamic Laws and Hadiths.")}
                        </Text>

                        <Text style={{ fontSize: 20, fontWeight: 700, color: Colors.white, marginVertical: 25, textAlign: 'left' }}>
                            {t("Fee Breakdown")}
                        </Text>

                        <View style={{ backgroundColor: "#ffffff10", padding: 10 }}>
                            <View style={{ alignItems: 'center', flexDirection: "row", marginVertical: 10, }}>
                                <Icon name={'check-circle'} type='font-awesome-6' color={'#FFC200'} size={29} style={{ alignSelf: 'center', }} />
                                <Text style={{ fontSize: 20, fontWeight: 500, color: Colors.white, flex: 0.6, marginHorizontal: 10, textAlign: 'left' }}>
                                    {t("Case Fee")}
                                </Text>
                                <Text style={{ fontSize: 20, fontWeight: 500, color: Colors.white, flex: 0.4 }}>
                                    {t("SAR 500")}
                                </Text>
                            </View>
                            {process === 'marriage' && <View style={{ alignItems: 'center', flexDirection: "row", marginVertical: 10, }}>
                                <Icon name={'check-circle'} type='font-awesome-6' color={'#FFC200'} size={29} style={{ alignSelf: 'center', }} />
                                <Text style={{ fontSize: 20, fontWeight: 500, color: Colors.white, flex: 0.6, marginHorizontal: 10, textAlign: 'left', }}>
                                    {t("Medical Fee")}
                                </Text>
                                <Text style={{ fontSize: 20, fontWeight: 500, color: Colors.white, flex: 0.4 }}>
                                    {t("SAR 500")}
                                </Text>
                            </View>}
                            {process === 'marriage' && <View style={{ alignItems: 'center', flexDirection: "row", marginVertical: 10, }}>
                                <Icon name={'check-circle'} type='font-awesome-6' color={'#FFC200'} size={29} style={{ alignSelf: 'center', }} />
                                <Text style={{ fontSize: 20, fontWeight: 500, color: Colors.white, flex: 0.6, marginHorizontal: 10, textAlign: 'left' }}>
                                    {t("Counseling Fee")}
                                </Text>
                                <Text style={{ fontSize: 20, fontWeight: 500, color: Colors.white, flex: 0.4 }}>
                                    {t("SAR 500")}
                                </Text>
                            </View>}
                            <View style={{ alignItems: 'center', flexDirection: "row", marginVertical: 10, }}>
                                <Icon name={'check-circle'} type='font-awesome-6' color={'#FFC200'} size={29} style={{ alignSelf: 'center', }} />
                                <Text style={{ fontSize: 20, fontWeight: 500, color: Colors.white, flex: 0.6, marginHorizontal: 10, textAlign: 'left' }}>
                                    {t("Court Fee")}
                                </Text>
                                <Text style={{ fontSize: 20, fontWeight: 500, color: Colors.white, flex: 0.4, }}>
                                    {t("SAR 500")}
                                </Text>
                            </View>
                        </View>
                        <Text
                            style={{
                                fontSize: 19,
                                fontWeight: 600,
                                color: Colors.white,
                                textAlign: 'left',
                                marginVertical: 5,
                            }}
                        >
                            {t("Vat : ")}
                            <Text style={{ fontSize: 19, fontWeight: 600, color: "#FFC200", }}>
                                {t('SAR 50 ')}
                            </Text>
                        </Text>
                        <Text
                            style={{
                                fontSize: 44,
                                fontWeight: 700,
                                textAlign: 'left',
                                color: Colors.white,
                            }}
                        >
                            {t(process === 'marriage' ? "2050" : '1050')}
                            <Text style={{ fontSize: 20, fontWeight: 700, color: "#FFC200" }}>
                                {' SAR '}
                            </Text>
                        </Text>
                        <Text style={{
                            textAlign: 'left',
                            fontSize: 14, fontWeight: 400, color: Colors.white, marginVertical: 5,
                        }}>
                            {t("By using Nikah, you acknowledge that you have read and understand these terms & Conditions, and agree to be bound by them.")}
                        </Text>
                        <View style={{
                            position: "absolute",
                            bottom: 0,
                            width: '100%',

                        }}>
                            <Text style={{
                                fontSize: 14, fontWeight: 400, color: Colors.white,
                                textAlign: 'left',
                            }}>
                                {t("VAT Num#123456789")}
                            </Text>
                            <Text style={{
                                fontSize: 14, fontWeight: 400, color: '#77DB9F',
                                textAlign: 'left',
                            }}>
                                {t("Nikkah Department Company")}
                            </Text>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('Payment')}
                                style={{
                                    flexDirection: 'row',
                                    backgroundColor: Colors.white,
                                    borderRadius: 7,
                                    padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    // marginHorizontal: 20,
                                }}
                            >
                                <Text style={{ color: Colors.primary, fontSize: 19, fontWeight: '600' }}>
                                    {t("Proceed to Payment")}
                                </Text>
                                <Icon
                                    name={i18n.language !== 'ar' ? "right" : 'left'}
                                    type="antdesign"
                                    size={20}
                                    color={Colors.primary}
                                    style={{ marginLeft: 10, alignSelf: 'flex-end' }}
                                />
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

export default InitPayment;
