import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Components/ReusableComponets/Dimensions'
import Colors from '../../Components/utils/Colors'
import * as Progress from 'react-native-progress';


export default function MyPool({ navigation }) {

    const SrtData = [
        {
            PoolSize: '10,000',
            Reward: "5,000",
            Slots: "10,000",
            StartTime: "8 Pm",
            EndTime: '10 Am',
            Date: "04-Jan-2023",
            Generic: 'Garhwali'
        },
        {
            PoolSize: '10,000',
            Reward: "5,000",
            Slots: "10,000",
            StartTime: "8 Pm",
            EndTime: '10 Am',
            Date: "04-Jan-2023",
            Generic: 'Garhwali'

        },
        {
            PoolSize: '10,000',
            Reward: "5,000",
            Slots: "10,000",
            StartTime: "8 Pm",
            EndTime: '10 Am',
            Date: "04-Jan-2023",
            Generic: 'Garhwali'

        },
        {
            PoolSize: '10,000',
            Reward: "5,000",
            Slots: "10,000",
            StartTime: "8 Pm",
            EndTime: '10 Am',
            Date: "04-Jan-2023",
            Generic: 'Garhwali'

        },
    ]
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Balck }}>

            <ScrollView contentContainerStyle={{ paddingBottom: 30, }}>
                {SrtData.map((value, index) => (
                    <View
                        key={index}
                        style={{ height: heightPixel(215), marginTop: 20, marginHorizontal: 15, borderRadius: 10, backgroundColor: "#1D1D1D" }}>
                        <View style={{
                            flexDirection: 'row', justifyContent: "space-between",
                            paddingHorizontal: 15, backgroundColor: "#504F4F", paddingVertical: 5,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10
                        }}>
                            <Text style={{ color: '#d3d3d3' }}>#BLRO123</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#d3d3d3', right: 6 }}>Generic:-</Text>
                                <Text style={{ color: "#d3d3d3" }}>Garhwali</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 15, top: 10, alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: Colors.Withe, fontSize: fontPixel(21) }}>Pool Size:-</Text>
                                <Text style={{ color: Colors.Withe, left: 10, fontSize: fontPixel(21) }}>10,000</Text>
                            </View>
                            {/* <TouchableOpacity style={{ paddingVertical: 6, backgroundColor: Colors.Chinesepurple, width: widthPixel(80), alignItems: 'center', borderRadius: 4 }}>
                                <Text style={{ color: Colors.Withe, }}>Details</Text>
                            </TouchableOpacity> */}
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <Progress.Bar progress={0.5} width={widthPixel(340)} height={7} color={Colors.Chinesepurple} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 17, marginTop: 5 }}>
                            <Text style={{ color: Colors.Lightgrey, fontWeight: '500' }}>5,000 Left</Text>
                            <Text style={{ color: Colors.Lightgrey, fontWeight: '500' }}>10,000 Slots</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 15, marginTop: 7 }}>
                            <View style={{ alignItems: 'center' }}>
                                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                    <Text style={{ color: Colors.Withe, fontSize: fontPixel(17) }}>Reward</Text>
                                    <Text style={{ color: Colors.Withe, fontSize: fontPixel(17), left: 10, }}>5,000</Text>
                                </View>
                                <Text style={{ color: Colors.Withe, fontSize: fontPixel(15), }}>1"5,000,2":3,000</Text>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Text style={{ color: Colors.Withe, fontWeight: '500', right: 12 }}>Entry</Text>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('RankWinningScreen')}
                                    style={{ paddingVertical: 5, backgroundColor: Colors.Chinesepurple, width: widthPixel(105), alignItems: 'center', borderRadius: 4 }}>
                                    <Text style={{ color: Colors.Withe, fontWeight: '500' }}>Leaderboard</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row', justifyContent: "space-between",
                            paddingHorizontal: 15, backgroundColor: "#504F4F", paddingVertical: 5,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            marginVertical: 8
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: Colors.Withe, fontSize: fontPixel(15) }}>Start at: 8 Pm</Text>
                                <Text style={{ color: Colors.Withe, left: 15, fontSize: fontPixel(15) }}>End at: 10 Am</Text>

                            </View>

                            <Text style={{ color: Colors.Withe, fontSize: fontPixel(15) }}>04-Jan-2023</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}