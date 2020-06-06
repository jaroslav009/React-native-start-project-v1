import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { SIGNUP_ROUTES } from './helpers/routes'
import { RouteProp } from '@react-navigation/native'

import WelcomeScreen from 'screens/Onboarding/WelcomeScreen'
import SignIn from 'screens/Onboarding/SignIn'

type OnBoardingStackParamList = {
  [SIGNUP_ROUTES.WELCOME]: {
    isRegister: boolean
    resetPassword: boolean
    email: string
    auth: {
      firstName?: string
      lastName?: string
      email?: string
    }
  }
}
export interface OnBoardingRouteProps {
  route: RouteProp<OnBoardingStackParamList, 'Welcome'>
}

const Stack = createStackNavigator()

const OnboardingNavigator = () => (
  <Stack.Navigator
    initialRouteName={SIGNUP_ROUTES.WELCOME}
    screenOptions={{ gestureEnabled: false, animationEnabled: false }}
    headerMode="none"
  >
    <Stack.Screen name={SIGNUP_ROUTES.WELCOME} component={WelcomeScreen} />
    <Stack.Screen name={SIGNUP_ROUTES.SIGNIN} component={SignIn} />
  </Stack.Navigator>
)

export default OnboardingNavigator
