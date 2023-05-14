// import './PhotoProject.css'
import './PhotoProject.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation';
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Autoplay} from "swiper";
//api
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const PhotoProject = () => {
    //api
    const { projectsResults } = useSelector((state) => state.data)
    return (
        <>
            <div className="project">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    // slidesPerView={2}
                    navigation
                breakpoints={{
                    500: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    }}
                >
                    {
                        projectsResults.map((it, rowId) => (
                            <SwiperSlide key={rowId}>
                                <Swiper
                                    spaceBetween={20} centeredSlides={true}
                                    autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                    modules={[Autoplay]}
                                    className="mySwiper"
                                >
                                    {console.log(it.image_urls)}
                                    {
                                        it.image_urls.map((item ,indexId) => (
                                            <SwiperSlide key={indexId}>
                                                <div className="box">
                                                    <img className='rr' src={`https://jostore2000.000webhostapp.com/upload/projects/${item}`} alt='' />
                                                    <div className="item">
                                                        <h3>{it.name}</h3>
                                                        <p>{it.description}</p>
                                                        <Link to={it.link}>vew link</Link>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )
}
export default PhotoProject
