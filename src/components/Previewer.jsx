import {Component} from "react";
import "./Previewer.css";
import Markdown from 'marked-react';
import Card from 'react-bootstrap/Card';





class Previewer extends Component {

    render() {
        return (
        <>
            <Card.Title className="shadow-lg d-flex align-self-start bg-success border border-success rounded-top-1">Previewer</Card.Title>
            <Card className="bg-success bg-opacity-10 p-3 rounded-top-0">
                <Markdown>{this.props.input}</Markdown>
            </Card>
            </>
        );
    }
}

export default Previewer;