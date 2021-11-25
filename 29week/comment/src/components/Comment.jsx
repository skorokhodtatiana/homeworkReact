import React, { useEffect, useState } from "react";
import "./_component.scss";

const Comment = (props) => {
  const { allMessages, newMessage } = props;

  const [listMessages, setlistMessages] = useState(allMessages);
  const allListComment = [];
  useEffect(() => {
    console.log("хук работает");
    const getallMessageJson = localStorage.getItem("allComment");
    console.log(getallMessageJson);
    if (getallMessageJson) {
      const getallMessage = JSON.parse(getallMessageJson);
      setlistMessages(getallMessage);
    }
  }, []);

  const [newChangeMessages, setnewChangeMessages] = useState(newMessage);
  const setToLocalStorage = (e) => {
    e.preventDefault();
    allListComment.push(listMessages, newChangeMessages);
    console.log(allListComment);

    let allCommentsJson = JSON.stringify(allListComment);
    console.log(allCommentsJson);
    localStorage.setItem("comment", allCommentsJson);
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    setnewChangeMessages(e.target.value);
  };

  return (
    <div>
      <h2>Hi</h2>
      <h2>How are you?</h2>
      <div className="placeForComment"> {allMessages}</div>
      <form>
        <textarea
          onBlur={(e) => handleChange(e)}
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
