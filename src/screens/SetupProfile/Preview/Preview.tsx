import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    Platform,
    ScrollView,
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


const Preview = (props: any) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [underReview, setUnderReview] = useState(false);
    const [isReviewed, setReviewed] = useState(false);
    const [list, setFavItems] = useState([{}, {}]);


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

        <View style={{ flex: 1, backgroundColor: '#FAFAFA', }}>

            <View style={{ flex: 1, }}>
                <ScrollView style={{ marginBottom: 100 }}>
                    <View style={{ flex: 1, padding: 20, }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', color: '#000000' }}>
                                {t("Education")}
                            </Text>
                        </View>
                        <View>
                            <FlatList
                                data={list}
                                pagingEnabled={true}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 1,
                                }}
                                keyExtractor={(key: any) => key.index}
                                renderItem={({ item, index }: any) => {
                                    return (
                                        <View
                                            style={{
                                                width: '99%',
                                                flexDirection: 'row',
                                                backgroundColor: Colors.white,
                                                padding: 20,
                                                borderRadius: 10,
                                                marginVertical: 8,
                                                shadowColor: "#000",
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 1,
                                                },
                                                shadowOpacity: 0.22,
                                                shadowRadius: 2.22,

                                                elevation: 3,
                                            }}
                                        >
                                            <Image
                                                testID={'brand-img'}
                                                style={{
                                                    height: 36,
                                                    width: '20%',
                                                    alignSelf: "center"
                                                }}
                                                source={Images.sparkles.education}
                                                resizeMode={'contain'}
                                            />
                                            <View
                                                style={{
                                                    width: '80%',
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        textAlign: 'left', fontSize: 18, fontWeight: 500, color: Colors.black
                                                    }}
                                                >
                                                    {t("CUST Institute of Technology")}
                                                </Text>

                                                <Text
                                                    style={{
                                                        textAlign: 'left',
                                                        fontSize: 16,
                                                        fontWeight: 500,
                                                        color: Colors.primary,
                                                    }}
                                                >
                                                    {t("BS Computer Science")}
                                                </Text>
                                                <Text
                                                    style={{
                                                        textAlign: 'left',
                                                        fontSize: 16,
                                                        fontWeight: 500,
                                                        color: Colors.textGray200,
                                                    }}
                                                >
                                                    {t("Jan 2018 - Present")}
                                                </Text>

                                            </View>

                                        </View>
                                    );
                                }}
                            />
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', color: '#000000' }}>
                                {t("Work")}
                            </Text>


                        </View>
                        <FlatList
                            data={list}
                            pagingEnabled={true}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 1,
                            }}
                            keyExtractor={(key: any) => key.index}
                            renderItem={({ item, index }: any) => {
                                return (
                                    <View
                                        style={{
                                            width: '99%',
                                            flexDirection: 'row',
                                            backgroundColor: Colors.white,
                                            padding: 20,
                                            borderRadius: 10,
                                            marginVertical: 8,
                                            shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 1,
                                            },
                                            shadowOpacity: 0.22,
                                            shadowRadius: 2.22,

                                            elevation: 3,
                                        }}
                                    >
                                        <Image
                                            testID={'brand-img'}
                                            style={{
                                                height: 30,
                                                width: '20%',
                                                alignSelf: "center"
                                            }}
                                            source={Images.sparkles.work}
                                            resizeMode={'contain'}
                                        />
                                        <View
                                            style={{
                                                width: '80%',
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    textAlign: "left", fontSize: 18, fontWeight: 600, color: Colors.black
                                                }}
                                            >
                                                {t("Al Saudi Oil Company")}
                                            </Text>
                                            <Text
                                                style={{
                                                    textAlign: "left",
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    color: Colors.primary,
                                                }}
                                            >
                                                {t("Progress: Successful")}
                                            </Text>
                                            <Text
                                                style={{
                                                    textAlign: "left",
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    color: Colors.textGray200,
                                                }}
                                            >
                                                {t("Jan 2018 - Present")}
                                            </Text>

                                        </View>

                                    </View>
                                );
                            }}
                        />
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', color: '#000000' }}>
                                {t("Questionaire")}
                            </Text>

                        </View>

                        <View style={{ backgroundColor: "#fff", borderRadius: 7, padding: 12, marginTop: 5 }} >
                            <Text style={{ alignSelf: "flex-start", fontSize: 14, fontWeight: '500', color: '#000000' }} >{t("Do you have any disability?")}</Text>
                            <Text style={{ alignSelf: "flex-start", }}>{t("Ans: ")}<Text style={{ color: Colors.primary }}>{t('No')}</Text></Text>
                        </View>
                        <View style={{ backgroundColor: "#fff", borderRadius: 7, padding: 12, marginTop: 5 }} >
                            <Text style={{ alignSelf: "flex-start", fontSize: 14, fontWeight: '500', color: '#000000' }} >{t("Were you ever involved in a criminal activity or something like that?")}</Text>
                            <Text style={{ alignSelf: "flex-start", }}>{t("Ans: ")} <Text style={{ color: Colors.primary }}>{t('No')}</Text></Text>
                        </View>
                        <View style={{ backgroundColor: "#fff", borderRadius: 7, padding: 12, marginTop: 5 }} >
                            <Text style={{ alignSelf: "flex-start", fontSize: 14, fontWeight: '500', color: '#000000' }} >{t("Were you ever involved in a criminal activity or something like that?")}</Text>
                            <Text style={{ alignSelf: "flex-start", }}>{t("Ans: ")} <Text style={{ color: Colors.primary }}>{t('No')}</Text></Text>
                        </View>
                    </View>
                </ScrollView>

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
                    style={{
                        borderRadius: 7,
                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,

                        alignItems: "center",
                        width: '48%',
                        borderWidth: 1,
                        borderColor: '#00000030'
                    }}
                >
                    <Text style={{ color: 'red', fontSize: 19, fontWeight: '600' }}>
                        {t("Cancel Process")}
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.pop()}
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
                        {t("Save")}
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

export default Preview;
