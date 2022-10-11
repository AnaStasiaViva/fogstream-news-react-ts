import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { MainLayout } from 'layout/mainLayout';
import { MainPage } from 'pages/MainPage';
import { NewsByCategoryPage } from 'pages/NewsPage';
import { ArticlePage } from 'pages/ArticlePage';
import { SearchPage } from 'pages/SearchPage';
import { NotFoundPage } from 'pages/404';

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route
          path="/"
          element={ <MainLayout /> }
        >
          <Route
            element={ <MainPage /> }
            index
          />
          <Route
            path="/news/:category"
            element={ <NewsByCategoryPage /> }
          />
          <Route
            path="/news/:category/:id"
            element={ <ArticlePage /> }
          />
          <Route
            path="/:search"
            element={ <SearchPage /> }
          />
          <Route
            path="*"
            element={ <NotFoundPage /> }
          />
        </Route>
      </Router>
    </BrowserRouter>
  );
}
