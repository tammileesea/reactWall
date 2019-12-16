import React from 'react';
import Comment from '../Comment/Comment';
import CommentList from '../CommentList/CommentList';
import EditMessage from '../Edit/EditMessage';
import 'antd/dist/antd.css';
import {Button} from 'antd';

const message = (props) => {
    let allComments = <p>No comments yet</p>;
    if (props.allComments.length > 0){
        allComments = props.allComments.map((comment, index) => {
            return (
                <CommentList
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
            <p>#{props.id}: {props.content}</p>
            <Button type="default" onClick={props.showEdit}>Edit message</Button>
            <Button type="danger" onClick={props.deleteMsgHandler}>Delete message</Button>
            {editingComp}
            {allComments}
            <Comment
                cmtVal={props.commentVal}
                cmtInputHandler={props.cmtInputHandler}
                cmtObjHandler={props.cmtObjHandler}
                submitHandler={props.submitHandler}
            ></Comment>
            <hr></hr>
        </div>
    )
};

export default message;