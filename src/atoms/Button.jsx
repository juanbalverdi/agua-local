import { useStyles } from '../StylesContext';
import sun from '../sun.png';
import moon from '../moon.png';

const Button = () => {
  const { styles, dispatch } = useStyles();

  const toggleMode = () => {
    dispatch({ type: 'TOGGLE_MODE' });
  };

  return (
    <button
      className={`button-component ${styles.darkMode ? 'dark' : 'light'}`}
      onClick={toggleMode}
    >
      {styles.darkMode ? (
        <img className="button-sun" src={sun} alt="Icono sol" />
      ) : (
        <img className="button-moon" src={moon} alt="Icono luna" />
      )}
    </button>
  );
};

export default Button;
