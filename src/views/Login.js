const Login = () => {
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
          <form action=''>
            <div className='form-group'>
              <input type='email' placeholder='name@example.com' />
              <label htmlFor='floatingInput'>Email address</label>
            </div>
            <div className='form-group error'>
              <input type='password' placeholder='Password' />
              <label htmlFor='floatingPassword'>Password</label>
            </div>
            <div className='forgot-password'>
              <a href=''>Forgot Password?</a>
            </div>
            <div className='btn-container'>
              <button className='btn'>
                <span>Sign in</span> <i className='fas fa-chevron-right'></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
