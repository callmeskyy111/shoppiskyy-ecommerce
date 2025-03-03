import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

function PaypalButton({ amount, onSuccess, onError }) {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
      }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            //intent: "CAPTURE", // ✅ Fix: Ensure intent is capture
            purchase_units: [{ amount: { value: amount.toString() } }], // ✅ Fix: Ensure amount is a string/number
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={(err) => {
          console.error("PayPal Error:", err);
          onError(err);
        }}
      />
    </PayPalScriptProvider>
  );
}

export default PaypalButton;
