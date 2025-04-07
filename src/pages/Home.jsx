import { Col } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import useFetch from "../hooks/useFetch";
import './Home.css'
import { Autoplay, Navigation } from "swiper/modules";

const Home = () => {

    const { newsApi } = useFetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=773278255af346a7b0e56bc6fd67bd60')


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
                                            <picture className="img">
                                                <img src={swiperItem.urlToImage} alt="" />
                                            </picture>
                                            <figcaption className="detail">
                                                {
                                                    swiperItem.title
                                                }
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