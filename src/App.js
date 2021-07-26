import React, { useState } from "react";
import "./App.css";

// Importing Data
import bookData from "./data";

const App = () => {
  //State
  const [bookSub, setBookSub] = useState("Javascript");

  const bookClickHandler = (subject) => {
    setBookSub(subject);
  };

  return (
    <div className="App">
      <h1>📚GoodReads</h1>
      <p>Here are my favorite books. Select genres below to know more.</p>

      <div className="list">
        {Object.keys(bookData).map((bookSubject) => (
          <span onClick={() => bookClickHandler(bookSubject)} key={bookSubject}>
            {bookSubject}
          </span>
        ))}
      </div>
      <hr />

      <div className="cardContainer">
        {bookData[bookSub].map((book) => (
          <div className="card">
            <div className="imageContainer">
              <img src={book.imageUrl} alt="" />
            </div>
            <h2>{book.title}</h2>
            <p>- {book.author}</p>
            <p>{book.rating}</p>
            <p class="description">{book.description}</p>
            <div className="button">
              <a href={book.buy}>Buy</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
