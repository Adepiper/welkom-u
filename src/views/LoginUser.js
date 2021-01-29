import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import auth from '../utilities/Auth';
const LoginUser = (props) => {
  const { createLogin, error, history } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    e.preventDefault();
    auth.login(createLogin, { email: email, password: password });
  };
  const invalid = email === '' || password === '';
  return (
    <div className='login-container'>
      <div className='row'>
        <div className='col-md-3 login-text'>
          <div>
            <p>Start the life,</p>
            <p>Career you desire</p>
            <p>with ease</p>
          </div>
        </div>
        <div className='col-md-9 login-body'>
          <form action='' onSubmit={login}>
            {error && (
              <div
                className='alert text-center alert-warning alert-dismissible fade show'
                role='alert'
              >
                <p className='py-3'>{error}</p>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='alert'
                  aria-label='Close'
                ></button>
              </div>
            )}
            <div className={error ? 'error form-group' : 'form-group'}>
              <input
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder='name@example.com'
              />
              <label htmlFor='floatingInput'>Email address</label>
            </div>
            <div className={error ? 'error form-group' : 'form-group'}>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='Password'
              />
              <label htmlFor='floatingPassword'>Password</label>
            </div>
            <div className='forgot-password'>
              <a href=''>Forgot Password?</a>
            </div>
            <div className='btn-container'>
              <button disabled={invalid} className='btn'>
                <span>Sign in</span> <i className='fas fa-chevron-right'></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginUser);
