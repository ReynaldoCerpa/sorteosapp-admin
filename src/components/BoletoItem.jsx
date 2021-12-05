import { useState } from "react";
import styled from "styled-components"

const Container = styled.div`
    background-color: #f2bf27;
    height: 5rem;
    width: 90%;
    border-radius: 10px;
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 0.5rem auto;
    padding-left: 15px;
`;

const Title = styled.h4`
    margin: 0 0.3rem 0 0;
`;
const Value = styled.h4`
    margin: 0 1.2rem 0 0;
`;
const Block = styled.div`
    display:flex;
    flex-direction: column;
`;
const Row = styled.div`
    display: flex;
`;

const BoletosItem = ({numBoleto, precio, fechaVenta, idColaborador, idCartera, idComprador, vendido}) => {
    const [fecha, setFecha] = useState("N/A")
    if(fechaVenta != null){
        const arr = fechaVenta.split("T")
        setFecha(arr[0])
    }
    return (
        <Container>
            <Block>
                <Row>
                    <Title># Boleto:</Title>
                    <Value>{numBoleto}</Value>
                </Row>
                <Row>
                    <Title>Precio:</Title>
                    <Value>${precio} MXN</Value>
                </Row>
            </Block>
            <Block>
                <Row>
                    <Title>Fecha de venta:</Title>
                    <Value>{fecha}</Value>
                </Row>
                <Row>
                    <Title>ID Colaborador:</Title>
                    <Value>{idColaborador}</Value>
                </Row>
            </Block>
            <Block>
                <Row>
                    <Title>ID Cartera:</Title>
                    <Value>{idCartera}</Value>
                </Row>
                <Row>
                    <Title>ID Comprador:</Title>
                    <Value>{idComprador != null ? idComprador : "N/A"}</Value>
                </Row>
            </Block>
        </Container>
    )
}

export default BoletosItem