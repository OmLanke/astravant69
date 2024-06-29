import { useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import AppRouter from './AppRouter'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
  <BrowserRouter>
    <ScrollToTop />
    <AppRouter />
  </BrowserRouter>
)
}

export default App
