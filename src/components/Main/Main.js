import React from 'react';
import '../Main/Main.css';

const main = props => {
    return (
        <div className="Main">
            <h1>Welcome to the Wall!</h1>
            <div>
                <h3>Enter your message here: </h3>
                <form onSubmit={props.submitHandler}>
                    <textarea
                        type="text"
                        name="inputMsg"
                        value={props.currVal}
                        onChange={props.msgInputHandler}
                        rows="4"
                        cols="60"
                    /><br/>
                    <button
                        id="mainButton"
                        onClick={props.msgObjHandler}
                    >Add message</button>
                </form>
            </div>
        </div>
    );
}

export default main;