import React from 'react'
import TopSection from './TopSection'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import '../../App.css';

const BodySectionInventory = () => {

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
                <Row className="mb-3">
                    <Form.Group className='my-2' controlId="validationCustom01">
                    <Form.Label>Intrants</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Intrants</option>
                            <option value="1">fertilisants</option>
                            <option value="2">protection products</option>
                            <option value="3">désinfection</option>
                            <option value="3">œnologiques</option>
                        </Form.Select>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='my-1' controlId="validationCustom02">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="organique"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group className='my-1' controlId="validationCustom02">
                    <Form.Label>Impact environemental</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="Apport en azote"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='my-1' controlId="validationCustom02">
                    <Form.Label>Cout</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control aria-label="Amount (to the nearest dollar)" />
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='my-1' controlId="validationCustom02">
                    <Form.Label>Efficacite</Form.Label>
                        <Form.Range />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='my-1' controlId="validationCustom02">
                    <Form.Label>Facil d'Utilisation</Form.Label>
                         <Form>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="oui"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="non"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            </div>
                        ))}
                        </Form>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    />
                </Form.Group>
                <Button variant='success' type="submit">Submit</Button>
                </Form>
         </div>
    </div>
  )
}

export default BodySectionInventory