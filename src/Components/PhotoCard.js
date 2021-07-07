import React from "react";
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import styled from "styled-components";

const NasaImg = styled.img`
    width: 100%;
    height: auto;
    border-radius: 15px;
`;

const Cont = styled.p`
    text-align: left;
    padding: 15px;
`;

const CardColor = styled(Card)`
    background-color: palevioletred;
`;

const RandButton = styled.button`
    color: white;
    background-color: palevioletred;
    border: none;
    text-align: center;
    border-radius: 5px;
    height: 40px;
    &:hover {
        color: palevioletred;
        background-color: white;
        border: 2px solid palevioletred;
    }
`;

const PhotoCard = (props) => {
    const pic = props.pic;
    return (
        <Container>
            <Row>
                <Col lg="12" xl="6">
                    <CardColor>
                        <Card>
                            <CardBody>
                                <h2>{pic.title}</h2>
                                <p>Credit: {pic.copyright} {pic.date}</p>
                                <NasaImg src={pic.url} alt="Nasa Photo"/>                    
                            </CardBody>
                        </Card>
                    </CardColor>
                </Col>
                <Col lg="12" xl="6">
                    <CardColor>
                        <Card>
                            <CardBody>
                                <Cont>{pic.explanation}</Cont>
                            </CardBody>
                            <RandButton>
                                Random Image
                            </RandButton>
                        </Card>
                    </CardColor>
                </Col>
            </Row>
        </Container>
    )
}

export default PhotoCard;