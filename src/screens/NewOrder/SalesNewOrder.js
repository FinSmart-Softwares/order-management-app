import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import {
  TextInput,
  Button,
  Card,
  Text,
  Menu,
  Divider,
  Modal,
  Portal,
} from "react-native-paper";
import DatePicker from "react-native-date-picker";
import { pick, types, isCancel } from "@react-native-documents/picker";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SalesNewOrder() {
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [addCustomerVisible, setAddCustomerVisible] = useState(false);
  const [customerSearch, setCustomerSearch] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [viewCustomerVisible, setViewCustomerVisible] = useState(false);
  const [editCustomerVisible, setEditCustomerVisible] = useState(false);

  const [biller, setBiller] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [customer, setCustomer] = useState("");
  const [discount, setDiscount] = useState("");
  const [shipping, setShipping] = useState("");
  const [orderTax, setOrderTax] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");

  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);

  const [searchCustomer, setSearchCustomer] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const [note, setNote] = useState("");
  const [attachment, setAttachment] = useState(null);

  const [billerMenu, setBillerMenu] = useState(false);
  const [warehouseMenu, setWarehouseMenu] = useState(false);
  const [customerMenu, setCustomerMenu] = useState(false);
  const [orderTaxMenu, setOrderTaxMenu] = useState(false);
  const [orderStatusMenu, setOrderStatusMenu] = useState(false);
  const [paymentTermMenu, setPaymentTermMenu] = useState(false);
  const [paymentStatusMenu, setPaymentStatusMenu] = useState(false);
  const [addProductVisible, setAddProductVisible] = useState(false);

  // ⭐️ UPDATED: Extended customerForm state to include all fields from the image
  const [customerForm, setCustomerForm] = useState({
    customerGroup: "Default", // New field (assuming default for simplicity)
    name: "",
    company: "",
    vatNumber: "", // New field
    gstNumber: "", // New field
    email: "",
    phone: "",
    address: "",
    city: "", // New field
    state: "", // New field
    country: "", // New field
    postalCode: "", // New field
    priceGroup: "Default", // New field (assuming default for simplicity)
    customField1: "", // New field
    customField2: "", // New field
    customField3: "", // New field
    customField4: "", // New field
    customField5: "", // New field
    customField6: "", // New field
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([
    { id: 1, name: "Insecticide 100ml", price: 120 },
    { id: 2, name: "Herbicide 250ml", price: 180 },
    { id: 3, name: "Fertilizer Pack 1kg", price: 220 },
  ]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [referenceNo, setReferenceNo] = useState("");

  // Function to generate auto reference number
  const generateRefNo = () => {
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    return `REF${randomNumber}`;
  };

  const calculateTotals = () => {
    const itemsTotal = selectedProducts.reduce(
      (sum, p) => sum + p.subtotal,
      0
    );
    const orderTaxValue = (itemsTotal * (parseFloat(orderTax || 0) / 100));
    const grandTotal =
      itemsTotal - parseFloat(discount || 0) + orderTaxValue + parseFloat(shipping || 0);
    return { itemsTotal, orderTaxValue, grandTotal };
  };

  useEffect(() => {
    if (customerSearch.trim() === "") {
      setFilteredCustomers(customers);
    } else {
      const result = customers.filter((c) =>
        c.name.toLowerCase().includes(customerSearch.toLowerCase())
      );
      setFilteredCustomers(result);
    }
  }, [customerSearch, customers]);

  // Generate reference on first render
  useEffect(() => {
    setReferenceNo(generateRefNo());
  }, []);

  const pickAttachment = async () => {
    try {
      const [res] = await pick({
        type: [types.allFiles],
      });
      setAttachment(res);
    } catch (err) {
      if (isCancel(err)) return;
      else console.error(err);
    }
  };

  const resetForm = () => {
    setBiller("");
    setWarehouse("");
    setCustomer("");
    setDiscount("");
    setShipping("");
    setOrderTax("");
    setOrderStatus("");
    setPaymentTerm("");
    setPaymentStatus("");
    setNote("");
    setAttachment(null);
    setDate(new Date());
  };

  const submitForm = () => {
    console.log({
      date,
      biller,
      warehouse,
      customer,
      discount,
      shipping,
      orderTax,
      orderStatus,
      paymentTerm,
      paymentStatus,
      note,
      attachment,
      referenceNo,
      selectedProducts,
    });
  };

  // Helper function for updating customer form fields
  const handleCustomerFormChange = (field, value) => {
    setCustomerForm((prev) => ({ ...prev, [field]: value }));
  };

  // Helper function to reset the customer form state
  const resetCustomerForm = () => {
    setCustomerForm({
      customerGroup: "Default",
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
      priceGroup: "Default",
      customField1: "",
      customField2: "",
      customField3: "",
      customField4: "",
      customField5: "",
      customField6: "",
    });
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* ---------- FIXED HEADER ---------- */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Sales Order</Text>
        <TouchableOpacity onPress={submitForm}>
          <Text style={styles.headerSave}>💾 Save</Text>
        </TouchableOpacity>
      </View>

      {/* ---------- FORM CONTENT ---------- */}
      <ScrollView
        style={styles.container}
        contentContainerStyle={[styles.content, { paddingBottom: 120 }]} // add extra space
        showsVerticalScrollIndicator={false}
      >
        <Card style={styles.card}>
          <Card.Content>
            {/* DATE + REFERENCE ROW */}
            <View style={styles.dateRow}>
              {/* DATE BOX */}
              <TouchableOpacity
                onPress={() => setOpenDate(true)}
                style={styles.dateBox}
              >
                <Text style={[styles.flatInputText, { paddingVertical: 10 }]}>
                  {date.toDateString()}
                </Text>
                <TouchableOpacity onPress={() => setOpenDate(true)}>
                  <Ionicons name="create-outline" size={20} color="#000" />
                </TouchableOpacity>
              </TouchableOpacity>

              {/* REFERENCE BOX */}
              <View style={styles.refBox}>
                <Ionicons name="document-outline" size={20} color="#555" />
                <TextInput
                  placeholder="Reference No"
                  mode="flat"
                  underlineColor="transparent"
                  style={styles.refInput}
                  contentStyle={{ paddingVertical: 0 }}
                  value={referenceNo}
                  onChangeText={setReferenceNo}
                />
                <TouchableOpacity
                  onPress={() => setReferenceNo(generateRefNo())}
                >
                  <Ionicons name="refresh-outline" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            </View>

            {/* DATE PICKER MODAL */}
            <DatePicker
              modal
              open={openDate}
              date={date}
              onConfirm={(d) => {
                setOpenDate(false);
                setDate(d);
              }}
              onCancel={() => setOpenDate(false)}
            />

            {/* Add customer search/select area */}
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontSize: 16, marginBottom: 5 }}>Search Customer *</Text>

              <Card style={{ padding: 10 }}>
                {/* TOP ROW → Search box + icons */}
                <View style={{ flexDirection: "row", alignItems: "center" }}>

                  {/* SEARCH INPUT */}
                  <TextInput
                    mode="flat"
                    placeholder="Search Customer"
                    value={customerSearch}
                    onChangeText={(text) => {
                      setCustomerSearch(text);
                      setDropdownVisible(true);
                    }}
                    style={{ flex: 1, backgroundColor: "transparent" }}
                  />

                  {/* VIEW ICON */}
                  <TouchableOpacity
                    style={{ marginHorizontal: 5 }}
                    onPress={() => {
                      if (!selectedCustomer) return;  // no customer selected
                      setViewCustomerVisible(true);  // open modal
                    }}
                  >
                    <Ionicons name="eye-outline" size={22} />
                  </TouchableOpacity>


                  {/* EDIT ICON */}
                  <TouchableOpacity
                    style={{ marginHorizontal: 5 }}
                    onPress={() => {
                      if (!selectedCustomer) return;

                      // Load selected customer data into form
                      setCustomerForm(selectedCustomer);

                      setEditCustomerVisible(true);
                    }}
                  >
                    <Ionicons name="create-outline" size={22} />
                  </TouchableOpacity>


                  {/* ADD ICON → OPENS MODAL */}
                  <TouchableOpacity
                    style={{ marginHorizontal: 5 }}
                    onPress={() => {
                      resetCustomerForm(); // Reset form when opening to add a new one
                      setAddCustomerVisible(true);
                    }}
                  >
                    <Ionicons name="add-circle-outline" size={26} />
                  </TouchableOpacity>
                </View>

                {/* DROPDOWN LIST */}
                {dropdownVisible && (
                  <View
                    style={{
                      marginTop: 10,
                      backgroundColor: "#fff",
                      borderRadius: 8,
                      elevation: 3,
                      maxHeight: 150,
                    }}
                  >
                    <ScrollView>
                      {customers
                        .filter((c) =>
                          c.name.toLowerCase().includes(customerSearch.toLowerCase())
                        )
                        .map((item) => (
                          <TouchableOpacity
                            key={item.id}
                            onPress={() => {
                              setSelectedCustomer(item);
                              setCustomerSearch(item.name);
                              setDropdownVisible(false);
                            }}
                            style={{
                              padding: 10,
                              borderBottomWidth: 1,
                              borderColor: "#eee",
                            }}
                          >
                            <Text>{item.name}</Text>
                          </TouchableOpacity>
                        ))}

                    </ScrollView>
                  </View>
                )}
              </Card>
            </View>



            {/* 🔍 PRODUCT SEARCH */}
            <View style={styles.productSearchContainer}>
              <View style={styles.productSearchBox}>
                <Ionicons
                  name="search-outline"
                  size={20}
                  color="#555"
                  style={{ marginRight: 8 }}
                />
                <TextInput
                  placeholder="Search products..."
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  style={styles.productSearchInput}
                />
              </View>

              <TouchableOpacity
                onPress={() => setAddProductVisible(true)}
                style={styles.addProductBtn}
              >
                <Ionicons
                  name="add-circle-outline"
                  size={26}
                  color="#4CAF50"
                />
              </TouchableOpacity>
            </View>

            {/* 🧾 FILTERED PRODUCT LIST */}
            {searchQuery.trim() !== "" && (
              <FlatList
                style={{ maxHeight: 200 }}
                data={products.filter((item) =>
                  item.name.toLowerCase().includes(searchQuery.toLowerCase())
                )}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.productRow}>
                    <View>
                      <Text style={styles.productName}>{item.name}</Text>
                      <Text style={styles.productPrice}>₹{item.price}</Text>
                    </View>
                    <Button
                      mode="outlined"
                      compact
                      onPress={() => {
                        const productWithDefaults = {
                          ...item,
                          qty: 1,
                          discount: 0,
                          tax: 0,
                          subtotal: item.price,
                        };
                        setSelectedProducts([...selectedProducts, productWithDefaults]);
                      }}
                    >
                      Add
                    </Button>
                  </View>
                )}
              />
            )}

            {/* information show */}



            {selectedProducts.length > 0 && (
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontWeight: "600", fontSize: 16, marginBottom: 8 }}>
                  Order Items
                </Text>

                {/* Header Row */}
                <View style={styles.tableHeader}>
                  {["Product", "S no", "Price", "Qty", "Disc%", "Tax%", "Subtotal"].map((h, i) => (
                    <Text key={i} style={styles.tableHeaderText}>{h}</Text>
                  ))}
                  {/* The delete column header is now a separate View with fixed width */}
                  <View style={styles.deleteColumn}>
                    <Ionicons
                      name="trash"
                      size={20} // Use consistent size 20
                      color="#e12525ff"
                    />
                  </View>
                </View>

                {/* Product Rows */}
                {selectedProducts.map((item, index) => (
                  <View key={index} style={styles.tableRow}>
                    {/* Note: tableCell now has paddingHorizontal: 6 in styles object */}
                    <Text style={styles.tableCell}>{item.name}</Text>
                    <TextInput
                      style={styles.tableInput}
                      placeholder="SN"
                      value={item.serialNo}
                      onChangeText={(val) => {
                        const updated = [...selectedProducts];
                        updated[index].serialNo = val;
                        setSelectedProducts(updated);
                      }}
                    />
                    <Text style={styles.tableCell}>{item.price.toFixed(2)}</Text>
                    <TextInput
                      style={styles.tableInput}
                      keyboardType="numeric"
                      value={item.qty.toString()}
                      onChangeText={(val) => { /* ... update logic ... */ }}
                    />
                    <TextInput
                      style={styles.tableInput}
                      keyboardType="numeric"
                      value={item.discount.toString()}
                      onChangeText={(val) => { /* ... update logic ... */ }}
                    />
                    <Text style={styles.tableCell}>{item.tax}%</Text>
                    <Text style={styles.tableCell}>{item.subtotal.toFixed(2)}</Text>

                    {/* The delete button is wrapped in the fixed-width container */}
                    <TouchableOpacity
                      onPress={() => {
                        const updated = selectedProducts.filter((_, i) => i !== index);
                        setSelectedProducts(updated);
                      }}
                      style={styles.deleteColumn} // Apply the fixed width style here
                    >
                      <Ionicons name="close-circle-outline" size={20} color="red" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}





            {/* 🪄 ADD PRODUCT MODAL */}
            <Portal>
              <Modal
                visible={addProductVisible}
                onDismiss={() => setAddProductVisible(false)}
                contentContainerStyle={styles.modalContainer}
              >
                <Card>
                  <Card.Title title="Add Product Manually" />
                  <Card.Content>
                    <TextInput label="Product Code *" style={styles.modalInput} />
                    <TextInput label="Product Name *" style={styles.modalInput} />
                    <TextInput
                      label="Product Tax (%)"
                      style={styles.modalInput}
                      keyboardType="numeric"
                    />
                    <TextInput
                      label="Quantity *"
                      style={styles.modalInput}
                      keyboardType="numeric"
                    />
                    <TextInput label="Unit *" style={styles.modalInput} />
                    <TextInput
                      label="Product Discount (%)"
                      style={styles.modalInput}
                      keyboardType="numeric"
                    />
                    <TextInput
                      label="Unit Price (₹)"
                      style={styles.modalInput}
                      keyboardType="numeric"
                    />
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 10,
                      }}
                    >
                      <Button
                        mode="contained"
                        onPress={() => setAddProductVisible(false)}
                      >
                        Submit
                      </Button>
                      <Button onPress={() => setAddProductVisible(false)}>
                        Cancel
                      </Button>
                    </View>
                  </Card.Content>
                </Card>
              </Modal>
            </Portal>

            <Divider style={styles.divider} />

            {/* PAYMENT TERM */}
            <View style={styles.flatInputContainer}>
              <Ionicons name="time-outline" size={20} color="#555" />
              <TextInput
                placeholder="Payment Term (e.g., 30 Days)"
                value={paymentTerm}
                onChangeText={setPaymentTerm}
                style={styles.flatInput}
              />
            </View>
            <Divider style={styles.divider} />

            {/* ORDER TAX */}
            <Menu
              visible={orderTaxMenu}
              onDismiss={() => setOrderTaxMenu(false)}
              anchor={
                <TouchableOpacity
                  onPress={() => setOrderTaxMenu(true)}
                  style={styles.flatInputContainer}
                >
                  <Ionicons name="cash-outline" size={20} color="#555" />
                  <Text style={styles.flatInputText}>
                    {orderTax || "Select Order Tax"}
                  </Text>
                  <Ionicons name="chevron-down" size={18} color="#888" />
                </TouchableOpacity>
              }
            >
              <Menu.Item onPress={() => setOrderTax("5%")} title="5%" />
              <Menu.Item onPress={() => setOrderTax("10%")} title="10%" />
              <Menu.Item onPress={() => setOrderTax("18%")} title="18%" />
            </Menu>
            <Divider style={styles.divider} />

            {/* ORDER STATUS */}
            <Menu
              visible={orderStatusMenu}
              onDismiss={() => setOrderStatusMenu(false)}
              anchor={
                <TouchableOpacity
                  onPress={() => setOrderStatusMenu(true)}
                  style={styles.flatInputContainer}
                >
                  <Ionicons name="cube-outline" size={20} color="#555" />
                  <Text style={styles.flatInputText}>
                    {orderStatus || "Select Order Status"}
                  </Text>
                  <Ionicons name="chevron-down" size={18} color="#888" />
                </TouchableOpacity>
              }
            >
              <Menu.Item onPress={() => setOrderStatus("Pending")} title="Pending" />
              <Menu.Item
                onPress={() => setOrderStatus("Completed")}
                title="Completed"
              />
              <Menu.Item
                onPress={() => setOrderStatus("Cancelled")}
                title="Cancelled"
              />
            </Menu>
            <Divider style={styles.divider} />

            {/* PAYMENT STATUS */}
            <Menu
              visible={paymentStatusMenu}
              onDismiss={() => setPaymentStatusMenu(false)}
              anchor={
                <TouchableOpacity
                  onPress={() => setPaymentStatusMenu(true)}
                  style={styles.flatInputContainer}
                >
                  <Ionicons name="card-outline" size={20} color="#555" />
                  <Text style={styles.flatInputText}>
                    {paymentStatus || "Select Payment Status"}
                  </Text>
                  <Ionicons name="chevron-down" size={18} color="#888" />
                </TouchableOpacity>
              }
            >
              <Menu.Item onPress={() => setPaymentStatus("Due")} title="Due" />
              <Menu.Item
                onPress={() => setPaymentStatus("Pending")}
                title="Pending"
              />
              <Menu.Item onPress={() => setPaymentStatus("Paid")} title="Paid" />
            </Menu>
            <Divider style={styles.divider} />

            {/* ATTACHMENT */}
            <TouchableOpacity
              onPress={pickAttachment}
              style={styles.flatInputContainer}
            >
              <Ionicons name="attach-outline" size={20} color="#555" />
              <Text
                style={[
                  styles.flatInputText,
                  {
                    borderBottomWidth: 1,
                    borderBottomColor: "#b7b5b5ff",
                    paddingVertical: 12,
                  },
                ]}
              >
                {attachment ? attachment.name : "Upload Attachment"}
              </Text>
            </TouchableOpacity>

            {/* DISCOUNT */}
            <View style={styles.flatInputContainer}>
              <Ionicons name="pricetag-outline" size={20} color="#555" />
              <TextInput
                placeholder="Order Discount (%)"
                keyboardType="numeric"
                value={discount}
                onChangeText={setDiscount}
                style={styles.flatInput}
              />
            </View>
            <Divider style={styles.divider} />

            {/* SHIPPING */}
            <View style={styles.flatInputContainer}>
              <Ionicons name="boat-outline" size={20} color="#555" />
              <TextInput
                placeholder="Shipping (₹)"
                keyboardType="numeric"
                value={shipping}
                onChangeText={setShipping}
                style={styles.flatInput}
              />
            </View>
            <Divider style={styles.divider} />

            {/* NOTE */}
            <View style={styles.flatInputContainer}>
              <Ionicons name="create-outline" size={20} color="#555" />
              <TextInput
                placeholder="Order Note"
                multiline
                numberOfLines={3}
                value={note}
                onChangeText={setNote}
                style={[styles.flatInput, { height: 80 }]}
              />
            </View>
            <Divider style={styles.divider} />


            {/* Totals */}
            {(() => {
              const { itemsTotal, orderTaxValue, grandTotal } = calculateTotals();
              return (
                <View style={styles.totalBox}>
                  <Text>Total: ₹{itemsTotal.toFixed(2)}</Text>
                  <Text>Order Tax: ₹{orderTaxValue.toFixed(2)}</Text>
                  <Text>Shipping: ₹{shipping || 0}</Text>
                  <Text>Grand Total: ₹{grandTotal.toFixed(2)}</Text>
                </View>
              );
            })()}
            {/* BUTTONS */}
            <View style={styles.btnRow}>
              <Button mode="contained" onPress={submitForm} style={styles.flexBtn}>
                Submit
              </Button>
              <Button
                mode="contained-tonal"
                onPress={resetForm}
                style={styles.flexBtn}
              >
                Reset
              </Button>
            </View>
          </Card.Content>
        </Card>

        {/* ⭐️ UPDATED: Add Customer Modal with all fields from the image */}
        <Portal>
          <Modal
            visible={addCustomerVisible}
            onDismiss={() => setAddCustomerVisible(false)}
            contentContainerStyle={styles.modalContainer}
          >
            <Card>
              <Card.Title title="Add Customer" />
                <ScrollView style={styles.modalContentScroll}>
              <Card.Content>
                {/* 2-Column Layout Simulation (Using View for grouping for better mobile display) */}

                <Text style={styles.sectionHeader}>Basic Information</Text>

                {/* Customer Group (Dropdown/Select, keeping as TextInput for simplicity) */}
                <TextInput
                  label="Customer Group *"
                  value={customerForm.customerGroup}
                  onChangeText={(text) => handleCustomerFormChange("customerGroup", text)}
                  style={styles.modalInput}
                />

                {/* Price Group (Dropdown/Select) */}
                <TextInput
                  label="Price Group"
                  value={customerForm.priceGroup}
                  onChangeText={(text) => handleCustomerFormChange("priceGroup", text)}
                  style={styles.modalInput}
                />

                {/* Name */}
                <TextInput
                  label="Name *"
                  value={customerForm.name}
                  onChangeText={(text) => handleCustomerFormChange("name", text)}
                  style={styles.modalInput}
                />

                {/* Company */}
                <TextInput
                  label="Company"
                  value={customerForm.company}
                  onChangeText={(text) => handleCustomerFormChange("company", text)}
                  style={styles.modalInput}
                />

                {/* VAT Number */}
                <TextInput
                  label="VAT Number"
                  value={customerForm.vatNumber}
                  onChangeText={(text) => handleCustomerFormChange("vatNumber", text)}
                  style={styles.modalInput}
                />

                {/* GST Number */}
                <TextInput
                  label="GST Number"
                  value={customerForm.gstNumber}
                  onChangeText={(text) => handleCustomerFormChange("gstNumber", text)}
                  style={styles.modalInput}
                />

                {/* Email Address */}
                <TextInput
                  label="Email Address"
                  value={customerForm.email}
                  onChangeText={(text) => handleCustomerFormChange("email", text)}
                  keyboardType="email-address"
                  style={styles.modalInput}
                />

                {/* Phone */}
                <TextInput
                  label="Phone"
                  value={customerForm.phone}
                  onChangeText={(text) => handleCustomerFormChange("phone", text)}
                  keyboardType="phone-pad"
                  style={styles.modalInput}
                />

                <Divider style={{ marginVertical: 10 }} />
                <Text style={styles.sectionHeader}>Address Information</Text>

                {/* Address */}
                <TextInput
                  label="Address"
                  value={customerForm.address}
                  onChangeText={(text) => handleCustomerFormChange("address", text)}
                  multiline
                  numberOfLines={3}
                  style={[styles.modalInput, { height: 80 }]}
                />

                {/* City */}
                <TextInput
                  label="City"
                  value={customerForm.city}
                  onChangeText={(text) => handleCustomerFormChange("city", text)}
                  style={styles.modalInput}
                />

                {/* State (Dropdown/Select) */}
                <TextInput
                  label="State (Select)" // Assuming it's a dropdown, using TextInput for now
                  value={customerForm.state}
                  onChangeText={(text) => handleCustomerFormChange("state", text)}
                  style={styles.modalInput}
                />

                {/* Country */}
                <TextInput
                  label="Country"
                  value={customerForm.country}
                  onChangeText={(text) => handleCustomerFormChange("country", text)}
                  style={styles.modalInput}
                />

                {/* Postal Code */}
                <TextInput
                  label="Postal Code"
                  value={customerForm.postalCode}
                  onChangeText={(text) => handleCustomerFormChange("postalCode", text)}
                  keyboardType="numeric"
                  style={styles.modalInput}
                />

                <Divider style={{ marginVertical: 10 }} />
                <Text style={styles.sectionHeader}>Custom Fields</Text>

                {/* Custom Customer Fields */}
                <TextInput
                  label="Custom Customer Field 1"
                  value={customerForm.customField1}
                  onChangeText={(text) => handleCustomerFormChange("customField1", text)}
                  style={styles.modalInput}
                />
                <TextInput
                  label="Custom Customer Field 2"
                  value={customerForm.customField2}
                  onChangeText={(text) => handleCustomerFormChange("customField2", text)}
                  style={styles.modalInput}
                />
                <TextInput
                  label="Custom Customer Field 3"
                  value={customerForm.customField3}
                  onChangeText={(text) => handleCustomerFormChange("customField3", text)}
                  style={styles.modalInput}
                />
                <TextInput
                  label="Custom Customer Field 4"
                  value={customerForm.customField4}
                  onChangeText={(text) => handleCustomerFormChange("customField4", text)}
                  style={styles.modalInput}
                />
                <TextInput
                  label="Custom Customer Field 5"
                  value={customerForm.customField5}
                  onChangeText={(text) => handleCustomerFormChange("customField5", text)}
                  style={styles.modalInput}
                />
                <TextInput
                  label="Custom Customer Field 6"
                  value={customerForm.customField6}
                  onChangeText={(text) => handleCustomerFormChange("customField6", text)}
                  style={styles.modalInput}
                />


                {/* BUTTONS */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 20,
                  }}
                >
                  {/* SAVE CUSTOMER BUTTON */}
                  <Button
                    mode="contained"
                    onPress={() => {
                      if (!customerForm.name.trim() || !customerForm.customerGroup.trim()) return;

                      const newCustomer = {
                        id: Date.now(),
                        ...customerForm // Spread all fields
                      };

                      setCustomers([...customers, newCustomer]);
                      setSelectedCustomer(newCustomer);
                      setCustomerSearch(newCustomer.name);
                      setAddCustomerVisible(false);
                      setDropdownVisible(false);

                      resetCustomerForm();
                    }}

                  >
                    Add Customer
                  </Button>

                  <Button onPress={() => setAddCustomerVisible(false)}>
                    Cancel
                  </Button>
                </View>
              </Card.Content>
              </ScrollView>
            </Card>
          </Modal>
        </Portal>

      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },

  /* ---------- HEADER ---------- */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#fff",
    elevation: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },
  headerSave: {
    fontSize: 15,
    fontWeight: "600",
    color: "#007BFF",
  },

  /* ---------- FORM ---------- */
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  content: {
    paddingBottom: 50,
  },
  card: {
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "#fff",
    elevation: 3,
  },

  /* ---------- DATE ROW ---------- */
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  dateBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 10,
  },
  refBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  refInput: {
    flex: 1,
    backgroundColor: "transparent",
    marginLeft: 6,
  },

  flatInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  flatInputText: {
    flex: 1,
    fontSize: 15,
    marginLeft: 8,
  },
  flatInput: {
    flex: 1,
    backgroundColor: "transparent",
    marginLeft: 8,
  },

  divider: {
    marginVertical: 8,
    backgroundColor: "#ddd",
  },

  /* ---------- PRODUCT SEARCH ---------- */
  productSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  productSearchBox: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  productSearchInput: {
    flex: 1,
    backgroundColor: "transparent",
  },
  addProductBtn: {
    marginLeft: 10,
    padding: 5,
  },

  /* ---------- PRODUCT LIST ---------- */
  productRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 8,
    elevation: 2,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
  },
  productPrice: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },

  /* ---------- TABLE ---------- */
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#eaeaea",
    paddingVertical: 8,
    borderRadius: 6,
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: "700",
    textAlign: "center",
    fontSize: 12,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: "#eee",
    alignItems: "center",
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
    fontSize: 13,
  },
  tableInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    height: 35,
    paddingHorizontal: 6,
    borderRadius: 5,
    textAlign: "center",
    backgroundColor: "#fff",
  },
  deleteColumn: {
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },

  /* ---------- TOTAL BOX ---------- */
  totalBox: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },

  /* ---------- BUTTON ROW ---------- */
  btnRow: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexBtn: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 5,
  },

  /* ---------- MODAL ---------- */
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginHorizontal: 20,
  },
  modalInput: {
    backgroundColor: "transparent",
    marginVertical: 8,
  },
  modalContentScroll: {
    maxHeight: 500,
  },
});
