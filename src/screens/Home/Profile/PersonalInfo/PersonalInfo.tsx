import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, Modal, Platform, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { getAsset } from '../../../../services/UserService';
import AddAssets from '../../Assets/AddAsset/AddAsset';
import i18n from '../../../../translations';



const PersonalInfo = ({ navigation }: ApplicationScreenProps) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const { profile } = useSelector((state: any) => state.user);
    const [assets, setAssets] = useState<any>([]);
    const [isAddNew, setAddNew] = useState(false);


    const [modalVisible, setModalVisible] = useState(false);
    const [list, setFavItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);

    console.log(profile, "profile");

    const Tab = createMaterialTopTabNavigator();


    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    useEffect(() => {
        assetCall()
    }, [])

    const assetCall = () => {
        console.log('calll', profile?.id);

        const params = {
            id: profile?.id
        }
        getAsset(params).then((res: any) => {
            console.log(res.data.data, 'assets');
            setAssets(res.data.data)

        }).catch((err: any) => {
            console.log(err), 'fff';
        })
    }

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
        <ScrollView showsVerticalScrollIndicator={false}>
            <View
                style={{
                    flex: 1,
                    height: '100%',
                    paddingVertical: 10,
                    backgroundColor: '#f4f4f4',
                    alignContent: 'center',
                }}
            >
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text
                        style={{ fontSize: 24, fontWeight: 700, color: Colors.black }}
                    >
                        {t("Wives")}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.push('Wives')}>
                        <Text style={{ fontSize: 14, fontWeight: 500, color: Colors.primary }}>
                            {t("View All")}
                        </Text>
                    </TouchableOpacity>

                </View>
                {profile?.spouses.length > 0 ?
                    <FlatList
                        data={profile?.spouses}
                        pagingEnabled={true}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            alignItems: 'center',
                        }}
                        keyExtractor={(key: any) => key.index}
                        renderItem={({ item, index }: any) => {
                            // console.log(item, "loopitem");

                            return (
                                <TouchableOpacity
                                    onPress={() => navigation.push('WifeDetail')}
                                    style={{
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
                                        paddingVertical: 10,
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
                                                fontSize: 18,
                                                fontWeight: 500,
                                                color: Colors.black,

                                                textAlign: "center"
                                            }}
                                        >
                                            {t("Haleema Sultan")}
                                        </Text>

                                        <Text
                                            style={{
                                                fontSize: 13,
                                                fontWeight: 400,
                                                color: Colors.black,

                                            }}
                                        >
                                            {t('1st wife')}
                                        </Text>

                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    /> :
                    <View style={{ padding: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.white, borderRadius: 12, margin: 10, }}>
                        <Image source={Images.sparkles.empty} style={{ height: 60, width: 60 }} resizeMode={'contain'} />

                        <Text style={{ fontSize: 15, fontWeight: 400, color: Colors.black, textAlign: 'center' }}>
                            {t("No Record Found")}
                        </Text>
                    </View>
                }
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text
                        style={{ fontSize: 24, fontWeight: 700, color: Colors.black }}
                    >
                        {t("Kids")}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.push('Kids')}>
                        <Text style={{ fontSize: 14, fontWeight: 500, color: Colors.primary }}>
                            {t("View All")}
                        </Text>
                    </TouchableOpacity>

                </View>
                {profile?.spouses.length > 0 ?
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
                                <TouchableOpacity
                                    onPress={() => navigation.push('KidDetail')}

                                    style={{

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
                                        paddingVertical: 10,
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
                                                fontSize: 18,
                                                fontWeight: 500,
                                                color: Colors.black,

                                            }}
                                        >
                                            {t("Urooj Binte")}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 18,
                                                fontWeight: 500,
                                                color: Colors.black,

                                            }}
                                        >
                                            Habib
                                        </Text>
                                        <View style={{ flexDirection: 'row', alignItems: "center", borderRadius: 15, padding: 5, backgroundColor: '#f4f4f4', marginTop: 4, }}>
                                            <Icon name={'calendar'} color={'#888B8E'} type='antdesign' size={18} />
                                            <Text
                                                style={{
                                                    marginLeft: 5,
                                                    fontSize: 14,
                                                    fontWeight: 400,
                                                    color: '#888B8E',

                                                }}
                                            >
                                                12 Years
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />
                    :
                    <View style={{ padding: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.white, borderRadius: 12, margin: 10, }}>
                        <Image source={Images.sparkles.empty} style={{ height: 60, width: 60 }} resizeMode={'contain'} />

                        <Text style={{ fontSize: 15, fontWeight: 400, color: Colors.black, textAlign: 'center' }}>
                            {t("No Record Found")}
                        </Text>
                    </View>
                }
                <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginVertical: 15 }}>
                    <Text style={{ fontSize: 24, fontWeight: 700, color: Colors.black }}>
                        {t("Assets")}
                    </Text>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, fontWeight: 500, color: Colors.primary }}>
                            {t("View All")}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => setAddNew(true)} style={{
                        padding: 20,
                        backgroundColor: Colors.white,
                        borderColor: Colors.primary,
                        borderStyle: 'dashed',
                        borderRadius: 12,
                        justifyContent: "center",
                        borderWidth: 1,
                        alignItems: "center"
                    }}>




                    <Text
                        style={{
                            fontSize: 22,
                            fontWeight: 600,
                            color: Colors.black,
                            marginTop: 4,

                        }}
                    >
                        {t("Add New")}
                    </Text>


                </TouchableOpacity>

                {assets.length > 0 ?
                    <FlatList
                        data={assets}
                        pagingEnabled={true}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            alignItems: 'center',
                        }}
                        keyExtractor={(key: any) => key.index}
                        renderItem={({ item, index }: any) => {
                            console.log(item, "loopitem");

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
                                            style={{ textAlign: 'left', fontSize: 18, fontWeight: 700, color: Colors.black }}
                                        >
                                            {item?.assetType ?? t("Residential Plot")}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontWeight: 500,
                                                color: Colors.textGray200,
                                                textAlign: 'left',
                                            }}
                                        >
                                            {item?.assetDescription ?? t("Lorem ipsum dolor, street 2, Clifton, NJ 07011")}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                fontWeight: 400,
                                                color: Colors.black,
                                                textAlign: 'left',
                                            }}
                                        >
                                            {t("Owned by")} <Text
                                                style={{
                                                    fontSize: 14,
                                                    fontWeight: 500,
                                                    color: Colors.primary,
                                                    textAlign: 'left',
                                                }}
                                            > {t("You only")}</Text>
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                textAlign: 'left', fontWeight: 500, color: Colors.black
                                            }}
                                        >
                                            {t("Valuation")} <Text
                                                style={{
                                                    fontSize: 14,
                                                    fontWeight: 500,
                                                    color: Colors.primary,
                                                    textAlign: 'left',
                                                }}
                                            > {item?.assetValue ?? " SAR 50,000"}</Text>
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
                    /> :
                    <View style={{ padding: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.white, borderRadius: 12, margin: 10, }}>
                        <Image source={Images.sparkles.empty} style={{ height: 60, width: 60 }} resizeMode={'contain'} />

                        <Text style={{ fontSize: 15, fontWeight: 400, color: Colors.black, textAlign: 'center' }}>
                            {t("No Record Found")}
                        </Text>
                    </View>
                }
            </View>
            {isAddNew &&
                <View style={{
                    backgroundColor: "#FAFAFA",
                    height: '110%', bottom: 0, position: "absolute",
                }}>
                    <AddAssets navigation={navigation} isPopUp={false} setAddNew={setAddNew} />

                </View>
            }

        </ScrollView>
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


export default PersonalInfo;
