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
import { setLang, setUser } from "../../store/userReducer";
import { Modal } from "react-native";






const LogoutContainer = ({ onClose, value, bottom = 0, navigation }: any) => {
    const { Layout, Gutters, Images, Fonts, Colors } = useTheme();

    const { t } = useTranslation();

    const [language, setLanguage] = useState([
        { langName: 'English', type: 'en', selected: i18n.language === 'en' ? true : false },
        { langName: 'العربية', type: 'ar', selected: i18n.language === 'ar' ? true : false },
    ]);


    const dispatch = useDispatch();

    const toggleSelection = (i: { langName: string; } | undefined) => {

        language.filter((item) => !item.selected)

        setLanguage(
            language.map((item) => {

                if (item.langName === i?.langName) {
                    return {
                        ...item,
                        selected: !item.selected
                    }
                } else {
                    return {
                        ...item,
                        selected: !item.selected
                    }
                }

            })
        )

    }

    return (
        <Modal animationType="slide" transparent visible={value} >
            <TouchableOpacity onPress={() => onClose(false)} style={{ flex: 1, backgroundColor: '#44444498' }}>

                <View style={[styles.contentContainer, { bottom: 0 }]}>
                    <View style={styles.textContainer}>
                        <Text style={styles.languageText}>{t('Logout')}</Text>
                        < Icon
                            onPress={() => onClose(false)}
                            name='cross'
                            type='entypo'
                            color='#000'
                        />
                    </View>
                    <Text style={{
                        color: '#000',
                        fontSize: 16,
                        textAlign: 'left',
                        marginBottom: 8,
                    }}>
                        {t("Are you sure you want to log out of your Nikah account? Logging out will end your current session, and you will need to sign in again to access your account.")}
                    </Text>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between', width: "100%", marginTop: 10,
                        paddingVertical: 15, backgroundColor: "#fff", paddingHorizontal: 20
                    }}>
                        <TouchableOpacity
                            style={{
                                borderRadius: 7,
                                padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                                alignItems: "center",
                                justifyContent: 'center',
                                width: '48%',
                                borderWidth: 1,
                                borderColor: '#00000030'


                                // marginHorizontal: 20,
                            }}
                        >
                            <Text style={{ color: 'red', fontSize: 19, fontWeight: '600' }}>
                                {t("Skip")}
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                onClose(false)
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'Auth' }],
                                })
                                dispatch(setUser(null))
                            }}
                            style={{
                                backgroundColor: Colors.primary,
                                borderRadius: 7,
                                padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                                alignItems: "center",
                                justifyContent: 'center',
                                width: '48%',
                                flexDirection: 'row',
                                borderWidth: 1,
                                borderColor: '#00000030',
                                // marginHorizontal: 20,
                            }}
                        >
                            <Text style={{ textAlign: 'left', width: '90%', color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                                {t("Yes, Log out")}
                            </Text>
                            <Icon name={i18n.language === 'ar' ? "left" : 'right'} type='antdesign' color={Colors.white} size={15} style={{ width: '90%', }} />


                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>

    )


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
        shadowOpacity: 1,
        shadowRadius: 4.65,
        elevation: 10,
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
        color: 'red',
        fontSize: 24,
        textAlign: 'left',
        marginBottom: 8,
        fontWeight: '700'
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
export default LogoutContainer;