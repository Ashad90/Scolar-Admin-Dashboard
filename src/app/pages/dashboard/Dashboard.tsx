import { motion } from 'motion/react';
import {
  Users,
  GraduationCap,
  BookOpen,
  DollarSign,
  TrendingUp,
  UserCheck,
  FileText,
  Calendar,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

const statsCards = [
  {
    title: 'Total Élèves/Étudiants',
    value: '0',
    icon: GraduationCap,
    color: 'bg-blue-500',
    trend: '+0%',
  },
  {
    title: 'Total Enseignants',
    value: '0',
    icon: Users,
    color: 'bg-green-500',
    trend: '+0%',
  },
  {
    title: 'Total Classes',
    value: '0',
    icon: BookOpen,
    color: 'bg-purple-500',
    trend: '+0%',
  },
  {
    title: 'Revenus Totaux',
    value: '0 FCFA',
    icon: DollarSign,
    color: 'bg-yellow-500',
    trend: '+0%',
  },
];

const enrollmentData = [
  { month: 'Jan', etudiants: 0, enseignants: 0 },
  { month: 'Fév', etudiants: 0, enseignants: 0 },
  { month: 'Mar', etudiants: 0, enseignants: 0 },
  { month: 'Avr', etudiants: 0, enseignants: 0 },
  { month: 'Mai', etudiants: 0, enseignants: 0 },
  { month: 'Juin', etudiants: 0, enseignants: 0 },
];

const financeData = [
  { month: 'Jan', revenus: 0, depenses: 0 },
  { month: 'Fév', revenus: 0, depenses: 0 },
  { month: 'Mar', revenus: 0, depenses: 0 },
  { month: 'Avr', revenus: 0, depenses: 0 },
  { month: 'Mai', revenus: 0, depenses: 0 },
  { month: 'Juin', revenus: 0, depenses: 0 },
];

const attendanceData = [
  { name: 'Présents', value: 0, color: '#8b5cf6' },
  { name: 'Absents', value: 0, color: '#ef4444' },
  { name: 'Retards', value: 0, color: '#f59e0b' },
];

const subjectDistribution = [
  { name: 'Mathématiques', value: 0 },
  { name: 'Français', value: 0 },
  { name: 'Anglais', value: 0 },
  { name: 'Sciences', value: 0 },
  { name: 'Histoire', value: 0 },
  { name: 'Autres', value: 0 },
];

const COLORS = ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#6366f1'];

const recentActivities = [
  {
    icon: UserCheck,
    title: 'Nouvelle inscription',
    description: 'Aucune nouvelle inscription',
    time: '',
    color: 'text-blue-500',
  },
  {
    icon: FileText,
    title: 'Nouveau contenu',
    description: 'Aucun nouveau contenu publié',
    time: '',
    color: 'text-green-500',
  },
  {
    icon: Calendar,
    title: 'Emploi du temps',
    description: 'Aucune mise à jour',
    time: '',
    color: 'text-purple-500',
  },
  {
    icon: DollarSign,
    title: 'Paiement',
    description: 'Aucun nouveau paiement',
    time: '',
    color: 'text-yellow-500',
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Tableau de bord
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Vue d'ensemble de votre plateforme éducative
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>{new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {stat.title}
                  </p>
                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    {stat.value}
                  </h3>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-500">{stat.trend}</span>
                  </div>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Enrollment Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
            Inscriptions par mois
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={enrollmentData}>
              <defs>
                <linearGradient id="colorEtudiants" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorEnseignants" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
              <XAxis dataKey="month" className="text-gray-600 dark:text-gray-400" />
              <YAxis className="text-gray-600 dark:text-gray-400" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="etudiants"
                stroke="#8b5cf6"
                fillOpacity={1}
                fill="url(#colorEtudiants)"
                name="Étudiants"
              />
              <Area
                type="monotone"
                dataKey="enseignants"
                stroke="#06b6d4"
                fillOpacity={1}
                fill="url(#colorEnseignants)"
                name="Enseignants"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Finance Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
            Revenus vs Dépenses
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={financeData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
              <XAxis dataKey="month" className="text-gray-600 dark:text-gray-400" />
              <YAxis className="text-gray-600 dark:text-gray-400" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="revenus" fill="#10b981" name="Revenus" radius={[8, 8, 0, 0]} />
              <Bar dataKey="depenses" fill="#ef4444" name="Dépenses" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
            Présence aujourd'hui
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={attendanceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {attendanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Subject Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
            Distribution des matières
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={subjectDistribution} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
              <XAxis type="number" className="text-gray-600 dark:text-gray-400" />
              <YAxis dataKey="name" type="category" className="text-gray-600 dark:text-gray-400" width={100} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="value" fill="#8b5cf6" radius={[0, 8, 8, 0]}>
                {subjectDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Activities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
          Activités récentes
        </h3>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className={`${activity.color} bg-opacity-10 p-3 rounded-lg`}>
                  <Icon className={`w-6 h-6 ${activity.color}`} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-black dark:text-white">
                    {activity.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {activity.description}
                  </p>
                </div>
                {activity.time && (
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    {activity.time}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
