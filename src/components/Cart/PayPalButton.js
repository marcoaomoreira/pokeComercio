import React from "react";
import { ProductConsumer } from "../../context";

export default class MyApp extends React.Component {
    render() {
      const onSuccess = payment => {
        // Congratulation, it came here means everything's fine!
        console.log("The payment was succeeded!", payment);
        this.props.clearCart();
        this.props.history.push("/");
        // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
      };
  
      const onCancel = data => {
        // User pressed "cancel" or close Paypal's popup!
        console.log("The payment was cancelled!", data);
        // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
      };
    
     return (
        <ProductConsumer>

          onSuccess={onSuccess}
          onCancel={onCancel}
        </ProductConsumer>
      );
    }
}