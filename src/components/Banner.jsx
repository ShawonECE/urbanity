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
            <SwiperSlide><img className='w-full' src="https://i.ibb.co/2M4W22b/house2-slider-reduced.png" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src="https://i.ibb.co/ftY5Xyt/house7-slider-reduced.png" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src="https://i.ibb.co/6vWVHGy/house8-slider-reduced.png" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src="https://i.ibb.co/9W7hLMh/house9-slider-reduced.png" alt="" /></SwiperSlide>
        </Swiper>
    );
};

export default Banner;