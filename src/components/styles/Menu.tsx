import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { HashRouter as Router } from "react-router-dom";
import "./login.css";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import av from "../../assets/img/av.png";
import atg from "../../assets/img/books.png";
import { LoginService } from "../../services/poste.service";
const Menu = () => {
  const [numero, setNumero] = useState("");
  const [chargement, setChargement] = useState(true);
  const [mdp, setMdp] = useState("");
  let history = useHistory();

const verification=()=>{
  if(numero=="admin"&&mdp=="Lgtr2022"){
    history.push("/menu");
  }else{
    history.push("/page");
  }
}
  const refreshPage = () => {
    window.location.reload();
  };
  const verificatiozn=()=>{
    if(numero=="admin"&&mdp=="Lgtr2022"){
      history.push("/menu");
    }else{
      history.push("/connexion");
    }
  }
  
  return (
    <div className="logCnt">
      <Router>
        <div className="logBlog">
          <div className="logAvatar">
            {" "}
            <div className="app__im">
            <h3>e-traffic</h3>
          </div>
          </div>
          <Form>
           
          </Form>
          <div>
              <a className="bt" onClick={()=>verificatiozn()} >
                Responsable de police
              </a>
            </div>
          {chargement ? (
            <div>
              <a className="bt" onClick={()=>verification()} >
                accusé ou usager
              </a>
            </div>
          ) : (
            <div>
              <CircularProgress />
            </div>
          )}
          <div></div>
        </div>
      </Router>
    </div>
  );
};
export default Menu;
