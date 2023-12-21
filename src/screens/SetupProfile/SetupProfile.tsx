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
import Medical from './Questionaire/Questionaire';
import Completed from '../Home/Cases/Completed/Completed';
import TermCondition from '../Home/Setting/TermsCondition/TermsCondition';
import Terms from './Terms/Terms';
import Counseling from './Counseling/Counseling';
import Admin from './Work/Work';
import Court from './Preview/Preview';
import i18n from '../../translations';
import Education from './Education/Education';
import Questionaire from './Questionaire/Questionaire';
import Preview from './Preview/Preview';
import Work from './Work/Work';





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
                    style={{
                        fontSize: 15, fontWeight: 500, color: Colors.white,
                        textAlign: 'left',
                    }}
                >
                    {t(routes[parseInt(currentPos)]?.title)}
                </Text>
                <Text
                    style={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: Colors.white,
                        textAlign: 'left',
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
                    {t("Step")} {currentPos + 1}/{routes.length}
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
        key: 'education',
        title: 'Education',
        icon: 'account-outline',
    },
    {
        index: 1,
        key: 'work',
        title: 'Work History',
        icon: 'home'
    },
    {
        index: 2,
        key: 'more',
        title: 'Questionnaire',
        icon: 'home'
    },
    {
        index: 3,
        key: 'preview',
        title: 'Preview & Save',
        icon: 'home'
    },

]


const SetupProfile = ({ navigation }: ApplicationScreenProps) => {
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
            setIndex(2);
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
            case 'education':
                return (
                    <Education
                        jumpTo={jumpTo}
                        navigation={navigation}
                        scrollToNext={scrollToNext}
                        isProfileConfig={true}
                    />
                );
            case 'work':
                return (
                    <Work
                        navigation={navigation}
                        jumpTo={jumpTo}
                        scrollToNext={scrollToNext} />
                );
            case 'more':
                return (
                    <Questionaire
                        navigation={navigation}
                        jumpTo={jumpTo}
                        scrollToNext={scrollToNext} />
                );

            case 'preview':
                return (
                    <Preview
                        navigation={navigation}
                        jumpTo={jumpTo}
                        scrollToNext={scrollToNext} />
                );
        }
    };



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
                        <Text style={{ fontSize: 28, fontWeight: 700, color: Colors.black, textAlign: 'left' }}>
                            {t("Profile Setup")}
                        </Text>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: 700,
                                color: Colors.black,
                                paddingVertical: 5, textAlign: 'left'

                            }}
                        >
                            {t("Please provide following details")}
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

export default SetupProfile;
