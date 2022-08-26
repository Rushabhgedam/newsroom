import React from 'react';
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from 'native-base';
import { localNotificationService } from '../notif/LocalNotificationService';


function AppBar() {
    return <>
        <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
        <Box safeAreaTop bg="#6200ee" />
        <HStack bg="#6200ee" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
          <HStack alignItems="center">
            <IconButton icon={<Icon size="sm"  name="menu" color="white" />} />
            <Text onPress={()=> localNotificationService.showNotification(1,"Local Notification test", "bsefhbshbfhsbf")} color="white" fontSize="20" fontWeight="bold">
              Home
            </Text>
          </HStack>
          <HStack>
            <IconButton icon={<Icon name="favorite" size="sm" color="white" />} />
            <IconButton icon={<Icon name="search" size="sm" color="white" />} />
            <IconButton icon={<Icon name="more-vert" size="sm" color="white" />} />
          </HStack>
        </HStack>
      </>;
  }
  

  export default AppBar;