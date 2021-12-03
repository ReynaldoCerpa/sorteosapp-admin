
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useEffect, useState } from "react";
import { colaboradores } from "../Data/Colaboradores.Data";
import styled from "styled-components";
import TablePagination from '@mui/material/TablePagination';
import { headers } from "../config/headers";
import ColaboradorModal from "../modals/Colaborador.modal";



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



const Colaboradores = () => {



const [modal, setModal] = useState(false);
const [loadingData, setLoadingData] = useState(true);
const [data, setData] = useState([]);
const [rowsPerPage, setRowsPerPage] = useState(5);
const [page, setPage] = useState(0);
const [selectedColaborador, setColaborador] = useState(null);

const toggleModal = (id) => {
  console.log("ID: ",id);
  setColaborador(data[id])
  setModal(!modal)
}

useEffect(() => {
  async function getData() {
    setData(await colaboradores())
    setLoadingData(false)
  }
  if (loadingData) {
    getData();
  }
}, [])

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
      }
    )
  }
  return colaboradores;
}

  return (
    <Container>
      <ColaboradorModal modal={modal} buttonClicked={toggleModal} colaborador={selectedColaborador}/>
      <Papr>
      <h1 className="title">Colaboradores</h1>
        <Table>
          <TableHead>
            <TableRow>
              <NameCell>ID Colaborador</NameCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Dirección</TableCell>
              <TableCell>Correo</TableCell>
              <TableCell>Usuario</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData(data).map(({ idColaborador, nombre, telefono, direccion, correo, usuario }) => (
              <TableRow
              style={{cursor: "pointer"}}
              hover
              id={idColaborador}
              onClick={()=>toggleModal((e)=>e.target.id)}
              >
                <NameCell>{idColaborador}</NameCell>
                <TableCell>{nombre}</TableCell>
                <TableCell>{telefono}</TableCell>
                <TableCell>{direccion}</TableCell>
                <TableCell>{correo}</TableCell>
                <TableCell>{usuario}</TableCell>
              </TableRow>
            ))}
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

export default Colaboradores;
