import { Helmet } from "react-helmet-async";
import usePayments from "../../../../hooks/usePayments/usePayments";
import EnrolledClassesTable from "./EnrolledClassesTable";


const EnrolledClasses = () => {

    const [payments] = usePayments()

    return (
        <div>
            <Helmet>
                <title>Artistry | Enrolled Classes</title>
            </Helmet>
            <div className="my-20">
                <h2 className="text-4xl font-semibold uppercase text-center">Enrolled Classes: {payments.length}</h2>
            </div>

            <div className="w-full">
                <table className="table w-full max-w-7xl mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((paid, index) => <EnrolledClassesTable 
                            key={paid._id} 
                            paid={paid} 
                            index={index} ></EnrolledClassesTable>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default EnrolledClasses;