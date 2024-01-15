import { useState } from "react";
import { useStyles } from '../StylesContext';

    export const Searchbar = ({onSearch}) => {

        const { styles } = useStyles();

        const [searchTerm, setSearchTerm] = useState('');

        const handleChange = (event) => {
            const term = event.target.value;
            setSearchTerm(term);
            onSearch(term);
    };

    return(
        <div className="searchbar-container" style={{ background: styles.backgroundColor, color: styles.textColor }}>
            <h3 className="h3-searchbar">Filter Templates</h3>
            <input
                className="input-searchbar"
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
};