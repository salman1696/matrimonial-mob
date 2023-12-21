import React, { useEffect, useState } from 'react';
import {
    Image,
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
import { FlatList } from 'react-native';


const Submit = (props: any) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [underReview, setUnderReview] = useState(false);
    const [isReviewed, setReviewed] = useState(false);
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
        <View style={{ flex: 1, backgroundColor: '#FAFAFA', }}>
            <ScrollView>
                <View style={{ paddingBottom: 100, paddingHorizontal: 20, }}>



                    <Text style={{
                        textAlign: 'left',
                        fontSize: 24, fontWeight: 700, color: Colors.black, marginTop: 10
                    }}>
                        {t("Preview")}
                    </Text>
                    <Text style={{
                        textAlign: 'left',
                        fontSize: 16, fontWeight: 400, color: Colors.textGray200,
                    }}>
                        {t("Eget etiam nulla fames purus ac odio. Laoreet malesuada diam at sed eu purus.")}
                    </Text>
                    <Text style={{
                        textAlign: 'left',
                        fontSize: 16, fontWeight: 700, color: Colors.black, marginTop: 10,
                    }}>
                        {t("Asset")}
                    </Text>

                    <View>
                        <FlatList
                            data={[{}, {}, {}, {}]}
                            horizontal={true}
                            keyExtractor={(key: any) => key.index}
                            renderItem={({ item, index }: any) => {
                                return (
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            backgroundColor: Colors.white,
                                            padding: 10,
                                            justifyContent: 'center',
                                            borderRadius: 10,
                                            margin: 5,
                                            shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 1,
                                            },
                                            shadowOpacity: 0.22,
                                            shadowRadius: 2.22,
                                            elevation: 3,
                                            alignItems: "center"
                                        }}
                                    >
                                        <Image
                                            testID={'brand-img'}
                                            style={{
                                                height: 36,
                                                width: 36,
                                                marginHorizontal: 10
                                            }}
                                            source={Images.sparkles.files}
                                            resizeMode={'contain'}
                                        />
                                        <View>
                                            <Text
                                                style={{ textAlign: 'left', fontSize: 20, fontWeight: 700, color: Colors.black }}
                                            >
                                                {t("Residential Plot")}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    color: Colors.textGray200,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                {t("Lorem ipsum dolor, street 2  ")}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 14,
                                                    fontWeight: 400,
                                                    color: Colors.black,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                {t("Owned by")} <Text
                                                    style={{
                                                        fontSize: 16,
                                                        fontWeight: 500,
                                                        color: Colors.primary,
                                                        textAlign: 'left',
                                                    }}
                                                > {t("You only")}</Text>
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    textAlign: 'left', fontWeight: 500, color: Colors.black
                                                }}
                                            >
                                                {t("Valuation")} <Text
                                                    style={{
                                                        fontSize: 16,
                                                        fontWeight: 500,
                                                        color: Colors.primary,
                                                        textAlign: 'left',
                                                    }}
                                                > SAR 50,000</Text>
                                            </Text>
                                        </View>
                                        <View style={{

                                            shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 1,
                                            },
                                            shadowOpacity: 0.20,
                                            shadowRadius: 1.41,
                                            alignSelf: 'flex-start',
                                            elevation: 2,

                                        }}>

                                            <Icon name='closecircle' type='antdesign' color={'red'} />
                                        </View>
                                    </View>
                                );
                            }}
                        />
                    </View>
                    <Text style={{
                        textAlign: 'left',
                        fontSize: 16, fontWeight: 700, color: Colors.black, marginTop: 10,
                    }}>
                        {t("Nominees")}
                    </Text>

                    <View>
                        <FlatList
                            data={[{}, {}, {}, {}]}
                            horizontal={true}
                            keyExtractor={(key: any) => key.index}
                            renderItem={({ item, index }: any) => {
                                return (
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            backgroundColor: Colors.white,
                                            padding: 10,
                                            justifyContent: 'space-between',
                                            borderRadius: 10,
                                            margin: 5,
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
                                        <View>
                                            <Text
                                                style={{
                                                    fontSize: 18,
                                                    fontWeight: 700,
                                                    color: Colors.black,
                                                    marginTop: 4,
                                                }}
                                            >
                                                {t("Osama Bin Habib")}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 14,
                                                    fontWeight: 500,
                                                    color: Colors.black,
                                                    marginTop: 4,
                                                }}
                                            >
                                                {t("Relation : ")}<Text style={{
                                                    fontSize: 14,
                                                    fontWeight: 500,
                                                    color: Colors.primary,
                                                    marginTop: 4,

                                                }} >
                                                    {t("Son")}
                                                </Text>
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 14,
                                                    fontWeight: 500,
                                                    color: Colors.black,
                                                    marginTop: 4,

                                                }}
                                            >
                                                {t("Share : ")}
                                                <Text style={{
                                                    fontSize: 14,
                                                    fontWeight: 500,
                                                    color: Colors.primary,
                                                    marginTop: 4,

                                                }} >
                                                    {t("30%")}
                                                </Text>
                                            </Text>
                                        </View>
                                        <View style={{
                                            marginTop: 20,
                                            marginLeft: 30
                                        }}>

                                            <View style={{
                                                flexDirection: "row",

                                            }}>

                                                <Icon name='edit' type='feather' color={Colors.primary} style={{ marginRight: 10 }} />
                                                <Icon name='closecircle' type='antdesign' color={'red'} />
                                            </View>



                                        </View>

                                    </View>
                                );
                            }}
                        />
                    </View>

                    <Text style={{
                        textAlign: 'left',
                        fontSize: 16, fontWeight: 700, color: Colors.black, marginTop: 10,
                    }}>
                        {t("Will")}
                    </Text>
                    <Text style={{
                        textAlign: 'left',
                        fontSize: 14, fontWeight: 400, color: Colors.black, marginTop: 10,
                    }}>
                        {t("Ac in ipsum purus tellus sagittis nibh pretium leo a. Ut mi tincidunt commodo nulla. Amet a dignissim eu sed in pellentesque ligula. Enim nulla mattis eu nunc. Tellus laoreet dolor fusce condimentum mattis fringilla venenatis purus. Quis eget volutpat mi mauris blandit. Interdum gravida sit vel turpis libero. Orci felis leo faucibus netus nunc eget suscipit.")}
                    </Text>
                </View>
            </ScrollView>
            <View
                style={{
                    position: "absolute",
                    flexDirection: "row",
                    backgroundColor: "white",
                    justifyContent: 'space-between',
                    bottom: 0,
                    padding: 20,
                    width: '100%',
                    alignSelf: "center",

                }}>

                <TouchableOpacity
                    style={{
                        borderRadius: 7,
                        alignItems: "center",
                        justifyContent: "center",
                        width: '48%',
                        borderWidth: 1,
                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                        borderColor: '#00000030'
                        // marginHorizontal: 20,
                    }}
                >
                    <Text style={{ color: 'red', fontSize: 17, fontWeight: '600' }}>
                        {t("Cancel Process")}
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setUnderReview(true)}
                    style={{
                        backgroundColor: Colors.primary,
                        borderRadius: 7,
                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                        width: '48%',
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: '#00000030',
                        // marginHorizontal: 20,
                    }}
                >
                    <Text style={{ textAlign: "center", color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                        {t("Submit")}
                    </Text>


                </TouchableOpacity>

            </View>
        </View>
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

export default Submit;
