import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
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
import i18n from '../../../translations';
import { Image } from 'react-native';
import PartnerTerms from '../../../components/PartnerTerms/PartnerTerms';


const Will = (props: any) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [addnew, setAddnew] = useState(false);
    const [newTerm, setNewTerm] = useState('');
    const [receives, setRece] = useState(false);
    const [hasRemark, setRemark] = useState('')



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
        <View style={{ flex: 1, backgroundColor: '#FAFAFA', }}>


            <View
                style={{
                    flex: 1, padding: 20,
                    backgroundColor: 'transparent',
                    alignContent: 'center',
                }}
            >

                <Text
                    onPress={() => setRece(!receives)}
                    style={{
                        fontSize: 24,
                        fontWeight: 700,
                        textAlign: 'left',
                        color: Colors.black,
                        marginTop: 4,
                    }}
                >
                    {t("Write a Will")}
                </Text>

                <Text

                    style={{
                        fontSize: 17,
                        fontWeight: 400,
                        color: Colors.textGray200,
                        marginVertical: 10,
                        textAlign: 'left',

                    }}
                >
                    {t("Eget etiam nulla fames purus ac odio. Laoreet malesuada diam at sed eu purus.")}
                </Text>

                <View
                    style={{
                        paddingVertical: Platform.OS === 'ios' ? 14 : 0,


                        marginTop: 10,
                        borderWidth: 1,
                        borderColor: '#00000023',
                        flexDirection: 'row',
                        borderRadius: 5,
                        alignItems: 'center',
                        backgroundColor: '#F6F6F9',
                    }}
                >

                    <TextInput
                        multiline={true}
                        numberOfLines={10}
                        value={hasRemark}
                        onChangeText={setRemark}
                        placeholder={t("Write your will here...")}
                        style={{ alignSelf: 'center', paddingHorizontal: 15, fontSize: 17, height: 150 }}
                        placeholderTextColor={'#00000083'}

                    />
                </View>
            </View>
            <View style={{
                position: "absolute",
                flexDirection: "row",
                backgroundColor: "white",
                justifyContent: 'space-between',
                bottom: 0,
                width: '100%',
                padding: 20,

            }}>

                <TouchableOpacity
                    style={{
                        borderRadius: 7,
                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,

                        alignItems: "center",
                        justifyContent: "center",
                        width: '48%',
                        borderWidth: 1,
                        borderColor: '#00000030'
                    }}
                >
                    <Text style={{ color: 'red', fontSize: 17, fontWeight: '600' }}>
                        {t("Cancel Process")}
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.jumpTo('admin')}

                    style={{
                        backgroundColor: Colors.primary,
                        borderRadius: 7,
                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,

                        alignItems: "center",
                        width: '48%',
                        borderWidth: 1,
                        borderColor: '#00000030',
                        flexDirection: "row",
                        justifyContent: 'space-between'
                    }}
                >
                    <Text style={{ color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                        {t("Next")}
                    </Text>
                    <Icon name={i18n.language === "ar" ? 'chevron-left' : 'chevron-right'} type='entypo' color={Colors.white} size={15} style={{ width: '90%', }} />


                </TouchableOpacity>


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

export default Will;
