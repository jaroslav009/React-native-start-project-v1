import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavigationService from 'navigation/helpers/NavigationService'

const WelcomeScreen = () => (
  <SafeAreaView>
    <Text onPress={() => NavigationService.navigate('SignIn')}>Welcome</Text>
  </SafeAreaView>
)

export default WelcomeScreen
