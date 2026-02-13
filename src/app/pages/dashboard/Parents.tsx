import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, UserCheck, CheckCircle, XCircle, Eye, Mail, Phone } from 'lucide-react';

interface Parent {
  id: string;
  name: string;
  email: string;
  phone: string;
  children: string[];
  status: 'pending' | 'approved' | 'rejected';
  registrationDate: string;
}

const mockParents: Parent[] = [];

export default function Parents() {
  const [parents] = useState<Parent[]>(mockParents);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredParents = parents.filter((parent) =>
    parent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    parent.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Parents
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Valider les inscriptions effectuées par les parents
        </p>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Rechercher un parent..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-400 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white"
          />
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Parents</p>
              <h3 className="text-2xl font-bold text-black dark:text-white mt-1">
                {parents.length}
              </h3>
            </div>
            <div className="bg-purple-500 p-3 rounded-lg">
              <UserCheck className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">En attente</p>
              <h3 className="text-2xl font-bold text-black dark:text-white mt-1">
                {parents.filter((p) => p.status === 'pending').length}
              </h3>
            </div>
            <div className="bg-yellow-500 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Approuvés</p>
              <h3 className="text-2xl font-bold text-black dark:text-white mt-1">
                {parents.filter((p) => p.status === 'approved').length}
              </h3>
            </div>
            <div className="bg-green-500 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Parents List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
      >
        {filteredParents.length === 0 ? (
          <div className="text-center py-12">
            <UserCheck className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              Aucun parent
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Il n'y a pas encore d'inscriptions de parents.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {filteredParents.map((parent, index) => (
              <motion.div
                key={parent.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-violet-400 flex items-center justify-center text-white font-semibold">
                      {parent.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-black dark:text-white">
                        {parent.name}
                      </h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {parent.registrationDate}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      parent.status === 'approved'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : parent.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}
                  >
                    {parent.status === 'approved' ? 'Approuvé' : parent.status === 'pending' ? 'En attente' : 'Rejeté'}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Mail className="w-4 h-4" />
                    {parent.email}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Phone className="w-4 h-4" />
                    {parent.phone}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Enfants:</span>{' '}
                    {parent.children.join(', ')}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
                    <CheckCircle className="w-4 h-4" />
                    Approuver
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
                    <XCircle className="w-4 h-4" />
                    Rejeter
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
