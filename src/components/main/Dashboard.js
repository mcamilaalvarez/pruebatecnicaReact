import React from 'react';
import { GistList } from '../GistList';
import { Route, Routes } from "react-router-dom";
import { NavBar } from '../Navbar';



export const Dashboard =() => {
    return (
        <>
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<GistList/>}/>
        </Routes></>
       
    )
}