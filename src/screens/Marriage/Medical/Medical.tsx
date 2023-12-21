import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
    FlatList,
    Image,
    Platform,
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
import { AutocompeleteContainer, Center } from '../../../components';
import i18n from '../../../translations';
import { useDispatch } from 'react-redux';
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { addMedicalSection, getMedicalCenter } from '../../../services/UserService';



const Medical = (props: any) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [bookSlot, setBookSlot] = useState(false);
    const [openSlot, setOpenSlot] = useState(false);
    const [isVisited, setVisited] = useState(false);
    const [isReport, setReport] = useState(false);
    const [isAutoComplete, setAutoComplete] = useState(false);
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
        onGetMedicalCenter()
    }, [])

    const [medicalCenter, setMedicalCenter] = useState([])

    const onGetMedicalCenter = () => {
        getMedicalCenter().then((res) => {
            console.log(res.data, "res");
            setMedicalCenter(res.data.data)

        }).catch((err) => {
            console.log(err.response, "err");
        })
    }

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

    const onSelectMedicalCenter = () => {
        setAutoComplete(false)
        const data = {
            caseId: "#uubd5a7",
            medicalCenterId: 1,
            medicalAppointmentSlotId: 1
        }

        addMedicalSection(data).then((res) => {

        }).catch((err) => {

        })
    }


    useEffect(() => {
        if (date !== '')
            setOpenSlot(true)
    }, [date]);




    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const dispatch = useDispatch();

    return (
        isReport ?
            <View style={{ flex: 1, backgroundColor: '#FAFAFA', }}>
                <ScrollView style={{}}>
                    <View style={{ paddingBottom: 110, paddingHorizontal: 20, }}>







                        <Text style={{ fontSize: 22, fontWeight: 700, color: Colors.black, marginTop: 10, textAlign: 'left' }}>
                            {t("Here is the medical report for you and your partner.")}
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 500, color: Colors.textGray200, marginTop: 5, textAlign: 'left', }}>
                            {t("We recommend you to first concern this report with your doctor and then continue towards counseling.")}
                        </Text>
                        <Text style={{ marginVertical: 10, fontSize: 24, fontWeight: 700, color: Colors.black, textAlign: 'left' }}>
                            {t("Your Report")}
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
                                        {t("Download")}
                                    </Text>
                                    <Icon name={'download'} color={'#888B8E'} type='antdesign' size={20} />

                                </View>
                            </View>
                        </View>
                        <Text style={{ marginVertical: 20, fontSize: 24, fontWeight: 700, color: Colors.black, textAlign: 'left' }}>
                            {t("Your Partner’s Report")}
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
                                        {t("Download")}
                                    </Text>
                                    <Icon name={'download'} color={'#888B8E'} type='antdesign' size={20} />

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
                    width: '100%',
                    bottom: 0,
                    alignSelf: "center",
                    padding: 20,
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


                            // marginHorizontal: 20,
                        }}
                    >
                        <Text style={{ color: 'red', fontSize: 17, fontWeight: '600' }}>
                            {t("Cancel Process")}
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.jumpTo('terms')}
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
                        <Text style={{ width: '100%', textAlign: "center", color: Colors.white, fontSize: 19, fontWeight: '600' }}>
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


                        <Text style={{ fontSize: 24, fontWeight: 700, color: Colors.black, marginTop: 10, marginHorizontal: 20, textAlign: 'center' }}>
                            {t("Wait for your medical report")}
                        </Text>
                        <Text style={{ fontSize: 16, fontWeight: 500, color: Colors.textGray200, marginTop: 20, textAlign: 'center', }}>
                            {t("Please wait for the Medical Center to send your report before proceeding to the counseling session.")}
                        </Text>
                    </View>

                    <View style={{
                        position: "absolute",
                        flexDirection: "row",
                        backgroundColor: "white",
                        justifyContent: 'space-between',
                        width: '100%',
                        bottom: 0,
                        alignSelf: "center",
                        padding: 20,

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
                                borderWidth: 1,
                                borderColor: '#00000030',
                                // marginHorizontal: 20,
                            }}
                        >
                            <Text style={{ textAlign: 'center', width: '100%', color: Colors.white, fontSize: 17, fontWeight: '600' }}>
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

                        <View style={{ flex: 1, paddingHorizontal: 20 }}>



                            <Text style={{ textAlign: 'left', fontSize: 24, fontWeight: 700, color: Colors.black, marginTop: 10 }}>
                                {t("Available Medical Centers")}
                            </Text>
                            <Text style={{ textAlign: 'left', fontSize: 16, fontWeight: 400, color: Colors.textGray200, }}>
                                {t("Please choose center and time slot for medical examination")}
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
                                        onPress={() => setAutoComplete(!isAutoComplete)}
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
                            {medicalCenter.length > 0 ?
                                <FlatList
                                    data={medicalCenter}
                                    renderItem={({ item }) => (<Center item={item} setDatePickerVisibility={setDatePickerVisibility} isDatePickerVisible={isDatePickerVisible} date={date} />)}
                                    keyExtractor={(item) => item?.id}
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

                        {isAutoComplete && <AutocompeleteContainer onClose={setAutoComplete} />}


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
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
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
