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
import { ProfileTab } from './ProfileTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../../theme/Variables';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import WorkHistory from './WorkHistory/WorkHistory';
import Education from './Education/Education';
import Qestionnaire from './Qestionnaire/Qestionnaire';
import { getProfile } from '../../../services/UserService';
import { useDispatch, useSelector } from 'react-redux';
import SetupProfile from '../../SetupProfile/SetupProfile';
import { setUserProfile } from '../../../store/userReducer';

const Cases = ({ navigation }: ApplicationScreenProps) => {
    const { user } = useSelector((state: any) => state.user);
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({} as any);
    const [modalVisible, setModalVisible] = useState(false);
    const [list, setFavItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);

    const dispatch = useDispatch();
    const Tab = createMaterialTopTabNavigator();

    const getProf = () => {

        const param = {
            id: user?.user?.id
        }

        getProfile(param).then((res) => {
            console.log(res, ' res');
            setProfile(res.data.data)
            dispatch(setUserProfile(res.data.data));
        }).catch((err) => {
            console.log(err, ' err');
        })
    }

    useEffect(() => {
        getProf();
    }, []);


    console.log(user, ' userp   ')
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const subCat = [
        {
            id: 1,
            title: 'Personal Info',
            iconName: 'clock_outline',
        },
        {
            id: 2,
            title: 'Work history',
            iconName: 'check',
        }, {
            id: 3,
            title: 'Education',
            iconName: 'check',
        },
    ];

    useEffect(() => {
        toggleModal();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f4f4', padding: 20 }}>
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
                    {t("Your Profile")}
                </Text>
                <Image
                    testID={'brand-img'}
                    style={{
                        height: 26,
                        width: 26,
                        tintColor: Colors.textGray200
                    }}
                    source={Images.sparkles.gg_dot}
                    resizeMode={'contain'}
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flex: 1, marginBottom: -400 }}>
                <View style={{ flex: 1, marginHorizontal: 2, }}>


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

                            <Image
                                testID={'brand-img'}
                                style={{
                                    // flex: 0.14,
                                    height: 140,
                                    padding: 14,
                                    width: 140,
                                    // alignSelf: 'flex-start',
                                }}
                                source={Images.sparkles.male_av}
                                resizeMode={'cover'}
                            />


                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text
                                    style={{
                                        fontSize: 22,
                                        fontWeight: 600,
                                        color: Colors.black,

                                    }}
                                >
                                    {t(profile?.name ?? "Syed Habib bin Makhdoom")}
                                </Text>

                            </View>
                            <View style={{
                                margin: 5,
                                backgroundColor: "#f4f4f4",
                                padding: 15, borderRadius: 8, width: '90%',
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
                                    >{profile?.nationalIqamaId ?? "14124-1413344-11"}</Text>

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
                                    >{profile?.nationality ?? "Saudi Arabia"}</Text>

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
                                    >{profile?.dateOfBirth ?? "05/10/1985"}</Text>

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
                                    >{profile?.dateOfMarriage ?? "11/12/2001"}</Text>

                                </View>
                                <View style={{ height: 1, width: '100%', backgroundColor: Colors.textGray400 }} />
                                <View style={{

                                    margin: 4,
                                    flexDirection: 'row', justifyContent: 'space-between'
                                }}>
                                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                        <Icon name={'cash-outline'} color={'#888B8E'} type='ionicon' size={20} />
                                        <Text
                                            style={{
                                                marginLeft: 5,
                                                fontSize: 16,
                                                fontWeight: 400,
                                                color: '#888B8E',

                                            }}
                                        >
                                            {t("Monthly Income")}
                                        </Text>
                                    </View>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 400,
                                            color: Colors.black,


                                        }}
                                    >SAR 2900</Text>

                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('SetupProfile')}
                                style={{
                                    width: '90%', padding: 10,
                                    borderRadius: 8,
                                    marginVertical: 10,
                                    backgroundColor: '#FFC200'
                                }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    <Icon name={'alert'} color={Colors.black} type='octicon' size={20} />
                                    <Text
                                        style={{
                                            marginLeft: 5,
                                            fontSize: 13,
                                            fontWeight: 600,
                                            color: Colors.black,

                                        }} >
                                        {t("Your profile is incomplete, please click here to complete your profile")}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, height: '300%' }}>
                        <Tab.Navigator
                            tabBar={(props: any) => <ProfileTab {...props} />}
                            initialRouteName={"AllDates"}

                        >
                            <Tab.Screen
                                name={"Personal Info"}
                                component={PersonalInfo}
                                initialParams={{}}
                                options={{
                                    tabBarLabel: "Personal Info",
                                }}
                            />
                            <Tab.Screen
                                name={"More Details"}
                                component={Qestionnaire}
                                initialParams={{}}
                                options={{
                                    tabBarLabel: "More Details",
                                }}
                            />
                            <Tab.Screen
                                name={"Work History"}
                                component={WorkHistory}
                                initialParams={{}}
                                options={{
                                    tabBarLabel: "Work History",
                                }}
                            />
                            <Tab.Screen
                                name={"Education"}
                                component={Education}
                                initialParams={{}}
                                options={{
                                    tabBarLabel: "Education",
                                }}
                            />
                        </Tab.Navigator>
                    </View>





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

export default Cases;
