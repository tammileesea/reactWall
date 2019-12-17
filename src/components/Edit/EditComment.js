import React from 'react';
import '../Edit/EditComment.css';
import 'antd/dist/antd.css';
import {Button} from 'antd';

const editComment = props => {
    return (
        <div>
            <form onSubmit={props.submitHandler}>
                <p>Edit comment</p>
                <textarea 
                    onChange={props.editCmtInputHandler}
                    id="input"
                    rows="2"
                    cols="48"
                />
                <Button 
                    type="primary" 
                    onClick={props.editHandler}
                    className="submitCancelBtn"
                >Submit</Button>
                <Button 
                    type="danger" 
                    onClick={props.cancelEditCmtHandler}
                    className="submitCancelBtn"
                >Cancel</Button>
            </form>
        </div>
    )
}

export default editComment;