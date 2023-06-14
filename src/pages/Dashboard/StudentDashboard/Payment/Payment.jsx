import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk)

const Payment = () => {

    const cart = useLoaderData()

    return (
        <div className="">
            <h2 className="text-5xl font-bold mb-20">Payment amount: {cart.price}</h2>

            
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;