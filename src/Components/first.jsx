
import Sec from "./sec";

function First(){

    let re=()=>{
        console.log("Parent");
        
    }

    return (
        <>
        <button onClick={re}>Click</button>
        <Sec/>
        </>
    )

}


export default First