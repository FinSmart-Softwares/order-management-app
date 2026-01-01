import React, { useState } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import OrderSummary from "./components/OrderSummary";
import ChartsSection from "./components/ChartsSection";
import QuickActions from "./components/QuickActions";
import UpcomingVisits from "./components/UpcomingVisits";
import EngineersTimeline from "./components/EngineersTimeline";
import ProfileMenu from "./components/ProfileMenu";

import styles from "../../NewOrder/styles";

export default function ManagerDashboard({ setIsLoggedIn }) {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;
  const [profileMenuVisible, setProfileMenuVisible] = useState(false);

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <ScrollView style={styles.container}>

        <Header setProfileMenuVisible={setProfileMenuVisible} />

        <SearchBar />

        <OrderSummary />

        <ChartsSection screenWidth={screenWidth} />

        <QuickActions navigation={navigation} />

        <UpcomingVisits />

        <EngineersTimeline />

        {profileMenuVisible && (
          <ProfileMenu
            navigation={navigation}
            setIsLoggedIn={setIsLoggedIn}
            setProfileMenuVisible={setProfileMenuVisible}
          />
        )}

      </ScrollView>
    </View>
  );
}
