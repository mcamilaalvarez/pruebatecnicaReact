import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useFetchGist } from "../hooks/useFetchGist";


export const DetailGist = (id) => {
    
    const {data: gist, loading} = useFetchGist(id.id);
    let gistFilesList;
    gistFilesList = [];
    if(gist.linksList != undefined) {
      for (const [key, value] of Object.entries(gist.linksList)) {
        gistFilesList.push(
          <li key={key}> 
            <a href={value.raw_url} target="_blank">
              <small> {value.filename} </small>
            </a> 
          </li>
        )
        
      }
    } 
    
    
    
    
    return(
        <div className="card mb-3 justify-content" style={{width: '800px'}}>
        <div className="row no-gutters imagen">
          <div className="col-md-4 ">
          <img src={(gist.ownerPicture != null) ? gist.ownerPicture : 'https://images.vexels.com/media/users/3/136558/isolated/preview/43cc80b4c098e43a988c535eaba42c53-icono-de-usuario-de-persona.png'}></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{gist.ownerName}</h5>
              
              <p  className="card-text">
                {gist.dateOfCreation}
              </p>
              <h2 className="card-subtitle"> Descripción</h2>
              <p className="card-text">
                <small className="text-muted">{gist.description}</small>
              </p>
              <h2 className="card-subtitle"> Link de Github</h2>
              <a href={gist.githubLink} target="_blank"> 
                <p  className="card-text">
                  <small> {gist.id}</small>
                  
                  
                </p>
              </a>
              <h2 className="card-subtitle"> Listado de Archivos</h2>
              
              
                <p  className="card-text">
                  <ul> {gistFilesList}</ul>
                  
                  
                </p>
              
              
             
            </div>
          </div>
        </div>
      </div>
    )
}

