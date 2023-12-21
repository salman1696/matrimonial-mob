import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    FlatList,
    Image,
    Modal,
    Pressable,
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
import { Icon, Input } from 'react-native-elements';
import ReactNativeModal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CaseTab } from './caseTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Profile/Profile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../../theme/Variables';
import i18n from '../../../translations';
import { useSelector } from 'react-redux';

const Wives = ({ navigation }: ApplicationScreenProps) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { profile } = useSelector((state: any) => state.user);

    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [list, setFavItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);

    console.log(profile, "profile");


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
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f4f4', paddingHorizontal: 20, padding: 10 }}>

            <View
                style={{
                    width: '100%',
                    alignItems: 'flex-start'
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
                <Text
                    style={{ fontSize: 28, marginVertical: 5, fontWeight: 700, color: Colors.black }}
                >
                    {t("Wives")}
                </Text>

            </View>



            {profile?.spouses.length > 0 ?
                <FlatList
                    data={profile?.spouses}
                    pagingEnabled={true}
                    contentContainerStyle={{
                        margin: 2,
                    }}
                    keyExtractor={(key: any) => key.index}
                    renderItem={({ item, index }: any) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.push('WifeDetail', { item })}
                                style={{
                                    padding: 5, backgroundColor: Colors.white,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 3,
                                    },
                                    shadowOpacity: 0.29,
                                    shadowRadius: 4.65,

                                    elevation: 7,
                                    width: '100%',
                                    borderRadius: 12, marginVertical: 7
                                }}>
                                <View style={{ flexDirection: 'row', padding: 18 }}>

                                    <Image
                                        testID={'brand-img'}
                                        style={{
                                            height: 60,
                                            padding: 4,
                                            width: 60,
                                            // alignSelf: 'flex-start',
                                        }}
                                        source={Images.sparkles.female_av}
                                        resizeMode={'cover'}
                                    />


                                    <View style={{ flex: 0.77, marginLeft: 20, alignItems: 'flex-start', justifyContent: 'center' }}>
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontWeight: 500,
                                                color: Colors.black,
                                            }}
                                        >
                                            {item?.name ?? t("Haleema Sultan")}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                fontWeight: 300,
                                                color: Colors.black,
                                            }}
                                        >
                                            {t("ID# " + item?.nationalIqamaId ?? "ID# " + "123456789")}
                                        </Text>

                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
                :
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={Images.sparkles.empty} style={{ height: 80, width: 80 }} resizeMode={'cover'} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.black }}>
                        {t("No Wives Found")}
                    </Text>
                </View>
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

export default Wives;
