import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
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

const Kids = ({ navigation }: ApplicationScreenProps) => {
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
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f4f4', paddingHorizontal: 20, padding: 10 }}>

            <View
                style={{
                    width: '100%',
                    alignItems: 'flex-start'
                }}
            >
                < TouchableOpacity
                    onPress={() => navigation.pop()}
                    style={{
                        padding: 10,
                        marginVertical: 5, borderRadius: 13, borderWidth: 1, borderColor: Colors.textGray200
                    }} >
                    <Icon name={i18n.language !== "ar" ? 'chevron-left' : 'chevron-right'} type='entypo' />
                </TouchableOpacity>
                <Text
                    style={{ fontSize: 28, marginVertical: 5, fontWeight: 700, color: Colors.black }}
                >
                    {t("Kids")}
                </Text>

            </View>



            <FlatList
                data={list}
                pagingEnabled={true}
                contentContainerStyle={{
                    margin: 2,

                }}
                keyExtractor={(key: any) => key.index}
                renderItem={({ item, index }: any) => {
                    // console.log(item, "loopitem");

                    return (
                        <TouchableOpacity onPress={() => navigation.push('KidDetail')} style={{
                            padding: 5, backgroundColor: Colors.white,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.29,
                            shadowRadius: 4.65,

                            elevation: 7,
                            width: '100%',
                            borderRadius: 12, marginVertical: 7
                        }}>
                            <View style={{ flexDirection: 'row', padding: 18 }}>

                                <Image
                                    testID={'brand-img'}
                                    style={{
                                        flex: 0.20,
                                        height: 70,
                                        padding: 4,
                                        width: 70,
                                        // alignSelf: 'flex-start',
                                    }}
                                    source={Images.sparkles.female_av}
                                    resizeMode={'cover'}
                                />


                                <View style={{ flex: 0.77, marginLeft: 20, alignItems: 'flex-start', justifyContent: 'center' }}>
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            fontWeight: 500,
                                            color: Colors.black,

                                        }}
                                    >
                                        {t("Urooj Binte Habib")}
                                    </Text>
                                    <View style={{ flexDirection: 'row', alignItems: "center", borderRadius: 15, padding: 5, backgroundColor: '#f4f4f4' }}>
                                        <Icon name={'calendar'} color={'#888B8E'} type='antdesign' size={20} />
                                        <Text
                                            style={{
                                                marginLeft: 5,
                                                fontSize: 16,
                                                fontWeight: 400,
                                                color: '#888B8E',

                                            }}
                                        >
                                            {t("12 Years")}
                                        </Text>
                                    </View>

                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />


        </SafeAreaView >
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

export default Kids;
