import { Helmet } from "react-helmet-async";
import usePayments from "../../../../hooks/usePayments/usePayments";


const PaymentHistory = () => {

    const [payments] = usePayments()

    return (
        <div>
            <Helmet>
                <title>Artistry | Payment History</title>
            </Helmet>
            <div className="my-20">
                <h2 className="text-4xl font-semibold uppercase text-center">Pyment History: {payments.length}</h2>
            </div>

            <div className="w-full">
                <table className="table w-full max-w-7xl mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Transaction ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((paid, index) => <tr key={paid._id}>
                            <th>
                                <label>
                                    {index + 1}
                                </label>
                            </th>
                            <td>
                                {paid.transactionId}
                            </td>
                            <td>
                                <div>
                                    <div className="font-bold">
                                        {paid.courseName}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="text-xl font-semibold">${paid.amount}</div>
                            </td>
                            <th>
                            </th>
                            <th>
                                
                            </th>
                        </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PaymentHistory;