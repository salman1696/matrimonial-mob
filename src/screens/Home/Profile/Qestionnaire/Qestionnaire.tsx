import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../../../hooks';
import { ApplicationScreenProps } from '../../../../@types/navigation';
import { useTranslation } from 'react-i18next';
import { Icon, Input } from 'react-native-elements';
import ReactNativeModal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CaseTab } from './caseTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Profile/Profile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FlatList } from 'react-native';
import { Colors } from '../../../../theme/Variables';



const Qestionnaire = ({ navigation }: ApplicationScreenProps) => {
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
        <View
            style={{
                flex: 1,
                height: '100%',
                paddingVertical: 10,
                backgroundColor: '#f4f4f4',
                alignContent: 'center',
            }}
        >


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 22, fontWeight: '700', color: '#000000' }}>
                        {t("More Details")}
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: Colors.primary }}>
                        {t("Edit")}</Text>
                </View>

            </View>

            <View style={{ backgroundColor: "#fff", borderRadius: 7, padding: 12, marginTop: 5 }} >
                <Text style={{ alignSelf: "flex-start", fontSize: 14, fontWeight: '500', color: '#000000' }} >{t("Do you have any disability?")}</Text>
                <Text style={{ alignSelf: "flex-start", }}>{t("Ans: ")}<Text style={{ color: Colors.primary }}>{t('No')}</Text></Text>
            </View>
            <View style={{ backgroundColor: "#fff", borderRadius: 7, padding: 12, marginTop: 5 }} >
                <Text style={{ alignSelf: "flex-start", fontSize: 14, fontWeight: '500', color: '#000000' }} >{t("Were you ever involved in a criminal activity or something like that?")}</Text>
                <Text style={{ alignSelf: "flex-start", }}>{t("Ans: ")} <Text style={{ color: Colors.primary }}>{t('No')}</Text></Text>
            </View>
            <View style={{ backgroundColor: "#fff", borderRadius: 7, padding: 12, marginTop: 5 }} >
                <Text style={{ alignSelf: "flex-start", fontSize: 14, fontWeight: '500', color: '#000000' }} >{t("Were you ever involved in a criminal activity or something like that?")}</Text>
                <Text style={{ alignSelf: "flex-start", }}>{t("Ans: ")} <Text style={{ color: Colors.primary }}>{t('No')}</Text></Text>
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
});


export default Qestionnaire;
