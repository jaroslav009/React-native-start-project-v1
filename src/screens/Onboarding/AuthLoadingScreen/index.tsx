import React, { useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import OnboardingNavigator from 'navigation/OnboardingNavigator'
import {
  navigationRef,
  isMountedRef,
} from 'navigation/helpers/NavigationService'

const AuthLoadingScreen = () => {
  useEffect(() => {
    isMountedRef.current = true
  }, [])
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        colors: {
          background: '#fff',
        },
      }}
    >
      <OnboardingNavigator />
    </NavigationContainer>
  )
}
export default AuthLoadingScreen
