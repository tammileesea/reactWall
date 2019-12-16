import React from 'react';
import 'antd/dist/antd.css';
import {Button} from 'antd';

const comment = props => {
    return (
        <div>
            <h3>Enter your comment here: </h3>
            <form onSubmit={props.submitHandler}>
                <textarea
                    type="text"
                    value={props.cmtVal}
                    onChange={props.cmtInputHandler}
                /><br/>
                <Button 
                    type="primary"
                    onClick={props.cmtObjHandler}
                >Add comment</Button>
            </form>
        </div>
    )
}

export default comment;