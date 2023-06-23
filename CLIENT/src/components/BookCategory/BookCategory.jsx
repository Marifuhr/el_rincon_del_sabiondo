import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../BookCategory/bookCategory.module.css"

const BookCategory = ({ category, url }) => {
  return (
    <div className={styles.linkContainer}>
      <Link to={url}>{category}</Link>
    </div>
  );
};

export default BookCategory;