import { FaMinus } from "react-icons/fa6";
import {FaPlus} from "react-icons/fa6";
import Button from '@mui/material/Button';
import {useState} from "react";

const Quantitybox=()=>{

    const [inputval,setinputvalue]=useState(1);
    const minus=()=>{
        if(inputval!==1 && inputval>0){
            setinputvalue(inputval-1);
        }
    }

    const plus=()=>{
        setinputvalue(inputval+1);
    }
    return (
        <div className="quantitydrop d-flex align-items-center">
            <Button onClick={minus}><FaMinus/></Button>
            <input type="text" value={inputval}/>
            <Button onClick={plus}><FaPlus /></Button>
        </div>
    )
}

export default Quantitybox;
