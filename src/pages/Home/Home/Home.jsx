import PopularCourses from "../Courses/PopularCourses";
import HeroSection from "../HeroSection/HeroSection";



const Home = () => {
    return (
        <div className="">
            <HeroSection></HeroSection>
            <div className="max-w-screen-xl mx-auto">
                <PopularCourses></PopularCourses>
            </div>
        </div>
    );
};

export default Home;