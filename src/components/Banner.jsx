import slide1 from '../assets/house2 - slider.png';
import slide2 from '../assets/house7 - slider.png';
import slide3 from '../assets/house8 - slider.png';
import slide4 from '../assets/house9 - slider.png';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Banner = () => {
    return (
        <Swiper className='rounded-3xl mt-6'
            modules={[Navigation, Pagination, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop={true}
            autoHeight={true}
            pagination={{ clickable: true }}
            effect="fade"
            data-aos="fade-right" data-aos-duration="3000"
        >
            <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
        </Swiper>
    );
};

export default Banner;