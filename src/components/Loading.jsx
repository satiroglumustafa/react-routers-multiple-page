import { Col, Spinner } from "react-bootstrap"
import './Loading.css'
const Loading = () => {
    return (
        <>
            <Col xs={12}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Col>
        </>
    )
}
export default Loading