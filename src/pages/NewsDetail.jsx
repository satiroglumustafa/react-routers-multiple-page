import { Col } from "react-bootstrap"

import './NewsDetail.css'
import { useContext } from "react"
import NewsContext from "../contexts/NewsContext"
const NewsDetail = () => {

    // const location = useLocation()
    // const news = location.state

    const {selectedNews} = useContext(NewsContext)

    if(!selectedNews){
        return(
            <div>Hiç bir haber yok</div>
        )
    }

    return (
        <>
            <Col xs={12}>
                <div className="newsContent">
                    <h1 className="text-center mb-4">{selectedNews.title}</h1>
                    <div className="news-content-img">
                        <img src={selectedNews.urlToImage} fluid alt="" />
                    </div>
                    <p>{selectedNews.content}</p>
                </div>
            </Col>
        </>
    )
}
export default NewsDetail