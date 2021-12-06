import { headers } from "../config/headers";

export const colaboradores = async () => {
    const response = await fetch("http://localhost:4000/getColaboradores", {
        method: "get",
        headers: headers,
    });
    const data = await response.json()
    return data[0];
}

export const carteras = async () => {

    const response = await fetch("http://localhost:4000/allCarteras", {
        method: "get",
        headers: headers,
    });
    const data = await response.json()
    return data;
}

export const adeudosCarteras = async () => {

    const response = await fetch("http://localhost:4000/adeudoCarteras", {
        method: "get",
        headers: headers,
    });
    const data = await response.json()
    return data[0];
}

export const allBoletosCartera = async (idCartera) => {
    try {
      const values = {
        idCartera: idCartera
      }
  
      const response = await fetch("http://localhost:4000/allBoletos", {
          method: "post",
          headers: headers,
          body: JSON.stringify(values)
        }
      );
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  export const insertarCarteras = async (numColaborador, numPromotor, numCarteras) => {
    try {
      const values = {
        numColaborador: numColaborador,
        numCarteras: numCarteras,
        numPromotor: numPromotor
      }
  
      const response = await fetch("http://localhost:4000/insertarCarteras", {
          method: "post",
          headers: headers,
          body: JSON.stringify(values)
        }
      );
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  export const abonoCartera = async (numCartera, numColaborador, cantidadAbono) => {
    try {
      const values = {
        numCartera: numCartera,
        numColaborador: numColaborador,
        cantidadAbono: cantidadAbono
      }
  
      const response = await fetch("http://localhost:4000/abonoCartera", {
          method: "post",
          headers: headers,
          body: JSON.stringify(values)
        }
      );
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  export const devolverCartera = async (numCartera) => {
    try {
      const values = {
        numCartera: numCartera
      }
  
      const response = await fetch("http://localhost:4000/devolverCartera", {
          method: "post",
          headers: headers,
          body: JSON.stringify(values)
        }
      );
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }
