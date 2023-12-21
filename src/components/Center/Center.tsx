import React, { useState } from "react";
import { Alert, I18nManager, NativeModules, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
// import RNRestart from 'react-native-restart';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next'
import i18n from "../../translations";
import { useTheme } from "../../hooks";
import { RadioButton } from "react-native-radio-buttons-group";
import RNRestart from 'react-native-restart';
import { setLang } from "../../store/userReducer";
import { TextInput } from "react-native";
import { FlatList } from "react-native";






const Center = ({ item, setDatePickerVisibility,  date, isDatePickerVisible, bottom = 0, navigation }: any) => {
    const { Layout, Gutters, Images, Fonts, Colors } = useTheme();

    const { t } = useTranslation();

    const [openSlot, setOpenSlot] = useState(false);


    const dispatch = useDispatch();

    const [open, setOpen] = useState(false)

    const [isAccepted, setAccepted] = useState(false)
    const [isAddRemark, setAddRemark] = useState(false)
    const [hasRemark, setRemark] = useState('')

    return (
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
                        style={{ textAlign: 'left', fontSize: 20, fontWeight: 600, color: Colors.black }}
                    >
                        {item?.name ?? t("GHQ Counseling Center SA")}
                    </Text>
                    <Text
                        style={{
                            textAlign: 'left',
                            fontSize: 14,
                            fontWeight: 500,
                            color: Colors.textGray200,
                        }}
                    >
                        {t("Location: " + item?.address)}
                    </Text>
                    <Text
                        style={{
                            textAlign: 'left',
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
                    style={{ textAlign: 'left', fontSize: 16, fontWeight: 500, color: Colors.black, marginVertical: 10 }}
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
                        style={{ textAlign: 'left', alignSelf: 'center', fontSize: 17, flex: 1, color: Colors.primary, fontWeight: '500' }}
                    >
                        {date === "" ? t("Please select date") : date}

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

    );


}
const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
    },
    contentContainer: {
        position: 'absolute',
        width: '100%',
        flex: 1,
        // height: 310,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        backgroundColor: '#F5F5F8',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    textContainer: {
        flexDirection: 'row',
        width: '87%',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        color: '#fff',
        fontSize: 55,
        textAlign: 'left',
        lineHeight: 55,
        marginHorizontal: 50,
        fontWeight: '500'
    },
    languageText: {
        color: '#000',
        fontSize: 24,
        textAlign: 'left',
        marginBottom: 8,
        fontWeight: '7 00'

    },
    languageTextSelection: {
        color: '#fff',
        fontSize: 24,
        marginHorizontal: 20,
        fontWeight: '400'

    },
    languageTextDefault: {

        fontSize: 16,
        marginHorizontal: 20,
        fontWeight: '400'

    },
    text3: {
        color: '#fff',
        fontSize: 55,
        textAlign: 'left',
        lineHeight: 55,
        marginHorizontal: 50,
        fontWeight: '500'

    },
    get_started: {
        color: '#9D2731',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: '400'

    },

});
export default Center;