import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    return (
        <div className="">
            <h2 className="text-5xl font-bold">Teka o teka tumi uira uira aso</h2>

            <div className="mt-20">
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
            </div>

        </div>
    );
};

export default Payment;