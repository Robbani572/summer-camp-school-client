import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";
import useCart from "../../../../hooks/useCart/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk)

const Payment = () => {

    const cart = useLoaderData()
    const [, refetch] = useCart()

    return (
        <div className="p-8">
            <h2 className="text-2xl md:text-5xl font-bold mb-20">Payment amount: ${cart.price}</h2>

            
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} confirmRefetch={refetch}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;