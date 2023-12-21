import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useTheme } from '../../../../hooks';
import { ApplicationScreenProps } from '../../../../../@types/navigation';
import { useTranslation } from 'react-i18next';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../../../theme/Variables';
import OwnAsset from '../OwnAsset/OwnAsset';
import { AssetTab } from '../AssetTab';
import { AddAssetTab } from './AddAssetTab';
import RealEstate from './RealEstate/RealEstate';
import FAccount from './FAccount/FAccount';
import Gold from './Gold/Gold';
import Vehicle from './Vehicle/Vehicle';
import OtherValuable from './OtherValuable/OtherValuable';

const AddAssets = ({ navigation, isPopUp = true, setAddNew }: ApplicationScreenProps) => {
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
        <SafeAreaView style={{
            flex: 1, backgroundColor: '#fff', padding: 20,
        }}>
            <View style={{ flex: 1, }}>



                {isPopUp ? <View style={{
                    marginVertical: 15,
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <View
                        style={{
                            width: '80%',

                            justifyContent: 'space-between',
                        }}
                    >
                        <Text style={{ textAlign: "left", fontSize: 28, fontWeight: 700, color: Colors.black }}>
                            {t("Assets")}
                        </Text>
                        <Text style={{ textAlign: "left", fontSize: 16, fontWeight: 500, color: Colors.black }}>
                            {t("Please provide following info")}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        < TouchableOpacity
                            onPress={() => navigation.pop()}
                            style={{
                                padding: 10,
                                backgroundColor: '#f2f2f2',
                                marginVertical: 5, borderRadius: 13, borderWidth: 1, borderColor: Colors.textGray200
                            }} >
                            <Icon name={'cross'} type='entypo' />
                        </TouchableOpacity>
                    </View>



                </View> :
                    <View
                        style={{
                            flexDirection: 'row',
                            alignSelf: 'flex-end',
                            justifyContent: 'space-between',
                        }}
                    >
                        < TouchableOpacity
                            onPress={() => setAddNew(false)}
                            style={{
                                padding: 5,
                            }} >
                            <Icon name={'cross'} type='entypo' />
                        </TouchableOpacity>
                    </View>}

                <View style={{
                    flex: 1, backgroundColor: '#f4f4f4f4',
                }}>
                    <Tab.Navigator
                        tabBar={(props: any) => <AddAssetTab {...props} />}
                        initialRouteName={"AllDates"}
                    >

                        <Tab.Screen
                            name={"Real Estate"}
                            component={RealEstate}
                            initialParams={{}}
                            navigation={navigation}
                            options={{
                                tabBarLabel: "Real Estate",


                            }}
                            iconName={"home"}
                        />
                        <Tab.Screen
                            name={"Financial Account"}
                            component={FAccount}
                            navigation={navigation}
                            initialParams={{}}
                            options={{
                                tabBarLabel: "Financial Account",
                            }}
                        />
                        <Tab.Screen
                            name={"Gold"}
                            component={Gold}
                            navigation={navigation}
                            initialParams={{}}
                            options={{
                                tabBarLabel: "Gold",
                            }}
                        />
                        <Tab.Screen
                            name={"Vehicle"}
                            navigation={navigation}
                            component={Vehicle}
                            initialParams={{}}
                            options={{
                                tabBarLabel: "Vehicle",
                            }}
                        />
                        <Tab.Screen
                            name={"Other Valuables"}
                            navigation={navigation}
                            component={OtherValuable}
                            initialParams={{}}
                            options={{
                                tabBarLabel: "Other Valuables",
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

export default AddAssets;
