import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import {
  Portal,
  Modal,
  Card,
  TextInput,
  Button,
  Divider,
  Text,
} from "react-native-paper";
import styles from "../styles";

export default function AddCustomerModal({
  visible,
  mode = "add", // add | view | edit
  customerForm,
  setCustomerForm,
  customers,
  setCustomers,
  selectedCustomer,
  setSelectedCustomer,
  setCustomerSearch,
  onClose,
}) {
  const readOnly = mode === "view";

  useEffect(() => {
    if ((mode === "view" || mode === "edit") && selectedCustomer) {
      setCustomerForm(selectedCustomer);
    }
  }, [mode, selectedCustomer]);

  const handleChange = (key, value) => {
    if (readOnly) return;
    setCustomerForm((prev) => ({ ...prev, [key]: value }));
  };

  const resetForm = () => {
    setCustomerForm({
      customerGroup: "Default",
      priceGroup: "Default",
      name: "",
      company: "",
      vatNumber: "",
      gstNumber: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
      customField1: "",
      customField2: "",
      customField3: "",
      customField4: "",
      customField5: "",
      customField6: "",
    });
  };

  const saveCustomer = () => {
    if (!customerForm.name.trim()) return;

    if (mode === "add") {
      const newCustomer = {
        id: Date.now(),
        ...customerForm,
      };
      setCustomers([...customers, newCustomer]);
      setSelectedCustomer(newCustomer);
      setCustomerSearch(newCustomer.name);
    }

    if (mode === "edit") {
      const updated = customers.map((c) =>
        c.id === customerForm.id ? customerForm : c
      );
      setCustomers(updated);
      setSelectedCustomer(customerForm);
      setCustomerSearch(customerForm.name);
    }

    onClose();
    resetForm();
  };

  const title =
    mode === "add"
      ? "Add Customer"
      : mode === "edit"
      ? "Edit Customer"
      : "View Customer";

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onClose} contentContainerStyle={styles.modalContainer}>
        <Card style={styles.modalCard}>
          <Card.Title title={title} />

          <ScrollView style={{ maxHeight: "85%" }} keyboardShouldPersistTaps="handled">
            <Card.Content>

              <Text style={styles.sectionHeader}>Basic Information</Text>

              <TextInput label="Customer Group *" dense value={customerForm.customerGroup} editable={!readOnly} onChangeText={(v) => handleChange("customerGroup", v)} style={styles.modalInput} />
              <TextInput label="Price Group" dense value={customerForm.priceGroup} editable={!readOnly} onChangeText={(v) => handleChange("priceGroup", v)} style={styles.modalInput} />
              <TextInput label="Name *" dense value={customerForm.name} editable={!readOnly} onChangeText={(v) => handleChange("name", v)} style={styles.modalInput} />
              <TextInput label="Company" dense value={customerForm.company} editable={!readOnly} onChangeText={(v) => handleChange("company", v)} style={styles.modalInput} />

              <Divider style={styles.divider} />

              <Text style={styles.sectionHeader}>Tax Details</Text>
              <TextInput label="VAT Number" dense value={customerForm.vatNumber} editable={!readOnly} onChangeText={(v) => handleChange("vatNumber", v)} style={styles.modalInput} />
              <TextInput label="GST Number" dense value={customerForm.gstNumber} editable={!readOnly} onChangeText={(v) => handleChange("gstNumber", v)} style={styles.modalInput} />

              <Divider style={styles.divider} />

              <Text style={styles.sectionHeader}>Contact</Text>
              <TextInput label="Email Address" dense value={customerForm.email} editable={!readOnly} onChangeText={(v) => handleChange("email", v)} style={styles.modalInput} />
              <TextInput label="Phone" dense value={customerForm.phone} editable={!readOnly} onChangeText={(v) => handleChange("phone", v)} style={styles.modalInput} />

              <Divider style={styles.divider} />

              <Text style={styles.sectionHeader}>Address</Text>
              <TextInput label="Address" dense multiline value={customerForm.address} editable={!readOnly} onChangeText={(v) => handleChange("address", v)} style={[styles.modalInput, { height: 80 }]} />

              <Divider style={styles.divider} />

              <Text style={styles.sectionHeader}>Custom Fields</Text>
              {["customField1","customField2","customField3","customField4","customField5","customField6"].map((f, i) => (
                <TextInput
                  key={f}
                  label={`Customer Custom Field ${i + 1}`}
                  dense
                  value={customerForm[f]}
                  editable={!readOnly}
                  onChangeText={(v) => handleChange(f, v)}
                  style={styles.modalInput}
                />
              ))}

              <View style={styles.modalBtnRow}>
                <Button mode="outlined" onPress={onClose}>Close</Button>

                {mode !== "view" && (
                  <Button mode="contained" onPress={saveCustomer}>
                    {mode === "add" ? "Save" : "Update"}
                  </Button>
                )}
              </View>

            </Card.Content>
          </ScrollView>
        </Card>
      </Modal>
    </Portal>
  );
}
