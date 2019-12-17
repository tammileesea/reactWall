import React from 'react';
import '../Edit/EditComment.css';

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
                <button 
                    onClick={props.editHandler}
                    id="submitCmtBtn"
                >Submit</button>
                <button 
                    onClick={props.cancelEditCmtHandler}
                    id="cancelCmtBtn"
                >Cancel</button>
            </form>
        </div>
    )
}

export default editComment;