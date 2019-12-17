import React, { Component } from 'react';
import './App.css';
import Main from '../components/Main/Main';
import Message from '../components/Message/Message';

class App extends Component {
  state = {
    messages: [],
    newMsg: '',
    editMsg:'',
    newComment: '',
    editCmt: ''
  }

  messageInputHandler = event => {
    this.setState({newMsg: event.target.value});
  }

  messageObjectHandler = () => {
    let incomingMsg = {};
    if (this.state.messages.length === 0){
      incomingMsg.id = 1;
    } else {
      const lastMsgId = this.state.messages[this.state.messages.length-1].id;
      incomingMsg.id = lastMsgId + 1;
    }
    if(this.state.newMsg !== ''){
      incomingMsg.messageInput = this.state.newMsg;
    } else {
      alert('Needs to be at least one character!');
      return;
    }
    incomingMsg.comments = [];
    incomingMsg.canEdit = false;
    const messages = this.state.messages;
    messages.push(incomingMsg);
    this.setState({messages: messages, newMsg: ''});
  }

  showEditHandler = (event, msgId) => {
    const messages = [...this.state.messages];
    const messageIdx = messages.findIndex(m => {
      return m.id === msgId;
    });
    const currMessage = messages[messageIdx];
    currMessage.canEdit = true;
    this.setState({messages: messages});
  }

  editMsgInputHandler = event => {
    this.setState({editMsg: event.target.value});
  }

  editMessageHandler = (event, messageId) => {
    const messages = [...this.state.messages];
    const messageIdx = messages.findIndex(m => {
      return m.id === messageId;
    });
    const currMessage = messages[messageIdx];
    currMessage.messageInput = this.state.editMsg;
    currMessage.canEdit = false;
    this.setState({messages: messages, editMsg: ''});
  }

  cancelEditMsgHandler = (event, msgId) => {
    const messages = [...this.state.messages];
    const messageIdx = messages.findIndex(m => {
      return m.id === msgId;
    });
    const currMessage = messages[messageIdx];
    currMessage.canEdit = false;
    this.setState({messages: messages});
  }

  deleteMessageHandler = (event, messageId) => {
    const messages = [...this.state.messages];
    const currMsgIdx = messages.findIndex(m => {
      return m.id === messageId;
    });
    messages.splice(currMsgIdx, 1);
    this.setState({messages: messages});
  }

  commentInputHandler = event => {
    this.setState({newComment: event.target.value});
  }

  commentObjectHandler = (event, id) => {
    const messages = [...this.state.messages];
    const currMessageIdx = messages.findIndex(m => {
      return m.id === id;
    });
    const currMessage = messages[currMessageIdx];
    let incomingCmt = {};
    if (currMessage.comments.length === 0){
      incomingCmt.id = 1;
    } else {
      incomingCmt.id = currMessage.comments[currMessage.comments.length-1].id + 1;
    }
    incomingCmt.messageId = currMessage.id;
    if(this.state.newComment !== ''){
      incomingCmt.commentInput = this.state.newComment;
    } else {
      alert('Needs to be at least one character!');
      return;
    }
    incomingCmt.canEdit = false;
    currMessage.comments.push(incomingCmt);
    this.setState({messages: messages, newComment: ''});
  }

  showEditCmtHandler = (event, msgId, cmtId) => {
    const messages = [...this.state.messages];
    const currMessageIdx = messages.findIndex(m => {
      return m.id === msgId;
    });
    const currMessage = messages[currMessageIdx];
    const currCommentIdx = currMessage.comments.findIndex(c => {
      return c.id === cmtId;
    });
    currMessage.comments[currCommentIdx].canEdit = true;
    this.setState({messages: messages});
  }

  editCmtInputHandler = event => {
    this.setState({editCmt: event.target.value});
    console.log(this.state.editCmt);
  }

  editCommentHandler = (event, msgId, cmtId) => {
    const messages = [...this.state.messages];
    const currMessageIdx = messages.findIndex(m => {
      return m.id === msgId;
    });
    const currMessage = messages[currMessageIdx];
    const currCommentIdx = currMessage.comments.findIndex(c => {
      return c.id === cmtId;
    });
    currMessage.comments[currCommentIdx].commentInput = this.state.editCmt;
    currMessage.comments[currCommentIdx].canEdit = false;
    this.setState({messages: messages, newComment: ''});
  }

  cancelEditCmtHandler = (event, msgId, cmtId) => {
    const messages = [...this.state.messages];
    const currMessageIdx = messages.findIndex(m => {
      return m.id === msgId;
    });
    const currMessage = messages[currMessageIdx];
    const currCommentIdx = currMessage.comments.findIndex(c => {
      return c.id === cmtId;
    });
    currMessage.comments[currCommentIdx].canEdit = false;
    this.setState({messages: messages});
  }

  deleteCommentHandler = (event, msgId, commentId) => {
    const messages = [...this.state.messages];
    const currMessageIdx = messages.findIndex(m => {
      return m.id === msgId;
    });
    const currMessage = messages[currMessageIdx];
    const currCommentIdx = currMessage.comments.findIndex(c => {
      return c.id === commentId;
    });
    currMessage.comments.splice(currCommentIdx, 1);
    this.setState({messages: messages});
  }

  submitHandler = event => { //dont fully understand...??
    event.preventDefault();
  }

  render() {
    let allMessages = <p>No messages yet :(</p>;
    if (this.state.messages.length > 0){
      allMessages = this.state.messages.map((msg, index) => {
        return (
          <Message
            id={msg.id}
            content={msg.messageInput}
            allComments={msg.comments}
            msgVal={msg.messageInput}
            msgInputHandler={this.messageInputHandler}
            showEdit={event => this.showEditHandler(event, msg.id)}
            editMsgInputHandler={this.editMsgInputHandler}
            editMsgHandler={event => this.editMessageHandler(event, msg.id)}
            cancelEditMsgHandler={event => this.cancelEditMsgHandler(event, msg.id)}
            deleteMsgHandler={event => this.deleteMessageHandler(event, msg.id)}
            commentVal={this.state.newComment}
            cmtInputHandler={this.commentInputHandler}
            cmtObjHandler={(event) => this.commentObjectHandler(event, msg.id)}
            showEditCmtHandler={this.showEditCmtHandler}
            cancelEditCmtHandler={this.cancelEditCmtHandler}
            editCmtInputHandler={this.editCmtInputHandler}
            editCmtHandler={this.editCommentHandler}
            deleteCmtHandler={this.deleteCommentHandler}
            submitHandler={this.submitHandler}
            canEdit={msg.canEdit}
          />
        )
      })
    }

    return (
      <div className="App">
        <Main
          msgObjHandler={this.messageObjectHandler}
          msgInputHandler={this.messageInputHandler}
          submitHandler={this.submitHandler}
          currVal={this.state.newMsg}
        />
        {allMessages}
      </div>
    );
  }
}

export default App;
