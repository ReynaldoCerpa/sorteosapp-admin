import { Button } from "@material-ui/core";

const Btn = ({onClick}) => {
    return <Button
                style={{
                    marginTop: "3rem",
                    borderRadius: "20px",
                    backgroundColor: "#FFBF00"
                }}
                variant="contained"
                onClick={onClick}
            >Iniciar Sesión
            </Button>
}

export default Btn
