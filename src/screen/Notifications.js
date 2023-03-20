import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../Components/ReusableComponets/Dimensions'
import Colors from '../Components/utils/Colors'

export default function Notifications({ navigation }) {
    const SrtData = [
        {
            PoolSize: '10,000',
            Reward: "5,000",
            Slots: "10,000",
            StartTime: "8 Pm",
            EndTime: '10 Am',
            Date: "04-Jan-2023",
            Generic: 'Garhwali',
            btrName: 'Lost',
            btrColor: '#e62e2d'



        },
        {
            PoolSize: '10,000',
            Reward: "5,000",
            Slots: "10,000",
            StartTime: "8 Pm",
            EndTime: '10 Am',
            Date: "04-Jan-2023",
            Generic: 'Garhwali',
            btrName: 'Won',
            btrColor: '#345bff'


        },
        {
            PoolSize: '10,000',
            Reward: "5,000",
            Slots: "10,000",
            StartTime: "8 Pm",
            EndTime: '10 Am',
            Date: "04-Jan-2023",
            Generic: 'Garhwali',
            btrName: 'Lost',
            btrColor: '#e62e2d'



        },
        {
            PoolSize: '10,000',
            Reward: "5,000",
            Slots: "10,000",
            StartTime: "8 Pm",
            EndTime: '10 Am',
            Date: "04-Jan-2023",
            Generic: 'Garhwali',
            btrName: 'Won',
            btrColor: '#345bff'
        },
        {
            PoolSize: '10,000',
            Reward: "5,000",
            Slots: "10,000",
            StartTime: "8 Pm",
            EndTime: '10 Am',
            Date: "04-Jan-2023",
            Generic: 'Garhwali',
            btrName: 'Lost',
            btrColor: '#e62e2d'
        },
        {
            PoolSize: '10,000',
            Reward: "5,000",
            Slots: "10,000",
            StartTime: "8 Pm",
            EndTime: '10 Am',
            Date: "04-Jan-2023",
            Generic: 'Garhwali',
            btrName: 'Won',
            btrColor: '#345bff'
        },
    ]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Balck, }}>
            <View
                style={{
                    backgroundColor: Colors.Balck,
                    paddingHorizontal: '4%',
                    flexDirection: 'row',
                    paddingVertical: 13,
                    marginTop: 35,
                    justifyContent: 'space-between',
                    alignItems: 'center'

                }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image source={(require('../assets/leftarrow2.png'))} style={[{ resizeMode: 'contain', borderRadius: 100 }, { height: heightPixel(30), width: widthPixel(30) }]} />
                </TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontWeight: '500', color: Colors.Withe, fontSize: fontPixel(21), }}>Notifications</Text>
                </View>
                <TouchableOpacity>
                    <Image source={require('../assets/bell.png')} style={{ height: heightPixel(25), width: widthPixel(25), borderRadius: 100 }} />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 30, paddingHorizontal: '5%', }}>
                <Text style={{ fontWeight: '500', color: Colors.Withe, fontSize: fontPixel(18), }}>Today</Text>
                <Text style={{ fontWeight: '500', color: Colors.Withe, fontSize: fontPixel(18), }}>Mark All as Read</Text>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 30, }}>
                {SrtData.map((value, index) => (
                    <View
                        key={index}
                        style={{ height: heightPixel(120), marginTop: 20, marginHorizontal: 15, borderRadius: 10, backgroundColor: "#1D1D1D" }}>
                        <View style={{
                            flexDirection: 'row', justifyContent: "space-between",
                            paddingHorizontal: 15, backgroundColor: "#504F4F", paddingVertical: 5,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10
                        }}>
                            <Text style={{ color: '#d3d3d3' }}>Opening At: 10 Am</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#d3d3d3', right: 6 }}>Generic:-</Text>
                                <Text style={{ color: "#d3d3d3" }}>Garhwali</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 15, top: 10, alignItems: 'center' }}>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: Colors.Withe, fontSize: fontPixel(21) }}>Pool Size:-</Text>
                                    <Text style={{ color: Colors.Withe, left: 10, fontSize: fontPixel(21) }}>10,000</Text>
                                </View>
                                <Text style={{ color: '#b4b4b4', left: 10, fontSize: fontPixel(21) }}>#1028DE</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ color: Colors.Chinesepurple, left: 5, fontSize: fontPixel(18), }}>o</Text>
                                    <Text style={{ color: '#b4b4b4', left: 10, fontSize: fontPixel(12) }}>22 Min ago</Text>

                                </View>

                            </View>
                            <TouchableOpacity
                                // onPress={() => navigation.navigate("EditSaveScreen")}

                                style={{ paddingVertical: 6, backgroundColor: value.btrColor, width: widthPixel(80), alignItems: 'center', borderRadius: 4 }}>
                                <Text style={{ color: Colors.Withe, }}>{value.btrName}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}