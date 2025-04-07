import { useEffect, useState } from "react"
import { Col } from "react-bootstrap"
import News from "../components/News"
import Loading from "../components/Loading"
import useFetch from "../hooks/useFetch"

const NewsCategory = ()=> {

   const {newsApi,loading} = useFetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=773278255af346a7b0e56bc6fd67bd60')

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