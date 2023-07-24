import MyButton from "../components/MyButton";
import {DiaryStateContext} from "../App";
import { useContext } from "react";


const MyPage= () => {

   const userinfo = useContext(DiaryStateContext);
   console.log("userinfo",userinfo);

   return <div className="userinfo">
      
         <h3> 
            name :{ userinfo[0].name}
            <br/>
            LV : {userinfo[0].level}
         </h3>

   </div>
}

export default MyPage;