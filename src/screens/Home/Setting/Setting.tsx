import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
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
import { LanguageContainer } from '../../../components';
import i18n from '../../../translations';
import LogoutContainer from '../../../components/LogoutContainer/LogoutContainer';


const Setting = ({ navigation }: ApplicationScreenProps) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [list, setFavItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);

    const [langCheck, setLangCheck] = useState(false);
    const [logoutCheck, setLogoutCheck] = useState(false);



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
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', }}>
            <View style={{ flex: 1, padding: 20 }}>
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
                </View>


                <View style={{ marginVertical: 15 }}>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 28, fontWeight: 700, color: Colors.black }}>
                        {t("Settings")}
                    </Text>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 18, fontWeight: 700, color: Colors.black, marginVertical: 15 }}>
                        {t("General Settings")}
                    </Text>

                    <TouchableOpacity
                        onPress={() => setLangCheck(true)}
                        style={{
                            marginVertical: 5,
                            flexDirection: 'row',
                            borderRadius: 10,
                            paddingVertical: 10,
                            alignItems: 'center',
                            backgroundColor: '#f7f7f7',
                        }}
                    >
                        <Icon
                            name="world-o"
                            type="fontisto"
                            size={20}
                            color="#adadaf"
                            style={{ marginHorizontal: 10 }}
                        />
                        <Text style={{ fontSize: 15, fontWeight: 400, color: Colors.black, marginVertical: 10 }}>
                            {t("Language")}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.push('NotificationSetting')}
                        style={{
                            marginVertical: 5,
                            flexDirection: 'row',
                            borderRadius: 10,
                            paddingVertical: 10,
                            alignItems: 'center',
                            backgroundColor: '#f7f7f7',
                        }}
                    >
                        <Icon
                            name="world-o"
                            type="fontisto"
                            size={20}
                            color="#adadaf"
                            style={{ marginHorizontal: 10 }}
                        />
                        <Text style={{ fontSize: 15, fontWeight: 400, color: Colors.black, marginVertical: 10 }}>
                            {t("Notification Settings")}
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 18, fontWeight: 700, color: Colors.black, marginVertical: 15 }}>
                        {t("Security")}
                    </Text>

                    <TouchableOpacity
                        onPress={() => navigation.push('ChangePassword')}
                        style={{
                            marginVertical: 5,
                            flexDirection: 'row',
                            borderRadius: 10,
                            paddingVertical: 10,
                            alignItems: 'center',
                            backgroundColor: '#f7f7f7',
                        }}
                    >
                        <Icon
                            name="world-o"
                            type="fontisto"
                            size={20}
                            color="#adadaf"
                            style={{ marginHorizontal: 10 }}
                        />
                        <Text style={{ fontSize: 15, fontWeight: 400, color: Colors.black, marginVertical: 10 }}>
                            {t("Change Password")}
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 18, fontWeight: 700, color: Colors.black, marginVertical: 15 }}>
                        {t("Resources")}
                    </Text>

                    <TouchableOpacity
                        onPress={() => navigation.push('ReturnPolicy')}

                        style={{
                            marginVertical: 5,
                            flexDirection: 'row',
                            borderRadius: 10,
                            paddingVertical: 10,
                            alignItems: 'center',
                            backgroundColor: '#f7f7f7',
                        }}
                    >
                        <Icon
                            name="world-o"
                            type="fontisto"
                            size={20}
                            color="#adadaf"
                            style={{ marginHorizontal: 10 }}
                        />
                        <Text style={{ fontSize: 15, fontWeight: 400, color: Colors.black, marginVertical: 10 }}>
                            {t("Returns & Refunds Policy")}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.push('TermsCondition')}
                        style={{
                            marginVertical: 5,
                            flexDirection: 'row',
                            borderRadius: 10,
                            paddingVertical: 10,
                            alignItems: 'center',
                            backgroundColor: '#f7f7f7',
                        }}
                    >
                        <Icon
                            name="world-o"
                            type="fontisto"
                            size={20}
                            color="#adadaf"
                            style={{ marginHorizontal: 10 }}
                        />
                        <Text style={{ fontSize: 15, fontWeight: 400, color: Colors.black, marginVertical: 10 }}>
                            {t("Terms & Conditions")}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.push('Policy')}
                        style={{
                            marginVertical: 5,
                            flexDirection: 'row',
                            borderRadius: 10,
                            paddingVertical: 10,
                            alignItems: 'center',
                            backgroundColor: '#f7f7f7',
                        }}
                    >
                        <Icon
                            name="world-o"
                            type="fontisto"
                            size={20}
                            color="#adadaf"
                            style={{ marginHorizontal: 10 }}
                        />
                        <Text style={{ fontSize: 15, fontWeight: 400, color: Colors.black, marginVertical: 10 }}>
                            {t("Privacy Policy")}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setLogoutCheck(true)}
                        style={{
                            marginVertical: 5,
                            flexDirection: 'row',
                            borderRadius: 10,
                            paddingVertical: 10,
                            alignItems: 'center',
                            backgroundColor: '#f7f7f7',
                        }}
                    >
                        <Icon
                            name="world-o"
                            type="fontisto"
                            size={20}
                            color="#adadaf"
                            style={{ marginHorizontal: 10 }}
                        />
                        <Text style={{ fontSize: 15, fontWeight: 400, color: Colors.black, marginVertical: 10 }}>
                            {t("Logout")}
                        </Text>
                    </TouchableOpacity>




                </View>


            </View>
            {langCheck && <LanguageContainer onClose={setLangCheck} value={langCheck} />
            }
            {logoutCheck && <LogoutContainer onClose={setLogoutCheck} value={logoutCheck} navigation={navigation} />
            }
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

export default Setting;
