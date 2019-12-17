import React from 'react';
import '../Edit/EditMessage.css';

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
                />
                <button 
                    onClick={props.editMsgHandler} 
                    id="submitMsgBtn"
                >Submit</button>
                <button 
                    onClick={props.cancelEditMsgHandler} 
                    id="CancelMsgBtn"
                >Cancel</button>
            </form>
        </div>
    )
}

export default editMessage;