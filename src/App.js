import React from 'react'
import Header from './components/Header.js';
import { Container, Row } from 'react-bootstrap';


function App() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Container>
                        <Header />
                    </Container>
                </Row>
            </Container>
        </div>
    )
}

export default App;