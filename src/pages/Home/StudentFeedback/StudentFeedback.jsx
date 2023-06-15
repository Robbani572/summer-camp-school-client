import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const StudentFeedback = () => {

    const [feedback, setFeedback] = useState([])

    useEffect(() => {
        fetch('https://artistry-moth-school-server.vercel.app/feedback')
        .then(res => res.json())
        .then(data=> {
            console.log(data)
            setFeedback(data)
        })
    }, [])

    return (
        <div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper bg-feedback"
            >
                {
                    feedback.map(review => <SwiperSlide
                        key={review._id}
                        className="bg-black bg-opacity-30"
                    >
                        <div className="m-20 flex flex-col items-center text-white py-4">
                            <FaQuoteLeft className="w-24 h-24 mt-4"></FaQuoteLeft>
                            <p className="my-6">{review.feedback}</p>
                            <h3 className="text-3xl font-semibold uppercase">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default StudentFeedback;