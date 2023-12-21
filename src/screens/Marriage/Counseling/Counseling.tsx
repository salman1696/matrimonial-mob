import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
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
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native';
import DatePicker from 'react-native-date-picker';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import i18n from '../../../translations';
import { getCounsellingCenter } from '../../../services/UserService';
import { Center } from '../../../components';


const Medical = (props: any) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [bookSlot, setBookSlot] = useState(false);
    const [openSlot, setOpenSlot] = useState(false);
    const [isVisited, setVisited] = useState(false);
    const [isReport, setReport] = useState(false);
    const [date, setDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [list, setItems] = useState([
        { id: 1, time: '11:00 AM', selected: true },
        { id: 2, time: '12:00 AM', selected: false },
        { id: 3, time: '05:00 AM', selected: false },
        { id: 4, time: '08:00 AM', selected: false },
        { id: 5, time: '01:00 PM', selected: false },
        { id: 6, time: '07:00 PM', selected: false },
    ]);
    const [centerList, setCenterList] = useState([])

    useEffect(() => {
        setOpenSlot(false)
        onGetCounselling()
    }, [])


    const Tab = createMaterialTopTabNavigator();

    const toggleSlot = (id) => {
        setItems(list.map((elm) =>
            id === elm?.id ? { ...elm, selected: true } : { ...elm, selected: false }
        ))
    };

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.log("A date has been picked: ", date);
        let newDate = new Date(date).toLocaleDateString();
        setDate(newDate)
        hideDatePicker();
    };

    const onBookSlot = () => { 
        
    }

    useEffect(() => {
        if (date !== '')
            setOpenSlot(true)
    }, [date]);

    const onGetCounselling = () => {
        getCounsellingCenter().then((res) => {
            console.log(res.data, "res");
            setCenterList(res.data.data)

        }).catch((err) => {
            console.log(err.response, "err");
        })
    }




    return (
        isVisited ?
            <View style={{ flex: 1, backgroundColor: '#FAFAFA', }}>
                <ScrollView style={{ marginBottom: 100 }}>

                    <View style={{ flex: 1, paddingHorizontal: 20 }}>
                        <Text style={{ textAlign: 'left', fontSize: 24, fontWeight: 700, color: Colors.black, marginTop: 10 }}>
                            {t("Counseling Report")}
                        </Text>




                        <Text style={{ textAlign: 'left', fontSize: 16, fontWeight: 400, color: Colors.textGray200, }}>
                            {t("Please choose center and time slot for counseling examination")}
                        </Text>

                        <View style={{
                            marginTop: 10,
                        }}>

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
                                            textAlign: 'left',
                                            fontWeight: 500,
                                            color: Colors.black,
                                        }}
                                    >
                                        {t("Nikah is intended for use by Muslims who are of legal age to marry in their respective countries. By using Nikah, you represent and warrant that you meet this eligibility requirement.")}
                                    </Text>

                                </View>



                            </View>

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
                        onPress={() => props.jumpTo('admin')}

                        style={{
                            backgroundColor: date !== "" ? Colors.primary : Colors.textGray200,
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
            : bookSlot ?
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

                                        <Icon onPress={() => { setVisited(true) }} name={'calendar-outline'} type='ionicon' color={'white'} size={20} />
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
                                backgroundColor: date !== "" ? Colors.primary : Colors.textGray200,
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
                :
                <View style={{ flex: 1, backgroundColor: '#FAFAFA', }}>
                    {loading &&
                        <View style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            flex: 1,
                            backgroundColor: '#00000020',
                            zIndex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <ActivityIndicator size="large" color={Colors.primary} />
                        </View>
                    }
                    <View style={{ flex: 1, paddingHorizontal: 20 }}>



                        <Text style={{ textAlign: 'left', fontSize: 24, fontWeight: 700, color: Colors.black, marginTop: 10 }}>
                            {t("Available Counseling Centers")}
                        </Text>
                        <Text style={{ textAlign: 'left', fontSize: 16, fontWeight: 400, color: Colors.textGray200, }}>
                            {t("Please choose center and time slot for counseling examination")}
                        </Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }} >
                            <View
                                style={{
                                    flex: 0.9,
                                    borderWidth: 1,
                                    paddingHorizontal: 10,
                                    flexDirection: 'row',
                                    borderRadius: 5,
                                    borderColor: '#00000053',
                                    paddingVertical: 17,
                                    alignItems: 'center',
                                    backgroundColor: '#F6F6F9',
                                }}
                            >
                                <Icon
                                    name="search"
                                    type="entyp"
                                    size={30}
                                    color="black"
                                    style={{ marginRight: 5 }}
                                />
                                <TextInput
                                    placeholder={t("Search")}
                                    style={{ textAlign: i18n.language !== 'ar' ? 'left' : "right", fontSize: 17, flex: 1, }}
                                    maxLength={28}
                                />
                                <View style={{ height: '100%', width: 1, backgroundColor: Colors.textGray200 }} />
                                <TouchableOpacity
                                    style={{
                                        paddingHorizontal: 3,
                                        flexDirection: 'row',
                                        borderRadius: 5,
                                        alignItems: 'center',
                                        backgroundColor: '#F6F6F9',
                                    }}
                                >
                                    <Icon
                                        name="pin"
                                        type="ionicon"
                                        size={20}
                                        color="black"
                                    />
                                    <Text style={{ fontSize: 15, fontWeight: 600, color: Colors.primary, }}>
                                        {t("Medina, SA")}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    flex: 0.15,
                                    marginLeft: 10,
                                    paddingHorizontal: 10,
                                    flexDirection: 'row',
                                    borderRadius: 5,
                                    paddingVertical: 17,
                                    justifyContent: 'center',
                                    backgroundColor: Colors.primary,
                                }}
                            >
                                <Icon
                                    name="map-sharp"
                                    type="ionicon"
                                    size={28}
                                    color="white"
                                    style={{ alignSelf: "center", }}
                                />
                            </View>
                        </View>

                        {centerList.length > 0 ?
                            <FlatList
                                data={centerList}
                                renderItem={({ item }) => (<Center item={item} setDatePickerVisibility={setDatePickerVisibility} isDatePickerVisible={isDatePickerVisible} date={date} />)}
                                keyExtractor={(item) => item.id}
                            /> : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: 600, color: Colors.textGray200, }}>
                                    {t("No data found")}
                                </Text>
                            </View>}


                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />





                    </View>



                    <View style={{
                        position: "absolute",
                        flexDirection: "row",
                        backgroundColor: "white",
                        justifyContent: 'space-between',
                        bottom: 0,
                        width: '100%',
                        alignSelf: "center",
                        padding: 20
                    }}>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Payment')}
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
                            onPress={() => { date !== "" && setBookSlot(true) }}

                            style={{
                                backgroundColor: date !== "" ? Colors.primary : Colors.textGray200,
                                borderRadius: 7,
                                padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                                alignItems: "center",
                                width: '48%',
                                flexDirection: 'row',
                                borderWidth: 1,
                                borderColor: '#00000030',
                                justifyContent: 'space-between'

                            }}
                        >
                            <Text style={{ color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                                {t("Book Slot")}
                            </Text>
                            <Icon name={i18n.language === 'ar' ? 'left' : 'right'} type='antdesign' color={Colors.white} size={15} style={{ width: '90%', }} />


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

export default Medical;
