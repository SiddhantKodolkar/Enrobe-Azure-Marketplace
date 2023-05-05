import React from 'react';
import loginbg from '../images/loginbg2.jpg'
import Navout from './Navout';
import { msalConfig, loginRequest } from '../authConfig';
import { PublicClientApplication } from '@azure/msal-browser';
import { Link } from 'react-router-dom';

const pca = new PublicClientApplication(msalConfig);

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      user: {},
      error: null
    };
  }

  login = async () => {
    try {
      // Use MSAL to log the user in
      const loginResponse = await pca.loginPopup(loginRequest);

      // Set the user object in state
      this.setState({
        isAuthenticated: true,
        user: loginResponse.account
      });

    } catch (error) {
      // Handle errors
      this.setState({
        isAuthenticated: false,
        user: {},
        error: error.message
      });
    }
  }

  logout = () => {
    // Use MSAL to log the user out
    pca.logout();

    // Clear the user object in state
    this.setState({
      isAuthenticated: false,
      user: {},
      error: null
    });
  }

  render() {
    const { isAuthenticated, user, error } = this.state;

    return (
      <div >
        <Navout />
        <div >
        </div>
        <div className="flex h-screen">
          <div
            className="flex-1"
            style={{
              backgroundImage: `url(${loginbg})`,
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              height: '100vh'
            }}
          >
            {/* Left side content goes here */}
          </div>
          <div className="flex-1 text-white font-bold bg-gradient-to-b from-gray-500 to-gray-600">
            {isAuthenticated ? (
              <div className="flex flex-col justify-center items-center h-full">
                <p className='mb-2'>You are logged in as {user.name}</p>
                <button onClick={this.logout} className='mb-2 text-white bg-black hover:bg-white hover:text-black font-bold py-2 px-4 border-double border-4 border-white rounded hover:transition-bg duration-700'>Logout</button>
                {user.name === "<Admin Name>"?
                  (
                    <Link to="/admin" target="_blank" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 mb-2 text-sm font-medium hover:transition-bg duration-500">Click to proceed as Admin → </Link>
                  ):
                  (
                    <Link to="/user" target="_blank" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:transition-bg duration-500">Click to proceed as {user.name} → </Link>
                  )}
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center h-full">
                <p className='text-xl pb-4'>Please log in to continue your session</p>
                <button
                  className='text-white bg-black hover:bg-white hover:text-black font-bold py-2 px-4 border-double border-4 border-white rounded hover:transition-bg duration-700'
                  onClick={this.login}>Login</button>
              </div>
            )}
            {error && <p>{error}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;