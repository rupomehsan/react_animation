import React from 'react'
import {NavLink} from 'react-router-dom';
function Common(props) {
  return (
    <section id="header" className="d-flex align-items-center" >
          <div className="container-fluid">
            <div className="row">
                  <div className="col-10 m-auto">
                        <div className="row">
                          <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1 d-flex align-items-center flex-column">
                            <h1>{props.heading}</h1>
                            <p className="my-3">{props.desc}</p>
                            <div className="mt-3">
                              <NavLink to={props.visit} className="btn btn-success">{props.btn}</NavLink>
                            </div>
                          </div>
                          <div className="col-lg-6 order-lg-2 mt-5 order-1 header-img">
                            <img className="image-fluid animated" height="200" src={props.image} alt="" />
                          </div>
                        </div>
                  </div>
            </div>
          </div>
      </section>
  )
}
// "https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_960_720.jpg"
export default Common
