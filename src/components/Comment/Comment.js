import React from 'react';
import '../Comment/Comment.css';

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
                    rows="3"
                    cols="48"
                /><br/>
                <button 
                    onClick={props.cmtObjHandler}
                    id="cmtBtn"
                >Add comment</button>
            </form>
        </div>
    )
}

export default comment;