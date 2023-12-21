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
import { Switch } from 'native-base';
import i18n from '../../../../translations';


const NotificationSetting = ({ navigation }: ApplicationScreenProps) => {
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
                    </TouchableOpacity>
                </View>


                <View style={{ marginVertical: 15 }}>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 28, fontWeight: 700, color: Colors.black }}>
                        {t("Notification Settings")}
                    </Text>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 18, fontWeight: 700, color: Colors.black, marginTop: 15 }}>
                        {t("General Notifications")}
                    </Text>


                    <View
                        style={{
                            padding: 15,
                            marginTop: 10,
                            flexDirection: 'row',
                            borderRadius: 5,
                            justifyContent: "space-between",
                            alignItems: 'center',
                            backgroundColor: '#F6F6F9',
                        }}
                    >
                        <Text style={{ fontSize: 14, fontWeight: 500, color: Colors.black, }}>
                            {t("General")}
                        </Text>
                        <Switch trackColor={Colors.primary} />
                    </View>
                    <View
                        style={{
                            padding: 15,
                            marginTop: 10,
                            flexDirection: 'row',
                            borderRadius: 5,
                            justifyContent: "space-between",
                            alignItems: 'center',
                            backgroundColor: '#F6F6F9',
                        }}
                    >
                        <Text style={{ fontSize: 14, fontWeight: 500, color: Colors.black, }}>
                            {("App Updates")}
                        </Text>
                        <Switch trackColor={Colors.primary} />
                    </View>
                    <View
                        style={{
                            padding: 15,
                            marginTop: 10,
                            flexDirection: 'row',
                            borderRadius: 5,
                            justifyContent: "space-between",
                            alignItems: 'center',
                            backgroundColor: '#F6F6F9',
                        }}
                    >
                        <Text style={{ fontSize: 14, fontWeight: 500, color: Colors.black, }}>
                            {t("Reminders")}
                        </Text>
                        <Switch trackColor={Colors.primary} />
                    </View>
                    <View
                        style={{
                            padding: 15,
                            marginTop: 10,
                            flexDirection: 'row',
                            borderRadius: 5,
                            justifyContent: "space-between",
                            alignItems: 'center',
                            backgroundColor: '#F6F6F9',
                        }}
                    >
                        <Text style={{ fontSize: 14, fontWeight: 500, color: Colors.black, }}>
                            {t("Payments")}
                        </Text>
                        <Switch trackColor={Colors.primary} />
                    </View>

                    <Text style={{ alignSelf: 'flex-start', fontSize: 18, fontWeight: 700, color: Colors.black, marginTop: 15 }}>
                        {t("Others")}
                    </Text>


                    <View
                        style={{
                            padding: 15,
                            marginTop: 10,
                            flexDirection: 'row',
                            borderRadius: 5,
                            justifyContent: "space-between",
                            alignItems: 'center',
                            backgroundColor: '#F6F6F9',
                        }}
                    >
                        <Text style={{ fontSize: 14, fontWeight: 500, color: Colors.black, }}>
                            {t("Marriage Request")}
                        </Text>
                        <Switch trackColor={Colors.primary} />
                    </View>
                    <View
                        style={{
                            padding: 15,
                            marginTop: 10,
                            flexDirection: 'row',
                            borderRadius: 5,
                            justifyContent: "space-between",
                            alignItems: 'center',
                            backgroundColor: '#F6F6F9',
                        }}
                    >
                        <Text style={{ fontSize: 14, fontWeight: 500, color: Colors.black, }}>
                            {t("Appointed as Nominee")}
                        </Text>
                        <Switch trackColor={Colors.primary} />
                    </View>
                    <View
                        style={{
                            padding: 15,
                            marginTop: 10,
                            flexDirection: 'row',
                            borderRadius: 5,
                            justifyContent: "space-between",
                            alignItems: 'center',
                            backgroundColor: '#F6F6F9',
                        }}
                    >
                        <Text style={{ fontSize: 14, fontWeight: 500, color: Colors.black, }}>
                            {t("Appointed as Witness")}
                        </Text>
                        <Switch trackColor={Colors.primary} />
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

export default NotificationSetting;
