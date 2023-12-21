import React, { useEffect, useState } from 'react';
import {
    Alert,
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
import { AutocompeleteContainer } from '../../../components';
import { Dropdown } from 'react-native-element-dropdown';
import i18n from '../../../translations';


const Nominees = (props: any) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [addNew, setAddNew] = useState(false);

    const [isAutoComplete, setAutoComplete] = useState(false);
    const [date, setDate] = useState('');
    const [list, setItems] = useState([
        { id: 1, time: '11:00 AM', selected: true },
        { id: 2, time: '12:00 AM', selected: false },
    ]);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Anyone else', value: '2' },

    ];


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







    return (

        <View style={{ flex: 1, backgroundColor: '#FAFAFA', }}>

            <View style={{ flex: 1, padding: 20, }}>



                <Text style={{
                    fontSize: 24, fontWeight: 700, color: Colors.black, marginTop: 10,
                    textAlign: 'left',
                }}>
                    {t("Please Add Nominees")}
                </Text>
                <Text style={{
                    fontSize: 16, fontWeight: 400, color: Colors.textGray200,
                    textAlign: 'left',
                }}>
                    {t("Please choose center and time slot for medical examination")}
                </Text>

                <ScrollView>
                    <View style={{ paddingBottom: 30 }}>
                        <View>
                            <FlatList
                                data={[{}, {}]}
                                contentContainerStyle={{
                                    marginTop: 10,
                                }}
                                keyExtractor={(key: any) => key.index}
                                renderItem={({ item, index }: any) => {
                                    // console.log(item, "loopitem");

                                    return (
                                        <View
                                            style={{
                                                width: '99%',
                                                marginHorizontal: 2,
                                                flexDirection: 'row',
                                                backgroundColor: Colors.white,
                                                padding: 10,
                                                justifyContent: 'space-between',
                                                borderRadius: 10,
                                                marginVertical: 5,
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

                                            <View>
                                                <Text
                                                    style={{
                                                        fontSize: 18,
                                                        fontWeight: 700,
                                                        color: Colors.black,
                                                        marginTop: 4,
                                                        textAlign: 'left',

                                                    }}
                                                >
                                                    {t("Osama Bin Habib")}
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                        fontWeight: 500,
                                                        color: Colors.black,
                                                        marginTop: 4,
                                                        textAlign: 'left',

                                                    }}
                                                >
                                                    {t("Relation : ")}<Text style={{
                                                        fontSize: 14,
                                                        fontWeight: 500,
                                                        color: Colors.primary,
                                                        marginTop: 4,
                                                        textAlign: 'left',

                                                    }} >
                                                        {t("Son")}
                                                    </Text>
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                        fontWeight: 500,
                                                        color: Colors.black,
                                                        marginTop: 4,
                                                        textAlign: 'left',

                                                    }}
                                                >
                                                    {t("Share : ")}<Text style={{
                                                        fontSize: 14,
                                                        fontWeight: 500,
                                                        color: Colors.primary,
                                                        marginTop: 4,
                                                        textAlign: 'left',

                                                    }} >
                                                        {t("30%")}
                                                    </Text>
                                                </Text>
                                            </View>


                                            <View style={{
                                                marginTop: 20,
                                            }}>

                                                <View style={{
                                                    flexDirection: "row",

                                                }}>

                                                    <Icon name='edit' type='feather' color={Colors.primary} style={{ marginRight: 10 }} />
                                                    <Icon name='closecircle' type='antdesign' color={'red'} />
                                                </View>



                                            </View>

                                        </View>
                                    );
                                }}
                            />
                        </View>

                        {!addNew &&
                            <TouchableOpacity
                                onPress={() => setAddNew(true)}
                                style={{
                                    padding: i18n.language === 'ar' ? 5 : 20,
                                    backgroundColor: Colors.white,
                                    borderColor: Colors.primary,
                                    borderStyle: 'dashed',
                                    borderRadius: 12,
                                    borderWidth: 1,
                                }}>
                                <Text
                                    style={{
                                        fontSize: 22,
                                        fontWeight: 600,
                                        color: Colors.black,
                                        marginTop: 4, textAlign: 'center'
                                    }}
                                >
                                    {t("Add New")}
                                </Text>




                            </TouchableOpacity>}
                        {addNew &&
                            <View style={{ padding: 20 }}>
                                <View style={{ marginVertical: 12 }}>
                                    <Text style={{ alignSelf: 'flex-start', fontSize: 16, fontWeight: 500, color: Colors.black }}>
                                        {t("Choose Nominees")}
                                    </Text>
                                    <Dropdown
                                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={data}
                                        search
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder={!isFocus ? 'Select item' : '...'}
                                        searchPlaceholder="Search..."
                                        value={value}
                                        onFocus={() => setIsFocus(true)}
                                        onBlur={() => setIsFocus(false)}
                                        onChange={item => {
                                            setValue(item.value);
                                            setIsFocus(false);
                                        }}

                                    />
                                </View>
                                {value === "2" &&
                                    <View style={{ marginVertical: 12 }}>
                                        <Text style={{ alignSelf: 'flex-start', fontSize: 16, fontWeight: 500, color: Colors.black }}>
                                            {t("National ID")}
                                        </Text>
                                        <View
                                            style={{
                                                paddingVertical: Platform.OS === 'ios' ? 14 : 0,

                                                marginTop: 10,
                                                borderWidth: 1,
                                                flexDirection: 'row',
                                                borderRadius: 5,
                                                alignItems: 'center',
                                                backgroundColor: '#F6F6F9',
                                            }}
                                        >

                                            <TextInput
                                                placeholder={t("National ID")}
                                                style={{ alignSelf: 'flex-start', fontSize: 17, paddingHorizontal: 15 }}
                                                maxLength={28}
                                                placeholderTextColor={'#00000083'}

                                            />
                                        </View>

                                    </View>}
                                <View style={{ marginVertical: 12 }}>
                                    <Text style={{ alignSelf: 'flex-start', fontSize: 16, fontWeight: 500, color: Colors.black }}>
                                        {t("Relation")}
                                    </Text>
                                    <View
                                        style={{
                                            paddingVertical: Platform.OS === 'ios' ? 14 : 0,

                                            marginTop: 10,
                                            borderWidth: 1,
                                            flexDirection: 'row',
                                            borderRadius: 5,
                                            alignItems: 'center',
                                            backgroundColor: '#F6F6F9',
                                        }}
                                    >

                                        <TextInput
                                            placeholder={t("Date of Birth")}
                                            style={{ alignSelf: 'flex-start', fontSize: 17, paddingHorizontal: 15 }}
                                            maxLength={28}
                                            placeholderTextColor={'#00000083'}

                                        />
                                    </View>

                                </View>

                                <View style={{ marginVertical: 12 }}>
                                    <Text style={{ alignSelf: 'flex-start', fontSize: 16, fontWeight: 500, color: Colors.black }}>
                                        {t("Shares")}
                                    </Text>
                                    <View
                                        style={{
                                            paddingVertical: Platform.OS === 'ios' ? 14 : 0,


                                            marginTop: 10,
                                            borderWidth: 1,
                                            flexDirection: 'row',
                                            borderRadius: 5,
                                            alignItems: 'center',
                                            backgroundColor: '#F6F6F9',
                                        }}
                                    >

                                        <TextInput
                                            placeholder={t("Date of Birth")}
                                            style={{ alignSelf: 'flex-start', paddingHorizontal: 15, fontSize: 17 }}
                                            maxLength={28}
                                            placeholderTextColor={'#00000083'}

                                        />
                                    </View>

                                </View>

                                <View style={{ flexDirection: 'row', marginBottom: 60, justifyContent: 'flex-end' }}>
                                    <TouchableOpacity
                                        onPress={() => setAddNew(false)}
                                        style={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                            marginRight: 15
                                        }}>




                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: Colors.primary,
                                                marginTop: 4,

                                            }}
                                        >
                                            {t("Cancel")}
                                        </Text>




                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setAddNew(false)
                                            // setFavItems((i) => [...i, { title: newTerm }])
                                        }}

                                        style={{
                                            paddingHorizontal: 15,
                                            backgroundColor: Colors.primary,
                                            borderColor: Colors.primary,
                                            borderRadius: 7,
                                            justifyContent: "center",
                                            borderWidth: 1,
                                            padding: 10,
                                            alignItems: "center"
                                        }}>




                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: Colors.white,
                                            }}
                                        >
                                            {t("Save")}
                                        </Text>




                                    </TouchableOpacity>

                                </View>

                            </View>}

                    </View>
                </ScrollView>

            </View>

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
                    onPress={() => props.jumpTo('will')}

                    style={{
                        backgroundColor: Colors.primary,
                        borderRadius: 7,
                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,

                        alignItems: "center",
                        width: '48%',
                        flexDirection: 'row',
                        borderWidth: 1,
                        borderColor: '#00000030',
                        justifyContent: "space-between"
                        // marginHorizontal: 20,
                    }}
                >
                    <Text style={{ color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                        {t("Next")}
                    </Text>
                    <Icon name={i18n.language === "ar" ? 'chevron-left' : 'chevron-right'} type='entypo' color={Colors.white} size={15} style={{ width: '90%', }} />


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
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    dropdown: {
        height: 50,
        borderColor: Colors.textGray200,
        borderWidth: 1,
        marginTop: 7,
        paddingHorizontal: 8,
        paddingVertical: 1,
        borderRadius: 5,
    }, placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

export default Nominees;
