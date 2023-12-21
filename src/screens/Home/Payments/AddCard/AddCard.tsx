import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Platform,
    ScrollView,
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
import { TextInput } from 'react-native';
import i18n from '../../../../translations';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import { setupMarriageProcess } from '../../../../services/UserService';
import { useDispatch, useSelector } from 'react-redux';
import { setTempMarriage } from '../../../../store/userReducer';



const AddCard = ({ navigation }: ApplicationScreenProps) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { user } = useSelector((state: any) => state.user)
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();


    const Tab = createMaterialTopTabNavigator();

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const onCreateMarriage = () => {
        const data = {
            "totalFees": "2050",
            "feesBreakdown": {},
            "isFeesPaid": true,
            "isFeesPaidDate": "2012-12-22"
        }
        setLoading(true);
        setupMarriageProcess(data).then((res) => {
            console.log(res);
            navigation.navigate('PaymentComplete');
            dispatch(setTempMarriage(res.data.data))
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        })
    }

    useEffect(() => {
        toggleModal();
    }, []);

    return (
        <KeyboardAwareView animated style={{
            flex: 1,
            backgroundColor: '#fff',

        }} behavior={'padding'}>
            {loading &&
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
            <ScrollView style={{
                flex: 1,
                backgroundColor: '#fff', padding: 20
            }} keyboardShouldPersistTaps="handled">
                <SafeAreaView style={{ flex: 1, }}>
                    <View style={{ flex: 1, }}>
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
                            </TouchableOpacity>
                            <Text style={{ fontSize: 16, fontWeight: 400, color: 'red', textDecorationLine: 'underline' }}>
                                {t("Cancel")}
                            </Text>
                        </View>


                        <View style={{ marginVertical: 15 }}>

                            <Text style={{ fontSize: 28, fontWeight: 700, color: Colors.black, textAlign: 'left' }}>
                                {t("Card Payment")}
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: 700, color: Colors.black, marginVertical: 5, textAlign: 'left' }}>
                                {t("Enter Card Details")}
                            </Text>


                            <View
                                style={{
                                    marginTop: 10,
                                    flexDirection: 'row',
                                    borderRadius: 5,
                                    alignItems: 'center',
                                    backgroundColor: '#f7f7f7',
                                    padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,

                                }}
                            >

                                <TextInput
                                    placeholder={t("Card Holder Name")}
                                    placeholderTextColor={Colors.black}
                                    style={{ alignSelf: 'center', fontSize: 17, fontWeight: '300', color: Colors.black }}
                                    maxLength={20}
                                />
                            </View>
                            <View
                                style={{
                                    marginTop: 10,
                                    flexDirection: 'row',
                                    borderRadius: 5,
                                    alignItems: 'center',
                                    backgroundColor: '#f7f7f7',
                                    padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,

                                }}
                            >

                                <TextInput
                                    placeholder={t("Card Number")}
                                    placeholderTextColor={Colors.black}
                                    style={{ alignSelf: 'center', fontSize: 17, fontWeight: '300', color: Colors.black }}
                                    maxLength={28}
                                />
                            </View>
                            <View style={{ width: '100%', flexDirection: "row", justifyContent: 'space-between', alignItems: "center" }}>
                                <View
                                    style={{
                                        width: "48%",
                                        marginTop: 10,
                                        flexDirection: 'row',
                                        borderRadius: 5,
                                        alignSelf: "flex-start",
                                        alignItems: 'center',
                                        backgroundColor: '#f7f7f7',
                                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,

                                    }}
                                >

                                    <TextInput
                                        placeholder={t("Expiry Date")}
                                        placeholderTextColor={Colors.black}
                                        style={{ alignSelf: 'center', fontSize: 17, fontWeight: '300', color: Colors.black }}
                                        maxLength={28}
                                    />
                                </View>
                                <View
                                    style={{
                                        width: "48%",
                                        flexDirection: 'row',
                                        borderRadius: 5,
                                        marginTop: 10,
                                        alignSelf: "flex-start",
                                        alignItems: 'center',
                                        backgroundColor: '#f7f7f7',
                                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,



                                    }}
                                >

                                    <TextInput
                                        placeholder={t("CVC")}
                                        placeholderTextColor={Colors.black}
                                        style={{ alignSelf: 'center', fontSize: 17, fontWeight: '300', color: Colors.black }}
                                        maxLength={28}
                                    />
                                </View>
                            </View>


                        </View>



                    </View>
                </SafeAreaView >

            </ScrollView>
            <View style={{ padding: 20, alignItems: "center" }}>
                <TouchableOpacity
                    onPress={() => onCreateMarriage()}
                    style={{
                        backgroundColor: Colors.primary,
                        borderRadius: 7,
                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                        alignItems: "center",
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        marginBottom: 20,
                    }}
                >
                    <Text style={{ color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                        {t("Pay Now")}
                    </Text>

                </TouchableOpacity>
            </View>

        </KeyboardAwareView>
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

export default AddCard;
