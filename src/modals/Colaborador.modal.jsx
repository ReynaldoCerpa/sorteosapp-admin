import { useState } from "react";
import "./Modal.css"

export default function ColaboradorModal({modal, buttonClicked, colaborador}) {
  const [show, setModal] = useState(false);
  console.log("Modal colaborador: ",colaborador);

  return (
    <>

      {modal && (
        <div style={{marginLeft: "5rem"}}className="modal">
          <div onClick={buttonClicked} className="overlay"></div>
          <div className="modal-content">
            <h2>{colaborador}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="close-modal" onClick={buttonClicked}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}