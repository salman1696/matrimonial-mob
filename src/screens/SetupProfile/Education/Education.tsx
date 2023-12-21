import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Switch,
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
import { Radio } from 'native-base';


const Education = (props: any) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(true);
    const [list, setFavItems] = useState([{}, {},]);
    const [rValue, setValue] = React.useState(false);

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
            <ScrollView style={{ flex: 1, marginHorizontal: 20, marginBottom: 90, }}>
                <View style={{ flex: 1, }}>
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

                    {modalVisible ?
                        <TouchableOpacity
                            onPress={toggleModal}

                            style={{
                                paddingHorizontal: 15,
                                borderColor: Colors.primary,
                                borderRadius: 12,
                                justifyContent: "center",
                                borderWidth: 1,
                                borderStyle: 'dashed',
                                padding: Platform.OS === 'ios' ? 20 : 10,
                                alignItems: "center"
                            }}>




                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: Colors.primary,
                                }}
                            >
                                {t("Add Education")}
                            </Text>






                        </TouchableOpacity>
                        :
                        <View >
                            <Text style={{ alignSelf: 'flex-start', fontSize: 20, fontWeight: '600', color: Colors.black, marginVertical: Platform.OS === 'ios' ? 5 : 2 }}>
                                {t("Add Education")}
                            </Text>
                            <View style={{ marginVertical: 5 }}>
                                <Text style={{ alignSelf: 'flex-start', fontSize: 14, fontWeight: '400', color: Colors.black }}>
                                    {t("Institute Name")}
                                </Text>
                                <View
                                    style={{
                                        borderColor: Colors.textGray200,
                                        paddingVertical: Platform.OS === 'ios' ? 14 : 0,

                                        marginTop: 5,
                                        borderWidth: 1,
                                        flexDirection: 'row',
                                        borderRadius: 5,
                                        alignItems: 'center',
                                        backgroundColor: '#F6F6F9',

                                    }}
                                >
                                    <Icon
                                        name="building-o"
                                        type="font-awesome"
                                        size={20}
                                        color="black"
                                        style={{ marginHorizontal: 10, alignSelf: 'center', }}
                                    />
                                    <TextInput
                                        placeholder={t("Enter Institute Name")}
                                        returnKeyType='go'
                                        placeholderTextColor={'#00000083'}
                                        style={{ textAlign: 'left', fontSize: 17, }}
                                    />

                                </View>
                            </View>
                            <View style={{ marginVertical: 5 }}>
                                <Text style={{ alignSelf: 'flex-start', fontSize: 14, fontWeight: '400', color: Colors.black }}>
                                    {t("Degree")}
                                </Text>
                                <View
                                    style={{
                                        borderColor: Colors.textGray200,
                                        paddingVertical: Platform.OS === 'ios' ? 14 : 0,

                                        marginTop: 5,
                                        borderWidth: 1,
                                        flexDirection: 'row',
                                        borderRadius: 5,
                                        alignItems: 'center',
                                        backgroundColor: '#F6F6F9',

                                    }}
                                >
                                    <Icon
                                        name="graduation-cap"
                                        type="font-awesome"
                                        size={20}
                                        color="black"
                                        style={{ marginHorizontal: 10, alignSelf: 'center', }}
                                    />
                                    <TextInput
                                        placeholder={t("Enter Degree")}
                                        returnKeyType='go'
                                        placeholderTextColor={'#00000083'}
                                        style={{ textAlign: 'left', fontSize: 17, }}
                                    />

                                </View>

                            </View>
                            <View style={{ marginVertical: 5, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                                <Switch
                                    trackColor={{ false: '#767577', true: Colors.primary }}
                                    thumbColor={Colors.white}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={(v) => { setValue(v) }}
                                    value={rValue}

                                    style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }}
                                />
                                <Text style={{ fontSize: 14, fontWeight: '400', color: Colors.black }}>
                                    {t("Continue Education")}
                                </Text>
                            </View>
                            <View style={{ marginVertical: 5 }}>
                                <Text style={{ alignSelf: 'flex-start', fontSize: 14, fontWeight: '400', color: Colors.black }}>
                                    {t("Field of Study")}
                                </Text>
                                <View
                                    style={{
                                        borderColor: Colors.textGray200,
                                        paddingVertical: Platform.OS === 'ios' ? 14 : 0,

                                        marginTop: 5,
                                        borderWidth: 1,
                                        flexDirection: 'row',
                                        borderRadius: 5,
                                        alignItems: 'center',
                                        backgroundColor: '#F6F6F9',

                                    }}
                                >
                                    <Icon
                                        name="building-o"
                                        type="font-awesome"
                                        size={20}
                                        color="black"
                                        style={{ marginHorizontal: 10, alignSelf: 'center', }}
                                    />
                                    <TextInput
                                        placeholder={t("Enter Field of Study")}
                                        returnKeyType='go'
                                        placeholderTextColor={'#00000083'}
                                        style={{ textAlign: 'left', fontSize: 17, }}
                                    />

                                </View>

                            </View>
                            <View style={{ marginVertical: 5 }}>
                                <Text style={{ alignSelf: 'flex-start', fontSize: 14, fontWeight: '400', color: Colors.black }}>
                                    {t("Start Date")}
                                </Text>
                                <View
                                    style={{
                                        borderColor: Colors.textGray200,
                                        paddingVertical: Platform.OS === 'ios' ? 14 : 0,
                                        marginTop: 5,
                                        borderWidth: 1,
                                        flexDirection: 'row',
                                        borderRadius: 5,
                                        alignItems: 'center',
                                        backgroundColor: '#F6F6F9',

                                    }}
                                >
                                    <Icon
                                        name="calendar"
                                        type="font-awesome"
                                        size={20}
                                        color="black"
                                        style={{ marginHorizontal: 10, alignSelf: 'center', }}
                                    />
                                    <TextInput
                                        placeholder={t("Enter Start Date")}
                                        returnKeyType='go'

                                        placeholderTextColor={'#00000083'}
                                        style={{ alignSelf: 'flex-start', textAlign: 'left', fontSize: 17,  }}
                                    />

                                </View>

                            </View>
                            <View style={{ marginVertical: 5 }}>
                                <Text style={{ alignSelf: 'flex-start', fontSize: 14, fontWeight: '400', color: Colors.black }}>
                                    {t("End Date")}
                                </Text>
                                <View
                                    style={{
                                        borderColor: Colors.textGray200,
                                        paddingVertical: Platform.OS === 'ios' ? 14 : 0,

                                        marginTop: 5,
                                        borderWidth: 1,
                                        flexDirection: 'row',
                                        borderRadius: 5,
                                        alignItems: 'center',
                                        backgroundColor: '#F6F6F9',

                                    }}
                                >
                                    <Icon
                                        name="calendar"
                                        type="font-awesome"
                                        size={20}
                                        color="black"
                                        style={{ marginHorizontal: 10, alignSelf: 'center', }}
                                    />
                                    <TextInput
                                        placeholder={t("Enter End Date")}
                                        returnKeyType='go'
                                        placeholderTextColor={'#00000083'}
                                        style={{ textAlign: 'left', fontSize: 17, }}
                                    />

                                </View>

                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'flex-end' }}>
                                <TouchableOpacity
                                    onPress={toggleModal}
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginRight: 15

                                    }}>




                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: Colors.primary,
                                            marginTop: 4,

                                        }}
                                    >
                                        {t("Cancel")}
                                    </Text>




                                </TouchableOpacity>
                                <TouchableOpacity


                                    style={{
                                        paddingHorizontal: 15,
                                        backgroundColor: Colors.primary,
                                        borderColor: Colors.primary,
                                        borderRadius: 7,
                                        justifyContent: "center",
                                        borderWidth: 1,
                                        padding: 10,
                                        alignItems: "center"
                                    }}>




                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: Colors.white,
                                        }}
                                    >
                                        {t("Save")}
                                    </Text>




                                </TouchableOpacity>

                            </View>

                        </View>

                    }


                </View>





            </ScrollView>
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
                    // onPress={() => navigation.pop()}
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
                    onPress={() => props.jumpTo('work')}
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
                        {t("Save & Next")}
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

export default Education;
