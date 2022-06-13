import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { HashRouter as Router } from "react-router-dom";
import "./login.css";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import av from "../../assets/img/av.png";
import atg from "../../assets/img/books.png";
import { LoginService } from "../../services/poste.service";
import { CreateAccidentService } from "../../services/createaccident.service";
const Page = () => {
  const [typeAccident, setTypeAccident] = useState("");
  const [lieuAccident, setLieuAccident] = useState("");
  const [description, setDescription] = useState("");
  const [chargement, setChargement] = useState(true);
  const [mdp, setMdp] = useState("");
  const [numero,setNumero]=useState("'")
  let history = useHistory();

  const actual = () => {
    let promess = new Promise((resolve, reject) => {
      resolve(action());
    });
    promess.then(() => {
      setChargement(true);
      alert('Merci de nous avoir informer')
      history.goBack()
    });
    return <div></div>;
  };
  const action = async () => {
    setChargement(false);
    const result = await CreateAccidentService.newAccident(typeAccident,lieuAccident,description);
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
          className="rechitem"
          placeholder="Localisation"
          onChange={(e)=>setLieuAccident(e.target.value)}
        ></Form.Control>
         <Form.Control
          type="text"
          placeholder="Cause"
          className="rechitem"
          onChange={(e)=>setTypeAccident(e.target.value)}
        ></Form.Control>
        <Form.Control
          as="textarea"
          rows={8}
          placeholder="Description"
          className="rechitemd"
          onChange={(e)=>setDescription(e.target.value)}
        ></Form.Control>
          </Form>{console.log(description,lieuAccident,typeAccident)}
          
          {chargement ? (
            <div className="bts">
              <a className="bts" onClick={()=>actual()} >
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
export default Page;
