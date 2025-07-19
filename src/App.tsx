import React from 'react';
import { useAuth } from './hooks/useAuth';
import LoginPage from './components/LoginPage';
import WelcomePage from './components/WelcomePage';

function App() {
  const { user, login, logout, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {isAuthenticated && user ? (
        <WelcomePage username={user} onLogout={logout} />
      ) : (
        <LoginPage onLogin={login} />
      )}
    </div>
  );
}

export default App;