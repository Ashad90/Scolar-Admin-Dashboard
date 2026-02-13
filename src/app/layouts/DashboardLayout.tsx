import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from 'next-themes';
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  FileEdit,
  UserCheck,
  Library,
  School,
  BookOpen,
  Calendar,
  ClipboardCheck,
  DollarSign,
  CheckCircle,
  HelpCircle,
  Settings,
  Menu,
  X,
  Moon,
  Sun,
  LogOut,
} from 'lucide-react';
import logoImage from 'figma:asset/9b80abb374c6c99b593443655c82a569bca7501b.png';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: GraduationCap, label: 'Élèves/Étudiants', path: '/dashboard/students' },
  { icon: Users, label: 'Enseignants', path: '/dashboard/teachers' },
  { icon: FileEdit, label: 'Créer du contenu', path: '/dashboard/create-content' },
  { icon: UserCheck, label: 'Parents', path: '/dashboard/parents' },
  { icon: Library, label: 'Bibliothèque', path: '/dashboard/library' },
  { icon: School, label: 'Classe', path: '/dashboard/classes' },
  { icon: BookOpen, label: 'Matière', path: '/dashboard/subjects' },
  { icon: Calendar, label: 'Emploi du temps', path: '/dashboard/schedule' },
  { icon: ClipboardCheck, label: 'Présence', path: '/dashboard/attendance' },
  { icon: DollarSign, label: 'Finances', path: '/dashboard/finance' },
  { icon: CheckCircle, label: 'Validations', path: '/dashboard/validations' },
  { icon: HelpCircle, label: 'Aide', path: '/dashboard/help' },
  { icon: Settings, label: 'Paramètres', path: '/dashboard/settings' },
];

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-300 dark:bg-gray-900">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50 px-4 py-3 flex items-center justify-between">
        <img src={logoImage} alt="Ikoue Scolar" className="h-10 w-auto" />
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {(isSidebarOpen || isMobileMenuOpen) && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed top-0 left-0 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-40 ${
              isMobileMenuOpen ? 'w-64' : 'lg:w-64 hidden lg:block'
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Logo */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <img src={logoImage} alt="Ikoue Scolar" className="h-12 w-auto mx-auto" />
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Admin Dashboard
                </p>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 overflow-y-auto py-4 px-3">
                <div className="space-y-1">
                  {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                            isActive
                              ? 'bg-violet-400 text-white shadow-lg'
                              : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          <Icon className="w-5 h-5 flex-shrink-0" />
                          <span className="text-sm font-medium">{item.label}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </nav>

              {/* Bottom Actions */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  <span className="text-sm font-medium">
                    {theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
                  </span>
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-red-600 dark:text-red-400"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="text-sm font-medium">Déconnexion</span>
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`${isSidebarOpen ? 'lg:ml-64' : ''} transition-all duration-300`}>
        <div className="pt-16 lg:pt-0 p-4 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}
    </div>
  );
}
