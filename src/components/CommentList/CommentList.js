import React from 'react';
import EditComment from '../Edit/EditComment';
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
        <div>
            <p>{props.input}</p>
            <Button type="default" onClick={props.showEditCmtHandler}>Edit comment</Button>
            <Button type="danger" onClick={props.deleteHandler}>Delete comment</Button>
            {editingComp}
        </div>
    )
}

export default commentList;