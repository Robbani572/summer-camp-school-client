import { useEffect, useState } from "react";


const useCourses = () => {

    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://artistry-moth-school-server.vercel.app/courses')
        .then(res => res.json())
        .then(data => {
            setCourses(data)
            setLoading(false)
        })
    }, [])

    return [courses, loading];
};

export default useCourses;