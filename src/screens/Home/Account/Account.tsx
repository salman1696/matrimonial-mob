import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../../hooks';
import { ApplicationScreenProps } from '../../../../@types/navigation';
import { useTranslation } from 'react-i18next';
import { Icon, Input } from 'react-native-elements';
import ReactNativeModal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CaseTab } from './caseTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Profile/Profile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../../theme/Variables';
import { useSelector } from 'react-redux';



const Account = ({ navigation }: ApplicationScreenProps) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const { user } = useSelector((state: any) => state.user);
    const [modalVisible, setModalVisible] = useState(false);

    const Tab = createMaterialTopTabNavigator();

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    navigation.setOptions({ tabBarVisible: true })

    const subCat = [
        {
            id: 1,
            title: "Active",
            iconName: 'clock_outline'

        },
        {
            id: 2,
            title: "Completed",
            iconName: 'check'

        },
    ];


    useEffect(() => {
        toggleModal();
    }, []);

    return (
        <SafeAreaView style={{ height: '100%', backgroundColor: Colors.primary, padding: 20 }}>


            {/* <View style={(Layout.center, Layout.fullSize)}> */}

            <View style={{ flex: 1, alignContent: "center", }}>
                {/* <View
                    style={{
                        width: '100%',
                        alignItems: 'flex-end',
                    }}
                >
                    <Icon size={32} name={'cross'} type='entypo' color={'white'} />
                </View> */}

                <View style={{
                    padding: 5, backgroundColor: Colors.white,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,

                    elevation: 7,
                    borderRadius: 12, margin: 4, marginVertical: 20
                }}>
                    <View style={{ flexDirection: 'row', }}>

                        <Image
                            testID={'brand-img'}
                            style={{
                                // flex: 0.14,
                                height: 110,
                                padding: 14,
                                width: 110,
                                // alignSelf: 'flex-start',
                            }}
                            source={Images.sparkles.male_av}
                            resizeMode={'cover'}
                        />


                        <View style={{ flex: 0.59, alignItems: 'center', justifyContent: 'center' }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 600,
                                    alignSelf: 'flex-start',
                                    color: Colors.black,
                                    textAlign: 'left',
                                }}
                            >
                                {user?.user?.name ?? t("Syed Habib bin Sheikh Makhdoom")}
                            </Text>
                            <View style={{
                                flexDirection: 'row', alignSelf: 'flex-start', alignItems: "center"
                            }}>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: 300,
                                        color: Colors.black,

                                        textAlign: 'left',
                                    }}
                                >
                                    {user?.user?.dateOfMarriage ? t("Married") : t('Unmarried')}
                                </Text>
                                <Image
                                    testID={'brand-img'}
                                    style={{
                                        // flex: 0.15,
                                        height: 5,
                                        padding: 9,
                                        marginHorizontal: 6,
                                        width: 5,
                                        // alignSelf: 'flex-start',
                                    }}
                                    source={Images.sparkles.male}
                                    resizeMode={'contain'}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.push('Kids')} style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: "center", alignContent: "center", marginTop: 50, }}>

                    <Image
                        testID={'brand-img'}
                        style={{
                            flex: 0.12,
                            height: 28,
                            width: 28,
                            marginRight: 10


                            // alignSelf: 'flex-start',
                        }}
                        source={Images.sparkles.kid}
                        resizeMode={'contain'}
                    />
                    <View style={{ alignSelf: 'flex-start', justifyContent: 'center', }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 400,
                                color: Colors.white,
                                textAlign: 'left'
                            }}
                        >
                            {t("Kids")}
                        </Text>
                    </View>

                </TouchableOpacity>
                <View style={{ backgroundColor: "white", height: 0.3, width: '100%', marginVertical: 25 }} />
                <TouchableOpacity onPress={() => navigation.push('Wives')} style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: "center", alignContent: "center" }}>

                    <Image
                        testID={'brand-img'}
                        style={{
                            flex: 0.12,
                            height: 28,
                            width: 28,
                            marginRight: 10


                            // alignSelf: 'flex-start',
                        }}
                        source={Images.sparkles.wives}
                        resizeMode={'contain'}
                    />
                    <View style={{ justifyContent: 'center', }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 400,
                                color: Colors.white,
                            }}
                        >
                            {t("Wives")}
                        </Text>
                    </View>

                </TouchableOpacity>
                <View style={{ backgroundColor: "white", height: 0.3, width: '100%', marginVertical: 25 }} />
                <TouchableOpacity onPress={() => navigation.push('Notifications')} style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: "center", alignContent: "center" }}>

                    <Image
                        testID={'brand-img'}
                        style={{
                            flex: 0.10,
                            height: 28,
                            width: 28,
                            marginRight: 10
                            // alignSelf: 'flex-start',
                        }}
                        source={Images.sparkles.bell_noti}
                        resizeMode={'contain'}
                    />
                    <View style={{ justifyContent: 'center', }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 400,
                                color: Colors.white,
                            }}
                        >
                            {t("Notification")}
                        </Text>
                    </View>

                </TouchableOpacity>
                <View style={{ backgroundColor: "white", height: 0.3, width: '100%', marginVertical: 25 }} />
                <TouchableOpacity onPress={() => navigation.push('Assets')} style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: "center", alignContent: "center" }}>

                    <Image
                        testID={'brand-img'}
                        style={{
                            flex: 0.10,
                            height: 14,
                            width: 14,
                            marginRight: 10


                            // alignSelf: 'flex-start',
                        }}
                        source={Images.sparkles.manage_asset}
                        resizeMode={'cover'}
                    />
                    <View style={{ justifyContent: 'center', }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 400,
                                color: Colors.white,
                            }}
                        >
                            {t("Manage Assets")}
                        </Text>
                    </View>

                </TouchableOpacity>
                <View style={{ backgroundColor: "white", height: 0.3, width: '100%', marginVertical: 25 }} />
                <TouchableOpacity onPress={() => navigation.push('PaymentHistory')} style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: "center", alignContent: "center" }}>

                    <Image
                        testID={'brand-img'}
                        style={{
                            flex: 0.10,
                            height: 18,
                            width: 18,
                            marginRight: 10


                            // alignSelf: 'flex-start',
                        }}
                        source={Images.sparkles.carrd}
                        resizeMode={'contain'}
                    />
                    <View style={{ justifyContent: 'center', }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 400,
                                color: Colors.white,
                            }}
                        >
                            {t("Payment History")}
                        </Text>
                    </View>

                </TouchableOpacity>
                <View style={{ backgroundColor: "white", height: 0.3, width: '100%', marginVertical: 25 }} />
                <TouchableOpacity onPress={() => navigation.push('Setting')} style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: "center", alignContent: "center" }}>

                    <Image
                        testID={'brand-img'}
                        style={{
                            flex: 0.10,
                            height: 28,
                            width: 28,
                            marginRight: 10


                            // alignSelf: 'flex-start',
                        }}
                        source={Images.sparkles.setting}
                        resizeMode={'contain'}
                    />
                    <View style={{ justifyContent: 'center', }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 400,
                                color: Colors.white,
                            }}
                        >
                            {t("Account Setting")}
                        </Text>
                    </View>

                </TouchableOpacity>


            </View>








            {/* </View> */}
            {/* <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} /> */}
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


export default Account;
