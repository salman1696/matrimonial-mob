import React, { useEffect, useState } from 'react';
import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useTheme } from '../../../hooks';
import { ApplicationScreenProps } from '../../../../@types/navigation';
import { useTranslation } from 'react-i18next';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../../theme/Variables';
import i18n from '../../../translations';
import { Image } from 'react-native';



const Waiting = (props: any) => {
    const { t } = useTranslation();

    const { Images } = useTheme()

    return (
        < View style={{ flex: 1, borderWidth: 1, borderColor: Colors.primary, borderStyle: "dashed", borderRadius: 12, marginTop: 10, }
        }>

            <View style={{ flex: 1, padding: 20, paddingVertical: 60, justifyContent: 'center' }}>
                <TouchableOpacity
                    onPress={() => props.setPartnerTerms([{}, {}, {}])}
                    style={{ padding: 60, alignSelf: "center", backgroundColor: "#E0FBEA", borderRadius: 100 }}>
                    <Image

                        testID={'brand-img'}
                        style={{
                            height: 74,
                            width: 74,
                            alignSelf: 'flex-start',
                        }}
                        source={Images.sparkles.bg_loading}
                        resizeMode={'contain'}
                    />
                </TouchableOpacity>


                <Text style={{ fontSize: 28, fontWeight: 700, color: Colors.black, marginTop: 10, marginHorizontal: 20, textAlign: 'center' }}>
                    {t("Your Partner’s Terms are yet to Receive")}
                </Text>
                <Text style={{ fontSize: 16, fontWeight: 500, color: Colors.textGray200, marginTop: 20, textAlign: 'center', }}>
                    {t("Please wait for your partner to submit his appointment.")}
                </Text>













            </View>



        </View >
    )
}

export default Waiting;
