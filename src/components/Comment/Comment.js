import React from 'react';
import '../Comment/Comment.css';
import 'antd/dist/antd.css';
import {Button} from 'antd';

const comment = props => {
    return (
        <div className="commentComp">
            <h3>Enter your comment here: </h3>
            <form onSubmit={props.submitHandler}>
                <textarea
                    type="text"
                    id="cmtInput"
                    value={props.cmtVal}
                    onChange={props.cmtInputHandler}
                    rows="2"
                    cols="48"
                /><br/>
                <Button 
                    type="primary"
                    onClick={props.cmtObjHandler}
                    id="cmtBtn"
                >Add comment</Button>
            </form>
        </div>
    )
}

export default comment;