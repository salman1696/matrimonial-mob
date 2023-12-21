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






const PartnerTerms = ({ onClose, bottom = 0, navigation }: any) => {
    const { Layout, Gutters, Images, Fonts, Colors } = useTheme();

    const { t } = useTranslation();



    const dispatch = useDispatch();



    const [isAccepted, setAccepted] = useState(false)
    const [isAddRemark, setAddRemark] = useState(false)
    const [hasRemark, setRemark] = useState('')

    return (
        <View
            style={{
                backgroundColor: "#f6f6f9",
                padding: 10,
                borderRadius: 10,
                marginVertical: 8,
                marginHorizontal: 2,
                paddingBottom: 20,
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

            {isAccepted && <View style={{
                alignSelf: 'flex-end',
            }}>

                <Icon onPress={() => setAccepted(false)} name='back' type='entypo' color={Colors.primary} style={{ marginRight: 10 }} />
            </View>}
            {isAccepted && <View style={{ marginVertical: 10, alignSelf: "center", height: 1, width: '100%', backgroundColor: '#00000010' }} />}




            <View
                style={{
                    width: '100%',
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

            {hasRemark &&

                <View
                    style={{
                        width: '100%',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 700,
                            color: Colors.black,
                            marginVertical: 10,
                            marginTop: 4,

                        }}
                    >
                        {t("Remark")}
                    </Text>

                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 500,
                            color: Colors.black,
                        }}
                    >
                        {t("Nikah is intended for use by Muslims who are of legal age to marry in their respective countries. By using Nikah, you represent and warrant that you meet this eligibility requirement.")}
                    </Text>

                </View>}




            {!isAccepted && <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    onPress={() => {
                        setAccepted(true)
                        setAddRemark(true)
                    }}
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 15,
                        padding: i18n.language === 'ar' ? 4 : 20,


                    }}>




                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: 'red',
                            marginTop: 4,

                        }}
                    >
                        {t("Reject")}
                    </Text>




                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setAccepted(true)
                    }}

                    style={{
                        paddingHorizontal: 15,
                        backgroundColor: Colors.primary,
                        borderColor: Colors.primary,
                        borderRadius: 7,
                        justifyContent: "center",
                        borderWidth: 1,
                        padding: i18n.language === 'ar' ? 4 : 20,

                        alignItems: "center"
                    }}>




                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: Colors.white,

                        }}
                    >
                        {t("Accept")}
                    </Text>




                </TouchableOpacity>

            </View>}

            {isAddRemark && <View>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: Colors.black,
                        marginTop: 4,
                        marginVertical: 10,

                    }}
                >
                    {t("Enter Remarks")}
                </Text>
                <View
                    style={{
                        paddingVertical: Platform.OS === 'ios' ? 14 : 0,


                        marginTop: 10,
                        borderWidth: 1,
                        borderColor: '#00000023',
                        flexDirection: 'row',
                        borderRadius: 5,
                        alignItems: 'center',
                        backgroundColor: '#F6F6F9',
                    }}
                >

                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        value={hasRemark}
                        onChangeText={setRemark}
                        // placeholder="Date of Birth"
                        style={{ alignSelf: 'center', paddingHorizontal: 15, fontSize: 17, height: 80 }}
                        placeholderTextColor={'#00000083'}

                    />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'flex-end' }}>
                    <TouchableOpacity
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
                            setAddRemark(false)
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


        </View >

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
export default PartnerTerms;