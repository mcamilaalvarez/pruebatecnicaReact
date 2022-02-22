import React,{useState} from "react";
import { GistContainer } from './GistContainer';
import ReactPaginate from "react-paginate";

import { useFetchGists } from "../hooks/useFetchGists";
export const GistList = () => {
    const {data: gists,} = useFetchGists();
    console.log(gists)
    //const[gists, setUsers]= useState(JsonData,slice(0,100))

    const [pageNumber, setPageNumber] = useState(0)
    const gistsPerPage = 20;
    const pagesVisited = pageNumber * gistsPerPage;
    const pageCount = Math.ceil(gists.length/ gistsPerPage);

    const displayGists= gists.slice(pagesVisited, pagesVisited +gistsPerPage)
    .map((gist, index)=> {
        return ( <GistContainer
            key = {index}
            name = {gist.ownerName} 
            description={gist.description} 
            date = {gist.dateOfCreation} 
            img={gist.ownerPicture} 
            id ={gist.gistId}/> )
           
        
    });
    
    
    
    const changePage = ({selected}) => {
        setPageNumber (selected);
    }

    return(
        
        <div className="card-container">

          {displayGists}
          <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationButton"}
          previousLinkClassName={"previousButton"}
          nextLinkClassName={"nextButton"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
          
          />

        </div>
    )
}

// let gistList;
//     gistList = [];
//     gists.map((gist, index)=> {
//         gistList.push(
//             <GistContainer
//             key = {index}
//             name = {gist.ownerName} 
//             description={gist.description} 
//             date = {gist.dateOfCreation} 
//             img={gist.ownerPicture} 
//             id ={gist.gistId}/>
//         )
//     })