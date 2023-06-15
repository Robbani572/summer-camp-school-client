import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";



const TopInstructors = () => {

    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('https://artistry-moth-school-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const instructors = data.slice(0, 6)
                setInstructors(instructors)
            })
    }, [])





    return (
        <div className="my-32 min-h-screen md:shadow-2xl md:py-4 md:px-8 md:bg-base-100">
            <div>
                <h3 className="my-10 text-3xl md:text-5xl font-bold text-center uppercase">Top instructors</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 px-6 pb-20 justify-center items-center gap-8">
                    {
                        instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopInstructors;