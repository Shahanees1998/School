import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51LCeVVH2g5fObnyU8fkOZne8VCV69tdoxndzMDpqRr59YnzOHtTFXi1mp23pzqEde2iqWlhEZJmlr9IESUXP334d00WrD6ioEH"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}
