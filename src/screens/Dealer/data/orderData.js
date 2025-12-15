const orderData = [
  {
    id: "DLR-5001",
    date: "2025-12-02",
    total: "₹ 3,350",
    payment: "UPI",
    status: "Delivered",
    deliveryCharge: "₹150",
    tax: "₹120",
    discount: "₹200",
    address: "Shop No. 14, MG Road, Jaipur, Rajasthan",
    timeline: ["Placed", "Packed", "Shipped", "Delivered"],
    items: [
      { name: "Oil Bottle", qty: 4, price: "₹1000" },
      { name: "Masala Pack", qty: 5, price: "₹1250" },
      { name: "Rice Bag", qty: 1, price: "₹1000" },
    ],
  },

  {
    id: "DLR-5002",
    date: "2025-12-01",
    total: "₹ 1,150",
    payment: "COD",
    status: "Pending",
    deliveryCharge: "₹80",
    tax: "₹40",
    discount: "₹0",
    address: "Near Bus Stand, Sikar, Rajasthan",
    timeline: ["Placed", "Packed"],
    items: [
      { name: "Plastic Container", qty: 3, price: "₹450" },
      { name: "Oil Bottle", qty: 1, price: "₹250" },
      { name: "Masala Pack", qty: 2, price: "₹450" },
    ],
  },

  {
    id: "DLR-5003",
    date: "2025-11-29",
    total: "₹ 840",
    payment: "Card",
    status: "Cancelled",
    deliveryCharge: "₹0",
    tax: "₹30",
    discount: "₹50",
    address: "Near Railway Colony, Ajmer, Rajasthan",
    timeline: ["Placed", "Cancelled"],
    items: [
      { name: "Masala Pack", qty: 6, price: "₹840" },
    ],
  },
];

export default orderData;
