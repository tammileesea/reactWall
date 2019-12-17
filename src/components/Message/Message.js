import React from 'react';
import Comment from '../Comment/Comment';
import CommentList from '../CommentList/CommentList';
import EditMessage from '../Edit/EditMessage';
import '../Message/Message.css';

const message = (props) => {
    let allComments = <p>No comments yet</p>;
    if (props.allComments.length > 0){
        allComments = props.allComments.map((comment, index) => {
            return (
                <CommentList
                    id={comment.id}
                    input={comment.commentInput}
                    canEdit={comment.canEdit}
                    editCmtInputHandler={props.editCmtInputHandler}
                    showEditCmtHandler={event => props.showEditCmtHandler(event, comment.messageId, comment.id)}
                    cancelEditCmtHandler={event => props.cancelEditCmtHandler(event, comment.messageId, comment.id)}
                    editHandler={event => props.editCmtHandler(event, comment.messageId, comment.id)}
                    deleteHandler={event => props.deleteCmtHandler(event, comment.messageId, comment.id)}
                    submitHandler={props.submitHandler}
                />
            )
        })
    }

    let editingComp = null;

    if (props.canEdit){
        editingComp = (
            <EditMessage
                placeholder={props.msgVal}
                editMsgInputHandler={props.editMsgInputHandler}
                editMsgHandler={props.editMsgHandler}
                submitHandler={props.submitHandler}
                cancelEditMsgHandler={props.cancelEditMsgHandler}
            />
        );
    }

    return (
        <div className="msgComp">
            <p id="content"><b>Message #{props.id}:</b> {props.content}</p>
            <button onClick={props.showEdit} id="editBtn">Edit</button>
            <button onClick={props.deleteMsgHandler} id="deleteBtn">Delete</button>
            {editingComp}
            {allComments}
            <Comment
                cmtVal={props.commentVal}
                cmtInputHandler={props.cmtInputHandler}
                cmtObjHandler={props.cmtObjHandler}
                submitHandler={props.submitHandler}
            ></Comment>
        </div>
    )
};

export default message;