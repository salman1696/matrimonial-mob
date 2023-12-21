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
import { Modal } from "react-native";






const LanguageContainer = ({ onClose, value, bottom = 0, navigation }: any) => {
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
                        <Text style={styles.languageText}>{t('Select Language')}</Text>
                        < Icon
                            onPress={() => onClose(false)}
                            name='cross'
                            type='entypo'
                            color='#000'
                        />
                    </View>
                    {language.map((i) => {
                        return (
                            <TouchableOpacity
                                onPress={() => toggleSelection(i)}
                                style={{
                                    backgroundColor: '#F5F5F8',
                                    alignItems: 'center',
                                    marginTop: 5,
                                    width: '87%',
                                }} key={i.langName}>
                                <View style={{
                                    borderRadius: 5,
                                    width: '100%',
                                    borderColor: i.selected ? Colors.primary : Colors.textGray200,
                                    borderWidth: 1,
                                    flexDirection: 'row',
                                    padding: 15,
                                    backgroundColor: i.selected ? '#1976D208' : "#FFFFFF",
                                    alignItems: 'center',
                                }}>
                                    <RadioButton selected={i.selected} id={i.langName} color={i.selected ? Colors.primary : Colors.textGray200} />
                                    <Text style={{
                                        color: i.selected ? Colors.primary : '#1D1F21',
                                        fontSize: 16,
                                        fontWeight: '500'
                                    }}>{i.langName}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}

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
                                const fLang = language.filter((item) => !item.selected)
                                fLang[0].type === i18n.language && i18n
                                    .changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
                                    .then(() => {
                                        I18nManager.forceRTL(i18n.language === 'ar');
                                        RNRestart.Restart();
                                        // NativeModules.DevSettings.reload();
                                    });
                                dispatch(setLang(i18n.language === 'ar' ? 'ar' : 'en'))


                                onClose(false)
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
                                {t("Save")}
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
        color: '#000',
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
export default LanguageContainer;