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
const Constat = () => {
  const [numero, setNumero] = useState("");
  const [chargement, setChargement] = useState(true);
  const [mdp, setMdp] = useState("");
  let history = useHistory();

  const actual = () => {
    let promess = new Promise((resolve, reject) => {
      resolve(action());
    });
    promess.then(() => {
      setChargement(true);
      history.push("/main");
    });
    return <div></div>;
  };
  const action = async () => {
    setChargement(false);
    const result = await LoginService.login(numero,mdp);
    await result;
  };
const verification=()=>{
  if(numero=="admin"&&mdp=="Lgtr2022"){
    history.push("/admin");
  }else{
    history.push("/main");
  }
}
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="logCnt">
      <Router>
        <div className="topI">
        <div className="logAvatars">
            {" "}
            <div className="app__ims">
            <h3>e-traffic</h3>
          </div>
          </div>
        </div>
        <div className="logBlogs">
         
         
          <div className="blockItem">

          </div>
          <Form className="blockItem">
          <Form.Control
          type="text"
          maxLength={9}
          minLength={9}
          className="rechitem"
          placeholder="Localisation"
        ></Form.Control>
         <Form.Control
          type="text"
          maxLength={9}
          minLength={9}
          placeholder="Cause"
          className="rechitem"
        ></Form.Control>
        <Form.Control
          as="textarea"
          rows={8}
          placeholder="Description"
          className="rechitemd"
          
        ></Form.Control>
          </Form>
          
          {chargement ? (
            <div className="bts">
              <a className="bts" onClick={()=>verification()} >
               informer
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
export default Constat;
