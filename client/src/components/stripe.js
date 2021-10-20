import React from "react";
import StripeCheckout from "react-stripe-checkout"

export default function stripe() {
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <div>
    <StripeCheckout
      token={onToken}
      stripeKey="pk_test_51JlGUrERXBS5MUUI7nv1zIIE8v4Fes70X1PAlMzXtEmkO7WvfVrayJNl1YWMpv6XhSWGYEykMFELMjhc0OYKOVs900AP3aGkyH"
    />
    </div>
);
}