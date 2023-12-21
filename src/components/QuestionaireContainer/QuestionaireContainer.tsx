import React, { useMemo, useState } from "react";
import { Alert, I18nManager, NativeModules, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
// import RNRestart from 'react-native-restart';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next'
import i18n from "../../translations";
import { useTheme } from "../../hooks";
import { RadioButton, RadioGroup } from "react-native-radio-buttons-group";
import RNRestart from 'react-native-restart';
import { setLang } from "../../store/userReducer";
import { TextInput } from "react-native";






const QuestionaireContainer = ({ number, title, onClose, bottom = 0, navigation }: any) => {
    const { Layout, Gutters, Images, Fonts, Colors } = useTheme();

    const { t } = useTranslation();



    const dispatch = useDispatch();



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
        <View style={{ flex: 1, marginTop: 20 }}>
            <Text style={{ alignSelf: "flex-start", fontSize: 15, fontWeight: '400', color: Colors.primary }}>
                {t("Question ")}{number}
            </Text>
            <Text style={{ alignSelf: "flex-start", fontSize: 15, fontWeight: '600', color: '#000000', marginVertical: 3, }}>
                {t(title)}
            </Text>
            <RadioGroup
                radioButtons={radioButtons}
                onPress={(e) => setSelectedId(e)}
                selectedId={selectedId}
                containerStyle={{
                    alignItems: 'center',
                }}


            />
            {
                selectedId === '3' &&
                <TextInput style={{
                    borderWidth: 1, borderColor: '#00000023',
                    borderRadius: 4, padding: 10,
                    marginTop: 10,
                    backgroundColor: '#F6F6F9',
                    paddingBottom: 50,
                    textAlign: i18n.language === 'ar' ? 'right' : 'left',

                }}
                    placeholder={t('Please specify')} />

            }
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
export default QuestionaireContainer;