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
import { FlatList } from 'react-native-gesture-handler';
import AddAssets from '../../Home/Assets/AddAsset/AddAsset';
import i18n from '../../../translations';


const Asset = ({ props, navigation }: any) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [isAddNew, setAddNew] = useState(true);
    const [list, setFavItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);


    const Tab = createMaterialTopTabNavigator();

    const toggleModal = () => {
        setAddNew(!isAddNew);
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
            <View
                style={{
                    flex: 1,
                    height: '100%',
                    padding: 20,
                    backgroundColor: 'transparent',
                    alignContent: 'center',
                }}
            >


                <TouchableOpacity
                    onPress={() => toggleModal()}
                    style={{
                        padding: i18n.language === 'ar' ? 5 : 20,
                        backgroundColor: Colors.white,
                        borderColor: Colors.primary,
                        borderStyle: 'dashed',
                        borderRadius: 12,
                        justifyContent: "center",
                        borderWidth: 1,
                        alignItems: "center"
                    }}>




                    <Text
                        style={{
                            fontSize: 22,
                            fontWeight: 600,
                            color: Colors.black,
                            marginTop: 4,
                        }}
                    >
                        {t("Add New")}
                    </Text>


                </TouchableOpacity>

                <FlatList
                    data={list}
                    pagingEnabled={true}
                    contentContainerStyle={{
                        alignItems: 'center',
                    }}
                    keyExtractor={(key: any) => key.index}
                    renderItem={({ item, index }: any) => {
                        // console.log(item, "loopitem");

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
                                    }}
                                    source={Images.sparkles.files}
                                    resizeMode={'contain'}
                                />
                                <View
                                    style={{
                                        width: '60%',
                                    }}
                                >
                                    <Text
                                        style={{
                                            textAlign: "left",
                                            fontSize: 20, fontWeight: 700, color: Colors.black
                                        }}
                                    >
                                        {t("Residential Plot")}
                                    </Text>
                                    <Text
                                        style={{
                                            textAlign: "left",
                                            fontSize: 16,
                                            fontWeight: 500,
                                            color: Colors.textGray200,
                                        }}
                                    >
                                        {t("Lorem ipsum dolor, street 2, Clifton, NJ 07011")}
                                    </Text>
                                    <Text
                                        style={{
                                            textAlign: "left",
                                            fontSize: 14,
                                            fontWeight: 400,
                                            color: Colors.black,
                                        }}
                                    >
                                        {t("Owned by")} <Text
                                            style={{
                                                fontSize: 16,
                                                fontWeight: 500,
                                                color: Colors.primary,
                                            }}
                                        > {t("You only")}</Text>
                                    </Text>
                                    <Text
                                        style={{
                                            textAlign: "left",
                                            fontSize: 16, fontWeight: 500, color: Colors.black
                                        }}
                                    >
                                        {t("Valuation")} <Text
                                            style={{
                                                fontSize: 16,
                                                textAlign: "left",
                                                fontWeight: 500,
                                                color: Colors.primary,
                                            }}
                                        > SAR 50,000</Text>
                                    </Text>
                                </View>
                                <View style={{
                                    width: '20%',

                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 1,
                                    },
                                    shadowOpacity: 0.20,
                                    shadowRadius: 1.41,

                                    elevation: 2,

                                }}>

                                    <Icon name='closecircle' type='antdesign' color={'red'} />
                                </View>
                            </View>
                        );
                    }}
                />

            </View >

            {isAddNew &&
                <View style={{
                    backgroundColor: "#FAFAFA",
                    height: '110%', bottom: 0, position: "absolute",

                }}>
                    <AddAssets navigation={navigation} isPopUp={false} setAddNew={setAddNew} />
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
                                justifyContent: "center",
                                width: '48%',
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
                            onPress={() => props.jumpTo('terms')}
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
                </View>
            }

            {!isAddNew && < View style={{
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

                        justifyContent: "center",
                        alignItems: "center",
                        width: '48%',
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
                    onPress={() => props.jumpTo('nominees')}
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

            </View>}

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

export default Asset;
