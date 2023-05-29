import Navbar from "../Navbar";
import BillTable from "./BillTable";
import { useSelector } from "react-redux";
import "./styles.css";
import DeliveryAddress from "./DeliveryAddress";
import { Button } from "@mui/material";

const PaymentPage = () => {
  const cartItems = useSelector((state) => state.products);
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const user = useSelector((state) => state.user);
  const SERVER_URL = useSelector((state) => state.url);

  const confirmPayment = async () => {
    const products = cartItems.map((item) => {
      return {
        id: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      };
    });
    const response = await fetch(`${SERVER_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user._id,
        products,
        total: cartTotal,
        shippingAddress: user.address,
      }),
    });
    const order = await response.json();
  };

  return (
    <div id="payment-page">
      <Navbar />

      <div className="flex delivery-container">
        <DeliveryAddress />
        <div className="your-order">
          <h2 className="payment-h2">Your Order</h2>
          <BillTable />

          {/* imported from StorePage/CartArea */}
          <div className="order-total">
            <div className="cart-date">
              Date: {new Date().toLocaleDateString()}
            </div>
            SubTotal: ₹ <span id="cart-price">{cartTotal}</span>
          </div>

          <div className="flex">
            <div className="order-pay" />
            <div className="order-vr" />
            <div className="order-pay2">
              Scar QR Code
              <br />
              OR
              <br />
              Pay via UPI id
              <br />
              <div className="order-upi">ezshibin@okaxis</div>
            </div>
          </div>

          <div className="order-finish">
            If you have paid, click the button below
            <Button
              fullWidth
              type="submit"
              onClick={confirmPayment}
              sx={{
                marginTop: "1rem",
                padding: "0.8rem",
                backgroundColor: "#ff9408",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#ffdfb6",
                  color: "#000",
                },
              }}
            >Confirm Payment</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
