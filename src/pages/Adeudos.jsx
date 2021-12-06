
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useEffect, useState, useRef } from "react";
import { colaboradores } from "../Data/Colaboradores.Data";
import styled from "styled-components";
import TablePagination from '@mui/material/TablePagination';
import { headers } from "../config/headers";
import { FaSearch } from "react-icons/fa";
import { adeudosCarteras } from "../Data/Colaboradores.Data";
import AbonarTest from "../modals/AbonarTest.modal";

const Papr = styled(Paper)`
  overflow-x: auto;
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  padding: 10px;
  margin: 10px;
`;
const Container = styled.div`
  margin-left: 10rem;
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
const AbonarButton = styled.button`
  border: none;
  padding: 8.5px;
  text-align: center;
  border-radius: 7px;
  cursor: pointer;
  background-color: #FFBF00;
  font-weight: 700;
  width: 4rem;
`;

const SearchBar = styled.div`
  margin: 1.2rem;
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
const SearchButton = styled.button`
  border: none;
  padding: 8.5px;
  width: 3rem;
  text-align: center;
  border-radius: 0 7px 7px 0;
  cursor: pointer;
  background-color: #FFBF00;
`;
const AbonarBakcground = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  border-radius: 10px;
  padding: 2px;
  display: flex;
  justify-content: center;
`
const AbonarContainer = styled.div`
  margin: 1rem 1.5rem;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  font-size: 1.2rem;
`;
const Symbol = styled.p`
  margin-right: 0.2rem;
  font-size: 1.5rem;
  position: fixed;
  transform: translate(-1rem);
`;

const AbonarInput = styled.input`
padding: 9px;
text-align: left;
border-radius: 7px;
border-style: hidden;
background-color: #e0e0e0;
outline: none;
width: 6rem;
font-size: 1rem;
margin: 0.3rem 0;
`

const Alert = styled.h3`
  color: red;
`


const Adeudos = () => {

  const [modal, setModal] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);
  const [selectedColaborador, setColaborador] = useState(null);
  const [selectedCartera, setCartera] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [abono, setAbono] = useState("")
  const [alert, setAlert] = useState(false)

  const toggleAlert = () => {
    setAlert(!alert)
  }

  useEffect(() => {
    async function getData() {
      setData(await adeudosCarteras())
      setLoadingData(false)
    }
    if (loadingData) {
      getData();
    }
  }, [])

  const tableData = (value) => {
    const adeudos = []
    let x;
    for (x in value) {
      adeudos.push(
        {
          idCartera: data[x]["idCartera"],
          idColaborador: data[x]["idColaborador"],
          nombreColaborador: data[x]["nombreColaborador"],
          fechaEntregada: data[x]["fechaEntregada"],
          adeudo: data[x]["adeudo"],
          devuelta: data[x]["devuelta"],
        }
      )
    }
    return adeudos;
  }

  const handleAbonar = (id,value) => {
    if(id != "" && value != ""){
      console.log("pasó");
    }else {
      setAlert(true)
    }
  }
  const reg = /^-?\d*\.?\d*$/;

  return (
    <Container>
      <Papr>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", alignItems: "flex-end", margin: "0rem" }}>
            <h1>Adeudos</h1>
            <SearchBar>
              <SearchInput
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Ingrese dato..." />
            </SearchBar>
          </div>
          <AbonarBakcground>
            <AbonarContainer>
              <Title>Abonar</Title>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Symbol>$</Symbol>
                <AbonarInput 
                type="number" 
                min="0"
                value={abono}
                onInput={
                  (e)=>{
                    if(reg.test(e.target.value)) {
                      setAlert(false)
                      setAbono(e.target.value)
                    }
                  }
                }
                />
              </div>
              <AbonarButton
                onClick={
                  () => {
                    handleAbonar(selectedCartera, abono)
                  }
                }
              >Abonar</AbonarButton>
            </AbonarContainer>
            <AbonarContainer>
              <Title>ID Cartera seleccionada: </Title>
              <h2>{selectedCartera != null ? selectedCartera : "Seleccione cartera"}</h2>
              {alert ? <Alert>CANTIDAD INVALIDA</Alert> : ""}
            </AbonarContainer>
          </AbonarBakcground>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <NameCell>ID Cartera</NameCell>
              <TableCell>ID Colaborador</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Fecha entregada</TableCell>
              <TableCell>Adeudo</TableCell>
              <TableCell>Devuelta</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(tableData(data).filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.nombreColaborador.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.idCartera.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.devuelta.toString().toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val
              }
            }).map(({ idCartera, idColaborador, nombreColaborador, fechaEntregada, adeudo, devuelta }) => (
              <TableRow
                hover
              >
                <TableCell>{idCartera}</TableCell>
                <TableCell>{idColaborador}</TableCell>
                <TableCell>{nombreColaborador}</TableCell>
                <TableCell>{fechaEntregada}</TableCell>
                <TableCell>${adeudo} MXN</TableCell>
                <TableCell>{devuelta == 0 ? "Pendiente" : "Devuelta"}</TableCell>
                <TableCell>
                  <TableButton id={idCartera} onClick={(e) => {
                    console.log(e.target.id);
                    setCartera(e.target.id)
                  }}>Seleccionar</TableButton>
                </TableCell>
              </TableRow>
            )))}
          </TableBody>
        </Table>
      </Papr>
    </Container>
  )
};

export default Adeudos;

