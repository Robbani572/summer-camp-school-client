import banner1 from '../../../assets/images/home/b-1.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const HeroSection = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <img src={banner1} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={banner1} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={banner1} alt="" />
            </SwiperSlide>
        </Swiper>
    );
};

export default HeroSection;