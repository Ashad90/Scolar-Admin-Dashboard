import { motion } from 'motion/react';
import { HelpCircle, MessageCircle, Book, Mail, Phone } from 'lucide-react';

const helpTopics = [
  {
    icon: Book,
    title: 'Documentation',
    description: "Consultez notre guide d'utilisation complet",
    color: 'text-blue-500',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    icon: MessageCircle,
    title: 'Chat en direct',
    description: 'Discutez avec notre équipe de support',
    color: 'text-green-500',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'support@ikoue.com',
    color: 'text-purple-500',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    description: '+236 XXX XXX XXX',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
  },
];

const faqs = [
  {
    question: 'Comment ajouter un nouvel élève ?',
    answer:
      "Rendez-vous dans la section 'Élèves/Étudiants' et cliquez sur 'Ajouter un étudiant'. Remplissez le formulaire et validez.",
  },
  {
    question: 'Comment créer un emploi du temps ?',
    answer:
      "Accédez à la section 'Emploi du temps', sélectionnez une classe et ajoutez les cours en cliquant sur les créneaux horaires.",
  },
  {
    question: 'Comment valider un paiement ?',
    answer:
      "Dans la section 'Finances', vous trouverez la liste des paiements en attente. Cliquez sur 'Valider' pour approuver un paiement.",
  },
];

export default function Help() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-black dark:text-white">Aide & Support</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Trouvez des réponses à vos questions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {helpTopics.map((topic, index) => {
          const Icon = topic.icon;
          return (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 cursor-pointer"
            >
              <div className={`${topic.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${topic.color}`} />
              </div>
              <h3 className="font-semibold text-black dark:text-white mb-2">{topic.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{topic.description}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-lg font-semibold text-black dark:text-white mb-6">
          Questions fréquentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-violet-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-black dark:text-white mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
