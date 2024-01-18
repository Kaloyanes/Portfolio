import { getAuth } from '@angular/fire/auth';
import type { CanActivateFn } from '@angular/router';

export const LoginAuthGuard: CanActivateFn = async (route, state) => {
  // get firebase auth
  const auth = getAuth();

  // if user is not logged in
  await auth.authStateReady();

  if (auth.currentUser) {
    // redirect to login page
    window.location.href = '/create';
    return false;
  }

  return true;
};
