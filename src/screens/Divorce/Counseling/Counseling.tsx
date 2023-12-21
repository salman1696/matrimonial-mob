import React, { useEffect, useState } from 'react';
import {
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


const Medical = (props: any) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation(['example', 'welcome']);
    const [modalVisible, setModalVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [bookSlot, setBookSlot] = useState(false);
    const [openSlot, setOpenSlot] = useState(false);
    const [isVisited, setVisited] = useState(false);
    const [isReport, setReport] = useState(false);
    const [date, setDate] = useState('');
    const [list, setItems] = useState([
        { id: 1, time: '11:00 AM', selected: true },
        { id: 2, time: '12:00 AM', selected: false },
        { id: 3, time: '05:00 AM', selected: false },
        { id: 4, time: '08:00 AM', selected: false },
        { id: 5, time: '01:00 PM', selected: false },
        { id: 6, time: '07:00 PM', selected: false },
    ]);

    useEffect(() => {
        setOpenSlot(false)
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


    useEffect(() => {
        if (date !== '')
            setOpenSlot(true)
    }, [date]);




    return (
        isReport ?
            <View style={{ flex: 1, backgroundColor: '#FAFAFA', }}>

                <View style={{ flex: 1, paddingHorizontal: 20, }}>







                    <Text style={{ fontSize: 24, fontWeight: 700, color: Colors.black, marginTop: 10, textAlign: 'left' }}>
                        Here is the medical report for you and your partner.
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: 500, color: Colors.textGray200, marginTop: 20, textAlign: 'left', }}>
                        We recommend you to first concern this report with your doctor and then continue towards counseling.
                    </Text>
                    <Text style={{ marginVertical: 20, fontSize: 24, fontWeight: 700, color: Colors.black, textAlign: 'left' }}>
                        Your Report
                    </Text>

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
                    <Text style={{ marginVertical: 20, fontSize: 24, fontWeight: 700, color: Colors.black, textAlign: 'left' }}>
                        Your Partner’s Report
                    </Text>

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













                </View>

                <View style={{
                    position: "absolute",
                    flexDirection: "row",
                    backgroundColor: "white",
                    justifyContent: 'space-between',
                    bottom: 0,
                    alignSelf: "center",
                    paddingHorizontal: 10,

                }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Payment')}
                        style={{
                            borderRadius: 7,
                            padding: 20,
                            alignItems: "center",
                            width: '48%',
                            borderWidth: 1,
                            borderColor: '#00000030'


                            // marginHorizontal: 20,
                        }}
                    >
                        <Text style={{ color: 'red', fontSize: 19, fontWeight: '600' }}>
                            {t("Cancel Process")}
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.jumpTo('terms')}
                        style={{
                            backgroundColor: date !== "" ? Colors.primary : Colors.textGray200,
                            borderRadius: 7,
                            padding: 20,
                            alignItems: "center",
                            width: '48%',
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderColor: '#00000030',
                            // marginHorizontal: 20,
                        }}
                    >
                        <Text style={{ width: '90%', color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                            {t("Next")}
                        </Text>


                    </TouchableOpacity>

                </View>


            </View >
            : isVisited ?
                <View style={{ flex: 1, backgroundColor: '#FAFAFA', }}>

                    <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center' }}>




                        <TouchableOpacity
                            onPress={() => setReport(true)}
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


                        <Text style={{ fontSize: 28, fontWeight: 700, color: Colors.black, marginTop: 10, marginHorizontal: 20, textAlign: 'center' }}>
                            Wait for your Counseling Report
                        </Text>
                        <Text style={{ fontSize: 16, fontWeight: 500, color: Colors.textGray200, marginTop: 20, textAlign: 'center', }}>
                            Please wait for the Counseling Center to send your report before proceeding to the Admin session.
                        </Text>













                    </View>

                    <View style={{
                        position: "absolute",
                        flexDirection: "row",
                        backgroundColor: "white",
                        justifyContent: 'space-between',
                        bottom: 0,
                        alignSelf: "center",
                        paddingHorizontal: 10,

                    }}>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Payment')}
                            style={{
                                borderRadius: 7,
                                padding: 20,
                                alignItems: "center",
                                width: '48%',
                                borderWidth: 1,
                                borderColor: '#00000030'


                                // marginHorizontal: 20,
                            }}
                        >
                            <Text style={{ color: 'red', fontSize: 19, fontWeight: '600' }}>
                                {t("Cancel Process")}
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.jumpTo('admin')}
                            style={{
                                backgroundColor: date !== "" ? Colors.primary : Colors.textGray200,
                                borderRadius: 7,
                                padding: 20,
                                alignItems: "center",
                                width: '48%',
                                flexDirection: 'row',
                                borderWidth: 1,
                                borderColor: '#00000030',
                                // marginHorizontal: 20,
                            }}
                        >
                            <Text style={{ width: '90%', color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                                {t("Change Center")}
                            </Text>


                        </TouchableOpacity>


                    </View>


                </View >
                : bookSlot ?
                    <View style={{ flex: 1, backgroundColor: '#f4f4f4', }}>
                        <View style={{ flex: 1, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: 700, color: Colors.black, marginTop: 10 }}>
                                Appointment Details
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
                                    style={{ fontSize: 20, fontWeight: 600, color: Colors.white }}
                                >
                                    {t("GHQ Counseling Center SA")}
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
                                                fontSize: 16,
                                                fontWeight: 500,
                                                color: Colors.primary,
                                            }}
                                        >
                                            {t("Location: Abc street, Saudi Arabia")}
                                        </Text>
                                        <Text
                                            style={{
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
                                                fontSize: 16,
                                                fontWeight: 500,
                                                color: Colors.primary,
                                            }}
                                        >
                                            {t("Appointment Date & Time")}
                                        </Text>
                                        <Text
                                            style={{
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


                            <Text style={{ fontSize: 24, fontWeight: 700, color: Colors.black, marginTop: 10 }}>
                                {("Instructions")}
                            </Text>

                            <View style={{
                                marginTop: 10,
                            }}>
                                <Text style={{ fontSize: 20, fontWeight: 700, color: Colors.black, marginTop: 10 }}>
                                    {("Step 1")}
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
                                                color: Colors.black,
                                            }}
                                        >
                                            {t("Nikah is intended for use by Muslims who are of legal age to marry in their respective countries. By using Nikah, you represent and warrant that you meet this eligibility requirement.")}
                                        </Text>

                                    </View>



                                </View>
                                <Text style={{ fontSize: 20, fontWeight: 700, color: Colors.black, marginTop: 20 }}>
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

                        <View style={{
                            position: "absolute",
                            flexDirection: "row",
                            backgroundColor: "white",
                            justifyContent: 'space-between',
                            bottom: 0,
                            alignSelf: "center",
                            paddingHorizontal: 10,

                        }}>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('Payment')}
                                style={{
                                    borderRadius: 7,
                                    padding: 20,
                                    alignItems: "center",
                                    width: '48%',
                                    borderWidth: 1,
                                    borderColor: '#00000030'


                                    // marginHorizontal: 20,
                                }}
                            >
                                <Text style={{ color: 'red', fontSize: 19, fontWeight: '600' }}>
                                    {t("Cancel Process")}
                                </Text>

                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: date !== "" ? Colors.primary : Colors.textGray200,
                                    borderRadius: 7,
                                    padding: 20,
                                    alignItems: "center",
                                    width: '48%',
                                    flexDirection: 'row',
                                    borderWidth: 1,
                                    borderColor: '#00000030',
                                    // marginHorizontal: 20,
                                }}
                            >
                                <Text style={{ width: '90%', color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                                    {t("Change Center")}
                                </Text>


                            </TouchableOpacity>

                        </View>


                    </View >
                    :
                    <View style={{ flex: 1, backgroundColor: '#f4f4f4', }}>

                        <View style={{ flex: 1, paddingHorizontal: 20 }}>



                            <Text style={{ fontSize: 24, fontWeight: 700, color: Colors.black, marginTop: 10 }}>
                                Available Counseling Centers
                            </Text>
                            <Text style={{ fontSize: 16, fontWeight: 400, color: Colors.textGray200, }}>
                                Please choose center and time slot for counseling examination
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
                                        placeholder="Search"
                                        style={{ alignSelf: 'center', fontSize: 17, flex: 1, }}
                                        maxLength={28}
                                    />
                                    <View style={{ height: '100%', width: 1, backgroundColor: Colors.textGray200 }} />
                                    <View
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
                                            Medina, SA
                                        </Text>
                                    </View>
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

                            <View
                                style={{
                                    width: '99%',
                                    backgroundColor: '#F6F6F9',
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
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: "center",

                                }}>
                                    <View
                                        style={{
                                            width: '90%',
                                        }}
                                    >
                                        <Text
                                            style={{ fontSize: 20, fontWeight: 600, color: Colors.black }}
                                        >
                                            {t("GHQ Counseling Center SA")}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontWeight: 500,
                                                color: Colors.textGray200,
                                            }}
                                        >
                                            {t("Location: Abc street, Saudi Arabia")}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontWeight: 500,
                                                color: Colors.textGray200,
                                            }}
                                        >
                                            {t("Distance: 15 Km")}
                                        </Text>

                                    </View>

                                    <TouchableOpacity onPress={() => setOpen(!open)} style={{
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

                                        <Icon name={!open ? 'down' : 'up'} type='antdesign' color={'black'} size={15} />
                                    </TouchableOpacity>

                                </View>

                                {open && <View style={{ marginVertical: 15 }}>

                                    <View style={{ height: 1, width: '100%', backgroundColor: Colors.textGray200 }} />

                                    <Text
                                        style={{ fontSize: 16, fontWeight: 500, color: Colors.black, marginVertical: 10 }}
                                    >
                                        {t("Select Date")}
                                    </Text>

                                    <View
                                        style={{
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

                                        <Text
                                            style={{ alignSelf: 'center', fontSize: 17, flex: 1, color: Colors.primary, fontWeight: '500' }}
                                        >
                                            {date === "" ? "Please select date" : date}

                                        </Text>
                                        <Icon
                                            onPress={() => setDatePickerVisibility(true)}
                                            name="calendar"
                                            type="entypo"
                                            size={20}
                                            color={Colors.textGray400}
                                            style={{ marginRight: 5 }}
                                        />

                                    </View>

                                </View>}
                                {open && openSlot && <View style={{ marginVertical: 15 }}>


                                    <Text
                                        style={{ fontSize: 16, fontWeight: 500, color: Colors.black, marginVertical: 10 }}
                                    >
                                        {t("Choose Time Slot")}
                                    </Text>

                                    <View
                                        style={{
                                            width: '100%',
                                            borderColor: '#00000053',
                                            justifyContent: 'space-between',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                    >

                                        {
                                            <FlatList
                                                data={list}
                                                pagingEnabled={true}
                                                horizontal

                                                showsHorizontalScrollIndicator={false}
                                                contentContainerStyle={{
                                                    alignItems: 'center',
                                                    marginVertical: 10
                                                }}
                                                keyExtractor={(key: any) => key.index}
                                                renderItem={({ item, index }: any) => {
                                                    // console.log(item, "loopitem");

                                                    return (<TouchableOpacity
                                                        onPress={() => toggleSlot(item.id)} style={{ borderRadius: 15, backgroundColor: item.selected ? Colors.primary : "#fff", padding: 12, paddingHorizontal: 20, marginHorizontal: 1 }}>
                                                        <Text
                                                            style={{
                                                                fontSize: 17,
                                                                color: item.selected ? "#fff" : Colors.black,
                                                            }}
                                                        >
                                                            {item.time}

                                                        </Text>
                                                    </TouchableOpacity>)
                                                }} />


                                        }
                                        {/* {list.map((i) => {
                                return (
                                    <View style={{ borderRadius: 15, backgroundColor: "#fff", padding: 12, paddingHorizontal: 20, }}>
                                        <Text
                                            style={{
                                                fontSize: 17,

                                            }}
                                        >
                                            {i.time}

                                        </Text>
                                    </View>
                                )
                            })} */}



                                    </View>



                                </View>}


                            </View>


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
                            alignSelf: "center",
                            paddingHorizontal: 10,

                        }}>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('Payment')}
                                style={{
                                    borderRadius: 7,
                                    padding: 20,
                                    alignItems: "center",
                                    width: '48%',
                                    borderWidth: 1,
                                    borderColor: '#00000030'
                                }}
                            >
                                <Text style={{ color: 'red', fontSize: 19, fontWeight: '600' }}>
                                    {t("Cancel Process")}
                                </Text>

                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { date !== "" && setBookSlot(true) }}

                                style={{
                                    backgroundColor: date !== "" ? Colors.primary : Colors.textGray200,
                                    borderRadius: 7,
                                    padding: 20,
                                    alignItems: "center",
                                    width: '48%',
                                    flexDirection: 'row',
                                    borderWidth: 1,
                                    borderColor: '#00000030',
                                    // marginHorizontal: 20,
                                }}
                            >
                                <Text style={{ width: '90%', color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                                    {t("Book Slot")}
                                </Text>
                                <Icon name={'right'} type='antdesign' color={Colors.white} size={15} style={{ width: '90%', }} />


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
