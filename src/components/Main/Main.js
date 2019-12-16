import React from 'react';
import 'antd/dist/antd.css';
import {Button} from 'antd';

const main = props => {
    return (
        <div>
            <h1>Welcome to the Wall!</h1>
            <div>
                <h3>Enter your message here: </h3>
                <form onSubmit={props.submitHandler}>
                    <textarea
                        type="text"
                        name="inputMsg"
                        value={props.currVal}
                        onChange={props.msgInputHandler}
                    /><br/>
                    <Button
                        type="primary" 
                        onClick={props.msgObjHandler}
                    >Add message</Button>
                </form>
            </div>
        </div>
    );
}

export default main;