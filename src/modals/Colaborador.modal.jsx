
import { useState, useEffect } from "react";
import "./Modal.css"
import styled from "styled-components";
import CarteraItem from "../components/CarteraItem";


const ColaboradorModal = ({modal, buttonClicked, colaborador }) => {

  //console.log(colaborador.Nombre);
  const Container = styled.div`
    margin-left: 5rem;
  `;

  const ContentContainer = styled.div`
    margin-top: 7.5rem;
    max-width: 60rem;
    min-width: 40rem;
    width: 100%;
    height: 80%;
    overflow: scroll;
  `;

  const CarterasContainer = styled.div`
  `;


  return (
    <>

      {modal && (
        <Container className="modal">
          <div className="overlay"></div>
          <ContentContainer className="modal-content">
            <h1>Carteras</h1>
            <h2>{colaborador.nombre}</h2>
            <CarterasContainer>
              {
                colaborador.carteras.map(({idCartera, idColaborador, numBoletos, fechaEntregada, entregada})=>{
                  return <CarteraItem 
                  idCartera={idCartera}
                  idColaborador={idColaborador}
                  numBoletos={numBoletos}
                  fechaEntregada={fechaEntregada}
                  entregada={entregada}/>
                })
              }
            </CarterasContainer>
            <button className="close-modal" onClick={buttonClicked}>
              CLOSE
            </button>
          </ContentContainer>
        </Container>
      )}
      
    </>
  );
}
export default ColaboradorModal;