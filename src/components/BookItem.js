import React from 'react';
import PropTypes from 'prop-types';
// add useDispatch
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const BookItem = ({ book }) => {
  const {
    title, author, id, category,
  } = book;
  const dispatch = useDispatch();
  const HandleRemove = () => {
    dispatch(deleteBook(id));
  };
  return (
    <li key={id}>
      <div className="bookcontainer">
        <div className="bookcontent">
          <div className="bookInfo">
            <h4 className="bookCategory">
              {' '}
              {category}
            </h4>
            <h2 className="bookTitle">
              {title}
            </h2>
            <h6 className="bookAuthor">
              {author}
            </h6>
            <div className="buttonContainer">
              <button type="button" className="commentBtn">
                Comment
              </button>
              <div className="linehot" />
              <button type="button" onClick={HandleRemove} className="removeBtn">
                Remove
              </button>
              <div className="linehot" />
              <button type="button" className="editBtn">
                Edit
              </button>
            </div>
          </div>

          <div className="progressContainer">
            <div className="progressCirclecontainer">
              <div className="progressCircle" />
            </div>
            <div className="progressStatus">
              <p className="progressPercent">67%</p>
              <p className="progressComplete">Completed</p>
            </div>

            <div className="dividerProgress" />
            {' '}
            <div className="currentChapStat">
              <div>
                <p className="currentChap">CURRENT CHAPTER</p>
                <p className="chapterNum">Chapter 12</p>
              </div>
              <div>
                <button type="button" className="progressBtn">
                  UPDATE PROGRESS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
