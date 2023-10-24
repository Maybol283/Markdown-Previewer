import React from "react";
import { Container, Form } from "react-bootstrap";
import './Editor.css'

function Editor(props){

        return (
            <Container className="w-50 bg-secondary p-1">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="d-flex align-self-start">Editor</Form.Label>
                        <Form.Control as="textarea" rows={3} value={props.input} onChange={props.handleChange}/>
                    </Form.Group>
                </Form>
            </Container>
        )
      }


    export default Editor