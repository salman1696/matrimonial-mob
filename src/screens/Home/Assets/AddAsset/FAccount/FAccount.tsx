
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
    Alert,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useTheme } from '../../../../../hooks';
import { ApplicationScreenProps } from '../../../../../../@types/navigation';
import { useTranslation } from 'react-i18next';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../../../../theme/Variables';
import { Picker } from '@react-native-picker/picker';
import { Dropdown } from 'react-native-element-dropdown';
import { InputGroup, Radio, ScrollView } from 'native-base';
import { Switch } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { Image } from 'react-native';


const FAccount = ({ navigation }: ApplicationScreenProps) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [list, setFavItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const Tab = createMaterialTopTabNavigator();

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    const [selectedLanguage, setSelectedLanguage] = useState();

    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];

    const data1 = [
        {
            label: 'data 1'
        },
        {
            label: 'data 2'
        }
    ];

    useEffect(() => {
        toggleModal();
    }, []);

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const [selectedId, setSelectedId] = useState('2');

    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: t('Only Me'),
            value: 'option1',
            color: Colors.primary,
            borderColor: selectedId === '1' ? Colors.primary : '#444',
            borderSize: 1,
            selected: true,
            labelStyle: {
                color: selectedId === '1' ? Colors.primary : '#444',
            }


        },
        {
            id: '2',
            label: t('Me and My Spouse'),
            value: 'option2',
            borderColor: selectedId === '2' ? Colors.primary : '#444',
            borderSize: 1,
            selected: true,
            labelStyle: {
                color: selectedId === '2' ? Colors.primary : '#444',
            },
            color: Colors.primary,

        },
        {
            id: '3',
            label: t('Me and Someone Else'),
            value: 'option3',
            borderColor: selectedId === '3' ? Colors.primary : '#444',
            borderSize: 1,
            selected: true,
            labelStyle: {
                color: selectedId === '3' ? Colors.primary : '#444',
            },
            color: Colors.primary,


        }
    ]), [selectedId]);


    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>


                <View style={{ marginVertical: 12 }}>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 16, fontWeight: 500, color: Colors.black }}>
                        {t("Select Bank")}
                    </Text>
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}

                    />
                </View>

                <View style={{ marginVertical: 12 }}>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 16, fontWeight: 500, color: Colors.black }}>
                        {t("Account Description")}
                    </Text>
                    <View
                        style={{
                            paddingVertical: Platform.OS === 'ios' ? 14 : 0,
                            marginTop: 10,
                            borderWidth: 1,
                            flexDirection: 'row',
                            borderRadius: 5,
                            alignItems: 'center',
                            backgroundColor: '#F6F6F9',
                        }}
                    >

                        <TextInput
                            placeholder={t("Enter description")}
                            style={{ alignSelf: 'center', fontSize: 17, paddingHorizontal: 15 }}
                            maxLength={28}
                            placeholderTextColor={'#00000083'}

                        />
                    </View>

                </View>

                <View style={{ marginVertical: 12 }}>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 16, fontWeight: 500, color: Colors.black }}>
                        {t("Approximate Current Value")}
                    </Text>
                    <View
                        style={{
                            paddingVertical: Platform.OS === 'ios' ? 14 : 0,

                            marginTop: 10,
                            borderWidth: 1,
                            flexDirection: 'row',
                            borderRadius: 5,
                            alignItems: 'center',
                            backgroundColor: '#F6F6F9',
                        }}
                    >

                        <TextInput
                            // placeholder="Date of Birth"
                            style={{ alignSelf: 'center', paddingHorizontal: 15, fontSize: 17 }}
                            maxLength={28}
                            placeholderTextColor={'#00000083'}

                        />
                    </View>

                </View>



                <View style={{ marginVertical: 12 }}>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 16, fontWeight: 500, color: Colors.black, marginVertical: 5 }}>
                        {t("Owned By")}
                    </Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>


                        <RadioGroup
                            radioButtons={radioButtons}
                            onPress={(e) => setSelectedId(e)}
                            selectedId={selectedId}
                            containerStyle={{
                                borderColor: Colors.primary,
                                alignItems: 'flex-start'
                                // borderWidth: 1
                            }}
                            descriptionStyle={{
                                borderColor: Colors.primary,
                                borderWidth: 1
                            }}
                        />

                    </View>
                    {selectedId !== '1' && <Text style={{ alignSelf: 'flex-start', fontSize: 16, fontWeight: 500, color: Colors.black, marginVertical: 5 }}>
                        {selectedId === '2' ? t("Select Spouse") : t("Partner’s National ID")}
                    </Text>}

                    {selectedId !== '1' && selectedId === '3' &&
                        <View
                            style={{
                                marginTop: 20,
                                borderWidth: 1,
                                flexDirection: 'row',
                                borderRadius: 5,
                                paddingVertical: Platform.OS === 'ios' ? 14 : 0,

                                alignItems: 'center',
                                backgroundColor: '#F6F6F9',
                            }}
                        >
                            <Icon
                                name="idcard"
                                type="antdesign"
                                size={20}
                                color="black"
                                style={{ marginHorizontal: 10 }}
                            />
                            <TextInput
                                placeholder={t("National ID / Iqama Number")}
                                style={{ alignSelf: 'flex-start', fontSize: 17 }}
                                maxLength={28}
                            />
                        </View>}

                    {selectedId !== '1' && <View style={{
                        backgroundColor: Colors.white,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.29,
                        shadowRadius: 4.65,
                        marginHorizontal: 5,
                        elevation: 7,
                        width: '98%',
                        borderRadius: 12, marginVertical: 7
                    }}>
                        <View style={{ flexDirection: 'row', padding: 10 }}>

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
                                        alignSelf: 'flex-start',
                                        fontSize: 20,
                                        fontWeight: 500,
                                        color: Colors.black,

                                    }}
                                >
                                    {t("Haleema Sultan")}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        fontWeight: 300,
                                        color: Colors.black,

                                    }}
                                >
                                    {t("ID# 896....85")}
                                </Text>

                            </View>
                        </View>
                    </View>}
                </View>
                <View style={{ marginVertical: 12 }}>
                    <Text style={{ alignSelf: 'flex-start', fontSize: 16, fontWeight: 500, color: Colors.black }}>
                        {t("Attach Proofing Document")}
                    </Text>
                    <View
                        style={{
                            paddingVertical: Platform.OS === 'ios' ? 14 : 0,
                            borderStyle: 'dashed',
                            marginTop: 10,
                            borderWidth: 1,
                            borderRadius: 5,
                            alignItems: 'center',
                            backgroundColor: '#F6F6F9',
                        }}
                    >

                        <View style={{ alignItems: "center", flex: 1 }}>
                            <View style={{ backgroundColor: '#74a3ed', padding: 15, borderRadius: 85, }}>
                                <Icon name='upload' type='foundation' />
                            </View>
                        </View>

                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: 400,
                                color: Colors.black,
                                paddingVertical: 5,

                            }}
                        >
                            <Text style={{ alignSelf: 'flex-start', fontSize: 15, fontWeight: 700, color: Colors.primary }}>
                                {t(' Click to upload ')}
                            </Text>
                            {t("or drag and drop")}
                        </Text>
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: 400,
                                color: Colors.textGray200,

                            }}
                        >

                            {t("JPG, PNG or PDF (max. 10MB)")}
                        </Text>
                    </View>


                </View>




            </View >
        </ScrollView>
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
    dropdown: {
        height: 50,
        borderColor: Colors.textGray200,
        borderWidth: 1,
        marginTop: 7,
        paddingHorizontal: 8,
        paddingVertical: 1,
        borderRadius: 5,
    }, placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

export default FAccount;
