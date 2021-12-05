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

const BoletosItem = ({numBoleto, precio, fechaVenta, idColaborador, idCartera, idComprador, vendido}) => {
    return (
        <Container>
            <Title># Boleto:</Title>
            <Value>{numBoleto}</Value>
            <Title>Precio:</Title>
            <Value>${precio} MXN</Value>
            <Title>Fecha de venta:</Title>
            <Value>{fechaVenta}</Value>
            <Title>Fecha de entrega:</Title>
            <Value>{idColaborador}</Value>
            <Title>Entregada:</Title>
            <Value>{idCartera}</Value>
        </Container>
    )
}

export default BoletosItem