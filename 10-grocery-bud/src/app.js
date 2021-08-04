import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

export const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      // display alert
      showAlert(true, "the value must not be empty", "danger");
    } else if (name && isEditing) {
      // deal with edit
    } else {
      showAlert(true, "added to the list", "success");
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };

      setList((list) => {
        return [...list, newItem];
      });

      localStorage.setItem("lists", JSON.stringify(newItem));

      setName("");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, type, msg });
  };

  const clearItem = () => {
    showAlert(true, "empty list", "danger");
    setList([]);
  };

  // get Item from the localStorage

  // remove item

  const removeItem = (id) => {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>grocery buddy</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e. g eggs"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>

      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} />
          <button className="clear-btn" onClick={clearItem}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
};
