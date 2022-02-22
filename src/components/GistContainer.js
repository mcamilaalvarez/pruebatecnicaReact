import React, { Component } from "react";
import Modal from '@mui/material/Modal';
import {DetailGist} from './DetailGist';





export const GistContainer = (prop) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    
    return(
    <div >
        <div onClick={handleOpen} className="cards">
            <div className="card">
                <div className="content"> 
                <div className="img">
                    <img src={(prop.img != null) ? prop.img : 'https://images.vexels.com/media/users/3/136558/isolated/preview/43cc80b4c098e43a988c535eaba42c53-icono-de-usuario-de-persona.png'}></img>
                </div>
                <div className="details">
                    <div className="card-title">
                        {(prop.name != null) ? prop.name : 'Anonimo'}
                    </div>
                    <div className="card-text">
                        {prop.description}
                    </div>
                    <div className="card-text">
                        {prop.date}
                    </div>
                </div>
            </div>
          </div>
      </div>
      
       <div >
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            >
            <DetailGist id={prop.id}/>
            </Modal>
        </div>
        
 </div>

   
           
       
    )
} 

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
 
  