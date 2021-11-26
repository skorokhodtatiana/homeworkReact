import React, { useEffect, useState } from "react";
import "./_component.scss";

const Comment = (props) => {
  const { allMessages, newMessage } = props;

  const [listMessages, setlistMessages] = useState(allMessages);
  const [newChangeMessages, setnewChangeMessages] = useState(newMessage);
  const [divListComment, setdivListComment] = useState("");

  useEffect(() => {
    const getallMessageJson = localStorage.getItem("comment");
    console.log(getallMessageJson);
    if (getallMessageJson) {
      const getallMessage = JSON.parse(getallMessageJson);
      setlistMessages(getallMessage);
      console.log(getallMessage);
      let list = getallMessage.reverse().join(" ");
      setdivListComment(list);
    }
  }, [newChangeMessages]);

  const setToLocalStorage = (e) => {
    e.preventDefault();
    listMessages.push(newChangeMessages);
    setnewChangeMessages("");
    let allCommentsJson = JSON.stringify(listMessages);
    localStorage.setItem("comment", allCommentsJson);
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
          value={newMessage}
        ></textarea>
        <button onClick={(e) => setToLocalStorage(e)} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Comment;
