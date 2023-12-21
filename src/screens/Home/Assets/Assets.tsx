import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    FlatList,
    Image,
    Modal,
    Pressable,
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
import { Icon, Input } from 'react-native-elements';
import ReactNativeModal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CaseTab } from './caseTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Assets';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../../theme/Variables';
import OwnAsset from './OwnAsset/OwnAsset';
import Distributed from './Distributed/Distributed';
import { AssetTab } from './AssetTab';
import i18n from '../../../translations';

const Assets = ({ navigation }: ApplicationScreenProps) => {
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
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FAFAFA', padding: 20 }}>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
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
                </View>


                <View style={{ marginVertical: 15 }}>
                    <Text style={{
                        textAlign: "left",
                        fontSize: 28, fontWeight: 700, color: Colors.black
                    }}>
                        {t("Assets")}
                    </Text>
                    <Text style={{
                        textAlign: "left",
                        fontSize: 16, fontWeight: 300, color: Colors.textGray200
                    }}>
                        {t("Will be divided based on your wishes between people and even nonprofits.")}
                    </Text>



                </View>

                <View style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
                    <Tab.Navigator
                        tabBar={(props: any) => <AssetTab {...props} />}
                        initialRouteName={"AllDates"}
                    >

                        <Tab.Screen
                            name={"OWNED"}
                            component={OwnAsset}
                            initialParams={{}}
                            options={{
                                tabBarLabel: "OWNED",
                            }}
                        />
                        <Tab.Screen
                            name={"DISTRIBUTED"}
                            component={Distributed}
                            initialParams={{}}
                            options={{
                                tabBarLabel: "DISTRIBUTED",
                            }}
                        />


                    </Tab.Navigator>
                </View>

            </View>
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

export default Assets;
