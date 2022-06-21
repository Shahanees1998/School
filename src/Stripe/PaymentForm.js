import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import {useSelector} from "react-redux";
import {getDatabase, ref, set} from "firebase/database";
import app from "../firebase";


const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "black",
            color: "black",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "black" },
            "::placeholder": { color: "black" }
        },
        invalid: {
            iconColor: "red",
            color: "red"
        }
    }
}

export default function PaymentForm({tottalamount,desc, itemKey}) {
    const [success, setSuccess ] = useState(false)
    const db = getDatabase(app);
    const { key,alumnikey } = useSelector(state => state.persistedReducer)


    //  const { amount } = useSelector(state => state.persistedReducer)
console.log(`amount is  ${tottalamount} and int  ${parseInt(tottalamount)}`)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


        if(!error) {
            try {
                console.log(`chl ja ${tottalamount}`)
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:4000/payment", {
                    amount:parseInt(tottalamount),
                    "description" : desc,
                    id
                })

                if(response.data.success) {
                    console.log("Successful payment")
                    set(ref(db,"School/"+key+"/items/"+itemKey),null);

                    setSuccess(true)
                }
                else{
                    console.log('res',response)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>
            {!success ?
                <form onSubmit={handleSubmit}>
                    <fieldset className="FormGroup">
                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS}/>
                        </div>
                    </fieldset>
                    <button>Pay</button>
                </form>
                :
                <div>
                    <h2>Thanks! Your payment is successfully transferred</h2>

                </div>
            }

        </>
    )
}
