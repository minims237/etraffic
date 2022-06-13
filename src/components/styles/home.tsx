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
import { AccidentsService } from "../../services/accident.service";
import { accidentsState } from "../../atoms/accident";
const Home = () => {
  const [typeAccident, setTypeAccident] = useState("");
  const [lieuAccident, setLieuAccident] = useState("");
  const [description, setDescription] = useState("");
  const [chargement, setChargement] = useState(true);
  const [mdp, setMdp] = useState("");
  const [numero,setNumero]=useState("'")
  const [accidents,setAccidents]=useRecoilState(accidentsState)
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
    const result = await AccidentsService.accidents()
    setAccidents(result)
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
          <div className="dcn">
            <input value='signout' type="submit" onClick={()=>history.goBack()} className='ret'/>
            </div>
          
        </div>
        <div className="logBlogs">
          <div className="scrollItem">
   {
          accidents.map((a:any)=>
          <div className="ite">
         
            <div>   <p>{a.lieuAccident}</p></div>
            <div>   <p>{a.lieuAccident}</p></div>
               <div>   <p>{a.description}</p></div>
         </div>
          
          )
         }
          </div>
      
      
        </div>
      </Router>
    </div>
  );
};
export default Home;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}

