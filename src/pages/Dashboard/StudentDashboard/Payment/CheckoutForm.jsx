import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useCartForPayment from "../../../../hooks/useCartForPayment/useCartForPayment";


const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [selectedItem] = useCartForPayment()
    console.log(selectedItem)

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message)
            console.log('error', error)
        }
        else {
            setCardError('')
            console.log('payment method', paymentMethod)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn mt-8" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            <div className="mt-8">
                    {cardError && <p className="text-red-600 font-semibold">!Error: {cardError}</p>}
            </div>
        </div>
    );
};

export default CheckoutForm;