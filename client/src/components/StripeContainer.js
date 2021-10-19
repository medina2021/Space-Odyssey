import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"

const PUBLIC_KEY = "pk_test_51JlGUrERXBS5MUUI7nv1zIIE8v4Fes70X1PAlMzXtEmkO7WvfVrayJNl1YWMpv6XhSWGYEykMFELMjhc0OYKOVs900AP3aGkyH"

const stripeTestPromise= loadstripe(PUBLIC_KEY)

export default function stripeContainer(){
    return(
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}