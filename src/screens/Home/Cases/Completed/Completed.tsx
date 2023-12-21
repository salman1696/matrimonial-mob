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
import i18n from '../../../../translations';



const Completed = ({ navigation }: ApplicationScreenProps) => {
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
                alignContent: 'center',
                backgroundColor: '#F4F4F4',
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Text style={{ fontSize: 24, fontWeight: 500, color: Colors.black }}>
                    {t("Completed")}
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Icon name="sort" color={Colors.primary} />
                    <Text style={{ fontSize: 15, fontWeight: 500, color: Colors.black }}>
                        {t("Sort")}
                    </Text>
                </View>
            </View>

            <FlatList
                data={list}
                pagingEnabled={true}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                keyExtractor={(key: any) => key.index}
                renderItem={({ item, index }: any) => {
                    // console.log(item, "loopitem");

                    return (
                        <View style={{
                            width: '99%',
                            backgroundColor: Colors.white,
                            borderRadius: 10,
                            marginVertical: 8,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                        }}>
                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    backgroundColor: Colors.white,
                                    padding: 20,
                                    borderRadius: 10,

                                }}
                            >
                                <Image
                                    testID={'brand-img'}
                                    style={{
                                        height: 36,
                                        width: '20%',
                                        alignSelf: "center"
                                    }}
                                    source={Images.sparkles.files}
                                    resizeMode={'contain'}
                                />
                                <View
                                    style={{
                                        width: '60%',
                                    }}
                                >
                                    <Text
                                        style={{
                                            textAlign: 'left', fontSize: 20, fontWeight: 700, color: Colors.black
                                        }}
                                    >
                                        {t("Talaq")}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 500,
                                            textAlign: 'left',
                                            color: Colors.textGray200,
                                        }}
                                    >
                                        {t("Case ID #131DA")}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 500,
                                            textAlign: 'left',
                                            color: Colors.primary,
                                        }}
                                    >
                                        {t("Progress: Successful")}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            textAlign: 'left', fontWeight: 500, color: Colors.black
                                        }}
                                    >
                                        {t("Date Initiated: 4/26/2022")}
                                    </Text>
                                </View>
                                <View style={{
                                    width: '20%',
                                    alignSelf: "center",
                                    padding: 10,

                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 1,
                                    },
                                    shadowOpacity: 0.20,
                                    shadowRadius: 1.41,

                                    elevation: 2,

                                }}>
                                    <View style={{
                                        borderRadius: 5,
                                        borderWidth: 0.5,
                                        paddingVertical: 10, borderColor: Colors.textGray200
                                    }}>
                                        <Icon name={i18n.language !== 'ar' ? 'chevron-right' : 'chevron-left'} type='entypo' />
                                    </View>
                                </View>
                            </View>
                            <View style={{ height: 2, backgroundColor: "#00000025" }} />
                        <TouchableOpacity onPress={()=>navigation.push('CaseInvoice')}   style={{
                                paddingTop: 15, padding: 10, backgroundColor: "#00000019", flexDirection: "row", justifyContent: "center",
                                borderBottomLeftRadius: 12, borderBottomRightRadius: 12
                                , alignItems: "center"
                            }}>
                                <Image
                                    testID={'brand-img'}
                                    style={{
                                        height: 23,
                                        width: '13%',
                                        alignSelf: "center"
                                    }}
                                    source={Images.sparkles.filelist}
                                    resizeMode={'contain'}
                                />
                                <Text style={{ fontSize: 15, fontWeight: 500, color: Colors.black }}>
                                    {t("View Invoice")}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
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


export default Completed;
