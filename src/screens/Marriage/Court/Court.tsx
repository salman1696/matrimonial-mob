import React, { useEffect, useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
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


const Court = (props: any) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [underReview, setUnderReview] = useState(false);
    const [isReviewed, setReviewed] = useState(false);
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
        isReviewed ?
            <View style={{ flex: 1, backgroundColor: '#FAFAFA', }}>

                <View style={{ flex: 1, padding: 20, }}>

                    <View style={{

                        backgroundColor: Colors.white,
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
                        borderRadius: 4,
                    }}>
                        <View style={{
                            padding: 10, width: '100%',
                            flexDirection: 'row', alignItems: 'center',
                            justifyContent: 'space-between',
                            borderRadius: 4,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.29,
                            shadowRadius: 1.65,
                            elevation: 2,
                            backgroundColor: "white"

                        }}>
                            <View style={{


                            }}>
                                <Text
                                    style={{
                                        marginLeft: 5,
                                        fontSize: 13,
                                        fontWeight: 400,
                                        color: Colors.black,

                                    }}
                                >
                                    {t("Initiate Date:")}
                                    <Text
                                        style={{
                                            marginLeft: 5,
                                            fontSize: 14,
                                            fontWeight: 500,
                                            color: Colors.primary,

                                        }}
                                    > 25/10/2022
                                    </Text>

                                </Text>
                                <Text
                                    style={{
                                        marginLeft: 5,
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: 'black',

                                    }}
                                >
                                    {t("Status")}
                                    <Text
                                        style={{
                                            marginLeft: 5,
                                            fontSize: 14,
                                            fontWeight: 500,
                                            color: Colors.primary,

                                        }}
                                    >  {t("Approved")}
                                    </Text>
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
                                    {t("Download")}
                                </Text>
                                <Icon name={'download'} color={'#888B8E'} type='antdesign' size={20} />

                            </View>
                        </View>

                        <Image
                            testID={'brand-img'}
                            style={{
                                height: 300,
                                padding: 4,
                                width: 300,
                                marginVertical: 20,
                                // alignSelf: 'flex-start',
                            }}
                            source={Images.sparkles.certificate}
                            resizeMode={'cover'}
                        />



                    </View>














                </View>

                <View style={{
                    position: "absolute",
                    bottom: 20,
                    alignItems: "center",

                }}>


                    <TouchableOpacity
                        onPress={() => props.navigation.pop()}
                        style={{
                            backgroundColor: Colors.primary,
                            borderRadius: 7,
                            padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                            alignItems: "center",
                            width: '95%',
                            flexDirection: 'row',
                            paddingEnd: 40,
                            borderWidth: 1,
                            justifyContent: "space-between",
                            borderColor: '#00000030',
                            // marginHorizontal: 20,
                        }}
                    >
                        <Text style={{ width: '100%', color: Colors.white, fontSize: 19, fontWeight: '600', textAlign: 'left' }}>
                            {t("View Cases")}
                        </Text>
                        <Icon name={i18n.language === "ar" ? 'chevron-left' : 'chevron-right'} type='entypo' color={'white'} style={{}} />

                    </TouchableOpacity>

                </View>
            </View >
            : underReview ?
                <View style={{ flex: 1, backgroundColor: '#FAFAFA', }}>

                    <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center' }}>




                        <TouchableOpacity
                            onPress={() => setReviewed(true)}
                            style={{ padding: 60, alignSelf: "center", backgroundColor: "#E0FBEA", borderRadius: 100 }}>
                            <Image
                                testID={'brand-img'}
                                style={{
                                    height: 74,
                                    width: 74,
                                    alignSelf: 'flex-start',
                                }}
                                source={Images.sparkles.bg_loading}
                                resizeMode={'contain'}
                            />
                        </TouchableOpacity>


                        <Text style={{ fontSize: 24, fontWeight: 700, color: Colors.black, marginTop: 10, marginHorizontal: 20, textAlign: 'center' }}>
                            {t("Case Under Review")}
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 500, color: Colors.textGray200, marginTop: 20, textAlign: 'center', }}>
                            {t("Your case has been submitted to court and is under review process, you’ll be notified on approval.")}
                        </Text>













                    </View>




                </View >
                :
                <View style={{ flex: 1, backgroundColor: '#FAFAFA', }}>
                    <ScrollView style={{ marginBottom: 100 }}>

                        <View style={{ flex: 1, paddingHorizontal: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: 24, fontWeight: 700, color: Colors.black, marginTop: 10 }}>
                                {t("Appointment Details")}
                            </Text>



                            <View
                                style={{
                                    width: '99%',
                                    backgroundColor: '#111',
                                    padding: 20,
                                    borderRadius: 10,
                                    marginVertical: 8,
                                    shadowColor: "#000",
                                    alignSelf: 'center',
                                    shadowOffset: {
                                        width: 0,
                                        height: 1,
                                    },
                                    shadowOpacity: 0.22,
                                    shadowRadius: 2.22,
                                    elevation: 3,
                                }}
                            >
                                <Text
                                    style={{ textAlign: 'left', fontSize: 20, fontWeight: 600, color: Colors.white }}
                                >
                                    {t("LRH Medical Center SA")}
                                </Text>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: "center",
                                    marginTop: 10,
                                }}>
                                    <TouchableOpacity style={{
                                        width: '10%',
                                    }}>

                                        <Icon name={'map-pin'} type='feather' color={'white'} size={20} />
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            width: '90%',
                                        }}
                                    >

                                        <Text
                                            style={{
                                                textAlign: 'left',
                                                fontSize: 16,
                                                fontWeight: 500,
                                                color: Colors.primary,
                                            }}
                                        >
                                            {t("Location: Abc street, Saudi Arabia")}
                                        </Text>
                                        <Text
                                            style={{
                                                textAlign: 'left',
                                                fontSize: 16,
                                                fontWeight: 500,
                                                color: Colors.textGray200,
                                            }}
                                        >
                                            {t("15 Km")}
                                        </Text>

                                    </View>



                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: "center",
                                    marginTop: 10,
                                }}>
                                    <TouchableOpacity style={{
                                        width: '10%',
                                    }}>

                                        <Icon onPress={() => { setUnderReview(true) }} name={'calendar-outline'} type='ionicon' color={'white'} size={20} />
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            width: '90%',
                                        }}
                                    >

                                        <Text
                                            style={{
                                                textAlign: 'left',
                                                fontSize: 16,
                                                fontWeight: 500,
                                                color: Colors.primary,
                                            }}
                                        >
                                            {t("Appointment Date & Time")}
                                        </Text>
                                        <Text
                                            style={{
                                                textAlign: 'left',
                                                fontSize: 16,
                                                fontWeight: 500,
                                                color: Colors.textGray200,
                                            }}
                                        >
                                            {t("1:00 Am, Monday, 26th April")}
                                        </Text>

                                    </View>



                                </View>




                            </View>


                            <Text style={{ textAlign: 'left', fontSize: 24, fontWeight: 700, color: Colors.black, marginTop: 10 }}>
                                {t("Instructions")}
                            </Text>

                            <View style={{
                                marginTop: 10,
                            }}>
                                <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: 700, color: Colors.black, marginTop: 10 }}>
                                    {t("Step 1")}
                                </Text>
                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 20,
                                }}>
                                    <TouchableOpacity style={{
                                        width: '10%',
                                    }}>
                                        <Icon name={'check-circle'} type='font-awesome' color={Colors.primary} size={28} />
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            width: '90%',
                                        }}
                                    >

                                        <Text
                                            style={{
                                                fontSize: 16,
                                                fontWeight: 500,
                                                color: Colors.black, lineHeight: 22
                                            }}
                                        >
                                            {t("Nikah is intended for use by Muslims who are of legal age to marry in their respective countries. By using Nikah, you represent and warrant that you meet this eligibility requirement.")}
                                        </Text>

                                    </View>



                                </View>
                                <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: 700, color: Colors.black, marginTop: 10 }}>
                                    {("Step 2")}
                                </Text>
                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 20,
                                }}>
                                    <TouchableOpacity style={{
                                        width: '10%',
                                    }}>
                                        <Icon name={'check-circle'} type='font-awesome' color={Colors.primary} size={28} />
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            width: '90%',
                                        }}
                                    >

                                        <Text
                                            style={{
                                                textAlign: 'left',
                                                fontSize: 16,
                                                fontWeight: 500,
                                                color: Colors.black,
                                            }}
                                        >
                                            {t("Nikah is intended for use by Muslims who are of legal age to marry in their respective countries. By using Nikah, you represent and warrant that you meet this eligibility requirement.")}
                                        </Text>

                                    </View>



                                </View>
                            </View>







                        </View>
                    </ScrollView>

                    <View style={{
                        position: "absolute",
                        flexDirection: "row",
                        backgroundColor: "white",
                        justifyContent: 'space-between',
                        bottom: 0,
                        width: '100%',
                        alignSelf: "center",
                        padding: 20,

                    }}>

                        <TouchableOpacity
                            // onPress={() => navigation.navigate('Payment')}
                            style={{
                                borderRadius: 7,
                                padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                                alignItems: "center",
                                justifyContent: "center",
                                width: '48%',
                                borderWidth: 1,
                                borderColor: '#00000030'


                                // marginHorizontal: 20,
                            }}
                        >
                            <Text style={{ color: 'red', fontSize: 17, fontWeight: '600' }}>
                                {t("Cancel Process")}
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                backgroundColor: Colors.primary,
                                borderRadius: 7,
                                padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,

                                alignItems: "center",
                                width: '48%',
                                flexDirection: 'row',
                                borderWidth: 1,
                                borderColor: '#00000030',
                                // marginHorizontal: 20,
                            }}
                        >
                            <Text style={{
                                width: '100%',
                                textAlign: 'center',
                                color: Colors.white, fontSize: 17, fontWeight: '600'
                            }}>
                                {t("Change Center")}
                            </Text>


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

export default Court;
