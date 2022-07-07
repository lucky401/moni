import {Login, User} from '../constants';

function login({email, password}: Login): Promise<Record<string, unknown>> {
  return new Promise((resolve, reject) => {
    if (email === 'admin@mail.com' && password === '123456') {
      resolve({
        data: {
          data: {
            id: '1',
            email: 'admin@mail.com',
            name: 'admin moni',
            role: 'Admin',
          },
          token: 'adfuhasdulhflushdfluashfuis'
        },
      })
    }
    reject(new Error('Wrong credentials'))
  })
}

async function logout(): Promise<unknown> {
  return new Promise(resolve => {
    resolve({})
  })
}

function me(): Promise<Record<string, User>> {
  return new Promise(resolve => {
    resolve({
      data: {
        id: '1',
        email: 'admin@mail.com',
        name: 'admin moni',
        role: 'Admin',
      },
    })
  })
}

export {login, logout, me};
