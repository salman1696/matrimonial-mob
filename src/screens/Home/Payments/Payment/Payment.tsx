import React, { useEffect, useState } from 'react';
import {
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
import i18n from '../../../../translations';


const Payment = ({ navigation }: ApplicationScreenProps) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [list, setFavItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);


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
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    < TouchableOpacity
                        onPress={() => navigation.pop()}
                        style={{
                            padding: 10,
                            marginVertical: 5, borderRadius: 13, borderWidth: 1, borderColor: Colors.textGray200
                        }} >
                        <Icon name={i18n.language !== "ar" ? 'chevron-left' : 'chevron-right'} type='entypo' />
                    </TouchableOpacity >
                    <TouchableOpacity
                        onPress={() => navigation.pop()}>
                        <Text style={{ fontSize: 16, fontWeight: 400, color: 'red', textDecorationLine: 'underline' }}>
                            {t("Cancel")}
                        </Text>
                    </TouchableOpacity>
                </View>


                <View style={{ marginVertical: 15 }}>
                    <Text style={{ fontSize: 28, fontWeight: 700, color: Colors.black, textAlign: 'left' }}>
                        {t("Payment")}
                    </Text>
                    <Text style={{ textAlign: 'left', fontSize: 18, fontWeight: 700, color: Colors.black, marginVertical: 5 }}>
                        {t("Choose Payment Method")}
                    </Text>

                    <TouchableOpacity
                        onPress={() => navigation.push('AddCard')}
                        style={{
                            width: '99%',
                            flexDirection: 'row',
                            backgroundColor: Colors.white,
                            padding: 20,
                            borderRadius: 10,
                            marginVertical: 8,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,
                            alignItems: "center",
                            elevation: 3,
                        }}
                    >
                        <Image
                            testID={'brand-img'}
                            style={{
                                height: 46,
                                alignSelf: 'center',
                                width: '15%',
                                marginRight: 10,
                            }}
                            source={Images.sparkles.card_a}
                            resizeMode={'contain'}
                        />
                        <View
                            style={{
                                width: '75%',
                            }}
                        >
                            <Text
                                style={{ fontSize: 18, fontWeight: 500, color: Colors.black, textAlign: 'left' }}
                            >
                                {t("Card")}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: Colors.textGray200,
                                    textAlign: 'left'
                                }}
                            >
                                {t("Pay for your order using Credit Card")}
                            </Text>

                        </View>
                        <View style={{
                            width: '10%',

                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.20,
                            shadowRadius: 1.41,

                            elevation: 2,

                        }}>

                            <Icon name={i18n.language === 'ar' ? 'left' : 'right'} type='antdesign' color={'black'} size={15} />
                        </View>
                    </TouchableOpacity>
                    <View
                        style={{
                            width: '99%',
                            flexDirection: 'row',
                            backgroundColor: Colors.white,
                            padding: 20,
                            borderRadius: 10,
                            marginVertical: 8,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,
                            alignItems: "center",
                            elevation: 3,
                        }}
                    >
                        <Image
                            testID={'brand-img'}
                            style={{
                                height: 46,
                                alignSelf: 'center',
                                width: '15%',
                                marginRight: 10,
                            }}
                            source={Images.sparkles.apple_pay}
                            resizeMode={'contain'}
                        />
                        <View
                            style={{
                                width: '75%',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18, fontWeight: 500, color: Colors.black,
                                    textAlign: 'left'
                                }}
                            >
                                {t("Apple Pay")}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: Colors.textGray200, textAlign: 'left'
                                }}
                            >
                                {t("Pay via Apple Pay")}
                            </Text>

                        </View>
                        <View style={{
                            width: '10%',

                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.20,
                            shadowRadius: 1.41,

                            elevation: 2,

                        }}>

                            <Icon name={i18n.language === 'ar' ? 'left' : 'right'} type='antdesign' color={'black'} size={15} />

                        </View>
                    </View>
                    <View
                        style={{
                            width: '99%',
                            flexDirection: 'row',
                            backgroundColor: Colors.white,
                            padding: 20,
                            borderRadius: 10,
                            marginVertical: 8,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,
                            alignItems: "center",
                            elevation: 3,
                        }}
                    >
                        <Image
                            testID={'brand-img'}
                            style={{
                                height: 46,
                                alignSelf: 'center',
                                width: '15%',
                                marginRight: 10,
                            }}
                            source={Images.sparkles.stc}
                            resizeMode={'contain'}
                        />
                        <View
                            style={{
                                width: '75%',
                            }}
                        >
                            <Text
                                style={{ fontSize: 18, textAlign: 'left', fontWeight: 500, color: Colors.black }}
                            >
                                {t("STC Pay")}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: Colors.textGray200, textAlign: 'left'
                                }}
                            >
                                {t("Pay via STC Pay")}
                            </Text>

                        </View>
                        <View style={{
                            width: '10%',

                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.20,
                            shadowRadius: 1.41,

                            elevation: 2,

                        }}>

                            <Icon name={i18n.language === 'ar' ? 'left' : 'right'} type='antdesign' color={'black'} size={15} />

                        </View>
                    </View>


                </View>


            </View>
        </SafeAreaView >
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

export default Payment;
