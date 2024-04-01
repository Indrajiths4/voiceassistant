import { View, Text,Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Features() {
  return (
    <View style={{height: hp(60)}} className="space-y-4">
      <Text style={{fontSize: wp(6.5)}} className="font-semibold text-gray-700">Features</Text>
       <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-2">
            <Image source={require('../../assets/images/chatpt.png')} style={{height: hp(4.5), width: hp(4.5)}} className="rounded-xl"/>
            <Text className="font-semibold text-gray-700" style={{fontSize: wp(5.5)}}>ChatGPT</Text>
        </View>
       </View>
    </View>
  )
}