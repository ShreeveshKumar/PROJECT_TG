import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import './Confirm.css'

const Confirm = () => {
  return (
    <React.Fragment>
        <Navbar />
      <div className="order_confirm_final">
        <h1>Your Order have been Successfully placed</h1>
        <div>
          <CheckCircleOutlinedIcon />
        </div>
        <h1>Thank you for visiting</h1>
      </div>
    </React.Fragment>
  );
}

export default Confirm;