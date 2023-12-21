import React, { useEffect, useRef, useState } from 'react';
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useTheme } from '../../hooks';
import { ApplicationScreenProps } from '../../../@types/navigation';
import { useTranslation } from 'react-i18next';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../theme/Variables';
import { Image } from 'react-native';
import { TabView } from 'react-native-tab-view';
import PartnerInfo from './PartnerInfo/PartnerInfo';
import Medical from './Medical/Medical';
import Completed from '../Home/Cases/Completed/Completed';
import TermCondition from '../Home/Setting/TermsCondition/TermsCondition';
import Terms from './Terms/Terms';
import Counseling from './Counseling/Counseling';
import Admin from './Admin/Admin';
import Court from './Court/Court';
import i18n from '../../translations';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import Guardain from './Guardain/Guardain';





const renderTabBar = props => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();

    var routes = props.navigationState.routes;
    var currentPos = props.navigationState.index;
    const scrollRef = useRef();


    setTimeout(() => {
        if (scrollRef.current !== null) {

            props.setScrollRef(scrollRef);
        }
    }, 500);


    return (

        <View
            style={{
                marginHorizontal: 20,
                flexDirection: 'row',
                backgroundColor: Colors.primary,
                padding: 20,
                borderRadius: 15,
                marginVertical: 8,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                alignItems: "center",
                elevation: 3,
            }}
        >
            <View style={{ backgroundColor: Colors.white, borderRadius: 65, padding: 10, alignItems: "center", justifyContent: "center" }}>
                <Image
                    testID={'brand-img'}
                    style={{
                        height: 24,
                        width: 24,
                        alignSelf: 'center',
                    }}
                    source={Images.sparkles.init_process}
                    resizeMode={'cover'}
                />
            </View>
            <View
                style={{
                    width: '46%',
                    marginLeft: 10,
                }}
            >
                <Text
                    style={{ fontSize: 15, fontWeight: 500, color: Colors.white, textAlign: 'left' }}
                >
                    {t(routes[parseInt(currentPos)]?.title)}
                </Text>
                <Text
                    style={{
                        textAlign: 'left',
                        fontSize: 12,
                        fontWeight: 500,
                        color: Colors.white,
                    }}
                >
                    {t("In Progress")}
                </Text>

            </View>
            <View style={{
                width: '22%',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                alignItems: "center",
                shadowOpacity: 0.20,
                shadowRadius: 1.41,
                flexDirection: "row",
                elevation: 2,
            }}>

                <TouchableOpacity onPress={() => currentPos !== 0 && props.jumpTo(routes[currentPos - 1].key)} style={{ borderWidth: 1, borderColor: '#fff', borderRadius: 8 }}>
                    <Icon name={i18n.language !== 'ar' ? 'left' : "right"} type='antdesign' color={'white'} size={15} style={{ padding: 8, }} />
                </TouchableOpacity>
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: 500,
                        marginHorizontal: 5,
                        color: Colors.white,
                    }}
                >
                    {t("Step ")}{currentPos + 1}/{routes.length}
                </Text>

                <TouchableOpacity
                    onPress={() => currentPos !== routes.length - 1 && props.jumpTo(routes[currentPos + 1].key)}
                    style={{ borderWidth: 1, borderColor: '#fff', borderRadius: 8 }}>
                    <Icon name={i18n.language === 'ar' ? 'left' : "right"} type='antdesign' color={'white'} size={15} style={{ padding: 8 }} />
                </TouchableOpacity>
            </View>




        </View>
    );
};

const defaultProfileRoutes = [
    {
        index: 0,
        key: 'partner',
        title: 'Initiate Process',
        icon: 'account-outline',
    },
    {
        index: 1,
        key: 'guardain',
        title: 'Guardian & Witnesses',
        icon: 'home'
    },
    {
        index: 2,
        key: 'medical',
        title: 'Medical Inspection',
        icon: 'home'
    },
    {
        index: 3,
        key: 'terms',
        title: 'Terms & Conditions',
        icon: 'home'
    },
    {
        index: 4,
        key: 'counseling',
        title: 'Counseling',
        icon: 'home'
    },
    {
        index: 5,
        key: 'admin',
        title: 'Admin Approval',
        icon: 'home'
    },
    {
        index: 6,
        key: 'court',
        title: 'Court',
        icon: 'home'
    },

]


const Marriage = ({ navigation }: ApplicationScreenProps) => {
    const { Layout, Gutters, Images, Fonts } = useTheme();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);

    const [index, setIndex] = React.useState(0);
    // const [state, dispatch] = useContext(AppContext);
    const [scroll, setScroll] = useState(null);
    const [loading, setLoading] = useState(false);
    const [routes, setRoutes] = React.useState([]);
    // const completedSteps = state?.profile?.completedStepNumber;
    const completedSteps = 1;


    const Tab = createMaterialTopTabNavigator();

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };


    useEffect(() => {
        toggleModal();
    }, []);

    useEffect(() => {
        setRoutes(defaultProfileRoutes)
    }, [])

    useEffect(() => {

        setTimeout(() => {
            setIndex
            let steps = 1;
            if (steps > 2) {
                steps = 2;
            }
            setIndex(0);
        }, 1000);
    }, []);

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const setScrollRef = sc => setScroll(sc);

    const scrollToNext = step => {

        if (scroll.current !== null) {
            scroll.current.scrollTo({
                x: (Dimensions.get('window').width / 4) * step,
                animated: true,
            });
        }
    };

    const _renderScene = ({ route, jumpTo }) => {

        switch (route.key) {
            case 'partner':
                return (
                    <PartnerInfo
                        jumpTo={jumpTo}
                        scrollToNext={scrollToNext}
                        isProfileConfig={true}
                        navigation={navigation}
                    />
                );
            case 'guardain':
                return (
                    <Guardain
                        jumpTo={jumpTo}
                        scrollToNext={scrollToNext}
                        navigation={navigation}
                        isProfileConfig={true}
                    />
                );
            case 'medical':
                return (
                    <Medical
                        jumpTo={jumpTo}
                        navigation={navigation}
                        scrollToNext={scrollToNext} />
                )
            case 'terms':
                return (
                    <Terms
                        navigation={navigation}
                        jumpTo={jumpTo}
                        scrollToNext={scrollToNext} />
                )
            case 'counseling':
                return (
                    <Counseling
                        navigation={navigation}
                        jumpTo={jumpTo}
                        scrollToNext={scrollToNext} />
                )
            case 'admin':
                return (
                    <Admin
                        navigation={navigation}
                        jumpTo={jumpTo}
                        scrollToNext={scrollToNext} />
                )
            case 'court':
                return (
                    <Court
                        navigation={navigation}
                        jumpTo={jumpTo}
                        scrollToNext={scrollToNext} />
                )
        }
    };

    const height = 400;



    return (
        <View style={{ flex: 1, backgroundColor: '#FAFAFA', }}>
            <SafeAreaView edges={['right', 'left', 'top']} style={{ backgroundColor: '#FAFAFA', }}>

                <View
                    style={{
                        padding: 20,
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >

                    <View>
                        <Text style={{ fontSize: 28, fontWeight: 700, color: Colors.black, textAlign: i18n.language === 'ar' ? 'left' : 'right' }}>
                            {t("Marriage Process")}
                        </Text>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: 700,
                                color: Colors.black,
                                paddingVertical: 5,

                            }}
                        >
                            {t("Case ID:")}
                            <Text style={{ fontSize: 15, fontWeight: 700, color: Colors.primary }}>
                                {'  #Ab1212 '}
                            </Text>
                        </Text>
                    </View>

                    < TouchableOpacity
                        onPress={() => navigation.pop()}
                        style={{
                            padding: 10,
                            marginVertical: 5, borderRadius: 13, borderWidth: 1, borderColor: Colors.textGray200
                        }} >
                        <Icon name={'cross'} type='entypo' />
                    </TouchableOpacity>


                </View>
            </SafeAreaView >


            <View style={{
                flex: 1,

            }}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={_renderScene}
                    onIndexChange={setIndex}
                    renderTabBar={params =>
                        renderTabBar({ ...params, completedSteps, setScrollRef })
                    }
                    swipeEnabled={false}
                    initialLayout={{ width: Dimensions.get('screen').width }}
                    lazy
                />
            </View>


            {/* {defaultProfileRoutes[1].key === 'medical' && <View style={{
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
                            padding: 20,
                            alignItems: "center",
                            width: '48%',
                            borderWidth: 1,
                            borderColor: '#00000030'


                            // marginHorizontal: 20,
                        }}
                    >
                        <Text style={{ color: 'red', fontSize: 19, fontWeight: '600' }}>
                            Cancel Process
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Marriage')}
                        style={{
                            backgroundColor: Colors.white,
                            borderRadius: 7,
                            padding: 20,
                            alignItems: "center",
                            width: '48%',
                            borderWidth: 1,
                            borderColor: '#00000030'

                            // marginHorizontal: 20,
                        }}
                    >
                        <Text style={{ color: Colors.primary, fontSize: 19, fontWeight: '600' }}>
                            Book Slot
                        </Text>
                        <Icon name={i18n.language === "ar" ? 'chevron-left' : 'chevron-right'} type='entypo' />


                    </TouchableOpacity>

                </View>} */}


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

export default Marriage;
