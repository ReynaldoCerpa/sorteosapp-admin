import styled from "styled-components"

const Container = styled.div`
    background-color: #cbcacd;
    height: 5rem;
    width: 100%;
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

const CarteraItem = ({idCartera, idColaborador, numBoletos, fechaEntregada, entregada}) => {
    return (
        <Container>
            <Title>ID:</Title>
            <Value>{idCartera}</Value>
            <Title>ID Colaborador:</Title>
            <Value>{idColaborador}</Value>
            <Title>Boletos:</Title>
            <Value>{numBoletos}</Value>
            <Title>Fecha de entrega:</Title>
            <Value>{fechaEntregada}</Value>
            <Title>Entregada:</Title>
            <Value>{entregada == 0 ? "Entrega pendiente" : "Entregada"}</Value>
        </Container>
    )
}

export default CarteraItem
