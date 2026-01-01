import React from "react";
import { View, ScrollView, StatusBar } from "react-native";
import { Card } from "react-native-paper";

import Header from "./components/Header";
import DateReferenceRow from "./components/DateReferenceRow";
import CustomerSelector from "./components/CustomerSelector";
import ProductSearch from "./components/ProductSearch";
import ProductTable from "./components/ProductTable";
import OrderMetaFields from "./components/OrderMetaFields";
import TotalsBox from "./components/TotalsBox";
import ActionButtons from "./components/ActionButtons";

import AddCustomerModal from "./modals/AddCustomerModal";
import AddProductModal from "./modals/AddProductModal";

import { useSalesOrder } from "./hooks/useSalesOrder";
import styles from "./styles";

export default function SalesNewOrderScreen() {
  const order = useSalesOrder();

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* HEADER */}
      <Header onSave={order.submitForm} />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 160 }}
        showsVerticalScrollIndicator={false}
      >
        <Card style={styles.card}>
          <Card.Content>

            {/* DATE + REF */}
            <DateReferenceRow {...order} />

            {/* CUSTOMER */}
            <CustomerSelector
              {...order}
              setCustomerModal={order.setCustomerModal}
            />

            {/* PRODUCT SEARCH */}
            <ProductSearch {...order} />

            {/* PRODUCT TABLE */}
            <ProductTable {...order} />

            {/* ORDER LEVEL FIELDS */}
            <OrderMetaFields {...order} />

            {/* TOTALS */}
            <TotalsBox {...order} />

            {/* ACTION BUTTONS */}
            <ActionButtons
              onSubmit={order.submitForm}
              onCancel={order.resetForm}
            />

          </Card.Content>
        </Card>
      </ScrollView>

      {/* ADD / EDIT CUSTOMER MODAL */}
      <AddCustomerModal
        visible={order.customerModal.visible}
        mode={order.customerModal.mode}
        customerForm={order.customerForm}
        setCustomerForm={order.setCustomerForm}
        customers={order.customers}
        setCustomers={order.setCustomers}
        selectedCustomer={order.selectedCustomer}
        setSelectedCustomer={order.setSelectedCustomer}
        setCustomerSearch={order.setCustomerSearch}
        onClose={() =>
          order.setCustomerModal({ visible: false, mode: "add" })
        }
      />

      {/* ADD PRODUCT MODAL */}
      <AddProductModal {...order} />
    </View>
  );
}
