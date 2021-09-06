import Loader from "react-loader-spinner";
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

function Loading() {
  return (
    <div className={styles.loader}>
      <Loader
        type="ThreeDots"
        color='#84a72b'
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}

export default Loading;

