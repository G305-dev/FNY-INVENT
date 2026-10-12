export const articles = [
  {
    slug: "barcode-scanners",
    title: "Do you support barcode scanners?",
    body: "Yes. USB and Bluetooth scanners that type like a keyboard work on the POS search field. You can also type a barcode by hand. Camera scanning is later.",
  },
  {
    slug: "cashier-permissions",
    title: "Can my cashier see cost price?",
    body: "No by default. Cashiers use POS and the sales they need. Cost, stock adjustment and full reports stay with owner and manager unless you change a role later.",
  },
  {
    slug: "subscription-expiry",
    title: "What happens when the year ends?",
    body: "Paystack and a server webhook confirm payment. If the plan lapses, the business is restricted according to product rules — the till does not keep running unpaid.",
  },
  {
    slug: "many-shops",
    title: "Is my shop’s data mixed with another business?",
    body: "No. Every product, sale, customer and staff row carries a business id taken from the signed-in session, never from a field the browser can edit.",
  },
];
