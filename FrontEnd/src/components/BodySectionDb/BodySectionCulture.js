import React from 'react'
import TopSection from './TopSection'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import '../../App.css';

const BodySectionCulture = () => {

    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className='mainContent'>
        <TopSection />
         
         <div className='bottom flex'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <h3>Choose the best intrants</h3>
                <Row className="mb-3">
                    <Form.Group className='my-2' controlId="validationCustom01">
                    <Form.Label>culture</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>cultures</option>
                            <option value="1">tomatoes</option>
                            <option value="2">Banana</option>
                            <option value="3">Plantain</option>
                            <option value="3">pineapple</option>
                        </Form.Select>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='my-1' controlId="validationCustom02">
                    <Form.Label>surface</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>100m*2</option>
                            <option value="1">more than 100m*2</option>
                            <option value="2">more than 500m*2</option>
                            <option value="3">more than 1000m*2</option>
                            <option value="3">more than 5000m*2</option>
                            <option value="3">more than 10000m*2</option>
                        </Form.Select>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group className='my-1' controlId="validationCustom02">
                    <Form.Label>Delocalised area</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Nord</option>
                            <option value="1">Sud</option>
                            <option value="2">Est</option>
                            <option value="3">Ouest</option>
                        </Form.Select>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='my-1' controlId="validationCustom02">
                    <Form.Label>Budget</Form.Label>
                        <Form.Control
                        required
                        type="text"
                        placeholder="More than 10k"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button variant='success' type="submit">calculate</Button>
                </Form>
         </div>
    </div>
  )
}

export default BodySectionCulture