import { motion } from 'motion/react';
import { Calendar, Plus, Clock } from 'lucide-react';

const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

export default function Schedule() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-black dark:text-white">Emploi du temps</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Gérer les emplois du temps des classes
          </p>
        </div>
        <button className="flex items-center gap-2 bg-violet-400 hover:bg-violet-500 text-white px-6 py-3 rounded-lg">
          <Plus className="w-5 h-5" />
          Créer un emploi du temps
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-center gap-4 mb-6">
          <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white">
            <option>Sélectionner une classe</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-200 dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-700/50">
                  <Clock className="w-5 h-5 mx-auto text-gray-600 dark:text-gray-400" />
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="border border-gray-200 dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-700/50 text-black dark:text-white"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hours.map((hour) => (
                <tr key={hour}>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center font-medium text-gray-600 dark:text-gray-400">
                    {hour}
                  </td>
                  {days.map((day) => (
                    <td
                      key={`${day}-${hour}`}
                      className="border border-gray-200 dark:border-gray-700 p-3 h-20 hover:bg-violet-50 dark:hover:bg-violet-900/10 cursor-pointer transition-colors"
                    >
                      {/* Empty cells for schedule items */}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
