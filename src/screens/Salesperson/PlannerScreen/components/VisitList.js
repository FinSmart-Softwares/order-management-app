import React from "react";
import { FlatList, Text } from "react-native";
import VisitCard from "./VisitCard";
import styles from "../styles/plannerStyles";

export default function VisitList({
  visits,
  openMenuFor,
  setOpenMenuFor,
  updateStatus,
  onOpenDetails, // 🔹 new prop for card click
}) {
  if (visits.length === 0) {
    return <Text style={styles.emptyText}>No visits scheduled.</Text>;
  }

  return (
    <FlatList
      data={visits}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <VisitCard
          item={item}
          isMenuOpen={openMenuFor === item.id}
          onToggle={() =>
            setOpenMenuFor(openMenuFor === item.id ? null : item.id)
          }
          updateStatus={updateStatus}
          onOpenDetails={onOpenDetails} // 🔹 pass it to VisitCard
        />
      )}
    />
  );
}
