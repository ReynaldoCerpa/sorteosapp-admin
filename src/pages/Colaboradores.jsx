
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
import ColaboradorModal from "../modals/Colaborador.modal";
import { FaSearch} from "react-icons/fa";
import { carteras } from "../Data/Colaboradores.Data";

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
const SearchButton = styled.button`
  border: none;
  padding: 8.5px;
  width: 3rem;
  text-align: center;
  border-radius: 0 7px 7px 0;
  cursor: pointer;
  background-color: #FFBF00;
`;


const Colaboradores = () => {

const [modal, setModal] = useState(false);
const [loadingData, setLoadingData] = useState(true);
const [data, setData] = useState([]);
const [rowsPerPage, setRowsPerPage] = useState(5);
const [page, setPage] = useState(0);
const [selectedColaborador, setColaborador] = useState(null);
const [carterasColaborador, setCarteras] = useState(null);
const [searchTerm, setSearchTerm] = useState("");

const toggleModal = () => {
  setModal(!modal)
}

useEffect(() => {
  async function getData() {
    setCarteras(await carteras())
    setData(await colaboradores())
    setLoadingData(false)
  }
  if (loadingData) {
    getData();
  }
}, [])

const getCartera = (cartera, id) =>{
  let carterasArray = []
  let x;
  for(x in cartera){
    if(cartera[x].idColaborador == id){
      carterasArray.push(
        {
          entregada: cartera[x]["entregada"],
          fechaDevolucion: cartera[x]["fechaDevolucion"],
          fechaEntregada: cartera[x]["fechaEntregada"],
          idCartera: cartera[x]["idCartera"],
          idColaborador: cartera[x]["idColaborador"],
          idPromotor: cartera[x]["idPromotor"],
          numBoletos: cartera[x]["numBoletos"],
        }
      )
    }
  }
  return carterasArray;
}

const tableData = (value) => {
  const colaboradores = []
  let x;
  for(x in value){
    colaboradores.push(
      {
        idColaborador: data[x]["idColaborador"],
        nombre: data[x]["Nombre"],
        telefono: data[x]["telefono"],
        direccion: data[x]["Direccion"],
        correo: data[x]["correo"],
        usuario: data[x]["nombreusuario"],
        carteras: getCartera(carterasColaborador, data[x]["idColaborador"])
      }
    )
  }
  return colaboradores;
}


  return (
    <Container>
      <ColaboradorModal 
      modal={modal} buttonClicked={toggleModal} colaborador={selectedColaborador}
      />
      <Papr>
        <div style={{display: "flex"}}>
          <h1 className="title">Colaboradores</h1>
          <SearchBar>
            <SearchInput 
            onChange={(e)=>setSearchTerm(e.target.value)}
            placeholder="Ingrese dato..."/>
          </SearchBar>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <NameCell>ID</NameCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Dirección</TableCell>
              <TableCell>Correo</TableCell>
              <TableCell>Usuario</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(tableData(data).filter((val)=>{
              if(searchTerm == ""){
                return val;
              } else if(
                val.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.idColaborador.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.telefono.toString().toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                return val
              }
            }).map(({ idColaborador, nombre, telefono, direccion, correo, usuario }) => (
                <TableRow
                >
                  <NameCell
                  >{idColaborador}</NameCell>
                  <TableCell>{nombre}</TableCell>
                  <TableCell>{telefono}</TableCell>
                  <TableCell>{direccion}</TableCell>
                  <TableCell>{correo}</TableCell>
                  <TableCell>{usuario}</TableCell>
                  <TableCell>
                    <TableButton id={idColaborador} onClick={(e)=>{
                      setColaborador(tableData(data)[e.target.id-1])
                      toggleModal()
                    }}>Carteras</TableButton>
                  </TableCell>
                </TableRow>
            )))}
          </TableBody>
        </Table>
      </Papr>
    </Container>
  )
};

export default Colaboradores;

