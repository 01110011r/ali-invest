import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import {Navigation} from "swiper/modules";
import 'swiper/css/navigation';

function Partners() {


    return (
        <div className={'pb-7 w-full mb-16'}>
            <h2 className={'font-semibold lg:text-7xl text-5xl mb-7 text-center text-[#0A275E]'}>
                Наши партнеры
            </h2>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                modules={[Navigation]}
                autoplay={true}
                loop={true}

                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    }
                }}
                className={'w-full min-w-full'}
            >
                <SwiperSlide><img src={'../../public/netologiya.png'} alt={'netologiya png'}/></SwiperSlide>
                <SwiperSlide><img src={'../../public/joint-journey.png'} alt={'joint journey png'}/> </SwiperSlide>
                <SwiperSlide><img src={'../../public/yandex-cloud.png'} alt={'yandex cloud png'}/></SwiperSlide>

                <SwiperSlide><img src={'../../public/netologiya.png'} alt={'netologiya png'}/></SwiperSlide>
                <SwiperSlide><img src={'../../public/joint-journey.png'} alt={'joint journey png'}/> </SwiperSlide>
                <SwiperSlide><img src={'../../public/yandex-cloud.png'} alt={'yandex cloud png'}/></SwiperSlide>

            </Swiper>
        </div>
    );
}

export default Partners;