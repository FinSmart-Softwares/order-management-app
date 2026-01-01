import React from "react";
import { ScrollView, View } from "react-native";

import ProfileHeader from "./components/ProfileHeader";
import BasicInfoCard from "./components/BasicInfoCard";
import OrganizationCard from "./components/OrganizationCard";
import PerformanceCard from "./components/PerformanceCard";
import QuickActionsCard from "./components/QuickActionsCard";
import LogoutButton from "./components/LogoutButton";

import styles from "./styles/styles";

export default function SalespersonProfileScreen({ setIsLoggedIn }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ProfileHeader />

      <BasicInfoCard />
      <OrganizationCard />
      <PerformanceCard />
      <QuickActionsCard />

      <LogoutButton onLogout={() => setIsLoggedIn(false)} />

      <View style={{ height: 50 }} />
    </ScrollView>
  );
}
