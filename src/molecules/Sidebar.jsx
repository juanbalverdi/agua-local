import { useStyles } from '../StylesContext';
import { Searchbar } from '../atoms/Searchbar';

export const Sidebar = ({ onSearch }) => {
  const { styles } = useStyles();

  return (
    <div
      className="sidebar-container"
      style={{ background: styles.backgroundColor, color: styles.textColor }}
    >
      <Searchbar onSearch={onSearch} />
      <h2>Sidebar</h2>
      <ul className="ul-sidebar">
        <li>
          <a className={styles.darkMode ? 'dark' : 'light'} href="#">
            Enlace 1
          </a>
        </li>
        <li>
          <a className={styles.darkMode ? 'dark' : 'light'} href="#">
            Enlace 2
          </a>
        </li>
        <li>
          <a className={styles.darkMode ? 'dark' : 'light'} href="#">
            Enlace 3
          </a>
        </li>
      </ul>
    </div>
  );
};
