import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";


const Courses = () => {

    const [courses, setCourses] = useState([])
    console.log(courses)

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCourses(data)
            })
    }, [])

    return (
        <div className="mb-20">
            <div>
                <h3 className="my-10 text-5xl font-bold text-center uppercase">Popular classes</h3>
            </div>

            <div className="grid grid-cols-3 justify-center items-center gap-8">
                {
                    courses.map(item => <CourseCard key={item._id} item={item}></CourseCard>)
                }
            </div>

        </div>
    );
};

export default Courses;