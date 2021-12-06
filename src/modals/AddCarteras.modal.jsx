
import { useState, useEffect } from "react";
import "./Popup.css"
import styled from "styled-components";
import CarteraItem from "../components/CarteraItem";
import {FaPlus, FaMinus} from "react-icons/fa"
import { insertarCarteras } from "../Data/Colaboradores.Data";


const AddCarteras = ({ modal, closePopup, colaborador }) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [numCarteras, setNumCarteras] = useState(1);

  function handlePlus(){
    if((numCarteras + 1) <= 100){
        setNumCarteras(numCarteras+1)
    }
  }
  function handleMinus(){
    if((numCarteras - 1) >= 1){
        setNumCarteras(numCarteras-1)
    }
  }

  const addCarteras = async (numColaborador, numPromotor, numCarteras) => {
    await insertarCarteras(numColaborador, numPromotor, numCarteras);
  }
  //console.log(colaborador.Nombre);
  const Container = styled.div`
    
    position: absolute;
    z-index: 1000;
    width: 95%;
    height: 95%;
  `;

  const ContentContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 30rem;
    min-width: 10rem;
    width: 100%;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const CarterasContainer = styled.div`
  `;

  const AddInput = styled.input`
    padding: 12px;
    font-size: 3rem;
    font-weight: 800;
    text-align: center;
    border-radius: 7px;
    border-style: hidden;
    background-color: #e0e0e0;
    outline: none;
    max-width: 5rem;
  `;

  const Button = styled.button`
    border: none;
    padding: 8.5px;
    text-align: center;
    border-radius: 7px;
    cursor: pointer;
    background-color: #FFBF00;
    font-weight: 700;
    font-size: 1.1rem;
    height: 2.5rem;
    width: 7rem;
    margin: 0rem 1rem;
  `;

    const ButtonContainer = styled.div`
        display: flex;
        margin-top: 5rem;
    `;

    const OperationContainer = styled.div`
        margin-top: 1rem;
        display: flex;
        align-items: center;
    `;
    const PlusSign = styled(FaPlus)`
        margin-left: 2rem;
        font-size: 2rem;
        cursor: pointer;
    `;
    const MinusSign = styled(FaMinus)`
        margin-right: 2rem;
        font-size: 2rem;
        cursor: pointer;
    `;
    const Title = styled.h1`
        margin: 0;
    `;

  return (
    <>

      {modal && (
        <Container className="popup-container">
          <div className="popup-overlay"></div>
          <ContentContainer>

            <Title>Agregar carteras</Title>
            <Title>a: {colaborador.nombre}</Title>
            <OperationContainer>
                <MinusSign onClick={handleMinus}/>
                <AddInput
                value={numCarteras}/>
                <PlusSign onClick={handlePlus}/>
            </OperationContainer>

            <ButtonContainer>
                <Button onClick={closePopup}>
                    Cancelar
                </Button>
                <Button onClick={()=>{
                  addCarteras(colaborador.idColaborador, 1,numCarteras)
                  window.location.reload()
                  }}>
                    Continuar
                </Button>
            </ButtonContainer>

          </ContentContainer>
        </Container>
      )}
      
    </>
  );
}
export default AddCarteras;