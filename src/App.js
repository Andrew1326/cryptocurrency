import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './components/shared/loader/Loader';
import 'aos/dist/aos.css';
import AOS from 'aos';
import NavBar from './components/navBar/NavBar';
import { COINS_URL, NEWS_URL } from './constants'
import CustomAlert from './components/shared/customAlert/customAlert';
import { OFFLINE_HEADER, OFFLINE_TEXT } from './constants';
import ThemeProvider from './contexts/ThemeContext';
import { useSessionStorage } from './hooks/useSessionStorage';

const Home = lazy(() => import('./components/screens/home/Home'));
const Coins = lazy(() => import('./components/screens/coins/Coins'));
const News = lazy(() => import('./components/screens/news/News'));
const NotFound = lazy(() => import('./components/screens/notFound/NotFound'));

export default function App() {

  const [fiatCurrency, setFiatCurrency] = useSessionStorage('fiatCurrency', 'USD')
  const [coinsLimit, setCoinsLimit] = useSessionStorage('coinsLimit', null)
  const [newsType, setNewsType] = useSessionStorage('newsType', 'latest')
  const [newsLimit, setNewsLimit] = useSessionStorage('newsLimit', null)

  const [coinsUrl, setCoinsUrl] = useState(createUrl(COINS_URL, {
    limit: coinsLimit,
    currency: fiatCurrency
  }));

  const [newsUrl, setNewsUrl] = useState(`${NEWS_URL}/${newsType}`, { limit: newsLimit });

  //* AOS init
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])

   //* create url
   function createUrl(url, params) {
    const fetchUrl = new URL(url);
    params = Object.fromEntries(Object.entries(params).filter(el => !!el[1]));
    fetchUrl.search = new URLSearchParams(params).toString();
    return fetchUrl
  };

  //* props
  const navBarProps = {createUrl, setFiatCurrency, setCoinsLimit, setNewsType, setNewsLimit, setCoinsUrl, setNewsUrl};
  const offLineAlertProps = {heading: OFFLINE_HEADER, text: OFFLINE_TEXT, variant: 'warning'};
  const coinsProps = {fiatCurrency, coinsUrl};

  //* routes
  const routes = [
    {element: <Home />, path: '/'},
    {element: <Coins {...coinsProps} />, path: 'coins'},
    {element: <News newsUrl={newsUrl} />, path: 'news'},
    {element: <NotFound />, path: '*'},
  ]

  return (
    <Router>
      <ThemeProvider>
      <NavBar {...navBarProps} />
      {
        !navigator.onLine && <CustomAlert {...offLineAlertProps} />
      }
      <Suspense fallback={<Loader />}>
        <Routes>
          {
            routes.map((el, i) => <Route key={i} path={el.path} element={el.element} />)
          }
        </Routes>
      </Suspense>
      </ThemeProvider>
    </Router>
  );
}
