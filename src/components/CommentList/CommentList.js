import React from 'react';
import EditComment from '../Edit/EditComment';
import '../CommentList/CommentList.css';
import 'antd/dist/antd.css';
import {Button} from 'antd';

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
            <Button type="default" onClick={props.showEditCmtHandler} id="editCmtBtn">Edit</Button>
            <Button type="danger" onClick={props.deleteHandler} id="dltCmtBtn">Delete</Button>
            {editingComp}
        </div>
    )
}

export default commentList;