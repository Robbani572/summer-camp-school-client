import Courses from "../Courses/Courses";
import HeroSection from "../HeroSection/HeroSection";



const Home = () => {
    return (
        <div className="">
            <HeroSection></HeroSection>
            <div className="max-w-screen-xl mx-auto">
            <Courses></Courses>
            </div>
        </div>
    );
};

export default Home;