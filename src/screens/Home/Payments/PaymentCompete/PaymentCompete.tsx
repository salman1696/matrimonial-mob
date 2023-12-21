import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
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


const Qestionnaire = ({ navigation }: ApplicationScreenProps) => {
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
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >

                            <Image
                                testID={'brand-img'}
                                style={{
                                    height: 174,
                                    width: 174,
                                    alignSelf: 'center',
                                }}
                                source={Images.sparkles.checked}
                                resizeMode={'contain'}
                            />
                            <Text
                                style={{
                                    fontSize: 36,
                                    fontWeight: 700,
                                    color: Colors.white,
                                    marginVertical: 20
                                }}
                            >
                                {t("Payment Successful")}

                            </Text>
                            <Text style={{ fontSize: 16, fontWeight: 400, color: Colors.white, marginVertical: 20, textAlign: 'center' }}>
                                {t("Your payment of 2050 SAR was successful. You can now initiate your marriage process. Your Registered Case ID is: #Ab1212")}
                            </Text>


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
                                    onPress={() => navigation.navigate('Payment')}
                                    style={{
                                        borderRadius: 7,
                                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                                        alignItems: "center",
                                        width: '48%', borderWidth: 1,
                                        borderColor: '#fff'


                                        // marginHorizontal: 20,
                                    }}
                                >
                                    <Text style={{ color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                                        {t("Invite")}
                                    </Text>

                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate(process === 'marriage' ? 'Marriage' : process === 'patrimony' ? 'Patrimony' : 'Divorce')}
                                    style={{
                                        backgroundColor: Colors.white,
                                        borderRadius: 7,
                                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                                        alignItems: "center",
                                        width: '48%'


                                        // marginHorizontal: 20,
                                    }}
                                >
                                    <Text style={{ color: Colors.primary, fontSize: 19, fontWeight: '600' }}>
                                        {t("Next")}
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

export default Qestionnaire;
