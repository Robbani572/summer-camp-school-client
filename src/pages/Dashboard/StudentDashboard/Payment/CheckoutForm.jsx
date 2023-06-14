import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../../providers/AuthProvider";
import './CheckoutForm.css'



const CheckoutForm = ({ cart }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const { user } = useContext(AuthContext)
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [success, setSuccess] = useState('')

    const { price } = cart
    const amount = parseFloat(price);
    console.log(price)


    // TODO: axiosSecure related problem: access token not sending in proper way
    useEffect(() => {
        axiosSecure.post(`/create-payment-intent`, { amount })
            .then(res => {
                console.log(amount)
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [amount, axiosSecure])





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
            setSuccess('')
            setCardError(error.message)
            console.log('error', error)
        }
        else {
            setCardError('')
            console.log('payment method', paymentMethod)
        }

        setProcessing(true)

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

        console.log('paymentIntent is', paymentIntent)

        setProcessing(false)

        if(paymentIntent.status === 'succeeded'){
            //TODO: next steps
            setTransactionId(paymentIntent.id)
            setSuccess(paymentIntent.id)

            const payment = {
                user: user.email,
                transactionId: paymentIntent.id,
                amount,
                selectedCalss: cart.itemId,
                cartItem: cart._id,
                status: 'paid',
                image: cart.image,
                courseName: cart.courseName
            }
            axiosSecure.post('/payments', payment)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    // display consfirm
                }
            })
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
                <button className="btn mt-8" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <div className="mt-8">
                {cardError && <p className="text-red-600 font-semibold">!Error: {cardError}</p>}
                {transactionId && <p className="text-green-600 font-semibold">Payment succesful with trnsc: {success}</p>}
            </div>
        </div>
    );
};

export default CheckoutForm;