import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import logoImage from '../../../assets/9b80abb374c6c99b593443655c82a569bca7501b.png';

export default function Login() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login/signup - in a real app, you would validate credentials
    navigate('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <motion.img
              src={logoImage}
              alt="Ikoue Scolar"
              className="h-20 w-auto"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
          </div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-black dark:text-white mb-2">
              {isSignUp ? 'Créer un compte' : 'Connexion'}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Ikoue Scolar-Admin Dashboard
            </p>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Nom complet
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-400 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white"
                    placeholder="Votre nom"
                    required={isSignUp}
                  />
                </div>
              </motion.div>
            )}

            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-400 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white"
                  placeholder="admin@ikoue.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-400 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-violet-400 border-gray-300 rounded focus:ring-violet-400"
                  />
                  <span className="ml-2 text-gray-600 dark:text-gray-400">Se souvenir de moi</span>
                </label>
                <a href="#" className="text-violet-400 hover:text-violet-500">
                  Mot de passe oublié?
                </a>
              </div>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-violet-400 hover:bg-violet-500 text-white py-3 rounded-lg font-medium transition-colors duration-200"
            >
              {isSignUp ? "S'inscrire" : 'Se connecter'}
            </motion.button>
          </form>

          {/* Toggle Sign Up/Login */}
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">
              {isSignUp ? 'Vous avez déjà un compte?' : "Vous n'avez pas de compte?"}
            </span>
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="ml-2 text-violet-400 hover:text-violet-500 font-medium"
            >
              {isSignUp ? 'Se connecter' : "S'inscrire"}
            </button>
          </div>
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-gray-600 dark:text-gray-400 text-sm"
        >
          © 2026 Ikoue Scolar. Tous droits réservés.
        </motion.p>
      </motion.div>
    </div>
  );
}
