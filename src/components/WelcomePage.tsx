import React, { useState } from 'react';
import { LogOut, User, Smile, Heart } from 'lucide-react';

interface WelcomePageProps {
  username: string;
  onLogout: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ username, onLogout }) => {
  const [showGoodbye, setShowGoodbye] = useState(false);

  const handleLogout = () => {
    setShowGoodbye(true);
    setTimeout(() => {
      onLogout();
    }, 2000); // Afficher le message pendant 2 secondes
  };

  const currentHour = new Date().getHours();
  const getGreeting = () => {
    if (currentHour < 12) return 'Bonjour';
    if (currentHour < 18) return 'Bon après-midi';
    return 'Bonsoir';
  };

  if (showGoodbye) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-md w-full">
          <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Heart className="h-10 w-10 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Au revoir, {username} !
          </h1>
          <p className="text-gray-600 text-lg">
            À bientôt sur notre plateforme !
          </p>
          <div className="mt-6">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 rounded-full p-2">
                <User className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-lg font-semibold text-gray-900">Tableau de bord</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105 active:scale-95"
            >
              <LogOut className="h-4 w-4" />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Smile className="h-12 w-12 text-green-600" />
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {getGreeting()}, {username} !
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Bienvenue sur votre espace personnel
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Connexion réussie !
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Votre session a été établie avec succès. Vos informations sont 
                  sécurisées et stockées localement pour votre prochaine visite.
                </p>
                
                <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Session active</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Données sauvegardées</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-sm text-gray-500">
                <p>Connecté en tant que <strong className="text-gray-700">{username}</strong></p>
                <p className="mt-1">
                  Session démarrée le {new Date().toLocaleDateString('fr-FR', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;