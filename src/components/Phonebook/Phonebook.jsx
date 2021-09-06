import PropTypes from "prop-types";

import styles from './Phonebook.module.css';

const Phonebook = ({ children }) => <main className={styles.container}>{children}</main>;

Phonebook.propTypes = {
  children: PropTypes.node,
}

export default Phonebook;