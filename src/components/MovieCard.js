import React from 'react'

export default function MovieCard({poster, title, year}) {
  return (
    <div className='cardDiv'>
      <div>
        <img width="200px" height="300px" src={poster!="N/A"?poster:"https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg"
}/>
      </div>
      <div>
        <h4>{title}</h4>
        <p>{year}</p>
      </div>
    </div>
  )
}
