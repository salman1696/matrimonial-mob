import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
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


const Admin = (props: any) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [isWait, setIsWait] = useState(true);
    const [list, setFavItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);


    const Tab = createMaterialTopTabNavigator();

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const subCat = [
        {
            id: 1,
            title: 'Active',
            iconName: 'clock_outline',
        },
        {
            id: 2,
            title: 'Completed',
            iconName: 'check',
        },
    ];

    useEffect(() => {
        toggleModal();
    }, []);

    return (
        isWait &&
        <View style={{ flex: 1, backgroundColor: '#FAFAFA', }}>


            <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center' }}>




                <TouchableOpacity
                    onPress={() => props.jumpTo('court')}
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


                <Text style={{ fontSize: 24, fontWeight: 700, color: Colors.black, marginTop: 10, marginHorizontal: 20, textAlign: 'center' }}>
                    {t("Please wait for the Nikkah Administration to review")}
                </Text>
                <Text style={{ fontSize: 14, fontWeight: 500, color: Colors.textGray200, marginTop: 20, textAlign: 'center', }}>
                    {t("Please wait for the process to complete and confirmation from Nikkah Administration to review your case.")}
                </Text>













            </View>

            <View style={{
                position: "absolute",
                backgroundColor: "white",
                padding: 20,

                bottom: 0, alignItems: 'center',
                width: '100%'

            }}>

                <TouchableOpacity
                    style={{
                        borderRadius: 7,
                        width: '100%',
                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,

                        alignSelf: 'center',
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: '#00000030'


                        // marginHorizontal: 20,
                    }}
                >
                    <Text style={{ color: 'red', fontSize: 19, fontWeight: '600' }}>
                        {t("Cancel Process")}
                    </Text>

                </TouchableOpacity>


            </View>


        </View >
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

export default Admin;
