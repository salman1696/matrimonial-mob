import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, ImageBackground, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../hooks';
import { setDefaultTheme } from '../../store/theme';
import { ApplicationScreenProps } from '../../../@types/navigation';
import { useTranslation } from 'react-i18next';
import { Icon, Input } from 'react-native-elements';
import ReactNativeModal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import { Colors } from '../../theme/Variables';
import { setProcess } from '../../store/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import i18n from '../../translations';


const Home = ({ navigation }: ApplicationScreenProps) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();

    const [showModal, setShowModal] = useState(false);
    const [list, setFavItems] = useState([{}, {}]);
    const dispatch = useDispatch()

    const { user } = useSelector((state: any) => state.user);
    console.log(user, ' user');

    const toggleModal = () => {
        setShowModal(!showModal);
    };




    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#f4f4f4',
            padding: 20
        }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{
                flex: 1,
                bottom: 20,
            }}>
                <View style={{ height: '100%', paddingBottom: 40 }}>

                    {showModal && (
                        <Modal animationType="slide" transparent visible={showModal} >
                            <View style={{ flex: 1, backgroundColor: '#44444498' }}>
                                <View style={{
                                    backgroundColor: "#fff", flex: 1, margin: 20,
                                    marginVertical: 100, padding: 20, borderRadius: 25
                                }}>
                                    <View style={{ marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ alignSelf: 'flex-start', fontSize: 22, fontWeight: 700, color: Colors.black, marginTop: 15 }}>
                                            {t("Latest Notifications")}
                                        </Text>

                                        <Icon onPress={toggleModal} name={'cross'} type='entypo' />

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
                                                                    {t("View")}
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
                                                                    {t("View")}
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
                            </View>
                        </Modal>
                    )}


                    <View style={{ flexDirection: 'row', alignContent: "center", justifyContent: 'space-between', width: '100%' }}>
                        <View style={{ justifyContent: "flex-end", top: 6 }}>
                            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'flex-start', }}>
                                <Text style={{
                                    fontSize: i18n.language == 'ar' ? 15 : 20, fontWeight: 600, color: Colors.black
                                }}>
                                    {t("Good morning,")}
                                </Text>
                                <Image
                                    testID={'brand-img'}
                                    style={{
                                        height: 26,
                                        width: 26,
                                    }}
                                    source={Images.sparkles.wave}
                                    resizeMode={'contain'}
                                />
                            </View>
                            <Text
                                style={{
                                    fontSize: 13,
                                    fontWeight: 400,
                                    color: Colors.textGray400,

                                    textAlign: 'left'
                                }}
                            >
                                {Date().toString().slice(0, 10).replace(/-/g, '/') ?? t("28 March, 2023")}
                            </Text>
                        </View>

                        <TouchableOpacity onPress={toggleModal} style={{ padding: 10, backgroundColor: Colors.primary, borderRadius: 8, alignSelf: 'center' }}>
                            <Image
                                testID={'brand-img'}
                                style={{
                                    height: 20,
                                    padding: 10,
                                    width: 20,
                                    // alignSelf: 'flex-start',
                                }}
                                source={Images.sparkles.bell_icon}
                                resizeMode={'cover'}
                            />


                        </TouchableOpacity>
                    </View>

                    <View style={{
                        padding: 5, backgroundColor: Colors.white,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.29,
                        shadowRadius: 4.65,
                        elevation: 7,
                        borderRadius: 12, margin: 4, marginVertical: 20
                    }}>
                        <View style={{ flexDirection: 'row', }}>

                            <Image
                                testID={'brand-img'}
                                style={{
                                    // flex: 0.14,
                                    height: 110,
                                    padding: 14,
                                    width: 110,
                                    // alignSelf: 'flex-start',
                                }}
                                source={Images.sparkles.male_av}
                                resizeMode={'cover'}
                            />


                            <View style={{ flex: 0.59, alignItems: 'center', justifyContent: 'center' }}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: 600,
                                        alignSelf: 'flex-start',
                                        color: Colors.black,
                                        textAlign: 'left',
                                    }}
                                >
                                    {user?.user?.name ?? t("Syed Habib bin Sheikh Makhdoom")}
                                </Text>
                                <View style={{
                                    flexDirection: 'row', alignSelf: 'flex-start', alignItems: "center"
                                }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: 300,
                                            color: Colors.black,

                                            textAlign: 'left',
                                        }}
                                    >
                                        {user?.user?.dateOfMarriage ? t("Married") : t('Unmarried')}
                                    </Text>
                                    <Image
                                        testID={'brand-img'}
                                        style={{
                                            // flex: 0.15,
                                            height: 5,
                                            padding: 9,
                                            marginHorizontal: 6,
                                            width: 5,
                                            // alignSelf: 'flex-start',
                                        }}
                                        source={Images.sparkles.male}
                                        resizeMode={'contain'}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>


                    <ImageBackground
                        // onPress={() => navigation.push('WifeDetail')}

                        source={Images.sparkles.hadith_bg}
                        resizeMode={'stretch'}
                        style={{
                            marginBottom: 20,
                            height: 'auto',
                            justifyContent: 'center',
                            width: '100%',
                            paddingVertical: 5
                        }}>

                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                width: '100%',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Text style={{ marginLeft: 20, fontSize: 13, fontWeight: 500, color: Colors.white }}>
                                {t("Hadith of the day!")}
                            </Text>



                            < TouchableOpacity
                                onPress={() => navigation.pop()}
                                style={{
                                    padding: 10,
                                    marginVertical: 5, borderColor: Colors.white
                                }} >
                                <Icon name={'cross'} type='entypo' color={'#fff'} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ paddingHorizontal: 18, textAlign: "center", fontSize: 18, fontWeight: 600, color: Colors.white }}>
                            {t("There is nothing like marriage, for two who love one another")}
                        </Text>
                        <Text style={{ padding: 18, textAlign: "right", fontSize: 11, fontWeight: 400, color: Colors.white }}>
                            {t("- Sunan Ibn Majah 1847")}
                        </Text>

                    </ImageBackground>



                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 22, fontWeight: 600, color: Colors.black }}>
                            {t("Wives")}
                        </Text>
                        <TouchableOpacity onPress={() => navigation.push('Wives')} style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 14, fontWeight: 500, color: Colors.primary }}>
                                {t("View All")}

                            </Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={user?.user?.spouseId ? list : [{}]}
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
                                index === 0 ?
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.push('AppTerms');
                                            dispatch(setProcess('marriage'));
                                        }}
                                        style={{
                                            backgroundColor: Colors.white,
                                            shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 3,
                                            },
                                            shadowOpacity: 0.29,
                                            shadowRadius: 4.65,
                                            elevation: 7,
                                            justifyContent: 'center',
                                            borderRadius: 12,
                                            paddingHorizontal: i18n.language === 'ar' ? 15 : 5,
                                            padding: i18n.language === 'ar' ? 0 : 10,
                                            margin: 10,
                                        }}>

                                        <View style={{ padding: 44, alignSelf: 'center', alignItems: 'center' }}>
                                            <Text
                                                style={{
                                                    fontSize: 27,
                                                    fontWeight: 500,
                                                    color: Colors.black,

                                                    textAlign: "center"
                                                }}
                                            >
                                                {t("+")}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 18,
                                                    fontWeight: 700,
                                                    color: Colors.primary,

                                                    textAlign: "center"
                                                }}
                                            >
                                                {t("Initiate")}
                                            </Text>

                                            <Text
                                                style={{
                                                    fontSize: 13,
                                                    fontWeight: 300,
                                                    color: Colors.black,

                                                }}
                                            >
                                                {t('New Request')}
                                            </Text>

                                        </View>


                                    </TouchableOpacity>
                                    : <TouchableOpacity
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
                                            paddingVertical: 15,
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
                                                    fontWeight: 300,
                                                    color: Colors.black,

                                                }}
                                            >
                                                {t('1st wife')}
                                            </Text>

                                        </View>
                                    </TouchableOpacity>
                            );
                        }}
                    />
                    {!user?.user?.spouseId ?? <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 22, fontWeight: 600, color: Colors.black }}>
                            {t("Kids")}
                        </Text>
                        <TouchableOpacity onPress={() => navigation.push('Kids')} style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 14, fontWeight: 500, color: Colors.primary }}>
                                {t("View All")}

                            </Text>
                        </TouchableOpacity>
                    </View>}
                    {!user?.user?.spouseId ?? <FlatList
                        data={list}
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
                                    onPress={() => navigation.pop()}
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
                                        paddingVertical: 15,
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
                                                fontWeight: 300,
                                                color: Colors.black,

                                            }}
                                        >
                                            {t('1st wife')}
                                        </Text>

                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />}


                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginVertical: 15 }}>
                        <Text style={{ fontSize: 22, fontWeight: 600, color: Colors.black }}>
                            {t("Meeras")}
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.push('InitPayment');
                            dispatch(setProcess('patrimony')
                            );
                        }}
                        style={{
                            padding: 25,
                            paddingVertical: 40,
                            backgroundColor: Colors.white,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.29,
                            shadowRadius: 4.65,
                            alignItems: 'center',
                            elevation: 7,
                            borderRadius: 12, margin: 4
                        }}>
                        <Text style={{ fontSize: 26, fontWeight: 500, color: Colors.black }}>
                            +
                        </Text>
                        <Text style={{ fontSize: 22, fontWeight: 400, color: Colors.black }}>
                            {t("Initiate Meeras Process")}
                        </Text>
                    </TouchableOpacity>


                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
                        <Text style={{ fontSize: 24, fontWeight: 600, color: Colors.black }}>
                            {t("Active Cases")}
                        </Text>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, fontWeight: 500, color: Colors.primary }}>
                                {t("View All")}
                            </Text>
                        </View>
                    </View>


                    <FlatList
                        data={list}
                        pagingEnabled={true}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            alignItems: 'center',
                            marginVertical: 5
                        }}
                        keyExtractor={(key: any) => key.index}
                        renderItem={({ item, index }: any) => {
                            // console.log(item, "loopitem");

                            return (
                                <TouchableOpacity
                                    style={{
                                        padding: 25,
                                        backgroundColor: Colors.white,
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 3,
                                        },
                                        shadowOpacity: 0.29,
                                        shadowRadius: 4.65,
                                        elevation: 7,
                                        alignItems: 'flex-start',
                                        borderRadius: 12,
                                        paddingVertical: 20,
                                        marginRight: 10,
                                        margin: 5,
                                        width: 250
                                    }}>

                                    <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>

                                        <Image
                                            testID={'brand-img'}
                                            style={{
                                                height: 50,
                                                padding: 4,
                                                width: 50,
                                                // alignSelf: 'flex-start',
                                            }}
                                            source={Images.sparkles.files}
                                            resizeMode={'cover'}
                                        />

                                        <Text
                                            style={{
                                                fontSize: 15,
                                                fontWeight: 700,
                                                color: "#EAAF18",

                                            }}
                                        >
                                            {t("In Progress")}
                                        </Text>
                                    </View>

                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <View
                                            style={{
                                                width: '100%',
                                            }}
                                        >
                                            <Text
                                                style={{ fontSize: 18, fontWeight: 700, color: Colors.black, lineHeight: 26, }}
                                            >
                                                {t("Talaq")}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 14,
                                                    fontWeight: 500,
                                                    color: Colors.textGray200,

                                                }}
                                            >
                                                Case ID #131DA
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 14,
                                                    fontWeight: 500,
                                                    color: Colors.primary,
                                                }}
                                            >
                                                Progress: Terms & Conditions
                                            </Text>

                                        </View>

                                    </View>
                                </TouchableOpacity>
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


export default Home;
