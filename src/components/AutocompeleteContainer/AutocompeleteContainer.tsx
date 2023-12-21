import React, { useCallback, useMemo, useRef, useState } from "react";
import { Alert, I18nManager, NativeModules, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
// import RNRestart from 'react-native-restart';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next'
import i18n from "../../translations";
import { useTheme } from "../../hooks";
import { RadioButton } from "react-native-radio-buttons-group";
import RNRestart from 'react-native-restart';
import { setLang } from "../../store/userReducer";
import BottomSheet from "@gorhom/bottom-sheet";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';






const AutocompeleteContainer = ({ onClose, bottom = 0, navigation }: any) => {
    const { Layout, Gutters, Images, Fonts, Colors } = useTheme();

    const { t } = useTranslation();


    // ref const [isMapReady, setisMapReady] = useState(false);

    const API_KEY = "AIzaSyDvKg5Lu91CHoCKdr-wc1DteqF3FG2k6TE"


    const [strLoc, setStrLoc] = useState('')

    const [region, setRegion] = useState({
        latitude: 26.0667,
        longitude: 50.5577,
        latitudeDelta: 0.012,
        longitudeDelta: 0.01,
    });
    const [regionMap, setRegionMap] = useState({
        latitude: 26.0667,
        longitude: 50.5577,
        latitudeDelta: 0.012,
        longitudeDelta: 0.01,
    });

    const mapRef = useRef(null);
    const gRef = useRef(null);
    const bottomSheetRef = useRef<BottomSheet>(null);

    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const dispatch = useDispatch();

    // Update state on region change
    const onRegionChange = async (regionInfo: React.SetStateAction<{ latitude: number; longitude: number; latitudeDelta: number; longitudeDelta: number; }>) => {
        console.log('[region]', regionInfo);
        setRegion(regionInfo)

    };

    const ref = useRef();



    return (
        <View style={[styles.container, { bottom: 0, }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 10, paddingBottom: 20 }}>
                <Text style={{ fontSize: 24, color: Colors.black, fontWeight: '600' }} >
                    Choose on Map
                </Text>
                <Icon onPress={() => {
                    onClose(false)
                }} name="close" type="ionicon" color="#000" size={30} />
            </View>

            <TouchableOpacity

                style={{
                    backgroundColor: Colors.primary,
                    borderRadius: 7,
                    padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                    alignItems: "center",
                    width: '96%',
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderColor: '#00000030',
                    justifyContent: 'flex-start'

                }}
            >
                <Icon name="location-outline" type="ionicon" color="#fff" size={30} />
                <Text style={{ color: Colors.white, fontSize: 19, fontWeight: '600', marginHorizontal: 10 }}>
                    {t("Select City Manually")}
                </Text>


            </TouchableOpacity>

            <MapView.Animated

                ref={mapRef}
                showsUserLocation={true}
                showsMyLocationButton={true}
                // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                zoomEnabled
                loadingEnabled
                zoomTapEnabled
                onRegionChange={onRegionChange}
                region={regionMap}
            >
                <Marker.Animated
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude,
                    }}
                    title={'Location'}
                    draggable>
                </Marker.Animated>
            </MapView.Animated>

            <View style={{
                position: "absolute",
                flexDirection: "row",
                backgroundColor: "white",
                justifyContent: 'space-between',
                bottom: 0,
                width: '110%',
                alignSelf: "center",
                padding: 20
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
                    }}
                >
                    <Text style={{ color: 'red', fontSize: 17, fontWeight: '600' }}>
                        {t("Cancel ")}
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity

                    style={{
                        backgroundColor: Colors.primary,
                        borderRadius: 7,
                        padding: i18n.language === 'ar' ? 12 : Platform.OS === 'ios' ? 15 : 10,
                        alignItems: "center",
                        width: '48%',
                        flexDirection: 'row',
                        borderWidth: 1,
                        borderColor: '#00000030',
                        justifyContent: 'space-between'

                    }}
                >
                    <Text style={{ color: Colors.white, fontSize: 19, fontWeight: '600' }}>
                        {t("Save")}
                    </Text>
                    <Icon name={i18n.language === 'ar' ? 'left' : 'right'} type='antdesign' color={Colors.white} size={15} style={{ width: '90%', }} />


                </TouchableOpacity>


            </View>

        </View>

    )


}
const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        marginTop: 150,
        marginBottom: 100
    },
    container: {
        width: '100%',
        flex: 15,
        padding: 20,
        backgroundColor: '#Fff',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    // container: {
    //     flex: 1,
    //     padding: 24,
    //     backgroundColor: 'grey',
    // },
    // contentContainer: {
    //     position: 'absolute',
    //     width: '100%',
    //     flex: 1,
    //     // height: 310,
    //     borderTopLeftRadius: 35,
    //     borderTopRightRadius: 35,
    //     backgroundColor: '#F5F5F8',
    //     alignItems: 'center',
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 3,
    //     },
    //     shadowOpacity: 0.29,
    //     shadowRadius: 4.65,
    //     elevation: 7,
    // },
    textContainer: {
        flexDirection: 'row',
        width: '87%',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        color: '#fff',
        fontSize: 55,
        textAlign: 'left',
        lineHeight: 55,
        marginHorizontal: 50,
        fontWeight: '500'
    },
    languageText: {
        color: '#000',
        fontSize: 24,
        textAlign: 'left',
        marginBottom: 8,
        fontWeight: '7 00'

    },
    languageTextSelection: {
        color: '#fff',
        fontSize: 24,
        marginHorizontal: 20,
        fontWeight: '400'

    },
    languageTextDefault: {

        fontSize: 16,
        marginHorizontal: 20,
        fontWeight: '400'

    },
    text3: {
        color: '#fff',
        fontSize: 55,
        textAlign: 'left',
        lineHeight: 55,
        marginHorizontal: 50,
        fontWeight: '500'

    },
    get_started: {
        color: '#9D2731',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: '400'

    },

});
export default AutocompeleteContainer;