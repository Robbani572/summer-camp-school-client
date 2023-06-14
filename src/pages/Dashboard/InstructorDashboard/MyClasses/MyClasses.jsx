import { Helmet } from "react-helmet-async";
import MyClassesTable from "./MyClassesTable";
import useCourses from "../../../../hooks/useCourses/useCourses";
import useCurrentUser from "../../../../hooks/useCurrentUser/useCurrentUser";


const MyClasses = () => {

    const [courses] = useCourses()
    const [currentUser] = useCurrentUser()

    const myCourses = courses.filter(item => item.instructor === currentUser.name)
    const pending = myCourses.filter(item => item.status === 'pending')
    const approved = myCourses.filter(item => item.status === 'approved')

    const handleUpdateClass = id => {
        console.log(id)
    }

    return (
        <div>
            <Helmet>
                <title>Artistry | My Courses</title>
            </Helmet>
            <div className="my-20">
                <h2 className="text-4xl font-semibold uppercase text-center">You have added {myCourses.length} courses</h2>
                <div className="flex justify-center items-center mt-4">
                    <p className="text-orange-600 font-semibold">{pending.length || 0} Pending</p>
                    <div className="divider lg:divider-horizontal"></div> 
                    <p className="text-green-600 font-semibold">{approved.length || 0} Approved</p>
                </div>
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
                            <th>Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myCourses.map((course, index) => <MyClassesTable 
                            key={course._id} 
                            course={course} 
                            index={index} 
                            handleUpdateClass={handleUpdateClass}
                            ></MyClassesTable>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyClasses;