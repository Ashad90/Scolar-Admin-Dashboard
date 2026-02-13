import { motion } from 'motion/react';
import { Settings as SettingsIcon, User, Bell, Lock, Globe, Palette } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-black dark:text-white">Paramètres</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Configurez votre tableau de bord
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-violet-100 dark:bg-violet-900/30 p-3 rounded-lg">
              <User className="w-6 h-6 text-violet-400" />
            </div>
            <h2 className="text-lg font-semibold text-black dark:text-white">Profil</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-2">
                Nom complet
              </label>
              <input
                type="text"
                placeholder="Admin Ikoue"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="admin@ikoue.com"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white"
              />
            </div>
          </div>
        </motion.div>

        {/* Theme Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
              <Palette className="w-6 h-6 text-purple-500" />
            </div>
            <h2 className="text-lg font-semibold text-black dark:text-white">Apparence</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-3">
                Thème
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setTheme('light')}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    theme === 'light'
                      ? 'border-violet-400 bg-violet-50 dark:bg-violet-900/20'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <div className="w-full h-12 bg-white rounded border border-gray-200 mb-2"></div>
                  <span className="text-sm font-medium text-black dark:text-white">Clair</span>
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    theme === 'dark'
                      ? 'border-violet-400 bg-violet-50 dark:bg-violet-900/20'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <div className="w-full h-12 bg-gray-800 rounded border border-gray-700 mb-2"></div>
                  <span className="text-sm font-medium text-black dark:text-white">Sombre</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
              <Bell className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-lg font-semibold text-black dark:text-white">Notifications</h2>
          </div>
          <div className="space-y-4">
            {[
              'Nouvelles inscriptions',
              'Paiements reçus',
              'Messages des parents',
              'Mises à jour système',
            ].map((item) => (
              <label key={item} className="flex items-center justify-between">
                <span className="text-sm text-black dark:text-white">{item}</span>
                <input
                  type="checkbox"
                  className="w-4 h-4 text-violet-400 rounded focus:ring-violet-400"
                  defaultChecked
                />
              </label>
            ))}
          </div>
        </motion.div>

        {/* Security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
              <Lock className="w-6 h-6 text-red-500" />
            </div>
            <h2 className="text-lg font-semibold text-black dark:text-white">Sécurité</h2>
          </div>
          <div className="space-y-4">
            <button className="w-full text-left px-4 py-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <span className="text-sm font-medium text-black dark:text-white">
                Changer le mot de passe
              </span>
            </button>
            <button className="w-full text-left px-4 py-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <span className="text-sm font-medium text-black dark:text-white">
                Authentification à deux facteurs
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Save Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex justify-end"
      >
        <button className="bg-violet-400 hover:bg-violet-500 text-white px-8 py-3 rounded-lg font-medium transition-colors">
          Enregistrer les modifications
        </button>
      </motion.div>
    </div>
  );
}
