import TableContainer from '@mui/material/TableContainer';
import { useState, useEffect } from "react";
import "./Popup.css"
import styled from "styled-components";
import CarteraItem from "../components/CarteraItem";
import {FaPlus, FaMinus} from "react-icons/fa"
import BoletoItem from "../components/BoletoItem";


const Boletos = ({ modal, closePopup, boletos }) => {

  //console.log(colaborador.Nombre);
  const Container = styled.div`
    margin-left: 1rem;
    position: absolute;
    z-index: 1000;
    width: 100%;
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
    max-width: 80rem;
    min-width: 10rem;
    width: 100%;
    height: 45rem;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: left;
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
    font-size: 1rem;
    height: 2rem;
    width: 4rem;
    position: fixed;
    right: 1rem;
  `;

    const ButtonContainer = styled.div`
        display: flex;
        margin-bottom: 1rem;
    `;

    const BoletosListContainer = styled.div`    
        height: 15rem;
        border-radius: 10px;
`;
    const BoletosList = styled.div`    
        max-height: 15rem;
        overflow-y: scroll;
        background-color: #e3e3e3;
        border-radius: 10px;
        height: 100%;
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
        font-size: 3rem;
        padding: 0 10px;
    `;
    const BoletosContainer = styled.div`
        height: 100%;
        
    `;
    const NoVendidos = styled.div`
        
    `;
    const Vendidos = styled.div`
        
    `;

  return (
    <>

      {modal && (
        <Container className="popup-container" >
          <div className="popup-overlay"></div>
          <ContentContainer>
            <Title>Boletos</Title>
            <Button onClick={closePopup}>
                Cerrar
            </Button>
            <BoletosContainer>
                <NoVendidos>
                    <h3>No Vendidos</h3>
                    <BoletosListContainer>
                    <BoletosList>    
                        {
                            (boletos.filter((val)=>{
                                console.log(val);
                                    if(val.vendido == "0"){
                                        return val;
                                    }
                            }).map(({ numBoleto, precio, fechaVenta, idColaborador, idCartera, idComprador, vendido }) => (
                                //console.log(boletos),
                                <BoletoItem 
                                numBoleto={numBoleto} 
                                precio={precio} 
                                fechaVenta={fechaVenta}
                                idColaborador={idColaborador}
                                idCartera={idCartera} />
                            )))
                        }
                    </BoletosList>
                    </BoletosListContainer>
                </NoVendidos>
                <Vendidos>
                    <h3>Vendidos</h3>
                    <BoletosListContainer>
                    <BoletosList>
                    {
                            (boletos.filter((val)=>{
                                console.log(val);
                                    if(val.vendido == "1"){
                                        return val;
                                    }
                            }).map(({ numBoleto, precio, fechaVenta, idColaborador, idCartera, idComprador, vendido }) => (
                                //console.log(boletos),
                                <BoletoItem 
                                numBoleto={numBoleto} 
                                precio={precio} 
                                fechaVenta={fechaVenta}
                                idColaborador={idColaborador}
                                idCartera={idCartera} 
                                idComprador={idComprador}/>
                            )))
                        }
                    </BoletosList>
                    </BoletosListContainer>
                </Vendidos>
            </BoletosContainer>
          </ContentContainer>
        </Container>
      )}
      
    </>
  );
}
export default Boletos;