import PopularCourses from "../Courses/PopularCourses";
import HeroSection from "../HeroSection/HeroSection";
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
        </div>
    );
};

export default Home;