
import { Col } from "react-bootstrap"
import News from "../components/News"
import Loading from "../components/Loading"
import useFetch from "../hooks/useFetch"

const NewsCategory = ()=> {

   const {newsApi,loading} = useFetch('https://fakestoreapi.com/products')

    if(loading){
        return(
            <Loading />
        )
    }

    return(
        <>
            <Col xs={12}>
                <News news={newsApi}></News>
            </Col>
        </>
    )
}
export default NewsCategory