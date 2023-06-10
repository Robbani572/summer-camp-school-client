import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";


const PopularCourses = () => {

    const [courses, setCourses] = useState([])
    console.log(courses)

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const popularCourses = data.slice(0, 6)
                setCourses(popularCourses)
            })
    }, [])

    const handleLoadData = () => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const popularCourses = data.slice(0, 6)
                setCourses(popularCourses)
            })
    }

    const handleLoadFullData = () => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCourses(data)
            })
    }

    return (
        <div className="my-20 md:shadow-2xl md:py-4 md:px-8 md:bg-base-100">
            <div>
                <h3 className="my-10 text-5xl font-bold text-center uppercase">Popular classes</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-8">
                {
                    courses.map(item => <CourseCard key={item._id} item={item}></CourseCard>)
                }
            </div>

            <div className="flex justify-center items-center mt-10">
                {
                    courses.length < 7 ? <button onClick={handleLoadFullData} className="btn">Show More</button> :
                    <button onClick={handleLoadData} className="btn">Show less</button>
                }
            </div>

        </div>
    );
};

export default PopularCourses;