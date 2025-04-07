import { Col, Row } from "react-bootstrap"
import NewsItem from "./NewsItem"
 

const News = ({ news }) => {


    return (
        <>
            <Row>
                {
                    news.map((newsItem) => {
                        console.log(newsItem)
                        return (
                            <Col xs={12} md={6} lg={3} key={newsItem.url} className="mb-4">
                                <NewsItem {...newsItem}></NewsItem>
                                
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )
}

export default News