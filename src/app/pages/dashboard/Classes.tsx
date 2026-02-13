import { motion } from 'motion/react';
import { School, Plus, Users, BookOpen } from 'lucide-react';

export default function Classes() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-black dark:text-white">Classes</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Gérer les classes de votre établissement
          </p>
        </div>
        <button className="flex items-center gap-2 bg-violet-400 hover:bg-violet-500 text-white px-6 py-3 rounded-lg">
          <Plus className="w-5 h-5" />
          Ajouter une classe
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: 'Total Classes', value: '0', icon: School, color: 'bg-purple-500' },
          { title: 'Total Élèves', value: '0', icon: Users, color: 'bg-blue-500' },
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
          <School className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
            Aucune classe
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Commencez par créer des classes pour votre établissement.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
