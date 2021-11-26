import React, { useEffect, useState } from "react";
import "./_component.scss";

const Comment = (props) => {
  // const { allMessages, newMessage } = props;

  const [listMessages, setlistMessages] = useState("");
  const [newChangeMessages, setnewChangeMessages] = useState("");
  const [divListComment, setdivListComment] = useState("");

  useEffect(() => {
    const getallMessageJson = localStorage.getItem("comment");
    if (getallMessageJson) {
      const getallMessage = JSON.parse(getallMessageJson);
      setlistMessages(getallMessage);
      let list = getallMessage.reverse().join(" ");
      setdivListComment(list);
    } else {
      setdivListComment(" ");
    }
  }, [newChangeMessages]);

  const setToLocalStorage = (e) => {
    e.preventDefault();
    let emptyArr = [];
    if (listMessages) {
      emptyArr = [...listMessages];
      emptyArr.push(newChangeMessages);
    } else {
      emptyArr = [newChangeMessages];
    }
    let newChangeMessagesJson = JSON.stringify(emptyArr);
    setnewChangeMessages(" ");
    localStorage.setItem("comment", newChangeMessagesJson);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setnewChangeMessages(e.target.value);
  };

  return (
    <div className="wrapperForm">
      <h2>Hi</h2>
      <h2>How are you?</h2>
      <div className="placeForComment">{divListComment}</div>
      <form>
        <textarea
          className="textArea"
          onBlur={(e) => handleChange(e)}
          placeholder="Write your comment here"
          name="value"
          rows="10"
          cols="10"
          // value=
        >
          {newChangeMessages}
        </textarea>
        <button onClick={(e) => setToLocalStorage(e)} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Comment;
