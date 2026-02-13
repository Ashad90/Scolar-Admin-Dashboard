import { motion } from 'motion/react';
import { DollarSign, TrendingUp, TrendingDown, CreditCard } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { month: 'Jan', revenus: 0, depenses: 0 },
  { month: 'Fév', revenus: 0, depenses: 0 },
  { month: 'Mar', revenus: 0, depenses: 0 },
  { month: 'Avr', revenus: 0, depenses: 0 },
  { month: 'Mai', revenus: 0, depenses: 0 },
  { month: 'Juin', revenus: 0, depenses: 0 },
];

export default function Finance() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-black dark:text-white">Finances</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Gérer les paiements et les finances de l'établissement
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Revenus totaux', value: '0 FCFA', icon: TrendingUp, color: 'bg-green-500' },
          { title: 'Dépenses', value: '0 FCFA', icon: TrendingDown, color: 'bg-red-500' },
          { title: 'Paiements en attente', value: '0', icon: CreditCard, color: 'bg-yellow-500' },
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
        <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
          Revenus vs Dépenses (6 derniers mois)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
            <XAxis dataKey="month" className="text-gray-600 dark:text-gray-400" />
            <YAxis className="text-gray-600 dark:text-gray-400" />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenus" fill="#10b981" name="Revenus" />
            <Bar dataKey="depenses" fill="#ef4444" name="Dépenses" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
          Transactions récentes
        </h2>
        <div className="text-center py-8">
          <DollarSign className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Aucune transaction</p>
        </div>
      </motion.div>
    </div>
  );
}
