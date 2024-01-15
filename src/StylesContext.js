import { createContext, useContext, useReducer } from 'react';

const StylesContext = createContext();

export const StylesProvider = ({ children }) => {
  const [styles, dispatch] = useReducer(stylesReducer, initialState);

  return (
    <StylesContext.Provider value={{ styles, dispatch }}>
      {children}
    </StylesContext.Provider>
  );
};

export const useStyles = () => {
  return useContext(StylesContext);
};

const stylesReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MODE':
      return {
        ...state,
        darkMode: !state.darkMode,
        backgroundColor: state.darkMode ? 'white' : 'black',
        textColor: state.darkMode ? 'black' : 'white',
      };

    default:
      return state;
  }
};

const initialState = {
  darkMode: false,
  backgroundColor: 'white',
  textColor: 'black',
};
