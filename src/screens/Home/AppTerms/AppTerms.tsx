import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '../../../hooks';
import { setDefaultTheme } from '../../../store/theme';
import { ApplicationScreenProps } from '../../../../@types/navigation';
import { useTranslation } from 'react-i18next';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Icon, Input } from 'react-native-elements';
import { Colors } from '../../../theme/Variables';
import i18n from '../../../translations';
import { otp } from '../../../services/AuthService';
import Toast from 'react-native-simple-toast';
import { Radio } from 'native-base';
import { AppTermSelect } from '../../../components';
import { getAgreement } from '../../../services/UserService';

const AppTerms = ({ navigation }: ApplicationScreenProps) => {
  const { Layout, Gutters, Images, Fonts } = useTheme();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState('');
  const [nationalIqamaId, setNationalIqamaId] = useState('');
  const [data, setData] = useState([]);

  useEffect(
    () => {
      getTerms()
    }, []
  )

  const getTerms = () => {

    setLoading(true);
    getAgreement().then((res) => {
      setLoading(false);
      console.log(res.data);
      setData(res.data.data);
    }).catch((err) => {
      setLoading(false);
      console.log(err);
      // Toast.show('Something went wrong, Please try again later', Toast.SHORT);
    })
  }

  const styles = StyleSheet.create({
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 20 },
    cell: {
      width: 40,
      height: 40,
      lineHeight: 38,
      fontSize: 24,
      borderWidth: 2,
      borderColor: '#00000030',
      textAlign: 'center',
    },
    focusCell: {
      borderColor: '#000',
    },
  });

  const CELL_COUNT = 6;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [Eligibility, setEligibility] = useState(false);
  const [UserInformation, setUserInformation] = useState(false);
  const [UserConduct, setUserConduct] = useState(false);



  {

  }

  return (

    loading ?
      <View style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        flex: 1,
        backgroundColor: '#00000020',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
      } >
        <ActivityIndicator size="large" color={Colors.primary} />
      </View > :

      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', }}>

        {/* <View style={(Layout.center, Layout.fullSize)}> */}
        <View style={{ flex: 1, padding: 20 }}>
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


          <Text
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: Colors.black,
              paddingVertical: 10,

              alignSelf: 'flex-start',
              textAlign: "left"
            }}
          >
            {t("Welcome to ")}
            <Text style={{ fontSize: 15, fontWeight: 700, color: Colors.primary }}>
              {t('Nikkah ')}
            </Text>
            {t("a marriage portal app designed to help you find a suitable partner for marriage based on Islamic Laws and Hadiths. By using")}
            <Text style={{ fontSize: 15, fontWeight: 700, color: Colors.primary }}>
              {t(' Nikkah ')}
            </Text>

            {("you agree to be bound by the following ")}
            <Text style={{ fontSize: 15, fontWeight: 700, color: Colors.primary }}>
              {t(' Terms and Conditions: ')}
            </Text>
          </Text>
          <View
            style={{
              alignSelf: 'flex-start',
              paddingVertical: 10,
            }}
          >



            <AppTermSelect select={Eligibility} onSelect={setEligibility} heading={t(data[0]?.title)} greenText={t("Nikah ")} mainText={t(data[0]?.description)} />
            <AppTermSelect select={UserInformation} onSelect={setUserInformation} heading={t(data[1]?.title)} greenText={t("")} mainText={t(data[1]?.description)} />
            <AppTermSelect select={UserConduct} onSelect={setUserConduct} heading={t(data[2]?.title)} greenText={t("")} mainText={t(data[2]?.description)} />

          </View>




        </View>
        <View style={{
          position: "absolute",
          flexDirection: "row",
          backgroundColor: "white",
          justifyContent: 'space-between',
          bottom: 0,
          alignSelf: "center",
          paddingHorizontal: 10,
          padding: 20,


        }}>

          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{
              borderRadius: 7,
              padding: 20,
              alignItems: "center",
              width: '48%',
              borderWidth: 1,
              borderColor: '#00000030'


              // marginHorizontal: 20,
            }}
          >
            <Text style={{ color: 'red', fontSize: 19, fontWeight: '600' }}>
              {t("Cancel Process")}
            </Text>

          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => (Eligibility && UserInformation && UserConduct) && navigation.navigate('InitPayment')}
            style={{
              backgroundColor: (Eligibility && UserInformation && UserConduct) ? Colors.primary : Colors.textGray200,
              borderRadius: 7,
              padding: 20,
              alignItems: "center",
              width: '48%',
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#00000030',
              // marginHorizontal: 20,
            }}
          >
            <Text style={{ width: '90%', color: Colors.white, fontSize: 19, fontWeight: '600' }}>
              {t("I Agree")}
            </Text>
            <Icon name="right" type="antdesign" size={20} color={Colors.white} style={{ alignSelf: 'flex-end', right: 5 }} />

          </TouchableOpacity>

        </View>
        {/* </View> */}
        {/* <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} /> */}
      </SafeAreaView >
  );
};

export default AppTerms;
