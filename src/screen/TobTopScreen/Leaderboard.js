import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Colors from '../../Components/utils/Colors'
import { fontPixel, heightPixel } from '../../Components/ReusableComponets/Dimensions'

export default function Leaderboard() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Balck }}>
            <View style={{ height: heightPixel(193), backgroundColor: Colors.Withe, margin: 25, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                <View style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: heightPixel(50), backgroundColor: Colors.Chinesepurple, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 30 }}>
                    <Text style={{ color: Colors.Withe, fontSize: fontPixel(18), fontWeight: '500' }}>Rank</Text>
                    <Text style={{ color: Colors.Withe, fontSize: fontPixel(18), fontWeight: '500' }}>Winning</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ borderRightColor: "#d0d0d0", borderTopWidth: 1, borderRightWidth: 1, width: 160, paddingVertical: 5, alignItems: 'center' }}>
                        <Text style={{ color: Colors.Balck, fontSize: fontPixel(18), fontWeight: '500' }}> User 1</Text>
                    </View>
                    <View style={{ borderTopWidth: 1, borderRightWidth: 1, width: 150, alignItems: 'center', paddingVertical: 5, }}>

                        <Text style={{ color: Colors.Balck, fontSize: fontPixel(18), fontWeight: '500' }}>5,000</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ borderRightColor: "#d0d0d0", paddingVertical: 5, borderTopWidth: 1, borderRightWidth: 1, width: 160, alignItems: 'center', }}>
                        <Text style={{ color: Colors.Balck, fontSize: fontPixel(18), fontWeight: '500' }}>User 2</Text>
                    </View>
                    <View style={{ borderTopWidth: 1, borderRightWidth: 1, width: 150, paddingVertical: 5, alignItems: 'center' }}>
                        <Text style={{ color: Colors.Balck, fontSize: fontPixel(18), fontWeight: '500' }}>3,000</Text>
                    </View>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ borderRightColor: "#d0d0d0", paddingVertical: 5, borderTopWidth: 1, borderRightWidth: 1, width: 160, alignItems: 'center', }}>
                        <Text style={{ color: Colors.Balck, fontSize: fontPixel(18), fontWeight: '500' }}>User 3</Text>
                    </View>
                    <View style={{ borderTopWidth: 1, borderRightWidth: 1, width: 150, paddingVertical: 5, alignItems: 'center' }}>
                        <Text style={{ color: Colors.Balck, fontSize: fontPixel(18), fontWeight: '500' }}>1,000</Text>
                    </View>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ borderRightColor: "#d0d0d0", paddingVertical: 5, borderTopWidth: 1, borderRightWidth: 1, width: 160, alignItems: 'center', }}>
                        <Text style={{ color: Colors.Balck, fontSize: fontPixel(18), fontWeight: '500' }}>User 4</Text>
                    </View>
                    <View style={{ borderTopWidth: 1, borderRightWidth: 1, width: 150, paddingVertical: 5, alignItems: 'center' }}>
                        <Text style={{ color: Colors.Balck, fontSize: fontPixel(18), fontWeight: '500' }}>2,000</Text>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}