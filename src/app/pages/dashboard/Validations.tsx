import { motion } from 'motion/react';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

export default function Validations() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-black dark:text-white">Validations</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Gérer toutes les demandes de validation
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'En attente', value: '0', icon: Clock, color: 'bg-yellow-500' },
          { title: 'Approuvées', value: '0', icon: CheckCircle, color: 'bg-green-500' },
          { title: 'Rejetées', value: '0', icon: XCircle, color: 'bg-red-500' },
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
          <CheckCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
            Aucune validation en attente
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Toutes les demandes ont été traitées.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
