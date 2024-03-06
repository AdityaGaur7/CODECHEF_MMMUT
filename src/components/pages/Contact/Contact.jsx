import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center">


      <div className='ok'>
    <img src="https://firebasestorage.googleapis.com/v0/b/test1-80c19.appspot.com/o/Codechef_team%2Fassets%2Fchat%20(1).png?alt=media&token=3228f7b1-378d-4dea-adb6-0c4ad3735f30" alt="ok" />

        <form>
  <h1 className="title text-center mb-4">Talk to Us</h1>


  <div className="form-group position-relative">
    <label for="formName" className="d-block">
      <i className="icon" data-feather="user"></i>
    </label>
    <input type="text" id="formName" className="form-control form-control-lg thick" placeholder="Name"/>
  </div>


  <div className="form-group position-relative">
    <label for="formEmail" className="d-block">
      <i className="icon" data-feather="mail"></i>
    </label>
    <input type="email" id="formEmail" className="form-control form-control-lg thick" placeholder="E-mail"/>
  </div>

 
  <div className="form-group message">
    <textarea id="formMessage" className="form-control form-control-lg" rows="7" placeholder="Write your message here"></textarea>
  </div>


  <div className="text-center">
    <button type="submit" className="btn btn-primary" tabIndex="-1">Send message</button>
  </div>
        </form>
      </div>
        
   
      </div>
    </div>
  )
}

export default Contact
