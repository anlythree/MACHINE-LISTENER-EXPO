import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import JPush from "jpush-react-native";
import {useEffect} from "react";

export default function RootLayout() {

    useEffect(()=>{
        console.log("进入配置页面");
        JPush.init({
            appKey: "5bf209ad3ea54ff8c4b0539e",
            production: true,
            channel: "default",
        });

        JPush.getRegistrationID((id) => {
            console.log("RegistrationID: ", id);
        });

        const onConnect = (res) => {
            console.log("监听回调", res);
        };

        JPush.addConnectEventListener(onConnect);

        console.log("进入配置页面2");

        return () => {
            JPush.removeListener(onConnect);
        };
    },[])

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
