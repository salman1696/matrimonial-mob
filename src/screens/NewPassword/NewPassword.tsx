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


const NewPassword = ({ navigation }: ApplicationScreenProps) => {
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

            <ScrollView style={{ padding: 20 }}>
                <View
                    style={{
                        alignContent: 'center',
                        backgroundColor: '#fff',
                    }}
                >
                    <Image
                        testID={'brand-img'}
                        style={{
                            flex: 0.15,
                            height: 74,
                            width: 74,
                            alignSelf: 'flex-start',
                        }}
                        source={Images.sparkles.logoo}
                        resizeMode={'contain'}
                    />
                    < TouchableOpacity
                        onPress={() => navigation.pop()}
                        style={{
                            padding: 10, alignSelf: 'flex-start',
                            marginVertical: 5, borderRadius: 13, borderWidth: 1, borderColor: Colors.textGray200
                        }} >
                        <Icon name={i18n.language !== "ar" ? 'chevron-left' : 'chevron-right'} type='entypo' />
                    </TouchableOpacity>
                    <Text style={{
                        textAlign: 'left', fontSize: 40, fontWeight: 600, color: Colors.black
                    }}>
                        {t("New Password")}
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: 400,
                            color: Colors.black,
                            paddingVertical: 10,

                            textAlign: 'left'

                        }}
                    >
                        {t("Welcome Syed Habib, enter your new password")}

                    </Text>

                    <View style={{
                        padding: 5, backgroundColor: Colors.white,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.29,
                        shadowRadius: 4.65,

                        elevation: 7,
                        borderRadius: 12, margin: 4, marginVertical: 20
                    }}>
                        <View style={{ flexDirection: 'row', }}>

                            <Image
                                testID={'brand-img'}
                                style={{
                                    // flex: 0.14,
                                    height: 110,
                                    padding: 14,
                                    width: 110,
                                    // alignSelf: 'flex-start',
                                }}
                                source={Images.sparkles.male_av}
                                resizeMode={'cover'}
                            />


                            <View style={{ flex: 0.77, alignItems: 'center', justifyContent: 'center' }}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: 500,
                                        color: Colors.black,

                                        textAlign: 'left'

                                    }}
                                >
                                    {t("Syed Habib bin Sheikh Makhdoom")}
                                </Text>

                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                            marginTop: 20,
                            borderWidth: 1,
                            flexDirection: 'row',
                            borderRadius: 5,
                            alignItems: 'center',
                            backgroundColor: '#F6F6F9',
                        }}
                    >
                        <Icon
                            name="lock"
                            type="entypo"
                            size={20}
                            color="#26262690"
                            style={{ marginHorizontal: 10 }}
                        />
                        <TextInput
                            placeholder={t("New Password")}
                            style={{ alignSelf: 'center', fontSize: 17 }}
                            maxLength={28}
                        />
                    </View>
                    <View
                        style={{
                            paddingVertical: Platform.OS === 'ios' ? 20 : 0,

                            marginTop: 20,
                            borderWidth: 1,
                            flexDirection: 'row',
                            borderRadius: 5,
                            alignItems: 'center',
                            backgroundColor: '#F6F6F9',
                        }}
                    >
                        <Icon
                            name="lock"
                            type="entypo"
                            size={20}
                            color="#26262690"
                            style={{ marginHorizontal: 10 }}
                        />
                        <TextInput
                            placeholder={t("Retype New Password")}
                            style={{ alignSelf: 'center', fontSize: 17 }}
                            maxLength={28}
                        />
                    </View>
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <Text
                            style={{
                                marginTop: 15,
                                fontSize: 15,
                                fontWeight: 400,
                                color: Colors.black,
                                paddingVertical: 5,

                                textAlign: 'left'

                            }}
                        >
                            {t("Password Remembered?")}
                            <Text style={{ fontSize: 15, fontWeight: 400, color: Colors.primary }}>
                                {t(' Back to Login ')}
                            </Text>


                        </Text>
                    </TouchableOpacity>





                </View >


            </ScrollView>
            <View style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,

                backgroundColor: "#fff",
            }} >
                <TouchableOpacity
                    onPress={() => navigation.navigate('Signup')}
                    style={{
                        flexDirection: 'row',
                        backgroundColor: Colors.primary,
                        borderRadius: 7,
                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                        justifyContent: 'space-between',
                        // marginHorizontal: 20,
                    }}
                >
                    <Text style={{ color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                        {t("Confirm")}
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

export default NewPassword;
