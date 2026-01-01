import { useState, useEffect } from "react";

export function useSalesOrder() {
  /* ---------------- DATE & REF ---------------- */
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [referenceNo, setReferenceNo] = useState("");

  const generateRefNo = () =>
    `REF${Math.floor(1000 + Math.random() * 9000)}`;

  useEffect(() => {
    setReferenceNo(generateRefNo());
  }, []);

  /* ---------------- CUSTOMER ---------------- */
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customerSearch, setCustomerSearch] = useState("");

  const [customerModal, setCustomerModal] = useState({
    visible: false,
    mode: "add", // add | view | edit
  });

  const [customerForm, setCustomerForm] = useState({
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

  /* ---------------- PRODUCT ---------------- */
  const [products] = useState([
    { id: 1, name: "Insecticide 100ml", price: 120 },
    { id: 2, name: "Herbicide 250ml", price: 180 },
    { id: 3, name: "Fertilizer Pack 1kg", price: 220 },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [addProductVisible, setAddProductVisible] = useState(false);

  /* ---------------- ORDER META (🔥 MISSING FIX) ---------------- */
  const [paymentTerm, setPaymentTerm] = useState("");
  const [orderTax, setOrderTax] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [orderDiscount, setOrderDiscount] = useState("");
  const [shipping, setShipping] = useState("");

  /* ---------------- TOTALS ---------------- */
  const calculateTotals = () => {
    const itemsTotal = selectedProducts.reduce(
      (sum, p) => sum + (p.subtotal || 0),
      0
    );

    return {
      itemsTotal,
      orderTax,
      orderDiscount,
      shipping,
    };
  };

  /* ---------------- SUBMIT ---------------- */
  const submitForm = () => {
    console.log({
      date,
      referenceNo,
      selectedCustomer,
      selectedProducts,
      paymentTerm,
      orderTax,
      orderStatus,
      paymentStatus,
      orderDiscount,
      shipping,
    });
  };

  return {
    /* date */
    date,
    setDate,
    openDate,
    setOpenDate,
    referenceNo,
    setReferenceNo,

    /* customer */
    customers,
    setCustomers,
    selectedCustomer,
    setSelectedCustomer,
    customerSearch,
    setCustomerSearch,
    customerModal,
    setCustomerModal,
    customerForm,
    setCustomerForm,

    /* product */
    products,
    searchQuery,
    setSearchQuery,
    selectedProducts,
    setSelectedProducts,
    addProductVisible,
    setAddProductVisible,

    /* order meta ✅ */
    paymentTerm,
    setPaymentTerm,
    orderTax,
    setOrderTax,
    orderStatus,
    setOrderStatus,
    paymentStatus,
    setPaymentStatus,
    orderDiscount,
    setOrderDiscount,
    shipping,
    setShipping,

    /* totals & submit */
    calculateTotals,
    submitForm,
  };
}
