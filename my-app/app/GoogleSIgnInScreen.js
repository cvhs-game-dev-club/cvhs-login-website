import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithCredential, signInWithRedirect } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../authentication';

const GoogleSignInScreen = () => {
  const [user, loading, error] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !error && user) {
      // If the user is already logged in, navigate to the home page.
      navigate('/');
    }
  }, [loading, error, user, navigate]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    if (code) {
      const provider = new GoogleAuthProvider();
      signInWithCredential(auth, provider.credential(null, code))
        .then(() => {
          // After successful sign-in, navigate to the home page.
          navigate('/');
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      if (!user && !loading) {
        // If the user is not already logged in and loading is complete,
        // initiate the Google Sign-In process.
        const provider = new GoogleAuthProvider();
        provider.addScope('email');
        provider.addScope('profile');
        setIsLoading(true);
        signInWithRedirect(auth, provider)
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }, [location.search, navigate, user, loading]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(to bottom right, #FFC107, #FF9800)',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
      }}
    >
      {isLoading ? (
        <h1 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'white' }}>Signing in...</h1>
      ) : null}
    </div>
  );
};

export default GoogleSignInScreen;
