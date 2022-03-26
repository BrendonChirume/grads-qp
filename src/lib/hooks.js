import React from 'react';
import { useDispatch } from 'react-redux';
import { signin } from '../redux/authReducer';

export const useAction = () => {
  const dispatch = useDispatch();
  return {
    signin: (...args) => dispatch(signin(...args))
  };
};
