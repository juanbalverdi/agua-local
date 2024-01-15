import { useStyles } from '../StylesContext';

export const Footer = () => {
  const { styles } = useStyles();

  return (
    <div
      className="app-footer-container"
      style={{ background: styles.backgroundColor, color: styles.textColor }}
    >
      <div className="footer-container">
        <p className="p-footer">@MarketPlace</p>
      </div>
    </div>
  );
};
