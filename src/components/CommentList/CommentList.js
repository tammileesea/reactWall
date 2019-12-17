import React from 'react';
import EditComment from '../Edit/EditComment';
import '../CommentList/CommentList.css';

const commentList = props => {
    let editingComp = null;
    if (props.canEdit){
        editingComp = (
            <EditComment
                editCmtInputHandler={props.editCmtInputHandler}
                editHandler={props.editHandler}
                submitHandler={props.submitHandler}
                cancelEditCmtHandler={props.cancelEditCmtHandler}
            />
        )
    }

    return (
        <div className="eachCmt">
            <p id="cmtContent"><b>Comment #{props.id}:</b> {props.input}</p>
            <button onClick={props.showEditCmtHandler} id="editCmtBtn">Edit</button>
            <button onClick={props.deleteHandler} id="dltCmtBtn">Delete</button>
            {editingComp}
        </div>
    )
}

export default commentList;