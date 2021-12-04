import { headers } from "../config/headers";

export const colaboradores = async () => {
    const response = await fetch("http://localhost:4000/getColaboradores", {
        method: "get",
        headers: headers,
    });
    const data = await response.json()
    console.log("Data from config: ",data);
    return data[0];
}

export const carteras = async () => {

    const response = await fetch("http://localhost:4000/allCarteras", {
        method: "get",
        headers: headers,
    });
    const data = await response.json()
    console.log("Data from config: ",data);
    return data;
}
