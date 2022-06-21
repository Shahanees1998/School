import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"
import {useLocation} from 'react-router-dom';

const PUBLIC_KEY = "pk_test_51LCeVVH2g5fObnyU8fkOZne8VCV69tdoxndzMDpqRr59YnzOHtTFXi1mp23pzqEde2iqWlhEZJmlr9IESUXP334d00WrD6ioEH"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer(route) {
    const location = useLocation()
    console.log(`location params ${location.state.amount}`)
    //const { amount } = route.params;
console.log(route)
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm tottalamount={location.state.amount} desc={location.state.desc} itemKey={location.state.itemKey}/>
        </Elements>
    )
}
