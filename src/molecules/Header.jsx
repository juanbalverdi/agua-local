import { useStyles } from '../StylesContext';
import Button from '../atoms/Button';
import waterdrop from '../waterdrop.png';

export const Header = () => {
  const { styles } = useStyles();

  return (
    <div
      className="header"
      style={{ background: styles.backgroundColor, color: styles.textColor }}
    >
      <div className="logo">
        <img
          className="img-logo"
          src={waterdrop}
          alt="Logo de Agua"
          style={{ maxHeight: '30px' }}
        />
        <h1 className="h1-logo">MarketPlace</h1>
      </div>

      <nav
        className="navbar-header"
        style={{ background: styles.backgroundColor, color: styles.textColor }}
      >
        <a className={styles.darkMode ? 'dark' : 'light'} href="#">
          Inicio
        </a>
        <a className={styles.darkMode ? 'dark' : 'light'} href="#">
          Contacto
        </a>
        <a className={styles.darkMode ? 'dark' : 'light'} href="#">
          Nosotros
        </a>
        <Button />
      </nav>
    </div>
  );
};
