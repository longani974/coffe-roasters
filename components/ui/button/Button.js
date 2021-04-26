import styles from './Button.module.css';

function Button({ children, disabled }) {
  const classActiveOrDisabled = disabled ? styles.disabled : styles.actif;

  function clickHandler() {
    if (disabled) return;

    console.log('click');
  }

  return (
    <button
      onClick={clickHandler}
      className={styles.button + ' ' + classActiveOrDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
