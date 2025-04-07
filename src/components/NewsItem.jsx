import { Card } from "react-bootstrap"
import './NewsItem.css'
import { Link } from "react-router-dom"
import { slugify } from "../utils/utils"
import { useContext } from "react"
import NewsContext from "../contexts/NewsContext"
const NewsItem = (props) => {

    const slugCategory = slugify(props.category)
    const slugId = slugify(props.title)

    const toUrl = `${slugCategory}/${slugId}`

    const { setSelectedNews } = useContext(NewsContext)

    const handleClick = () => {
        setSelectedNews(props)
    }

    return (
        <>
            <Card className="news-card">
                <div className="cardImg">
                    <Link to={toUrl} onClick={handleClick}><Card.Img variant="top" src={props.image} /></Link>
                </div>
                <Card.Body>
                    <Card.Title>
                        <Link to={toUrl} onClick={handleClick}>{props.title}</Link>
                    </Card.Title>
                    <Card.Text>
                        <Link to={toUrl} onClick={handleClick}>{props.description}</Link>
                    </Card.Text>
                    <Link to={toUrl} style={{ width: '100%' }} className='btn btn-success' onClick={handleClick}>Read More</Link>
                </Card.Body>
            </Card>
        </>
    )
}
export default NewsItem