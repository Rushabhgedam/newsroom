/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Box,
} from 'native-base';
import NativeBaseIcon from '../components/NativeBaseIcon';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreen from '../screens/FeedScreen';
import { fcmService } from '../notif/FCMService';
import { localNotificationService } from '../notif/LocalNotificationService';
import { AsyncStorage } from 'react-native';
import DetailsScreen from '../screens/DetailsScreen';


const Stack = createStackNavigator()


const App = () => {


  useEffect(()=>{
    setupNotification()
  },[])

  const setupNotification = async() =>{
    let accessToken: any = await AsyncStorage.getItem('USER_FCM_TOKEN')
    if (!accessToken) {
      try {
        console.log('@@@ FCM Try Log ==========');
        fcmService.register(
          (token: any) => onRegister(token),
          (notify: any) => onNotification(notify),
          (notify: any) => onOpenNotification(notify),
        );
        localNotificationService.configure((notify: any) =>
          onOpenNotification(notify),
        );
      } catch (error) {
        console.log('@@@ FCM Error ==========', error);
      }
    }
  }

  const onRegister = (token:any) => { 
    console.log(token)

  }
  const onNotification = (notify:any)=>{
    let uniquedNotifId = Math.floor(Math.random() * 1000 + 1);
    const options = {
      soundName: 'default',
      playSound: true,
    };
    localNotificationService.showNotification(
      uniquedNotifId,
      notify.title,
      notify.message,
      notify,
      options,
    );
  }
  const onOpenNotification = (notify:any) => {
  
   }

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name='feedscreen' component={FeedScreen}/>
          <Stack.Screen name='detailsscreen' component={DetailsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
