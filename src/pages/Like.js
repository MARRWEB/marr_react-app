

import MyHeader from "../components/MyHeader"
import MyButton from "../components/MyButton";

const Like = () => {
    function handleClick(e){
        window.location.href = "/like"
    }
    return (
        <MyHeader
        headText = {"찜"} 
        leftChild = {
             <MyButton 
             text = {"찜"} 
             onClick={handleClick}
            />
        }

         />
    )
}

export default Like;