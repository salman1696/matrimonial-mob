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
import { useTheme } from '../../hooks';
import { setDefaultTheme } from '../../store/theme';
import { ApplicationScreenProps } from '../../../@types/navigation';
import { useTranslation } from 'react-i18next';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Icon, Input } from 'react-native-elements';
import { Colors } from '../../theme/Variables';
import i18n from '../../translations';
import { otp } from '../../services/AuthService';
import Toast from 'react-native-simple-toast';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import { ScrollView } from 'react-native-gesture-handler';


const Signup = ({ navigation }: ApplicationScreenProps) => {
  const { Layout, Gutters, Images, Fonts } = useTheme();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState('');
  const [nationalIqamaId, setNationalIqamaId] = useState('');

  const SubmitOTP = () => {
    if (value.length < 6) {
      Toast.show('Please enter valid OTP', Toast.SHORT);
      return;
    }
    const data = {
      "otpCode": value,
      "nationalIqamaId": nationalIqamaId
    }
    setLoading(true);
    otp(data).then((res) => {
      setLoading(false);
      Toast.show('OTP Verified', Toast.SHORT);
      if (res.status === 200) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Main' }],
        })
      }
    }).catch((err) => {
      setLoading(false);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      })
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

  useEffect(() => { }, []);


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

          <View style={{ flex: 1, padding: 20 }}>
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
            <Text style={{
              alignSelf: 'flex-start', fontSize: 32, fontWeight: 600, color: Colors.black
            }}>
              {t("Enter OTP")}
            </Text>

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
              {t("please enter the")}
              <Text style={{ fontSize: 15, fontWeight: 700, color: Colors.black }}>
                {t(' 6-digit verification code ')}
              </Text>
              {t("sent to your registered phone number.")}
            </Text>
            <CodeField
              // ref={ref}
              // {...props}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}

              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}
                >
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />

          </View>
        </SafeAreaView>
        {/* <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} /> */}
      </ScrollView>
      <View
        style={{
          flex: 1,
          width: '80%',
          position: 'absolute',
          bottom: 50,
        }}
      >
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            style={{
              width: '50%',
              flexDirection: 'row',
              backgroundColor: Colors.white,
              borderRadius: 7,
              padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
              borderWidth: 1,
              borderColor: Colors.primary,
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{ color: Colors.black, fontSize: 19, fontWeight: '600' }}
            >
              {t("Resend OTP")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.reset({
              index: 0,
              routes: [{ name: 'Main' }],
            })}
            style={{
              width: '50%',
              flexDirection: 'row',
              backgroundColor: Colors.primary,
              borderRadius: 7,
              padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
              alignItems: "center",
              justifyContent: 'space-between',
              marginHorizontal: 20,

            }}
          >
            <Text
              style={{ color: Colors.white, fontSize: 19, fontWeight: '600' }}
            >
              {t("Send OTP")}
            </Text>
            <Icon
              name={i18n.language === 'ar' ? "left" : "right"}
              type="antdesign"
              size={20}
              color={Colors.white}
              style={{ marginLeft: i18n.language === 'ar' ? 10 : 0, alignSelf: 'flex-end', right: i18n.language === 'ar' ? 5 : 0 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 5, }}>
          <Text style={{ fontSize: 14, fontWeight: 100, color: Colors.black, }}>
            {t("If you encounter any issues, please don’t hesitate to contact our customer service team for assistance. We appreciate your patience and thank you for using our marriage portal mobile app.")}
          </Text>
        </View>
      </View>
    </KeyboardAwareView>
  );
};

export default Signup;
