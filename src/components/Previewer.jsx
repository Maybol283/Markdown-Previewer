import React from "react";
import "./Previewer.css";
import Markdown from 'marked-react';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";


function Previewer(props) {
    return(
        <Card>
            <Markdown>{props.input}</Markdown>
        </Card>
        )
    }

    export default Previewer