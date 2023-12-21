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
import Profile from './Notifications';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../../theme/Variables';
import i18n from '../../../translations';

const Notifications = ({ navigation }: ApplicationScreenProps) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [list, setFavItems] = useState([{}, {}]);


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
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
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
                            <Icon onPress={() => navigation.pop()} name={i18n.language !== "ar" ? 'chevron-left' : 'chevron-right'} type='entypo' />
                        </TouchableOpacity>
                        <View style={{ position: 'absolute', width: "100%", alignItems: "center" }}>
                            <Text style={{ fontSize: 28, fontWeight: 700, color: Colors.black, }}>
                                {t("Notifications")}
                            </Text>
                        </View>
                    </View>


                    <View style={{ marginVertical: 15 }}>
                        <Text style={{ alignSelf: 'flex-start', fontSize: 16, fontWeight: 300, color: Colors.textGray200, marginTop: 15 }}>
                            {t("Today")}
                        </Text>


                    </View>

                    <FlatList
                        data={list}
                        pagingEnabled={true}
                        contentContainerStyle={{
                            alignItems: 'center',
                        }}
                        keyExtractor={(key: any) => key.index}
                        renderItem={({ item, index }: any) => {
                            // console.log(item, "loopitem");

                            return (
                                index === 0
                                    ?
                                    <TouchableOpacity
                                        onPress={() => navigation.push('WifeDetail')}
                                        style={{
                                            padding: 5, backgroundColor: '#f4f4f4',
                                            shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 3,
                                            },
                                            shadowOpacity: 0.29,
                                            shadowRadius: 4.65,

                                            elevation: 7,
                                            width: '99%',
                                            borderRadius: 12,
                                            marginVertical: 7
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 13,
                                                fontWeight: 500,
                                                alignSelf: 'flex-end',
                                                position: 'absolute',
                                                padding: 5,
                                                color: Colors.primary,
                                            }}
                                        >
                                            {t("Now")}
                                        </Text>
                                        <View style={{
                                            width: '100%',
                                            flexDirection: 'row', padding: 10
                                        }}>

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


                                            <View style={{ flex: 1, marginLeft: 10, alignItems: 'flex-start', justifyContent: 'center' }}>
                                                <Text
                                                    style={{
                                                        fontSize: 20,
                                                        fontWeight: 500,
                                                        color: Colors.black,
                                                    }}
                                                >
                                                    {t("Sahiba Waqas")}
                                                </Text>
                                                <Text
                                                    style={{
                                                        padding: 1,
                                                        fontSize: 13,
                                                        fontWeight: 300,
                                                        color: '#616161',
                                                    }}
                                                >
                                                    {t("Added you as a Guardian in her Marriage Case with ID#13151")}
                                                </Text>

                                            </View>

                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 20 }}>

                                            <TouchableOpacity
                                                style={{
                                                    backgroundColor: Colors.primary,
                                                    borderColor: Colors.primary,
                                                    borderRadius: 7,
                                                    justifyContent: "center",
                                                    borderWidth: 1,
                                                    padding: i18n.language === 'ar' ? 1 : 10,
                                                    paddingHorizontal: 15,

                                                    alignItems: "center"
                                                }}>
                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                        fontWeight: 600,
                                                        color: Colors.white,
                                                    }}
                                                >
                                                    {t("Accept")}
                                                </Text>




                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                onPress={() => {

                                                }}
                                                style={{
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    marginLeft: 15,
                                                    padding: i18n.language === 'ar' ? 1 : 10,
                                                    paddingHorizontal: 15,
                                                    backgroundColor: '#fff',
                                                    borderRadius: 7,
                                                }}>




                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                        fontWeight: 600,
                                                        color: 'red',
                                                        marginTop: 4,
                                                    }}
                                                >
                                                    {t("Reject")}
                                                </Text>




                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity>
                                    :
                                    index === 1 ? <TouchableOpacity
                                        onPress={() => navigation.push('WifeDetail')}
                                        style={{
                                            padding: 5, backgroundColor: '#f4f4f4',
                                            shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 3,
                                            },
                                            shadowOpacity: 0.29,
                                            shadowRadius: 4.65,

                                            elevation: 7,
                                            width: '99%',
                                            borderRadius: 12,
                                            marginVertical: 7
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 13,
                                                fontWeight: 500,
                                                alignSelf: 'flex-end',
                                                padding: 5,
                                                position: 'absolute',
                                                color: Colors.primary,
                                            }}
                                        >
                                            {t("Now")}
                                        </Text>
                                        <View style={{ width: '100%', flexDirection: 'row', padding: 10 }}>
                                            <View style={{ flex: 1, marginLeft: 10, alignItems: 'flex-start', justifyContent: 'center' }}>
                                                <Text
                                                    style={{
                                                        fontSize: 20,
                                                        fontWeight: 700,
                                                        color: Colors.black,
                                                    }}
                                                >
                                                    {t("Counseling Appointment")}
                                                </Text>

                                                <Text
                                                    style={{
                                                        padding: 1,
                                                        fontSize: 13,
                                                        fontWeight: 300,
                                                        color: '#616161',
                                                    }}
                                                >
                                                    {t("Haleema Ibrahim requested an appointment with LRH Counseling Center at 1:00 Am, Monday, 26th April")}
                                                </Text>

                                            </View>

                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 20 }}>

                                            <TouchableOpacity
                                                style={{
                                                    backgroundColor: Colors.primary,
                                                    borderColor: Colors.primary,
                                                    borderRadius: 7,
                                                    justifyContent: "center",
                                                    borderWidth: 1,
                                                    padding: i18n.language === 'ar' ? 1 : 10,
                                                    paddingHorizontal: 15,
                                                    alignItems: "center"
                                                }}>
                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                        fontWeight: 600,
                                                        color: Colors.white,
                                                    }}
                                                >
                                                    {t("Accept")}
                                                </Text>




                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                onPress={() => {

                                                }}
                                                style={{
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    marginLeft: 15,
                                                    padding: i18n.language === 'ar' ? 1 : 10,
                                                    paddingHorizontal: 15,
                                                    backgroundColor: '#fff',
                                                    borderRadius: 7,
                                                }}>




                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                        fontWeight: 600,
                                                        color: 'black',
                                                        marginTop: 4,
                                                    }}
                                                >
                                                    {t("Request Another Slot")}
                                                </Text>




                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity> :
                                        <View
                                            style={{
                                                width: '99%',
                                                flexDirection: 'row',
                                                backgroundColor: Colors.white,
                                                padding: 20,
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
                                            }}
                                        >
                                            <Image
                                                testID={'brand-img'}
                                                style={{
                                                    height: 36,
                                                    width: '20%',
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
                                                    style={{ fontSize: 20, fontWeight: 700, color: Colors.black }}
                                                >
                                                    Residential Plot
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontSize: 16,
                                                        fontWeight: 500,
                                                        color: Colors.textGray200,
                                                    }}
                                                >
                                                    Lorem ipsum dolor, street 2, Clifton, NJ 07011
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                        fontWeight: 400,
                                                        color: Colors.black,
                                                    }}
                                                >
                                                    Owned by <Text
                                                        style={{
                                                            fontSize: 16,
                                                            fontWeight: 500,
                                                            color: Colors.primary,
                                                        }}
                                                    > You only</Text>
                                                </Text>
                                                <Text
                                                    style={{ fontSize: 16, fontWeight: 500, color: Colors.black }}
                                                >
                                                    Valuation <Text
                                                        style={{
                                                            fontSize: 16,
                                                            fontWeight: 500,
                                                            color: Colors.primary,
                                                        }}
                                                    > SAR 50,000</Text>
                                                </Text>
                                            </View>
                                            <View style={{
                                                width: '20%',

                                                shadowColor: "#000",
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 1,
                                                },
                                                shadowOpacity: 0.20,
                                                shadowRadius: 1.41,

                                                elevation: 2,

                                            }}>

                                                <Icon name='closecircle' type='antdesign' color={'red'} />
                                            </View>
                                        </View>
                            );
                        }}
                    />
                </View>
            </ScrollView>
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

export default Notifications;
