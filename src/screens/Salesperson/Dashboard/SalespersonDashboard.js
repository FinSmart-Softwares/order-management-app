import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DashboardHeader from "./components/DashboardHeader";
import LogoutMenu from "./components/LogoutMenu";
import SearchBar from "./components/SearchBar";
import QuickActions from "./components/QuickActions";
import UpcomingVisits from "./components/UpcomingVisits";
import SummarySection from "./components/SummarySection";

// ✅ IMPORT DATA HERE
import {
  orderSummaryData,
  visitSummaryData,
} from "./data/summaryData";

import styles from "./styles/dashboardStyles";

export default function SalespersonDashboard({ setIsLoggedIn }) {
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <DashboardHeader
        onProfilePress={() => setShowMenu(!showMenu)}
      />

      {showMenu && (
        <LogoutMenu
          onProfile={() => {
            setShowMenu(false);
            navigation.navigate("Profile");
          }}
          onLogout={() => {
            setShowMenu(false);
            setIsLoggedIn(false);
          }}
        />
      )}

      <SearchBar />

      {/* ✅ ORDER SUMMARY */}
      <SummarySection
        title="Order Summary"
        data={orderSummaryData}
      />

      {/* ✅ VISIT SUMMARY */}
      <SummarySection
        title="Visit Summary"
        data={visitSummaryData}
      />

      <QuickActions navigation={navigation} />
      <UpcomingVisits />
    </ScrollView>
  );
}
