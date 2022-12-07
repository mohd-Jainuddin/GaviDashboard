import React, { useContext } from 'react'
import Heading from '../Heading/Heading'
import { createHeadarContextApi } from "../HeaderContext/HeaderContext";

import "../Cart/Cart.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Button} from '@mui/material'
import DataTable from '../../DataTable/DataTable';

function Cart() {
 const { headerData, error, headerToast } = useContext(createHeadarContextApi);
  return (
    <>
      <div className="text">
        <p>Data source: Gavi/World Health Organization.</p>
      </div>
      <div className="btn">
        <span className="btn1"> <Button variant="contained" >DashBoard</Button></span>
       <span className="btn2"><Button variant="outlined" >GLOBAL</Button></span>
        
      </div>
      {headerData.map(
        ({
          ActiveCases,
          TotalCases,
          NewCases,
          Serious_Critical,
          NewDeaths,
          TotalDeaths
        }) => {
          return (
            <div>
              <Heading/>
              <div className="container_cart">
                <div className="first">
                  <span>
                    <p className='cap'>Total Cases</p>
                    <span className='active_ca small_T' >{ActiveCases}</span>
                    <p className='cap'>Active Cases</p>
                    <span className='t_ca  small_R'>{TotalCases}</span>
                  </span>
                </div>

                <div className="second">
                  <span>
                  <p className='cap'>Total Deaths </p>
                  <span className='T_D small_T'>{TotalDeaths}</span>
                  <p className='cap'>New Deaths </p>
                  <span className='N_D  small_R'>{NewDeaths}</span>
                  </span>
                </div>

                <div className="third">
                  <span>
                  <p className='cap'>New Cases </p>
                  <span className='N_D small_T '>{Serious_Critical}</span>
                  <p className='cap'>CRITICAL</p>
                  <span className='N_D small_R'>{NewCases}</span>
                  </span>
                </div>

                <div className="fourth">
                  <span>
                    
                  </span>
                </div>

                <div className="five">
                  <span>
                   
                  </span>
                </div>

                <div className="six">
                  <span>
                    
                  </span>
                </div>
              </div>
            </div>
          );
        }
      )}
      <DataTable/>
      {headerToast && toast(error) && <ToastContainer theme='dark'/>}
    </>
  );
}

export default Cart