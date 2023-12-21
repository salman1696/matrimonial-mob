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
import { useDispatch } from 'react-redux';
import { setProcess } from '../../../store/userReducer';

const WifeDetail = ({ route, navigation }: ApplicationScreenProps) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation([]);

    const { item } = route.params;

    const [mItem, setItem] = useState<any>(item)


    const [divorce, setdivorce] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [list, setFavItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);
    const dispatch = useDispatch()

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
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f4f4', padding: 20 }}>
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
                            <Icon name={i18n.language !== "ar" ? 'chevron-left' : 'chevron-right'} type='entypo' />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        padding: 5,
                        backgroundColor: Colors.white,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.29,
                        shadowRadius: 4.65,
                        marginVertical: 15,
                        elevation: 7,
                        borderRadius: 12,
                    }}>
                        <View style={{ alignItems: "center" }}>

                            <View style={{ zIndex: 1, position: 'absolute', alignSelf: 'flex-end' }}>
                                <TouchableOpacity onPress={() => setdivorce(!divorce)}>
                                    <Image

                                        testID={'brand-img'}
                                        style={{
                                            // flex: 0.14,
                                            height: 20,
                                            margin: 14,
                                            width: 20,
                                            tintColor: Colors.textGray400,
                                            alignSelf: 'flex-end',
                                        }}

                                        source={Images.sparkles.gg_dot}
                                        resizeMode={'cover'}
                                    />
                                </TouchableOpacity>
                                {divorce &&
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.push('AppTerms');
                                            dispatch(setProcess('divorce'));
                                        }}
                                        style={{
                                            borderRadius: 9,
                                            backgroundColor: '#fff',
                                            padding: 15, shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 3,
                                            },
                                            shadowOpacity: 0.29,
                                            shadowRadius: 4.65,
                                            marginVertical: 15,
                                            elevation: 7,
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                fontWeight: 400,
                                                color: '#C84040',
                                            }}
                                        >
                                            {t("Initiate Divorce Process")}
                                        </Text>
                                    </TouchableOpacity>
                                }
                            </View>

                            <Image
                                testID={'brand-img'}
                                style={{
                                    // flex: 0.14,
                                    height: 110,
                                    margin: 14,
                                    width: 110,
                                    // alignSelf: 'flex-start',
                                }}
                                source={Images.sparkles.female_av}
                                resizeMode={'cover'}
                            />


                            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                <Text
                                    style={{
                                        fontSize: 24,
                                        fontWeight: 600,
                                        color: Colors.black,

                                    }}
                                >
                                    {mItem?.name ?? t("Haleema Sultan")}
                                </Text>

                            </View>
                            <View style={{
                                margin: 10,
                                backgroundColor: "#f4f4f4",
                                padding: 10, borderRadius: 8, width: '90%',
                            }}>
                                <View style={{

                                    margin: 4,
                                    flexDirection: 'row', justifyContent: 'space-between'
                                }}>
                                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                        <Icon name={'idcard'} color={'#888B8E'} type='antdesign' size={20} />
                                        <Text
                                            style={{
                                                marginLeft: 5,
                                                fontSize: 14,
                                                fontWeight: 400,
                                                color: '#888B8E',

                                            }}
                                        >
                                            {t("National ID")}
                                        </Text>
                                    </View>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: 400,
                                            color: Colors.black,


                                        }}
                                    >{mItem?.nationalIqamaId ?? "14124-1413344-11"}</Text>

                                </View>
                                <View style={{ height: 1, width: '100%', backgroundColor: Colors.textGray400 }} />
                                <View style={{
                                    margin: 4,
                                    flexDirection: 'row', justifyContent: 'space-between'
                                }}>
                                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                        <Icon name={'idcard'} color={'#888B8E'} type='antdesign' size={20} />
                                        <Text
                                            style={{
                                                marginLeft: 5,
                                                fontSize: 14,
                                                fontWeight: 400,
                                                color: '#888B8E',

                                            }}
                                        >
                                            {t("Nationality")}
                                        </Text>
                                    </View>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: 400,
                                            color: Colors.black,


                                        }}
                                    >{mItem?.nationality ?? "Saudi Arabia"}</Text>

                                </View>
                                <View style={{ height: 1, width: '100%', backgroundColor: Colors.textGray400 }} />
                                <View style={{

                                    margin: 4,
                                    flexDirection: 'row', justifyContent: 'space-between'
                                }}>
                                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                        <Icon name={'calendar'} color={'#888B8E'} type='antdesign' size={20} />
                                        <Text
                                            style={{
                                                marginLeft: 5,
                                                fontSize: 14,
                                                fontWeight: 400,
                                                color: '#888B8E',

                                            }}
                                        >
                                            {t("DOB / Age")}
                                        </Text>
                                    </View>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: 400,
                                            color: Colors.black,


                                        }}
                                    >{mItem?.dateOfBirth ?? "05/10/1985"}</Text>

                                </View>
                                <View style={{ height: 1, width: '100%', backgroundColor: Colors.textGray400 }} />
                                <View style={{

                                    margin: 4,
                                    flexDirection: 'row', justifyContent: 'space-between'
                                }}>
                                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                        <Icon name={'calendar'} color={'#888B8E'} type='antdesign' size={20} />
                                        <Text
                                            style={{
                                                marginLeft: 5,
                                                fontSize: 14,
                                                fontWeight: 400,
                                                color: '#888B8E',

                                            }}
                                        >
                                            {t("Date of Marriage")}
                                        </Text>
                                    </View>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: 400,
                                            color: Colors.black,


                                        }}
                                    >{mItem?.dateOfMarriage ?? "11/12/2001"}</Text>

                                </View>
                            </View>
                        </View>
                    </View>


                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text
                            style={{ fontSize: 28, fontWeight: 700, color: Colors.black }}
                        >
                            {t("Kids")}
                        </Text>
                        <TouchableOpacity onPress={() => navigation.push('Kids')}>
                            <Text style={{ fontSize: 16, fontWeight: 500, color: Colors.primary }}>
                                {t("View All")}
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <FlatList
                        data={list}
                        pagingEnabled={true}
                        horizontal
                        contentContainerStyle={{
                            alignItems: 'center',
                        }}
                        keyExtractor={(key: any) => key.index}
                        renderItem={({ item, index }: any) => {
                            // console.log(item, "loopitem");

                            return (
                                <View style={{

                                    padding: 30, backgroundColor: Colors.white,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 3,
                                    },
                                    shadowOpacity: 0.29,
                                    shadowRadius: 4.65,
                                    elevation: 7,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 12,

                                    paddingVertical: 20,
                                    margin: 10,
                                }}>

                                    <Image
                                        testID={'brand-img'}
                                        style={{
                                            height: 70,
                                            padding: 4,
                                            width: 70,
                                            // alignSelf: 'flex-start',
                                        }}
                                        source={Images.sparkles.female_av}
                                        resizeMode={'cover'}
                                    />


                                    <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text
                                            style={{
                                                width: 90,
                                                fontSize: 20,
                                                fontWeight: 500,
                                                color: Colors.black,

                                                textAlign: "center"
                                            }}
                                        >
                                            {t("Haleema Sultan")}
                                        </Text>
                                        <View style={{ flexDirection: 'row', alignItems: "center", borderRadius: 15, padding: 5, backgroundColor: '#f4f4f4' }}>
                                            <Icon name={'calendar'} color={'#888B8E'} type='antdesign' size={20} />
                                            <Text
                                                style={{
                                                    marginLeft: 5,
                                                    fontSize: 16,
                                                    fontWeight: 400,
                                                    color: '#888B8E',

                                                }}
                                            >
                                                {t("12 Years")}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            );
                        }}
                    />

                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginVertical: 15 }}>
                        <Text style={{ fontSize: 28, fontWeight: 700, color: Colors.black }}>
                            {t("Nikkah Certificate")}
                        </Text>

                    </View>

                    <View style={{

                        padding: 30, backgroundColor: Colors.white,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.29,
                        shadowRadius: 4.65,
                        elevation: 7,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 12,
                        paddingVertical: 20,
                        margin: 10,
                    }}>

                        <Image
                            testID={'brand-img'}
                            style={{
                                height: 300,
                                padding: 4,
                                width: 300,
                                // alignSelf: 'flex-start',
                            }}
                            source={Images.sparkles.certificate}
                            resizeMode={'cover'}
                        />


                        <View style={{
                            padding: 10, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                        }}>
                            <View>
                                <Text
                                    style={{
                                        marginLeft: 5,
                                        fontSize: 13,
                                        fontWeight: 400,
                                        color: Colors.black,

                                    }}
                                >
                                    Marriage_certificate.png
                                </Text>
                                <Text
                                    style={{
                                        marginLeft: 5,
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: '#888B8E',

                                    }}
                                >
                                    1.3 Mb
                                </Text>
                            </View>
                            <View style={{ padding: 20, flexDirection: 'row', alignItems: "center", borderRadius: 5, padding: 5, borderWidth: 0.2, borderColor: Colors.primary }}>
                                <Text
                                    style={{
                                        marginLeft: 5,
                                        fontSize: 16,
                                        fontWeight: 400,
                                        color: '#888B8E',

                                    }}
                                >
                                    Download
                                </Text>
                                <Icon name={'download'} color={'#888B8E'} type='antdesign' size={20} />

                            </View>
                        </View>
                    </View>



                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginVertical: 15 }}>
                        <Text style={{ fontSize: 28, fontWeight: 700, color: Colors.black }}>
                            {t("Terms & Conditions")}
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

                                    <View
                                        style={{
                                            width: '87%',
                                        }}
                                    >

                                        <Text
                                            style={{
                                                fontSize: 16,
                                                fontWeight: 500,
                                                textAlign: "left",
                                                color: Colors.black,
                                            }}
                                        >
                                            {t("Turpis at cursus vel lectus adipiscing consectetur massa quis tristique. Dignissim.")}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontWeight: 400,
                                                color: Colors.black,
                                                textAlign: "left"
                                            }}
                                        >
                                            {t("Owned by")}
                                        </Text>

                                    </View>
                                    <View style={{
                                        width: '10%',

                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 1,
                                        },
                                        shadowOpacity: 0.20,
                                        shadowRadius: 1.41,

                                        elevation: 2,

                                    }}>

                                        <Icon name={'chevron-down'} type='entypo' color={'black'} />
                                    </View>
                                </View>
                            );
                        }}
                    />
                </View>
            </ScrollView >
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

export default WifeDetail;
