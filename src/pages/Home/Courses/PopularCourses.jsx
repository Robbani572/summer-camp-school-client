import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";


const PopularCourses = () => {

    const [courses, setCourses] = useState([])

    const approvedCourses = courses.filter(item => item.status === 'approved')

    useEffect(() => {
        fetch('https://artistry-moth-school-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => {
                const approvedCourses = data.filter(item => item.status === 'approved')
                const popularCourses = approvedCourses.slice(0, 6)
                setCourses(popularCourses)
            })
    }, [])

    const handleLoadData = () => {
        fetch('https://artistry-moth-school-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => {
                const approvedCourses = data.filter(item => item.status === 'approved')
                const popularCourses = approvedCourses.slice(0, 6)
                setCourses(popularCourses)
            })
    }

    const handleLoadFullData = () => {
        fetch('https://artistry-moth-school-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => {
                const approvedCourses = data.filter(item => item.status === 'approved')
                setCourses(approvedCourses)
            })
    }

    return (
        <div className="my-20 md:shadow-2xl md:py-4 md:px-8 md:bg-base-100">
            <div>
                <h3 className="my-10 text-3xl md:text-5xl font-bold text-center uppercase">Popular classes</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 px-6 justify-center items-center gap-8">
                {
                    courses.map(item => <CourseCard key={item._id} item={item}></CourseCard>)
                }
            </div>

            <div className="flex justify-center items-center mt-10">
                {
                    courses.length < 7 ? <button onClick={handleLoadFullData} className="btn">Show All</button> :
                    <button onClick={handleLoadData} className="btn">Show less</button>
                }
            </div>

        </div>
    );
};

export default PopularCourses;