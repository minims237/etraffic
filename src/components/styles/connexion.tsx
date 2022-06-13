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
import { AccidentsService } from "../../services/accident.service";
import { accidentsState } from "../../atoms/accident";
const Connexion = () => {
  const [nom, setNom] = useState("");
  const [chargement, setChargement] = useState(true);
  const [mdp, setMdp] = useState("");
  const [accidents,setAccidents]=useRecoilState(accidentsState)
  let history = useHistory();

  const actual = () => {
    let promess = new Promise((resolve, reject) => {
      resolve(action());
    });
    promess.then(() => {
      setChargement(true);
      history.push("/home");
    });
    return <div></div>;
  };
  const action = async () => {
    setChargement(false);
    const result = await LoginService.login(nom,mdp);
    await result;
    const results = await AccidentsService.accidents()
    setAccidents(results)
    await results;
  };
const verification=()=>{
  if(nom=="admin"&&mdp=="Lgtr2022"){
    history.push("/menu");
  }else{
    history.push("/page");
  }
}
  const refreshPage = () => {
    window.location.reload();
  };

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
       
          <Form className="blockItem">
          <Form.Control
          type="text"
 
          className="rechitem"
          placeholder="Username"
        ></Form.Control>
         <Form.Control
          type="password"
          placeholder="Password"
          className="rechitem"
        ></Form.Control>
          </Form>
          
          {chargement ? (
            <div className="bts">
            <a className="bts" onClick={()=>actual()} >
              Connexion
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
export default Connexion;
