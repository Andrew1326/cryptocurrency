import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './components/shared/loader/Loader';
import 'aos/dist/aos.css';
import AOS from 'aos';
import NavBar from './components/navBar/NavBar';
import ThemeProvider from './contexts/ThemeContext';
import { OfflineAlert } from './components/shared/alerts/Alerts';
import SettingsProvider from './contexts/SettingsContext';

const Home = lazy(() => import('./components/screens/home/Home'));
const Coins = lazy(() => import('./components/screens/coins/Coins'));
const News = lazy(() => import('./components/screens/news/News'));
const NotFound = lazy(() => import('./components/screens/notFound/NotFound'));

//* create url
export const createUrl = (url, params) => {
  const fetchUrl = new URL(url);

  const paramsEntries = Object.entries(params);
  const filteredParams = paramsEntries.filter(el => el[1] !== 'no limit');
  fetchUrl.search = new URLSearchParams(Object.fromEntries(filteredParams)).toString();

  return fetchUrl
};

export default function App() {

  //* AOS init
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])

  //* routes
  const routes = [
    {element: <Home />, path: '/'},
    {element: <Coins />, path: 'coins'},
    {element: <News />, path: 'news'},
    {element: <NotFound />, path: '*'},
  ]

  return (
    <Router>
      <ThemeProvider>
        <SettingsProvider>
        <NavBar />
        {
        !navigator.onLine ? <OfflineAlert />
        :
        <Suspense fallback={<Loader />}>
        <Routes>
          {
            routes.map((el, i) => <Route key={i} path={el.path} element={el.element} />)
          }
        </Routes>
        </Suspense>
        }
        </SettingsProvider>
      </ThemeProvider>
    </Router>
  );
}
