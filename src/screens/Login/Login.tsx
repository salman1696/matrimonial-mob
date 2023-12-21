import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, Modal, Platform, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../hooks';
import { setDefaultTheme } from '../../store/theme';
import { ApplicationScreenProps } from '../../../@types/navigation';
import { useTranslation } from 'react-i18next';
import { Icon, Input } from 'react-native-elements';
import ReactNativeModal from 'react-native-modal';
import { Colors } from '../../theme/Variables';
import { CaseTab } from '../Home/Cases/caseTab';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Logintab from './LoginTabs/Logintab/Logintab';
import AccountCreate from './LoginTabs/AccountCreate/AccountCreate';
import { AuthTab } from './authTab';
import { LanguageContainer } from '../../components';
import i18n from '../../translations';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import { ScrollView } from 'react-native-gesture-handler';
import { signIn } from '../../services/AuthService';
import Toast from 'react-native-simple-toast';
import { setUser } from '../../store/userReducer';
import { useDispatch } from 'react-redux';




const Login = ({ navigation }: ApplicationScreenProps) => {
  const { Layout, Gutters, Images, Fonts } = useTheme();
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [langCheck, setLangCheck] = useState(true);
  const dispatch = useDispatch();

  const Tab = createMaterialTopTabNavigator();
  const [loading, setLoading] = useState(false);
  const [nationalId, setNationalId] = useState('');
  const [password, setPassword] = useState('');

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const onSubmit = () => {
    if (nationalId === '') {
      Toast.show("Please enter national id", Toast.SHORT)
      return;
    }
    if (password === '') {
      Toast.show("Please enter password", Toast.SHORT)
      return;
    } if (password.length < 6) {
      Toast.show("Password must be 6 characters long", Toast.SHORT)
      return;
    }
    if (nationalId.length < 10) {
      Toast.show("Please enter valid national id", Toast.SHORT)
      return;
    }
    const data = {
      'nationalIqamaId': nationalId,
      "password": password
    };
    setLoading(true)
    signIn(JSON.stringify(data))
      .then((res) => {
        // Toast.show("Login successfull", Toast.SHORT)
        // dispatch(setUser(res.data));
        console.log(res.data);
        setLoading(false);
        navigation.navigate('Signup');
        dispatch(setUser(res.data))
        // navigation.navigate('cart', { login: true })
        // navigation.goBack()
      })
      .catch((err) => {
        Toast.show(err.response.data.message, Toast.SHORT)
        console.log(err.response.data.message);
        setLoading(false)
      });
  };



  useEffect(() => {
    toggleModal();
  }, []);

  return (
    <KeyboardAwareView animated style={{
      flex: 1,
      backgroundColor: '#fff',

    }} behavior={'padding'}>
      {loading &&
        <View style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          flex: 1,
          backgroundColor: '#00000020',
          zIndex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      }
      <ScrollView style={{
        flex: 1,
        backgroundColor: '#fff',
      }} keyboardShouldPersistTaps="handled">

        <SafeAreaView style={{
          flex: 1,
        }}>
          {langCheck &&
            <LanguageContainer onClose={setLangCheck} value={langCheck} />
          }

          <View style={{
            flex: 1,
            padding: 20,
          }}>
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
            <Text style={{
              alignSelf: 'flex-start',
              fontSize: 40, fontWeight: 600, color: Colors.black
            }}>
              {t('Login')}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: Colors.black,
                paddingVertical: 5,

                alignSelf: 'flex-start',
                textAlign: 'left'
              }}
            >
              {t("Welcome to")}
              <Text style={{ fontSize: 15, fontWeight: 700, color: Colors.primary }}>
                {t(' Nikah Portal ')}
              </Text>
              {t("App!")}
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

            <TouchableOpacity
              onPress={() => navigation.navigate('LoginTab')}
              style={{
                width: '100%',
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: Colors.primary,
                borderRadius: 7,
                padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 5 : 0,
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
                {t("OR")}
              </Text>
              < View style={{ height: 1, width: '45%', backgroundColor: '#00000020', marginLeft: 10 }} ></View>
            </View>



            <View
              style={{
                marginTop: 20,
                borderWidth: 1,
                flexDirection: 'row',
                borderRadius: 4,
                paddingVertical: Platform.OS === 'ios' ? 14 : 0,
                borderColor: Colors.textGray200,
                alignItems: 'center',
                backgroundColor: '#F6F6F9',
              }}
            >
              <Icon
                onPress={() => navigation.navigate('Signup')}
                name="idcard"
                type="antdesign"
                size={20}
                color="black"
                style={{ marginHorizontal: 10 }}
              />
              <TextInput
                placeholderTextColor={Colors.textGray200}
                placeholder={t("National ID / Iqama Number")}
                style={{ alignSelf: 'center', fontSize: 17 }}
                maxLength={28}
                value={nationalId}
                inputMode='numeric'
                onChangeText={(text) => setNationalId(text)}
              />
            </View>
            <View
              style={{
                marginTop: 20,
                borderWidth: 1,
                flexDirection: 'row',
                borderRadius: 4,
                paddingVertical: Platform.OS === 'ios' ? 14 : 0,
                width: '100%',
                borderColor: Colors.textGray200,
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
                secureTextEntry={true}
                placeholder={t("Password")}
                placeholderTextColor={Colors.textGray200}
                returnKeyType='go'
                value={password}
                style={{ textAlign: i18n.language === "ar" ? 'right' : 'left', fontSize: 17, width: '75%' }}
                maxLength={28}
                onChangeText={(text) => setPassword(text)}
              />
              <Icon
                name="eye"
                type="evilicon"
                size={28}
                color="black"
                style={{ marginHorizontal: 5, alignSelf: "flex-end", }}
              />
            </View>
            <TouchableOpacity onPress={() => navigation.push('RecoverPassword')}>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  marginTop: 15,
                  fontSize: 15,
                  fontWeight: 400,
                  color: Colors.black,
                  paddingVertical: 5,

                }}
              >
                {t("Forgot Password?")}
                <Text style={{ fontSize: 15, fontWeight: 400, color: Colors.primary }}>
                  {t(' Click Here ')}
                </Text>


              </Text>
            </TouchableOpacity>





          </View>


        </SafeAreaView >
      </ScrollView>


      <View style={{
        width: '100%',
        padding: 20,


      }} >
        <TouchableOpacity
          onPress={onSubmit}
          // onPress={() => navigation.navigate('Signup')}
          style={{

            flexDirection: 'row',
            backgroundColor: Colors.primary,
            borderRadius: 7,
            padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
            alignItems: "center",
            justifyContent: 'space-between',
            borderWidth: 1,
            borderColor: Colors.primary
            // marginHorizontal: 20,
          }}
        >
          <Text style={{ color: Colors.white, fontSize: 19, fontWeight: '600' }}>
            {t('Login')}
          </Text>
          <Icon
            name={i18n.language === 'ar' ? "left" : "right"}
            type="antdesign"
            size={20}
            color={Colors.white}
            style={{ marginLeft: 10, justifyContent: "center", alignSelf: 'flex-end' }}
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
            {t("Create Account")}
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


export default Login;
