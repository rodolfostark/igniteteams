import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_700Bold 
} from "@expo-google-fonts/roboto";

import { Loading } from "@/components/Loading";

import theme from "@/theme";

import { Groups } from "@screens/Groups";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent 
      />
      { fontsLoaded ? <Groups /> : <Loading /> }
    </ThemeProvider>
  );
}
