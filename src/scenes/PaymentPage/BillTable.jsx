import { useSelector } from "react-redux";

const BillTable = () => {

    const cartItems = useSelector((state) => state.products);

  return (
    <table border="2" className="bill-table">
      <tr>
        <th className="cart-th">SL</th>
        <th className="cart-th">Name</th>
        <th className="cart-th">Quantity</th>
        <th className="cart-th">Total</th>
      </tr>
      {cartItems.map((cartItem, index) => {
        return (
          <tr id={`cart-table-${index}`}>
            <td className="cart-td">{index + 1}</td>
            <td className="cart-td">{cartItem.name}</td>
            <td className="cart-td">{cartItem.quantity}</td>
            <td className="cart-td">{cartItem.price * cartItem.quantity}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default BillTable;
