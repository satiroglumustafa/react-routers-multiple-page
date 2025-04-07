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
                setNewsApi(apiJson || [])
            } catch (error) {
 
                setNewsApi([]);
                console.error('veri çekilemedi',error)
            }
            finally {
                setLoading(false);
            }
        }

        newsApiFunct()
    },[url])

    return {newsApi,loading}
}

export default useFetch