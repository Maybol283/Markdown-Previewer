import React from "react";
import { Container, Form } from "react-bootstrap";
import './Editor.css'


function Editor(props){

        return (
            <Container className="w-75 pb-1 mb-3">
                <Form>
                    <Form.Group className="mb-3 bg-success border border-success border-top-0 rounded " controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="shadow-lg d-flex align-self-start border border-success border-bottom-0 m-0 rounded">Editor</Form.Label>
                        <Form.Control as="textarea" rows={3} value={props.input} onChange={props.handleChange}/>
                    </Form.Group>
                </Form>
            </Container>
        )
      }


    export default Editor