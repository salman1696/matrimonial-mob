import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Platform,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useTheme } from '../../../../hooks';
import { ApplicationScreenProps } from '../../../../../@types/navigation';
import { useTranslation } from 'react-i18next';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../../../theme/Variables';
import i18n from '../../../../translations';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { TextInput } from 'react-native';
import { addWork } from '../../../../services/UserService';


const AddWork = ({ props, navigation }: any) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(true);
    const [list, setFavItems] = useState([{}, {},]);
    const [rValue, setValue] = React.useState(false);
    const [endDate, setEndDate] = useState("")
    const [startDate, setStartDate] = useState("")
    const [isStart, setIsStart] = useState(false)

    const Tab = createMaterialTopTabNavigator();

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
        console.log("A date has been picked: ", date);
        let newDate = new Date(date).toLocaleDateString();
        if (isStart === false) {
            setEndDate(newDate)
        } else {
            setStartDate(newDate)
        }

        hideDatePicker();
    };


    const onAddWork = () => {
        const param = {
            "companyName":"company 1",
            "designation":"designation",
            "isCurrentlyWorking":true,
            "startDate":"2022-07-15",
            "endDate":"2022-07-15",
            "isVerified":false
        }
        addWork(param).then((res) => {
            console.log('res', res);
            if (res.status === 200) {
                setFavItems((list) => [...list, res.data]);
            }
            navigation.pop()
        }).catch((err) => {
            console.log('err', err);
        })
    }
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
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView style={{ flex: 1, marginHorizontal: 20, marginBottom: 90, }}>
                <View style={{ flex: 1, }}>


                    <View >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginVertical: 20,
                            }}
                        >
                            <View>
                                <Text style={{ fontSize: 24, fontWeight: '600', color: Colors.black, marginVertical: Platform.OS === 'ios' ? 5 : 2 }}>
                                    {t("Add Work")}
                                </Text>
                                <Text style={{ fontSize: 20, fontWeight: '600', color: Colors.black, marginVertical: Platform.OS === 'ios' ? 5 : 2 }}>
                                    {t("Please provide following details")}
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.pop()} style={{ borderRadius: 9, borderWidth: 1, borderColor: Colors.textGray200, alignItems: 'center', padding: 8, backgroundColor: "#F2F2F2" }} >






                                <Icon onPress={() => navigation.pop()} name='close' size={18} type='antdesign' color={Colors.black} onPress={toggleModal} />

                            </TouchableOpacity>
                        </View>
                        <View>

                        </View>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={{ fontSize: 14, fontWeight: '400', color: Colors.black }}>
                                {t("Company Name")}
                            </Text>
                            <View
                                style={{
                                    borderColor: Colors.textGray200,
                                    paddingVertical: Platform.OS === 'ios' ? 14 : 0,

                                    marginTop: 5,
                                    borderWidth: 1,
                                    flexDirection: 'row',
                                    borderRadius: 5,
                                    alignItems: 'center',
                                    backgroundColor: '#F6F6F9',

                                }}
                            >
                                <Icon
                                    name="building-o"
                                    type="font-awesome"
                                    size={20}
                                    color="black"
                                    style={{ marginHorizontal: 10, alignSelf: 'center', }}
                                />
                                <TextInput
                                    placeholder={t("Enter Company Name")}
                                    returnKeyType='go'
                                    placeholderTextColor={'#00000083'}
                                    style={{ textAlign: 'left', fontSize: 17, width: '75%' }}
                                />

                            </View>
                        </View>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={{ fontSize: 14, fontWeight: '400', color: Colors.black }}>
                                {t("Designation")}
                            </Text>
                            <View
                                style={{
                                    borderColor: Colors.textGray200,
                                    paddingVertical: Platform.OS === 'ios' ? 14 : 0,

                                    marginTop: 5,
                                    borderWidth: 1,
                                    flexDirection: 'row',
                                    borderRadius: 5,
                                    alignItems: 'center',
                                    backgroundColor: '#F6F6F9',

                                }}
                            >
                                <Icon
                                    name="graduation-cap"
                                    type="font-awesome"
                                    size={20}
                                    color="black"
                                    style={{ marginHorizontal: 10, alignSelf: 'center', }}
                                />
                                <TextInput
                                    placeholder={t("Enter designation")}
                                    returnKeyType='go'
                                    placeholderTextColor={'#00000083'}
                                    style={{ textAlign: 'left', fontSize: 17, width: '75%' }}
                                />

                            </View>

                        </View>
                        <View style={{ marginVertical: 5, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                            <Switch
                                trackColor={{ false: '#767577', true: Colors.primary }}
                                thumbColor={Colors.white}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={(v) => { setValue(v) }}
                                value={rValue}

                                style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }}
                            />
                            <Text style={{ fontSize: 14, fontWeight: '400', color: Colors.black }}>
                                {t("Continue Education")}
                            </Text>
                        </View>

                        <View style={{ marginVertical: 5 }}>
                            <Text style={{ fontSize: 14, fontWeight: '400', color: Colors.black }}>
                                {t("Start Date")}
                            </Text>
                            <View
                                style={{
                                    borderColor: Colors.textGray200,
                                    paddingVertical: Platform.OS === 'ios' ? 14 : 0,

                                    marginTop: 5,
                                    borderWidth: 1,
                                    flexDirection: 'row',
                                    borderRadius: 5,
                                    alignItems: 'center',
                                    backgroundColor: '#F6F6F9',

                                }}
                            >
                                <Icon
                                    name="calendar"
                                    type="font-awesome"
                                    size={20}
                                    onPress={() => {
                                        setDatePickerVisibility(true)
                                        setIsStart(true)
                                    }}
                                    color="black"
                                    style={{ marginHorizontal: 10, alignSelf: 'center', }}
                                />
                                <TextInput
                                    placeholder={t("Enter Start Date")}
                                    returnKeyType='go'
                                    value={startDate}
                                    onChangeText={(v) => setStartDate(v)}
                                    placeholderTextColor={'#00000083'}
                                    style={{ textAlign: 'left', fontSize: 17, width: '75%' }}
                                />

                            </View>

                        </View>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={{ fontSize: 14, fontWeight: '400', color: Colors.black }}>
                                {t("End Date")}
                            </Text>
                            <View
                                style={{
                                    borderColor: Colors.textGray200,
                                    paddingVertical: Platform.OS === 'ios' ? 14 : 0,
                                    marginTop: 5,
                                    borderWidth: 1,
                                    flexDirection: 'row',
                                    borderRadius: 5,
                                    alignItems: 'center',
                                    backgroundColor: '#F6F6F9',

                                }}
                            >
                                <Icon
                                    name="calendar"
                                    type="font-awesome"
                                    size={20}
                                    color="black"
                                    onPress={() => {
                                        setDatePickerVisibility(true)
                                        setIsStart(false)
                                    }}
                                    style={{ marginHorizontal: 10, alignSelf: 'center', }}
                                />
                                <TextInput
                                    placeholder={t("Enter End Date")}
                                    returnKeyType='go'
                                    value={endDate}
                                    onChangeText={(v) => setEndDate(v)}
                                    placeholderTextColor={'#00000083'}
                                    style={{ textAlign: 'left', fontSize: 17, width: '75%' }}
                                />

                            </View>

                        </View>


                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />




                </View>





            </ScrollView>
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
                    onPress={() => navigation.pop()}

                    style={{
                        borderRadius: 7,
                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                        alignItems: "center",
                        width: '48%',
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: '#00000030'


                        // marginHorizontal: 20,
                    }}
                >
                    <Text style={{ color: 'red', fontSize: 17, fontWeight: '600' }}>
                        {t("Cancel")}
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onAddWork()}

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
                        {t("Save")}
                    </Text>
                    <Icon name={i18n.language === "ar" ? 'chevron-left' : 'chevron-right'} type='entypo' color={Colors.white} />

                </TouchableOpacity>
            </View>

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

export default AddWork;
