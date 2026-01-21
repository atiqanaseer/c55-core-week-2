// Do not change the line below
import { errorMessage, successMessage } from './app.js';

let incorrectAttempts = 0;

function onLogin(username, password) {
  // Check if more than 3 incorrect attempts then show login block error message
  if (incorrectAttempts > 3) {
    errorMessage('Login blocked: Too many incorrect attempts');
    return; // Don't run the code further in this function
  }

  // Check if any of the two username and password combination are correct then show success else show error
  if ((username === 'admin' && password === 'Hack1234') || (username === 'user' && password === '7654321')) {
    successMessage('Logged in successfully');
  } else {
    errorMessage('Incorrect credentials');
    incorrectAttempts++; // Increase incorrect login attempt by 1
  }
}

// Do not change the line below
export { onLogin };
