import React from 'react';
import 'antd/dist/antd.css';
import {Button} from 'antd';

const editComment = props => {
    return (
        <div>
            <form onSubmit={props.submitHandler}>
                <p>Edit ur comment here</p>
                <textarea onChange={props.editCmtInputHandler}/>
                <Button type="danger" onClick={props.cancelEditCmtHandler}>Cancel</Button>
                <Button type="primary" onClick={props.editHandler}>Submit</Button>
            </form>
        </div>
    )
}

export default editComment;