import { useEffect, useState } from "react";

const useFetch = (url)=>{
    const [newsApi,setNewsApi] = useState([])
    const [loading,setLoading]=useState(true)
    
    useEffect(()=>{

        const newsApiFunct = async () => {
        
            try {
                const apiUrl = await fetch(url);
                const apiJson = await apiUrl.json(apiUrl)
                setLoading(false)
                setNewsApi(apiJson.articles)
            } catch (error) {
                setLoading(true)
                console.error('veri çekilemedi')
            }
        }

        newsApiFunct()
    },[url])

    return {newsApi,loading}
}

export default useFetch