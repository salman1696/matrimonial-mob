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
import { Image } from "react-native";






const AppTermSelect = ({ greenText, onSelect, mainText, heading, select, bottom = 0, navigation }: any) => {
    const { Layout, Gutters, Images, Fonts, Colors } = useTheme();

    const { t } = useTranslation();



    const dispatch = useDispatch();



    const [isAccepted, setAccepted] = useState(false)
    const [isAddRemark, setAddRemark] = useState(false)
    const [hasRemark, setRemark] = useState('')

    return (
        <View
            style={{
                borderRadius: 10,
                marginVertical: 8,
                marginHorizontal: 2,

            }}
        >
            <Text style={{ fontSize: 21, fontWeight: 700, color: Colors.black }}>
                {heading}
            </Text>

            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
            }} >
                <TouchableOpacity onPress={() => onSelect(!select)} style={{ alignSelf: 'flex-start' }}>
                    <View style={{
                        borderRadius: 65, backgroundColor: "white", height: 25,
                        width: 25, borderColor: 'black', padding: 10,
                        borderWidth: 1, alignItems: 'center', justifyContent: 'center',
                        marginEnd: 10,
                    }}>
                        {select && <Image
                            testID={'brand-img'}
                            style={{
                                height: 25,
                                width: 25,
                            }}
                            source={Images.sparkles.tick}
                            resizeMode={'cover'}
                        />}
                    </View>
                </TouchableOpacity>
                <Text
                    style={{
                        width: '90%',
                        fontSize: 15,
                        fontWeight: 400,
                        color: Colors.black,

                        textAlign: "left"
                    }}
                >

                    <Text style={{ fontSize: 15, fontWeight: 700, color: Colors.primary }}>
                        {greenText}
                    </Text>
                    {mainText}

                </Text>
            </View>
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
export default AppTermSelect;