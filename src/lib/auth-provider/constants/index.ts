/* eslint-disable max-len */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */

import * as Yup from 'yup';

const NAMESPACE = 'AUTH';

const APP_NAME = require('../../../../package.json').name;

const ENVIRONMENT = process.env.REACT_APP_STAGE || 'local';

export const TOKEN_STORAGE_KEY = `${APP_NAME}_${ENVIRONMENT}_token`;
export const USER_STORAGE_KEY = `${APP_NAME}_${ENVIRONMENT}_user`;

export const AUTH_PROVIDER_CONFIG = {
  endpoint: {
    login: '/login',
    logout: '/logout',
    me: '/me',
  },
};

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface Login {
  email: string;
  password: string;
}

export const INITIAL_VALUES: Login = {
  email: '',
  password: '',
};

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required('Email must be filled'),
  password: Yup.string().required('Password must be filled'),
});

/** ************************* For Actions *************************************** */
export const FETCH_PROFILE = `${NAMESPACE}_FETCH_PROFILE`;