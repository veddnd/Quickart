import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import '../../App.css'; // Importing the CSS file
import Dialog from '@mui/material/Dialog';
import { CiSearch } from "react-icons/ci";
import { MdClose } from 'react-icons/md';

const CountryDropdown = () => {
    const [isopenmodal,setisopenmodal]=useState(false); 
    return (
        <>
            <Button className='countryDrop' onClick={()=>setisopenmodal(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'> Your Location </span>
                    <span className='name'>India</span>
                </div>
                <div className='ml-auto'><FaAngleDown /></div>
            </Button>

            <Dialog open={isopenmodal} className='locationmodel' >
                <h4>Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area</p>
                <Button className='close_' onClick={()=>setisopenmodal(false)}><MdClose/></Button>
                <div className="headersearch">
                    <input type="text" placeholder="Search for your area.." />
                    <button>
                        <CiSearch />
                    </button>

                </div>

                <ul className='countrylist'>
                    <li><Button>India</Button></li>
                    <li><Button>Srilanka</Button></li>
                    <li><Button>Indonesia</Button></li>
                    <li><Button>China</Button></li>
                    <li><Button>Japan</Button></li>
                    <li><Button>America</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>Srilanka</Button></li>
                    <li><Button>Indonesia</Button></li>
                    <li><Button>China</Button></li>
                    <li><Button>Japan</Button></li>
                    <li><Button>America</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>Srilanka</Button></li>
                    <li><Button>Indonesia</Button></li>
                    <li><Button>China</Button></li>
                    <li><Button>Japan</Button></li>
                    <li><Button>America</Button></li>
                </ul>

            </Dialog>

        </>
    );
}

export default CountryDropdown;