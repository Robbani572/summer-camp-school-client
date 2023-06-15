import { useEffect, useState } from "react";
import InstructorCard from "../Home/TopInstructors/InstructorCard";


const Instructors = () => {

    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('https://artistry-moth-school-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setInstructors(data)
            })
    }, [])

    return (
        <div className="max-w-screen-xl mx-auto min-h-screen md:shadow-2xl md:bg-base-100 pt-20 md:px-10 pb-10 mb-24">
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 px-6 justify-center items-center gap-8">
                    {
                        instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;