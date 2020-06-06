import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavigationService from 'navigation/helpers/NavigationService'
import { SvgXml } from 'react-native-svg'

import Logo from 'assets/images/logo.svg'
import logger from 'utils/logger'

const WelcomeScreen = () => (
  <SafeAreaView>
    <Logo />
    <Text onPress={() => NavigationService.navigate('SignIn')}>Welcome</Text>
  </SafeAreaView>
)

export default WelcomeScreen
