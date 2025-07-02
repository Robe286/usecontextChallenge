import RoutesApp from './routes/RoutesApp';
import { ThemeProvider, useTheme } from './themes/ThemeContext';

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <section className={`App ${theme}`}>
      <RoutesApp />
    </section>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;