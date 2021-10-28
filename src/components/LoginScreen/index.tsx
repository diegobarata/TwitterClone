import React from 'react';

// import { Container } from './styles';

const LoginScreen: React.FC = () => {
  return (
    //create a login form
    <div>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
} 

export default LoginScreen;