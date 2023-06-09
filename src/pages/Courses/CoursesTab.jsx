import CourseCard from "../Home/Courses/CourseCard";


const CoursesTab = ({courses}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                courses.map(item => <CourseCard key={item._id} item={item}></CourseCard>)
            }
        </div>
    );
};

export default CoursesTab;