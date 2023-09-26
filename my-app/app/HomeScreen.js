import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoading(false); // Set isLoading to false when the user state is determined
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        navigate('/google-sign-in');
      }
    });
    return unsubscribe;
  }, [navigate]);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Check if the user is authenticated before rendering
  if (isLoading) {
    // Loading state
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
        <h1 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'white' }}>Loading...</h1>
      </div>
    );
  }

  if (!user) {
    // User is not authenticated, redirect to login
    return null;
  }

  // User is authenticated, render the content
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
      <>
        <h1 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'white' }}>{user.email} is okay</h1>
        <button style={{ backgroundColor: '#4285F4', color: 'white', padding: '1rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }} onClick={handleSignOut}>Log Out</button>
      </>
    </div>
  );
};

export default HomeScreen;
