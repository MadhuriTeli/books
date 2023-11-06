import { useContext, useState } from "react";
import BookEdit from './BookEdit';
import BooksContext from "../context/books";

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useContext(BooksContext);
    
    const handleClick = () => {
        deleteBookById(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book} />
    }
    return (
        <div className="book-show">
            <div>{content}</div>
            <div className="actions">
            <button className="edit" onClick={handleEditClick}>Edit</button>
            <button className="delete" onClick={handleClick}>Delete</button>
            </div>
        </div>
    )
};

export default BookShow;