import { Col } from "react-bootstrap"

import './NewsDetail.css'
import { useContext } from "react"
import NewsContext from "../contexts/NewsContext"
import { useParams } from "react-router-dom"
import { slugify } from "../utils/utils"
import useFetch from "../hooks/useFetch"
import Loading from "../components/Loading"
const NewsDetail = () => {

    // const location = useLocation()
    // const news = location.state

    const {selectedNews} = useContext(NewsContext)
    const { category, id } = useParams()

    // https://chatgpt.com/c/67f3afdb-4b54-8010-a32b-8d74949547ba (Detaylı anlatımı)

    const { newsApi, loading } = useFetch('https://fakestoreapi.com/products')

    if(selectedNews){
        return (
            <>
                <Col xs={12}>
                    <div className="newsContent">
                        <h1 className="text-center mb-4">{selectedNews.title}</h1>
                        <div className="news-content-img">
                            <img src={selectedNews.image} fluid alt="" />
                        </div>
                        <p>{selectedNews.description}</p>
                    </div>
                </Col>
            </>
        )
    }
    //selectedNews sayfa içinden tıklanarak gelinirse çalışır (Anasayfa veya haber listesindeki bir haber)
    
    if (loading) {
        return (
            <Loading/>
        )
    }

 
    const matchedNews = newsApi.find(item =>
        slugify(item.category) === category &&
        slugify(item.title) === id
    )


    // matchedNews  Kullanıcı linki kopyalayıp doğrudan tarayıcıya yapıştırırsa çalışır
    if (!matchedNews) {
        return <p>Bu habere ulaşılamadı.</p>
    }

    return (
        <Col xs={12}>
            <div className="newsContent">
                <h1 className="text-center mb-4">{matchedNews.title}</h1>
                <div className="news-content-img">
                    <img src={matchedNews.image} alt="" />
                </div>
                <p>{matchedNews.description}</p>
            </div>
        </Col>
    )
   
}
export default NewsDetail