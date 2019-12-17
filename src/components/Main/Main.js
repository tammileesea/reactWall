import React from 'react';
import '../Main/Main.css'
import 'antd/dist/antd.css';
import {Button, Form} from 'antd';

const main = props => {
    return (
        <div className="Main">
            <h1>Welcome to the Wall!</h1>
            <div>
                <h3>Enter your message here: </h3>
                <Form onSubmit={props.submitHandler}>
                    <textarea
                        type="text"
                        name="inputMsg"
                        value={props.currVal}
                        onChange={props.msgInputHandler}
                        rows="3"
                        cols="60"
                    /><br/>
                    <Button
                        id="mainButton"
                        type="primary" 
                        onClick={props.msgObjHandler}
                    >Add message</Button>
                </Form>
            </div>
        </div>
    );
}

export default main;