import React from 'react'
import Button from 'react-bootstrap/Button';
import '../App.css'
const Contact = () => {
  return (
    <div className='header-wrapper  d-flex container'>
        <div className='main-info  text-center '>
            <h2 className='mt-3'><b>Newsletter<span className='green'>.</span></b></h2>
            <h6 className='mt-3 mb-5'>After subscribing you will recieved automatically all news about our features.</h6>
            <div class="input-group mb-3">
              <input type="text" className="form-control" placeholder="Recipient's Email" aria-label="Recipient's Email" aria-describedby="button-addon2"/>
              <Button variant="success">Submit</Button>
          </div>
        </div>
    </div>
  )
}

export default Contact;