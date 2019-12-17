import React from 'react';
import '../Edit/EditMessage.css';
import 'antd/dist/antd.css';
import {Button} from 'antd';

const editMessage = props => {
    return (
        <div className="editMsgComp">
            <form onSubmit={props.submitHandler}>
                <p>Edit message</p>
                <textarea 
                    placeholder={props.placeholder}
                    onChange={props.editMsgInputHandler}
                    id="input"
                    rows="2"
                    cols="48"
                />
                <Button 
                    type="primary" 
                    onClick={props.editMsgHandler} 
                    className="submitCancelMsgBtn"
                >Submit</Button>
                <Button 
                    type="danger" 
                    onClick={props.cancelEditMsgHandler} 
                    className="submitCancelMsgBtn"
                >Cancel</Button>
            </form>
        </div>
    )
}

export default editMessage;