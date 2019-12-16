import React from 'react';
import 'antd/dist/antd.css';
import {Button} from 'antd';

const editMessage = props => {
    return (
        <div>
            <form onSubmit={props.submitHandler}>
                <p>Edit ur message here</p>
                <textarea 
                    placeholder={props.placeholder}
                    onChange={props.editMsgInputHandler}
                />
                <Button type="danger" onClick={props.cancelEditMsgHandler}>Cancel</Button>
                <Button type="primary" onClick={props.editMsgHandler}>Submit</Button>
            </form>
        </div>
    )
}

export default editMessage;