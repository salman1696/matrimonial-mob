import React, { useEffect } from 'react';
import { ActivityIndicator, Image, StatusBar, Text, View } from 'react-native';
import { useTheme } from '../../hooks';
import { setDefaultTheme } from '../../store/theme';
import { ApplicationScreenProps } from '../../../@types/navigation';
import { useTranslation } from 'react-i18next';
import { Colors } from '../../theme/Variables';
import { useSelector } from 'react-redux';

const Startup = ({ navigation }: ApplicationScreenProps) => {
  const { user } = useSelector((state: any) => state.user);
  console.log(user, ' user');


  const { Layout, Gutters, Images, Fonts, darkMode } = useTheme();

  const { t } = useTranslation([]);

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );
    await setDefaultTheme({ theme: 'default', darkMode: null });
    // navigation.push('Login')
    navigation.reset({
      index: 0,
      routes: [{ name: user ? 'Main' : 'Auth' }],
    });
  };



  useEffect(() => {
    init();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingVertical: 20 }}>
      <StatusBar
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        hidden={true}
      />
      {/* <View style={(Layout.center, Layout.fullSize)}> */}
      <Image
        testID={'brand-img'}
        style={{
          flex: 0.15,
          height: 100,
          width: 100,
          alignSelf: 'center',
        }}
        // style={}
        source={Images.sparkles.sp_header}
        resizeMode={'contain'}
      />
      <View
        style={{
          alignItems: 'center',
          flex: 0.7,
          justifyContent: 'center',
          top: 40,
        }}
      >
        <Image
          testID={'brand-img'}
          style={{ alignContent: 'center', height: 220, width: 220 }}
          source={Images.sparkles.logoo}
          resizeMode={'contain'}
        />
        <Text
          style={[
            Fonts.textRegular,
            Gutters.regularHPadding,
            {
              color: Colors.primary,
              textAlign: 'center'
            }
          ]}
        >
          {t('There is nothing like marriage, for two who love one another.')}
        </Text>
        <Text
          style={[
            Fonts.textBold,
            Fonts.textRegular,
            Gutters.regularVPadding,
            Gutters.largeHMargin,
            {
              color: Colors.textGray800,
            }
          ]}
        >
          {t('- Sunan Ibn Majah 1847')}
        </Text>
      </View>
      <Image
        testID={'brand-img'}
        style={{
          flex: 0.15,
          height: 230,
          width: 230,
          alignSelf: 'center',
        }}
        // style={}
        source={Images.sparkles.sp_bottom}
        resizeMode={'contain'}
      />
      {/* </View> */}
      {/* <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} /> */}
    </View>
  );
};

export default Startup;
