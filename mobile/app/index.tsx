import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/slices/userSlice";
import type { RootState } from "../store/index";

const Home = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <Stack.Screen
        //  Screen Header Styles
        options={{
          headerStyle: { backgroundColor: "white" },
          headerShadowVisible: false,
          // headerLeft: () => {}, // Shows on left side of screen title
          // headerRight: () => {}, // Shows on right side of screen title
          headerTitle: "", //Screen Title
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View>
            <Text>{user.email}</Text>
          </View>
          <View></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
