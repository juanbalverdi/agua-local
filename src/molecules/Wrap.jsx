import { useState } from 'react';
import { useStyles } from '../StylesContext';
import { Main } from './Main';
import { Sidebar } from './Sidebar';

export const Wrap = () => {
  const { styles } = useStyles();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div
      className="wrap"
      style={{ background: styles.backgroundColor, color: styles.textColor }}
    >
      <div className="app-main-container">
        <Sidebar onSearch={handleSearch} />
        <Main searchTerm={searchTerm} />
      </div>
    </div>
  );
};
