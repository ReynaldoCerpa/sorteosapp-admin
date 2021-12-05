
import { useState, useEffect } from "react";
import "./Modal.css"
import styled from "styled-components";
import CarteraItem from "../components/CarteraItem";
import AddCarteras from "./AddCarteras.modal";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


const ColaboradorModal = ({modal, buttonClicked, colaborador }) => {

  const [popup, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!popup)
  }

const Container = styled.div`
  margin-left: 5rem;
  margin-top: 8rem;
`;
const NameCell = styled(TableCell)`
  width: 2rem;
  overflow-x: auto;
  white-space: nowrap;
  text-align: left;
`;

const TableButton = styled.button`
  border: none;
  padding: 8.5px;
  text-align: center;
  border-radius: 7px;
  cursor: pointer;
  background-color: #FFBF00;
  font-weight: 700;
`;

  const ContentContainer = styled.div`
    max-width: 60rem;
    min-width: 30rem;
    width:100%;
    height: 80%;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    overflow: scroll;
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
  `;

  const CarterasButton = styled.button`
    border: none;
    padding: 8.5px;
    text-align: center;
    border-radius: 7px;
    cursor: pointer;
    background-color: #FFBF00;
    font-weight: 700;
    font-size: 1rem;
    height: 3rem;

    margin: auto 3rem;
  `;

  return (
    <>

      {modal && (
        <Container className="modal">
          <div className="overlay"></div>
          <ContentContainer >
            <AddCarteras modal={popup} closePopup={toggleModal} colaborador={colaborador}/>
            <div style={{display: "flex", justifyContent: "space-between", alignItems:"top" }}>
            <h1>Carteras</h1>
            <Button onClick={buttonClicked}>
                Cerrar
            </Button>
            </div>
            <div style={{display: "flex"}}>
              <h2 style={{marginRight: "1rem"}}>Colaborador:</h2>
              <h2>{colaborador.nombre}</h2>
              <CarterasButton onClick={()=>{toggleModal()}}>
                Asignar carteras
              </CarterasButton>
            </div>
            <Table>
              <TableHead>
                <TableRow>
                  <NameCell>ID Cartera</NameCell>
                  <TableCell>Boletos</TableCell>
                  <TableCell>Fecha de entrega</TableCell>
                  <TableCell>Entregada</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {colaborador.carteras.length ?
                    (colaborador.carteras.map(({ idCartera, numBoletos, fechaEntregada, entregada }) => (
                      <TableRow
                      hover
                      >
                        <TableCell>{idCartera}</TableCell>
                        <TableCell>{numBoletos}</TableCell>
                        <TableCell>{fechaEntregada}</TableCell>
                        <TableCell>{entregada == 0 ? "Pendiente" : "Entregada"}</TableCell>
                        <TableCell>
                          <TableButton id={idCartera} onClick={(e)=>{
                          }}>Ver Boletos
                          </TableButton>
                        </TableCell>
                      </TableRow>
                  )))
                  :
                  
                  <h1>No tiene carteras</h1>
                  
                }
                </TableBody>
            </Table>  
          </ContentContainer>
        </Container>
      )}
      
    </>
  );
}
export default ColaboradorModal;