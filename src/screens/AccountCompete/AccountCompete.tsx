import React, { useEffect, useState } from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useTheme } from '../../hooks';
import { ApplicationScreenProps } from '../../../@types/navigation';
import { useTranslation } from 'react-i18next';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../theme/Variables';
import { Image } from 'react-native';
import { useSelector } from 'react-redux';
import i18n from '../../translations';
import { background } from 'native-base/lib/typescript/theme/styled-system';
import { ActivityIndicator } from 'react-native';


const AccountCompete = ({ navigation }: ApplicationScreenProps) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { process } = useSelector((state: any) => state.user);
    const [loading, setLoading] = useState(true);

    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [list, setFavItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);

    setTimeout(() => {
        setLoading(false);
    }, 2000);

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
                                {t("Account Created")}

                            </Text>
                            <Text style={{ fontSize: 16, fontWeight: 400, color: Colors.white, marginVertical: 20, textAlign: 'center' }}>
                                {t("Congratulations! You are now a registered user of Nikah. Please click continue to start using our app.")}
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
                                    onPress={() => navigation.reset({
                                        index: 0,
                                        routes: [{ name: 'Main' }],
                                    })}
                                    style={{
                                        borderRadius: 7,
                                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                                        alignItems: "center",
                                        width: '100%', borderWidth: 1,
                                        borderColor: '#fff',
                                        backgroundColor: Colors.white,


                                        // marginHorizontal: 20,
                                    }}
                                >
                                    <Text style={{ color: Colors.primary, fontSize: 19, fontWeight: '600' }}>
                                        {t("Continue")}
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

export default AccountCompete;
