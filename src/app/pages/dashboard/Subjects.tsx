import { motion } from 'motion/react';
import { BookOpen, Plus, FileText } from 'lucide-react';

const subjects = [
  { name: 'Mathématiques', modules: 0, color: 'bg-blue-500' },
  { name: 'Français', modules: 0, color: 'bg-green-500' },
  { name: 'Anglais', modules: 0, color: 'bg-purple-500' },
  { name: 'Histoire-Géographie', modules: 0, color: 'bg-yellow-500' },
  { name: 'Sciences', modules: 0, color: 'bg-red-500' },
  { name: 'Physique-Chimie', modules: 0, color: 'bg-indigo-500' },
];

export default function Subjects() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-black dark:text-white">Matières</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Gérer les matières et leurs modules de cours
          </p>
        </div>
        <button className="flex items-center gap-2 bg-violet-400 hover:bg-violet-500 text-white px-6 py-3 rounded-lg">
          <Plus className="w-5 h-5" />
          Ajouter une matière
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject, index) => (
          <motion.div
            key={subject.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <div className={`${subject.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              {subject.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <FileText className="w-4 h-4" />
              <span>{subject.modules} modules</span>
            </div>
            <button className="w-full mt-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-black dark:text-white px-4 py-2 rounded-lg transition-colors">
              Voir les modules
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
