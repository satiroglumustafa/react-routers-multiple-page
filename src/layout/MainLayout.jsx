import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "./MainLayout.css"
import { Container, Row } from "react-bootstrap"
const MainLayout = ()=> {
    return(
        <>
            <Header/>
                <main className="main-build">
                    <Container>
                        <Row>
                            <Outlet/>
                        </Row>
                    </Container>
                </main>
            <Footer/>
        
        </>
    )
}
export default MainLayout