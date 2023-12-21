import React, { useEffect, useState } from 'react';
import {
    ScrollView,
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


const ReturnPolicy = ({ navigation }: ApplicationScreenProps) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation(['example', 'welcome']);
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
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f4f4', padding: 20 }}>
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
                        <Icon name={'chevron-left'} type='entypo' />
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ marginVertical: 15 }}>
                        <Text style={{ fontSize: 28, fontWeight: 700, color: Colors.black }}>
                        Returns & Refunds Policy
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: 500, color: Colors.primary, marginVertical: 5 }}>
                            Effective Date: Mar 16th, 2023
                        </Text>
                        <Text style={{ fontSize: 16, fontWeight: 500, color: Colors.black, marginVertical: 20 }}>
                        Thank you for using the "Nikah" mobile application ("the App") operated by Nikah Technologies ("we," "our," or "us"). This Returns & Refunds Policy outlines the terms and conditions related to returns and refunds for processing fees charged during the wedding, divorce, and hereditariness processes. By using the App, you agree to comply with this policy. If you do not agree with this Returns & Refunds Policy, please refrain from using the App.
                        </Text>


                        <Text style={{ fontSize: 20, fontWeight: 700, color: Colors.black }}>
                        Processing Fees:
                        </Text>

                        <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: 500, color: Colors.black, marginVertical: 10, paddingEnd: 10 }}>
                                1.
                            </Text>
                            <Text style={{ fontSize: 16, fontWeight: 500, color: Colors.black, marginVertical: 10, marginEnd: 10 }}>
                            Wedding, Divorce, and Hereditariness Processes: To facilitate the wedding, divorce, and hereditariness processes on the App, we may charge processing fees for the services provided. These processing fees cover administrative, verification, and facilitation costs. 
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: 500, color: Colors.black, marginVertical: 10, paddingEnd: 10 }}>
                                2.
                            </Text>
                            <Text style={{ fontSize: 16, fontWeight: 500, color: Colors.black, marginVertical: 10, marginEnd: 10 }}>
                            Payment Method: The processing fees will be charged through the payment method specified during the registration or transaction process.

                            </Text>
                        </View>
                       

                        <Text style={{ fontSize: 20, fontWeight: 700, color: Colors.black, marginTop: 20 }}>
                        Fee Refund Policy:
                        </Text>

                        <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: 500, color: Colors.black, marginVertical: 10, paddingEnd: 10 }}>
                                1.
                             </Text >
                            <Text style={{ fontSize: 16, fontWeight: 500, color: Colors.black, marginVertical: 10, marginEnd: 10 }}>
                                You must be of legal age and have the capacity to enter into a legally binding contract to use the App
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: 500, color: Colors.black, marginVertical: 10, paddingEnd: 10 }}>
                                2.
                            </Text>
                            <Text style={{ fontSize: 16, fontWeight: 500, color: Colors.black, marginVertical: 10, marginEnd: 10 }}>
            You must be of legal age and have the capacity to enter into a legally binding contract to use the App
        </Text>
        </View>
                    
            

                    </View>
                            </ScrollView>
                
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

export default ReturnPolicy;
