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
import { ScrollView } from 'react-native-gesture-handler';
import Account from '../../../Home/Account/Account';
import i18n from '../../../../translations';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import { signUp } from '../../../../services/AuthService';
import Toast from 'react-native-simple-toast';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { setUser } from '../../../../store/userReducer';
import { useDispatch } from 'react-redux';



const AccountCreate = ({ navigation }: ApplicationScreenProps) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [nationalId, setNationalId] = useState('');
    const [list, setFavItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);
    const [dob, setDob] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState('');
    const [password2, setPassword2] = useState('');

    const dispatch = useDispatch()

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

    const Tab = createMaterialTopTabNavigator();

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    useEffect(() => {
        toggleModal();
    }, []);

    const onSubmit = () => {
        if (nationalId.length < 10) {
            Toast.show("Please enter valid national id", Toast.SHORT)
            return
        }

        if (mobile.length < 10) {
            Toast.show("Please enter valid mobile number", Toast.SHORT)
            return
        }
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!validRegex.test(email)) {
            Toast.show("Please enter valid email", Toast.SHORT)
            return
        }

        if (password.length < 6) {
            Toast.show("Please enter valid password", Toast.SHORT)
            return
        }
        if (password2.length < 6) {
            Toast.show("Please enter valid confirm password", Toast.SHORT)
            return
        }
        if (password !== password2) {
            Toast.show("Password does not match", Toast.SHORT)
            return
        }

        const data = {

            "email": email,
            "password": "1234561",
            "nationalIqamaId": nationalId,
            "nationality": "Pakistan",
            "dateOfBirth": "1990/01/01",
            "mobileNumber": mobile,
        }
        console.log(data)
        signUp(JSON.stringify(data)).then((res) => {
            Toast.show('User created successfully', Toast.SHORT)
            dispatch(setUser(res.data))
            navigation.navigate('EnterOTP')
        }).catch((err) => {
            Toast.show(err.response.data.message, Toast.SHORT)
            console.log(err.response.data.message)
            console.log(err)
        })
    }

    return (
        <KeyboardAwareView animated style={{
            flex: 1,
            backgroundColor: '#fff',
        }} behavior={'padding'}>

            <ScrollView style={{ flex: 1, }}>
                <SafeAreaView style={{ flex: 1, padding: 20, paddingBottom: 50 }}>
                    <Image
                        testID={'brand-img'}
                        style={{
                            height: 74,
                            width: 74,
                            alignSelf: 'flex-start',
                        }}
                        source={Images.sparkles.logoo}
                        resizeMode={'contain'}
                    />
                    <Text style={{ fontSize: 32, textAlign: 'left', fontWeight: 600, color: Colors.black }}>
                        {t("Create Account")}
                    </Text>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('LoginTab')}
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderColor: Colors.primary,
                            borderRadius: 7,
                            marginTop: 20,
                            padding: 20,
                            alignItems: "center",
                            justifyContent: 'center',
                            // marginHorizontal: 20,
                        }}
                    >
                        <Image
                            style={{
                                height: 42,
                                backgroundColor: Colors.white, marginRight: 20,
                                width: 95,
                            }}
                            source={Images.sparkles.nic_logo}
                            resizeMode={'cover'}
                        />

                        <Text style={{
                            color: Colors.black, fontSize: 17,
                            letterSpacing: 0.0001, fontWeight: '600'
                        }}>
                            {t("Login with Nafath")}
                        </Text>

                    </TouchableOpacity>

                    <View style={{ marginVertical: 20, flexDirection: "row", alignItems: "center", }} >
                        <View style={{ height: 1, width: '45%', backgroundColor: '#00000020', marginRight: 10 }} ></View>
                        <Text style={{
                            color: Colors.black, fontSize: 13,
                            letterSpacing: 0.0001, fontWeight: '400'
                        }}>
                            {t('OR')}
                        </Text>
                        < View style={{ height: 1, width: '45%', backgroundColor: '#00000020', marginLeft: 10 }} ></View>
                    </View>
                    <ScrollView>
                        <View
                            style={{
                                flex: 1,
                                alignContent: 'center',
                                paddingBottom: 200
                            }}
                        >
                            <View
                                style={{
                                    marginTop: 10,
                                    borderWidth: 1,
                                    flexDirection: 'row',
                                    borderRadius: 5,
                                    borderColor: Colors.textGray200,
                                    paddingVertical: Platform.OS === 'ios' ? 14 : 0,

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
                                    value={nationalId}
                                    placeholder={t("National ID / Iqama Number")}
                                    style={{ alignSelf: 'center', fontSize: 17 }}
                                    placeholderTextColor={'#00000083'}
                                    onChangeText={(text) => setNationalId(text)}

                                />
                            </View>
                            <View
                                style={{

                                    borderColor: Colors.textGray200,
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
                                    onPress={() => setDatePickerVisibility(true)}
                                    name="calendar"
                                    type="entypo"
                                    size={22}
                                    color="#262626"
                                    style={{ marginHorizontal: 10 }}
                                />
                                <TextInput
                                    editable={false}
                                    value={date}
                                    placeholder={t("Date of Birth")}
                                    style={{ alignSelf: 'center', fontSize: 17 }}
                                    maxLength={28}
                                    onChangeText={(text) => setDob(text)}
                                    placeholderTextColor={'#00000083'}
                                />
                            </View>
                            <View
                                style={{
                                    borderColor: Colors.textGray200,
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
                                    name="mobile"
                                    type="entypo"
                                    size={20}
                                    color="black"
                                    style={{ marginHorizontal: 10 }}
                                />
                                <TextInput
                                    value={mobile}
                                    placeholder={t("Mobile Number")}
                                    style={{ alignSelf: 'center', fontSize: 17 }}
                                    maxLength={28}
                                    onChangeText={(text) => setMobile(text)}
                                    placeholderTextColor={'#00000083'}

                                />
                            </View>
                            <View
                                style={{
                                    borderColor: Colors.textGray200,
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
                                    name="email-outline"
                                    type="material-community"
                                    size={20}
                                    color={Colors.textGray400}
                                    style={{ marginHorizontal: 10 }}
                                />
                                <TextInput
                                    value={email}
                                    placeholder={t("Email")}
                                    style={{ alignSelf: 'center', fontSize: 17 }}
                                    placeholderTextColor={'#00000083'}
                                    onChangeText={(text) => setEmail(text)}

                                />
                            </View>
                            <View
                                style={{
                                    borderColor: Colors.textGray200,
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
                                    name="lock"
                                    type="evilicon"
                                    size={28}
                                    color="black"
                                    style={{ marginHorizontal: 10, alignSelf: 'center', }}
                                />
                                <TextInput
                                    value={password}
                                    onChangeText={(text) => setPassword(text)}
                                    secureTextEntry={true}
                                    placeholder={t("Password")}
                                    returnKeyType='go'
                                    placeholderTextColor={'#00000083'}
                                    style={{ textAlign: 'left', fontSize: 17, width: '75%' }}
                                    maxLength={28}
                                />
                                <Icon
                                    name="eye"
                                    type="evilicon"
                                    size={28}
                                    color="black"
                                    style={{ marginHorizontal: 10, alignSelf: "flex-end" }}
                                />
                            </View>
                            <View
                                style={{
                                    borderColor: Colors.textGray200,
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
                                    name="lock"
                                    type="evilicon"
                                    size={28}
                                    color="black"
                                    style={{ marginHorizontal: 10, alignSelf: 'center', }}
                                />
                                <TextInput
                                    value={password2}
                                    onChangeText={(text) => setPassword2(text)}
                                    secureTextEntry={true}
                                    placeholder={t("Password")}
                                    placeholderTextColor={'#00000083'}
                                    returnKeyType='go'
                                    style={{ textAlign: 'left', fontSize: 17, width: '75%' }}
                                    maxLength={28}
                                />
                                <Icon
                                    name="eye"
                                    type="evilicon"
                                    size={28}
                                    color="black"
                                    style={{ marginHorizontal: 10, alignSelf: "flex-end" }}
                                />
                            </View>


                        </View>
                    </ScrollView>

                </SafeAreaView>
            </ScrollView>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

            <View style={{
                position: 'absolute',
                alignContent: "center",
                alignItems: "center",
                width: '100%',
                bottom: 0,
                padding: 20,
                backgroundColor: '#fff',

            }} >
                <TouchableOpacity
                    onPress={() => onSubmit()}
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        backgroundColor: Colors.primary,
                        borderRadius: 7,
                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                        {t("Create Account")}
                    </Text>
                    <Icon
                        name={i18n.language !== "ar" ? "right" : "left"}
                        type="antdesign"
                        size={20}
                        color={Colors.white}
                        style={{ marginLeft: 10, alignSelf: 'flex-end' }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    style={{
                        width: '100%',

                        marginVertical: 14,
                        borderColor: Colors.primary,
                        borderRadius: 7,
                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                        borderWidth: 1,

                        // marginHorizontal: 20,
                    }}
                >
                    <Text style={{ color: Colors.primary, fontSize: 19, fontWeight: '600', textAlign: "center" }}>
                        {t("Login")}
                    </Text>

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

export default AccountCreate;
