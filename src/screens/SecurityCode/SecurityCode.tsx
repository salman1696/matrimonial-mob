import React, { useEffect, useState } from 'react';
import {
    Image,
    Platform,
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

const SecurityCode = ({ navigation }: ApplicationScreenProps) => {
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
        <SafeAreaView
            style={{
                flex: 1,
                padding: 20,
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

            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    bottom: 50
                }}
            >
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 85,
                        padding: 15,
                        marginVertical: 10,
                        backgroundColor: '#17B55630'
                    }}
                >

                    <Text
                        style={{
                            fontSize: 19,
                            fontWeight: 700,
                            paddingHorizontal: 20,
                            color: Colors.black,
                            paddingVertical: 10,
                            textAlign: 'center',


                        }}
                    >5</Text>
                </View>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: 400,
                        paddingHorizontal: 20,
                        color: Colors.black,
                        paddingVertical: 10,
                        textAlign: 'center',


                    }}
                >
                    {t("Please open Nafath application and choose the number that appears in front of you")}
                </Text>

            </View>
            <View style={{
                position: 'absolute',
                bottom: 10,
                marginHorizontal: 20,
                width: '100%',
                flex: 1,
            }} >

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

export default SecurityCode;
