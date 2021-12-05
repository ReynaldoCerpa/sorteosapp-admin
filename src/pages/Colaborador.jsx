import { useState, useEffect } from "react";
import styled from "styled-components";
import CarteraItem from "../components/CarteraItem";

  

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

const Button = styled.button`
border: none;
padding: 8.5px;
text-align: center;
border-radius: 7px;
cursor: pointer;
background-color: #FFBF00;
font-weight: 700;
font-size: 1rem;
`;

const SearchBar = styled.div`
margin: auto 5rem;
min-width: 15rem;
`;

const SearchInput = styled.input`
padding: 9px;
text-align: left;
border-radius: 7px;
border-style: hidden;
background-color: #e0e0e0;
outline: none;
width: 20rem;
`;

const Colaborador = ({modal, buttonClicked, colaborador }) => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <Container className="modal">
          <div className="overlay"></div>
          <ContentContainer className="modal-content">
            <div style={{display: "flex"}}>
            <h1>Carteras</h1>
            <SearchBar>
                <SearchInput 
                onChange={(e)=>setSearchTerm(e.target.value)}
                placeholder="Ingrese dato..."/>
              </SearchBar>
            </div>
            <div style={{display: "flex"}}>
              <h2 style={{marginRight: "1rem"}}>Colaborador:</h2>
              <h2>{colaborador.nombre}</h2>
            </div>
            <CarterasContainer>
              {colaborador.carteras.length ?
                colaborador.carteras.filter((val)=>{
                  if(searchTerm == ""){
                    return val;
                  } else if(
                    val.idCartera.toString().toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                    return val
                  }
                }).map(({idCartera, idColaborador, numBoletos, fechaEntregada, entregada})=>{
                  <CarteraItem 
                  idCartera={idCartera}
                  idColaborador={idColaborador}
                  numBoletos={numBoletos}
                  fechaEntregada={fechaEntregada}
                  entregada={entregada}/>
                })
                :
                <h1>No tiene carteras</h1>
              }
            </CarterasContainer>
            <Button className="close-modal" onClick={buttonClicked}>
              Cerrar
            </Button>
          </ContentContainer>
        </Container>
    )
}

export default Colaborador;
