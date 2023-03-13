import React, { useState } from 'react'
import './MovieHeader.css'
export default function MovieHeader({movieKey}) {
    const[whatMovie, changeWhatMovie]= useState("")
    function SearchClick(e){
e.preventDefault()
movieKey(whatMovie)
    }
    return (
        <div id='parent'>
            <div id='child'>
                <img width="50px" height="50px" src='https://www.pngitem.com/pimgs/m/10-105387_transparent-paris-clipart-pink-eiffel-tower-drawing-hd.png'/>
                <h1>Paris Movie Bank</h1>
            </div>
            <div>
                <form onSubmit={SearchClick}>
                    <input type="search" onChange={(e)=> changeWhatMovie(e.currentTarget.value)}/>
                    <input id="button" type="submit" value="Search"/>
                </form>
            </div>
        </div>
    )
}
