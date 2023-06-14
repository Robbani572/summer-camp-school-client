import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../../providers/AuthProvider";



const CheckoutForm = ({ cart }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const { user } = useContext(AuthContext)

    const { price } = cart
    console.log(price)


    // TODO: axiosSecure related problem: access token not sending in proper way
    useEffect(() => {
        axiosSecure.post(`/create-payment-intent`, { price })
            .then(res => {
                console.log(price)
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })

        // fetch('http://localhost:5000/create-payment-intent', {
        //     method: 'POST',
        //     headers: {
        //         'content-type':'application/json'
        //     },
        //     body: JSON.stringify({price})
        // }).then(res => res.json()).then(data => console.log(data))
    }, [price, axiosSecure])





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

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user.displayName || 'anonymus',
                  email: user.email || 'unknown'
                },
              },
            },
          );

        if (confirmError) {
            console.log(confirmError)
        }

        console.log(paymentIntent)
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
                <button className="btn mt-8" type="submit" disabled={!stripe || !clientSecret}>
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