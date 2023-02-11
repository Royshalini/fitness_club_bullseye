import React, { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    {
      isbn: "001",
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
    },
    { isbn: "002", title: "To Kill a Mockingbird", author: "Harper Lee" },
    { isbn: "003", title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { isbn: "004", title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    { isbn: "005", title: "Pride and Prejudice", author: "Jane Austen" },
    { isbn: "006", title: "The Diary of a Young Girl", author: "Anne Frank" },
  ]);
  const [newIsbn, setNewIsbn] = useState("");
  const [noBooks, setNobooks] = useState(true);
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [mode, setMode] = useState("create");
  const [selectedIsbn, setSelectedIsbn] = useState(null);

  const handleCreate = () => {
    setBooks([...books, { isbn: newIsbn, title: newTitle, author: newAuthor }]);
    setNewIsbn("");
    setNewTitle("");
    setNewAuthor("");
  };

  const handleDelete = (isbn) => {
    setBooks(books.filter((book) => book.isbn !== isbn));
  };

  const handleCancel = () => {
    setNewIsbn("");
    setNewTitle("");
    setNewAuthor("");
    setMode("create");
  };

  const handleRemoveAll = () => {
    setBooks([]);
    setNobooks(false);
  };
  return (
    <>
      <h1>BookList Management Form</h1>
      <p>Add and view your book using local storage</p>
      <div className="container">
        <div className="create-book">
          <h2>{mode === "create" ? "Create" : "Update"} Book</h2>
          <div>
            ISBN#:{" "}
            <input
              type="text"
              value={newIsbn}
              onChange={(e) => setNewIsbn(e.target.value)}
            />
          </div>
          <div>
            Title:{" "}
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div>
            Author:{" "}
            <input
              type="text"
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)}
            />
          </div>
          <div>
            <button className="create" onClick={handleCreate}>
              Create
            </button>
            {mode === "update" && (
              <button onClick={handleCancel}>Cancel</button>
            )}
          </div>
        </div>
        <div className="view-book">
          <h2>View Books</h2>

          <table>
            {books.length==0?<tr>No books are added yet</tr>:''}
            <thead>
              <tr>
                <th>ISBN#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.isbn}>
                  <td>{book.isbn}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>
                    <button
                      className="delete"
                      onClick={() => handleDelete(book.isbn)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="removeAll" onClick={() => handleRemoveAll()}>
            Remove All
          </button>
        </div>
      </div>
    </>
  );
}

export default App;