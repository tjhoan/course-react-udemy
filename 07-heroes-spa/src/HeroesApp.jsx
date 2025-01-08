import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './ui';
import { DcPage, HeroPage, MarvelPage, SearchPage } from './heroes/pages';

export const HeroesApp = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route>
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPage />} />

            <Route path="search" element={<SearchPage />} />
            <Route path="hero" element={<HeroPage />} />

            <Route path="/" element={<Navigate to="/marvel" />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};
