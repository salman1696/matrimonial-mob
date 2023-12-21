import React, { useEffect, useState } from 'react';
import {
    Image,
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


const PartnerInfo = (props: any) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
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
        <View style={{ flex: 1, }}>
            <View style={{ flex: 1, marginHorizontal: 20 }}>

                <Text style={{
                    textAlign: 'left',
                    fontSize: 24, fontWeight: 700, color: Colors.black, marginVertical: 10
                }}>
                    {t("Partner's Info")}
                </Text>



                <View style={{
                    width: '99%',
                    padding: 5, backgroundColor: '#f4f4f4',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.29,
                    shadowRadius: 2.65,
                    alignSelf: "center",
                    elevation: 7,
                    borderRadius: 12, marginVertical: 20
                }}>
                    <View style={{ width: "90%", flexDirection: 'row', }}>

                        <View style={{ padding: 2, alignItems: 'center', backgroundColor: '#fff', borderRadius: 65, margin: 8 }}>
                            <Image
                                testID={'brand-img'}
                                style={{
                                    height: 60,
                                    width: 60,
                                    // alignSelf: 'flex-start',
                                }}
                                source={Images.sparkles.female_av}
                                resizeMode={'contain'}
                            />
                        </View>


                        <View style={{ flex: 0.77, alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 500,
                                    color: Colors.black,
                                }}
                            >
                                {t("Syeda Haleema")}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: 300,
                                    color: Colors.black,

                                }}
                            >
                                {t("Single")}
                            </Text>

                        </View>
                    </View>
                </View>

                <Text style={{
                    textAlign: 'left',
                    fontSize: 16, fontWeight: 700, color: Colors.black, marginTop: 5,
                }}>
                    {t("Add Message / Remarks")}
                </Text>

                <View
                    style={{
                        marginTop: 5,
                        padding: 15,
                        borderWidth: 1,
                        borderRadius: 5,
                        borderColor: '#00000030',
                        backgroundColor: '#F6F6F9',
                        height: 150,
                    }}
                >
                    <TextInput
                        placeholder={t("Enter your message")}
                        style={{ alignSelf: 'flex-start', fontSize: 17 }}
                        maxLength={28}
                    />
                </View>





            </View>
            <View style={{
                position: "absolute",
                width: '100%',
                padding: 20,
                flexDirection: "row",
                justifyContent: 'space-between',
                bottom: 0,
                backgroundColor: '#fff'
            }}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Payment')}
                    style={{
                        borderRadius: 7,
                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                        alignItems: "center",
                        width: '48%',
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: '#00000030'


                        // marginHorizontal: 20,
                    }}
                >
                    <Text style={{ color: 'red', fontSize: 17, fontWeight: '600' }}>
                        {t("Cancel Process")}
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.jumpTo('medical')}
                    style={{
                        backgroundColor: Colors.primary,
                        borderRadius: 7,
                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                        alignItems: "center",
                        width: '48%',
                        borderWidth: 1,
                        borderColor: '#00000030',
                        flexDirection: "row",
                        justifyContent: 'space-between'

                        // marginHorizontal: 20,
                    }}
                >
                    <Text style={{ color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                        {t("Initiate")}
                    </Text>
                    <Icon name={i18n.language === "ar" ? 'chevron-left' : 'chevron-right'} type='entypo' color={Colors.white} />

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

export default PartnerInfo;
