import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import reducer from './reducer';
import {
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
} from './actions';
import { CLEAR_ALERT } from './actions';

const user = localStorage.getItem('user');
const token = localStorage.getItem('token');
const userLocation = localStorage.getItem('location');

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  locationName: userLocation || '',
  jobLocationName: userLocation || '',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('calling appProvider...');

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
  };

  const clearAlert = () => {
    dispatch({ type: CLEAR_ALERT });
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    localStorage.setItem('location', location);
  };

  const removeUserFromLocalStore = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('location');
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });

    try {
      const response = await axios.post('/api/v1/auth/register', currentUser);
      const data = response.data;
      const { user, token, location } = data;

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      });

      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      console.log(error);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.data.msg },
      });
    }
  };

  return (
    <AppContext.Provider
      value={{ ...state, displayAlert, clearAlert, registerUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
