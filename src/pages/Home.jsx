import { Col } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import useFetch from "../hooks/useFetch";
import './Home.css'
import { Autoplay, Navigation } from "swiper/modules";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { slugify } from "../utils/utils";

const Home = () => {

    const { newsApi,loading } = useFetch('https://fakestoreapi.com/products')

    if(loading){
        return(
            <Loading />
        )
    }

    return (
        <>
            <Col xs={12}>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                       newsApi && (
                        newsApi.map((swiperItem,index) =>
                            <SwiperSlide key={index}>
                                {
                                    <div className="slider-headline">
                                        <figure>
                                            
                                            <Link to={`haberler/${slugify(swiperItem.category)}/${slugify(swiperItem.title)}`}><picture className="img"><img src={swiperItem.image} alt="" /></picture></Link>
                                            
                                            <figcaption className="detail">
                                                <Link to={`haberler/${slugify(swiperItem.category)}/${slugify(swiperItem.title)}`}>{swiperItem.title}</Link>
                                            </figcaption>
                                        </figure>
                                    </div>
                                }
                            </SwiperSlide>
                        )
                       )
                    }


                </Swiper>
            </Col>
        </>
    )
}
export default Home