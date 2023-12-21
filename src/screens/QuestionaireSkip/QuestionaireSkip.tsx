import React, { useEffect, useState } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useTheme } from '../../hooks';
import { ApplicationScreenProps } from '../../@types/navigation';
import { useTranslation } from 'react-i18next';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../theme/Variables';
import i18n from '../../translations';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import { QuestionaireContainer } from '../../components';


const QuestionaireSkip = ({ navigation }: ApplicationScreenProps) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [list, setFavItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);

    const Tab = createMaterialTopTabNavigator();

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    useEffect(() => {
        toggleModal();
    }, []);

    return (
        <KeyboardAwareView animated style={{
            flex: 1,
            backgroundColor: '#fff',
        }} behavior={'padding'}>

            <ScrollView style={{}}>
                <SafeAreaView
                    style={{
                        padding: 20,
                        alignContent: 'center',
                        backgroundColor: '#fff',
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>

                        <Text style={{
                            textAlign: 'left', fontSize: 40, fontWeight: 600, color: Colors.black
                        }}>
                            {t("Questionaire")}
                        </Text>
                        <Text style={{ color: Colors.primary }}>
                            {t("Skip")}
                        </Text>
                    </View>

                    <QuestionaireContainer number={1} title={t("Do you have any disability?")} />
                    <QuestionaireContainer number={2} title={t("Please specify any disease(s) if you have ?")} />



                </SafeAreaView >


            </ScrollView>
            <View style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                padding: 20,
                backgroundColor: "#fff",
            }} >
                <TouchableOpacity
                    onPress={() => navigation.push('AccountCompete')}
                    style={{
                        flexDirection: 'row',
                        backgroundColor: Colors.primary,
                        borderRadius: 7,
                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        // marginHorizontal: 20,
                    }}
                >
                    <Text style={{ color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                        {t("Save")}
                    </Text>
                    <Icon
                        name={i18n.language !== 'ar' ? "right" : 'left'}
                        type="antdesign"
                        size={20}
                        color={Colors.white}
                        style={{ marginLeft: 10, alignSelf: 'flex-end' }}
                    />
                </TouchableOpacity>
            </View>
        </KeyboardAwareView>

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

export default QuestionaireSkip;
