import React from 'react'

function Card(props) {
  return (
  <>
    <div className="col-md-4 col-10 mx-auto my-3">
        <div className="card">
            <img className="card-img-top" src={props.image} alt="Card image cap" />
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  </>
  )
}

export default Card
