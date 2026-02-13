import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Image, Video, FileUp, Send, Save } from 'lucide-react';

export default function CreateContent() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [contentType, setContentType] = useState<'text' | 'image' | 'video' | 'pdf'>('text');

  const handlePublish = () => {
    console.log('Publishing content:', { title, content, contentType });
  };

  const handleSaveDraft = () => {
    console.log('Saving draft:', { title, content, contentType });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Créer du contenu
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Ajoutez du contenu qui sera visible sur le site officiel
        </p>
      </motion.div>

      {/* Content Type Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
          Type de contenu
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { type: 'text', icon: FileText, label: 'Texte' },
            { type: 'image', icon: Image, label: 'Image' },
            { type: 'video', icon: Video, label: 'Vidéo' },
            { type: 'pdf', icon: FileUp, label: 'PDF' },
          ].map(({ type, icon: Icon, label }) => (
            <motion.button
              key={type}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setContentType(type as any)}
              className={`flex flex-col items-center gap-3 p-6 rounded-lg border-2 transition-all ${
                contentType === type
                  ? 'border-violet-400 bg-violet-50 dark:bg-violet-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-600'
              }`}
            >
              <Icon className={`w-8 h-8 ${contentType === type ? 'text-violet-400' : 'text-gray-400'}`} />
              <span className={`font-medium ${contentType === type ? 'text-violet-400' : 'text-black dark:text-white'}`}>
                {label}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Content Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
      >
        <div className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-black dark:text-white mb-2">
              Titre
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Entrez le titre du contenu..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-400 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white"
            />
          </div>

          {/* Content */}
          {contentType === 'text' ? (
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-2">
                Contenu
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={12}
                placeholder="Écrivez votre contenu ici..."
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-400 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white resize-none"
              />
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-2">
                Fichier
              </label>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center hover:border-violet-400 transition-colors">
                <FileUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Glissez-déposez votre fichier ici ou
                </p>
                <button className="text-violet-400 hover:text-violet-500 font-medium">
                  Parcourir les fichiers
                </button>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSaveDraft}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-black dark:text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Save className="w-5 h-5" />
              Enregistrer le brouillon
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handlePublish}
              className="flex-1 flex items-center justify-center gap-2 bg-violet-400 hover:bg-violet-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Send className="w-5 h-5" />
              Publier
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Recent Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
          Contenu récent
        </h2>
        <div className="text-center py-8">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">
            Aucun contenu publié pour le moment
          </p>
        </div>
      </motion.div>
    </div>
  );
}
