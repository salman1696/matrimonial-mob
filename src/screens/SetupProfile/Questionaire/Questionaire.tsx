import React, { useEffect, useMemo, useState } from 'react';
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
import { AutocompeleteContainer, QuestionaireContainer } from '../../../components';
import i18n from '../../../translations';
import { RadioGroup } from 'react-native-radio-buttons-group';


const Questionaire = (props: any) => {
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
    const [selectedId, setSelectedId] = useState('2');

    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: t('Yes'),
            value: 'option1',
            color: Colors.primary,
            borderColor: selectedId === '1' ? Colors.primary : '#444',
            borderSize: 1,
            selected: true,
            labelStyle: {
                color: selectedId === '1' ? Colors.primary : '#444',
            },
            containerStyle: {
                borderWidth: 1, padding: 10, width: '100%', borderRadius: 4, borderColor: selectedId === '1' ? Colors.primary : '#ECECEF',

            }
        },
        {
            id: '2',
            label: t('No'),
            value: 'option2',
            borderColor: selectedId === '2' ? Colors.primary : '#444',
            borderSize: 1,
            selected: true,
            labelStyle: {
                color: selectedId === '2' ? Colors.primary : '#444',
            },
            color: Colors.primary,
            containerStyle: {
                borderWidth: 1, padding: 10, width: '100%', borderRadius: 4, borderColor: selectedId === '1' ? Colors.primary : '#ECECEF',

            }
        },
        {
            id: '3',
            label: t('Other'),
            value: 'option3',
            borderColor: selectedId === '3' ? Colors.primary : '#444',
            borderSize: 1,
            selected: true,
            labelStyle: {
                color: selectedId === '3' ? Colors.primary : '#444',
            },
            color: Colors.primary,
            containerStyle: {
                borderWidth: 1, padding: 10, width: '100%', borderRadius: 4, borderColor: selectedId === '1' ? Colors.primary : '#ECECEF',

            }
        }
    ]), [selectedId]);




    return (

        <View style={{ flex: 1, backgroundColor: '#FAFAFA', }}>

            <View style={{ flex: 1, }}>
                <ScrollView style={{ marginBottom: 100 }}>
                    <View style={{ flex: 1, padding: 20, }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', color: '#000000' }}>
                                {t("Questionaire")}
                            </Text>
                            <Icon name='edit' type='feather' size={18} color={Colors.primary} />
                        </View>
                        <QuestionaireContainer number={1} ques={'Do you have any disability?'} />
                        <QuestionaireContainer number={2} ques={'Were you ever involved in a criminal activity or something like that?'} />

                        <QuestionaireContainer number={3} ques={'Do you have any medical condition?'} />
                    </View>
                </ScrollView>

            </View>
            {/* <Questionaire /> */}

            <View style={{
                position: "absolute",
                width: '100%',
                padding: 20,
                flexDirection: "row",
                justifyContent: 'space-between',
                bottom: 0,
                backgroundColor: '#fff'
            }}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Payment')}
                    style={{
                        borderRadius: 7,
                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,

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
                    onPress={() => props.jumpTo('preview')}
                    style={{
                        backgroundColor: Colors.primary,
                        borderRadius: 7,
                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,

                        alignItems: "center",
                        width: '48%',
                        borderWidth: 1,
                        borderColor: '#00000030',
                        flexDirection: "row",
                        justifyContent: 'space-between'

                        // marginHorizontal: 20,
                    }}
                >
                    <Text style={{ color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                        {t("Preview")}
                    </Text>
                    <Icon name={i18n.language === "ar" ? 'chevron-left' : 'chevron-right'} type='entypo' color={Colors.white} />

                </TouchableOpacity>

            </View>


            {isAutoComplete && <AutocompeleteContainer />}

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

export default Questionaire;
