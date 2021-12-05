
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
import { FaSearch} from "react-icons/fa";
import { adeudosCarteras } from "../Data/Colaboradores.Data";
import Abonar from "../modals/Abonar.modal";

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


const Adeudos = () => {

const [modal, setModal] = useState(false);
const [loadingData, setLoadingData] = useState(true);
const [data, setData] = useState([]);
const [selectedColaborador, setColaborador] = useState(null);
const [searchTerm, setSearchTerm] = useState("");

const toggleModal = () => {
  setModal(!modal)
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
  for(x in value){
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


  return (
    <Container>
      <Abonar 
      modal={modal} buttonClicked={toggleModal} colaborador={selectedColaborador}
      />
      <Papr>
        <div style={{display: "flex"}}>
          <h1 className="title">Adeudos</h1>
          <SearchBar>
            <SearchInput 
            onChange={(e)=>setSearchTerm(e.target.value)}
            placeholder="Ingrese dato..."/>
          </SearchBar>
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
            {(tableData(data).filter((val)=>{
              if(searchTerm == ""){
                return val;
              } else if(
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
                    <TableButton id={idColaborador} onClick={(e)=>{
                      setColaborador(tableData(data)[e.target.id-1])
                      toggleModal()
                    }}>Abonar</TableButton>
                  </TableCell>
                </TableRow>
            )))}
          </TableBody>
        </Table>
        {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Papr>
    </Container>
  )
};

export default Adeudos;

