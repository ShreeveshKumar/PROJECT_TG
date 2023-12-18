import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import './Confirm.css'
import { Icon4 } from '../../Icons';

const Confirm = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col flex-wrap align-middle place-content-center font-comfortaa font-bold indent-width p-5 ">
        <h3>
          Your Order has been successfully placed <Icon4 />
        </h3>
        <h3 className="flex align-middle place-content-center">Thank you </h3>
      </div>
    </div>
  );
}

export default Confirm;