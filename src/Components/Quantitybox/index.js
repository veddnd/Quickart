import { FaMinus, FaPlus } from "react-icons/fa6";
import Button from '@mui/material/Button';
import { useState } from "react";

const Quantitybox = ({ quantity, onQuantityChange }) => {
    const [inputval, setInputValue] = useState(quantity || 1);

    const handleMinus = () => {
        if (inputval > 1) {
            const newValue = inputval - 1;
            setInputValue(newValue);
            onQuantityChange(newValue); // Notify the parent
        }
    };

    const handlePlus = () => {
        const newValue = inputval + 1;
        setInputValue(newValue);
        onQuantityChange(newValue); // Notify the parent
    };

    return (
        <div className="quantitydrop d-flex align-items-center">
            <Button onClick={handleMinus}><FaMinus /></Button>
            <input 
                type="text" 
                value={inputval} 
                readOnly 
            />
            <Button onClick={handlePlus}><FaPlus /></Button>
        </div>
    );
};

export default Quantitybox;
