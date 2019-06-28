import React, { useState } from 'react';

import neideApi from '../../neideApi';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    neideApi
      .post('/signin', undefined, { headers: { username, password } })
      .then(({ jwt, user }) => console.log(jwt, user));
  };

  return (
    <div className='container'>
      <h5>Login</h5>
      <div className="row">
        <div className='col-sm-6'>
          <div className='form-group'>
            <label htmlFor='username'>Usuário (AD)</label>
            <input
              id='username'
              type='text'
              className='form-control'
              defaultValue={username}
              onChange={e => setUsername(e.target.value)}
              />
          </div>
        </div>
      </div>
      <div className="row">
        <div className='col-sm-6'>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='password'
              className='form-control validate'
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <button className="btn waves-effect waves-light" onClick={onLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
