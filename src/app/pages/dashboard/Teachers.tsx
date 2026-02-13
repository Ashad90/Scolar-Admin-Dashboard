import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, UserPlus, Eye, Mail, Phone, BookOpen } from 'lucide-react';

interface Teacher {
  id: string;
  name: string;
  email: string;
  phone: string;
  subjects: string[];
  status: 'active' | 'inactive';
  joinDate: string;
}

const mockTeachers: Teacher[] = [];

export default function Teachers() {
  const [teachers] = useState<Teacher[]>(mockTeachers);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Enseignants
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Gérer les enseignants de votre établissement
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-violet-400 hover:bg-violet-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          <UserPlus className="w-5 h-5" />
          Ajouter un enseignant
        </motion.button>
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
            placeholder="Rechercher un enseignant..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-400 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white"
          />
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Enseignants</p>
              <h3 className="text-2xl font-bold text-black dark:text-white mt-1">
                {teachers.length}
              </h3>
            </div>
            <div className="bg-green-500 p-3 rounded-lg">
              <UserPlus className="w-6 h-6 text-white" />
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
              <p className="text-sm text-gray-600 dark:text-gray-400">Actifs</p>
              <h3 className="text-2xl font-bold text-black dark:text-white mt-1">
                {teachers.filter((t) => t.status === 'active').length}
              </h3>
            </div>
            <div className="bg-blue-500 p-3 rounded-lg">
              <Filter className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Teachers List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
      >
        {filteredTeachers.length === 0 ? (
          <div className="text-center py-12">
            <UserPlus className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              Aucun enseignant
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Commencez par ajouter des enseignants à votre établissement.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {filteredTeachers.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-violet-400 flex items-center justify-center text-white text-xl font-semibold">
                    {teacher.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-black dark:text-white">
                      {teacher.name}
                    </h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        teacher.status === 'active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                      }`}
                    >
                      {teacher.status === 'active' ? 'Actif' : 'Inactif'}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Mail className="w-4 h-4" />
                    {teacher.email}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Phone className="w-4 h-4" />
                    {teacher.phone}
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <BookOpen className="w-4 h-4 mt-0.5" />
                    <div className="flex flex-wrap gap-1">
                      {teacher.subjects.map((subject, idx) => (
                        <span
                          key={idx}
                          className="bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-400 px-2 py-0.5 rounded text-xs"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 transition-colors">
                  <Eye className="w-4 h-4" />
                  Voir le profil
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
