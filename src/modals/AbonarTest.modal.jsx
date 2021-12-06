
import { useState, useEffect } from "react";
import "./Popup.css"
import styled from "styled-components";
import CarteraItem from "../components/CarteraItem";
import {FaPlus, FaMinus} from "react-icons/fa"
import { abonoCartera } from "../Data/Colaboradores.Data";


const AbonarTest = ({  }) => {

  
  //console.log(colaborador.Nombre);
  const Container = styled.div`
    margin-left: 5rem;
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
    max-width: 10rem;
    margin-top: 1rem;
    
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
    margin: 3.5rem 1rem;
  `;

    const ButtonContainer = styled.div`
        display: flex;
        margin-bottom: 1rem;
    `;

    const OperationContainer = styled.div`
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

    const Symbol = styled.h1`
        margin-right: 0.5rem;
        font-size: 2.6rem;
        position: fixed;
        transform: translate(-2rem, 0.45rem);

    `;
    const Title = styled.h1`
        margin: 0;
        font-size: 1.5rem;
        padding: 0 10px;
    `;

    const [abono, setAbono] = useState("")

    const handleContinuar = (val) => {
      
      const cantidad = parseInt(abono);
      const adeudo = parseInt(val);

      return (cantidad <= adeudo) ? true : false;
    }

    const sendAbono = async (numCartera, numColaborador, cantidadAbono) => {
      await abonoCartera(numCartera, numColaborador, cantidadAbono);
    }
    function getAbono(e){
      setAbono(e.target.addinput.value)
    }

  return (
    <>
      <Container className="modal" >
        <ContentContainer>

          <Title>Abonar</Title>
          <Title>a: {}</Title>
          <div style={{display: "flex"}}>
            <Title>ID Cartera: {}</Title>
            <Title>Adeudo: ${} MXN</Title>
          </div>
          <OperationContainer>
              <Symbol>$</Symbol>
                <AddInput
                type="number"
                value={abono}
                onChange={(event) => {
                  setAbono(event.target.value)
                }}
                type="number"
                min="0"
                />
          </OperationContainer>

          <ButtonContainer>
              <Button>
                  Cancelar
              </Button>
              <Button
              onClick={()=>{
                console.log(abono);
                if(handleContinuar()){
                  //sendAbono(colaborador.idCartera, colaborador.idColaborador, )
                }
                }}>
                  Continuar
              </Button>
          </ButtonContainer>

        </ContentContainer>
      </Container>
      
      
    </>
  );
}
export default AbonarTest;