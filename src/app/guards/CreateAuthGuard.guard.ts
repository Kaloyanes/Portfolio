import type { CanActivateFn } from '@angular/router';
import { getAuth } from '@firebase/auth';

export const CreateAuthGuard: CanActivateFn = async (route, state) => {
  // get firebase auth
  const auth = getAuth();

  // if user is not logged in
  await auth.authStateReady();

  if (!auth.currentUser) {
    // redirect to login page
    window.location.href = '/login';
    return false;
  }

  return true;
};
