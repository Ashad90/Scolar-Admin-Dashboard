import { motion } from 'motion/react';
import { BookOpen, Search, Plus, Book, FileText } from 'lucide-react';

export default function Library() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-black dark:text-white">Bibliothèque</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Gérer les livres, dictionnaires et ressources en ligne
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Rechercher dans la bibliothèque..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-400 bg-white dark:bg-gray-700 text-black dark:text-white"
          />
        </div>
        <button className="flex items-center gap-2 bg-violet-400 hover:bg-violet-500 text-white px-6 py-3 rounded-lg">
          <Plus className="w-5 h-5" />
          Ajouter un livre
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Total Livres', value: '0', icon: Book, color: 'bg-blue-500' },
          { title: 'Dictionnaires', value: '0', icon: BookOpen, color: 'bg-green-500' },
          { title: 'Documents', value: '0', icon: FileText, color: 'bg-purple-500' },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-black dark:text-white mt-1">{stat.value}</h3>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
      >
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
            Bibliothèque vide
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Commencez par ajouter des livres et ressources à votre bibliothèque.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
