import React from "react";
import { Text } from "react-native";
import { BarChart, PieChart } from "react-native-chart-kit";
import styles from "../styles/styles";

export default function ChartsSection({ screenWidth }) {
  return (
    <>
      <Text style={styles.sectionTitle}>Monthly Orders</Text>

      <BarChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
          datasets: [{ data: [40, 55, 28, 80, 99] }],
        }}
        width={screenWidth - 20}
        height={220}
        chartConfig={{
          backgroundColor: "#1d4ed8",
          backgroundGradientFrom: "#60a5fa",
          backgroundGradientTo: "#1d4ed8",
          decimalPlaces: 0,
          color: () => "#fff",
          labelColor: () => "#fff",
        }}
        style={styles.chartStyle}
      />

      <Text style={styles.sectionTitle}>Order Status Breakdown</Text>

      <PieChart
        data={[
          { name: "Approved", population: 18, color: "#22c55e", legendFontColor: "#0f172a", legendFontSize: 12 },
          { name: "Pending", population: 7, color: "#eab308", legendFontColor: "#0f172a", legendFontSize: 12 },
          { name: "Rejected", population: 7, color: "#ef4444", legendFontColor: "#0f172a", legendFontSize: 12 },
        ]}
        width={screenWidth - 20}
        height={220}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft={15}
        chartConfig={{
          color: () => "#000",
          labelColor: () => "#000",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
        }}
      />
    </>
  );
}
