import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    FlatList,
    Image,
    Modal,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useTheme } from '../../../../hooks';
import { ApplicationScreenProps } from '../../../../@types/navigation';
import { useTranslation } from 'react-i18next';
import { Icon, Input } from 'react-native-elements';
import ReactNativeModal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CaseTab } from './caseTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Profile/Profile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../../../theme/Variables';
import i18n from '../../../../translations';

const Logintab = ({ navigation }: ApplicationScreenProps) => {
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
        <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', }}>
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
                    fontSize: 32,
                    textAlign: "left",
                    fontWeight: 600, color: Colors.black
                }}>
                    {t("Login with Nafath")}
                </Text>
                <Text
                    style={{
                        alignSelf: 'flex-start',
                        fontSize: 15,
                        fontWeight: 400,
                        color: Colors.black,
                        paddingVertical: 10,

                        textAlign: 'left'

                    }}
                >
                    {t('Please enter your')}
                    <Text style={{ fontSize: 15, fontWeight: 700, color: Colors.black }}>
                        {t(' National ID Card Number ')}
                    </Text>
                    {t('or')}
                    <Text style={{ fontSize: 15, fontWeight: 700, color: Colors.black }}>
                        {t(' Iqama Number ')}
                    </Text>
                    {t('to log in.')}
                </Text>
                <View
                    style={{
                        paddingVertical: Platform.OS === 'ios' ? 14 : 0,

                        marginTop: 20,
                        borderWidth: 1,
                        flexDirection: 'row',
                        borderRadius: 5,
                        alignItems: 'center',
                        backgroundColor: '#F6F6F9',
                    }}
                >
                    <Icon
                        name="idcard"
                        type="antdesign"
                        size={20}
                        color="black"
                        style={{ marginHorizontal: 10 }}
                    />
                    <TextInput
                        placeholder={t("National ID / Iqama Number")}
                        style={{ alignSelf: 'center', fontSize: 17 }}
                        maxLength={28}
                    />
                </View>
                <View style={{
                    position: 'absolute',
                    bottom: 10,
                    width: '100%',
                    flex: 1,
                }} >
                    <TouchableOpacity
                        onPress={() => navigation.push('SecurityCode')}
                        style={{
                            flexDirection: 'row',
                            backgroundColor: Colors.primary,
                            borderRadius: 7,
                            padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                            borderColor: Colors.primary,
                            borderWidth: 1,
                            justifyContent: 'space-between',
                            // marginHorizontal: 20,
                        }}
                    >
                        <Text style={{ color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                            {t("Login")}
                        </Text>
                        <Icon
                            name={i18n.language !== 'ar' ? "right" : "left"}
                            type="antdesign"
                            size={20}
                            color={Colors.white}
                            style={{ marginLeft: 10, alignSelf: 'flex-end' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.push('AccountCreate')}
                        style={{
                            marginVertical: 14,
                            borderColor: Colors.primary,
                            borderRadius: 7,
                            padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                            borderWidth: 1,
                            // marginHorizontal: 20,
                        }}
                    >
                        <Text style={{ color: Colors.primary, fontSize: 19, fontWeight: '600', textAlign: "center" }}>
                            {t("Get Nafath App")}
                        </Text>

                    </TouchableOpacity>
                </View>



            </SafeAreaView>
        </View>
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

export default Logintab;
