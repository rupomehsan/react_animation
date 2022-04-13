import React from 'react'

function Contact() {

const submit = (e)=>{
    e.preventDefault()
    alert("clicke")
}

  return (
      <>
      <div className="contact">
        <h1 className="text-center my-5">Contact</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-10 mx-auto">
          <form>
              <div class="row my-3">
                <div class="col">
                  <input type="text" class="form-control" placeholder="First name" />
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="Last name" />
                </div>
              </div>
              <div class="row my-3">
                <div class="col">
                  <input type="text" class="form-control" placeholder="First name" />
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="Last name" />
                </div>
               
              </div>
              <div class="form-group d-flex align-items-center flex-column">
                  <textarea class="form-control"  rows="3"></textarea>
                  <input type="submit" onClick={submit} className="btn btn-dark my-3" />
                </div>
               
            </form>
          </div>
        </div>
      </div>
      </>
  )
}

export default Contact