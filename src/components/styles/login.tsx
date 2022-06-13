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
const Login = () => {
  const [nom, setNumero] = useState("");
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
    const result = await LoginService.login(nom,mdp);
  
    await result;
  };
const verification=()=>{
  if(nom=="admin"&&mdp=="Lgtr2022"){
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
        <div className="logBlog">
          <div className="logAvatar">
            {" "}
            <div className="app__img">
            <img src={atg} width={50} height={50} />
          </div>
          </div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="matricule"
                onChange={(e) => setNumero(e.target.value)}
                className="inpbt"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setMdp(e.target.value)}
                className="inpbt"
              ></Form.Control>
            </Form.Group>
          </Form>
          {chargement ? (
            <div>
              <a className="bt" onClick={()=>verification()} >
                Singn In
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
export default Login;
