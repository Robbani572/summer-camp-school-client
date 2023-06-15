import PopularCourses from "../Courses/PopularCourses";
import HeroSection from "../HeroSection/HeroSection";
import StudentFeedback from "../StudentFeedback/StudentFeedback";
import TopInstructors from "../TopInstructors/TopInstructors";



const Home = () => {
    return (
        <div className="">
            <HeroSection></HeroSection>
            <div className="max-w-screen-xl mx-auto">
                <PopularCourses></PopularCourses>
            </div>
            <div className="max-w-screen-xl mx-auto">
                <TopInstructors></TopInstructors>
            </div>
            <div className="max-w-screen-xl mx-auto my-32">
                <h2 className="text-center text-3xl md:text-5xl uppercase font-bold">Students Feedback</h2>
                <div>
                <StudentFeedback></StudentFeedback>
                </div>
            </div>
        </div>
    );
};

export default Home;