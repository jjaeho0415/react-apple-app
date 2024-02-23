import './App.css'
import SearchPage from './pages/SearchPage';
import LoginPage  from './pages/LoginPage';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import Nav from './components/Nav';
import { Route, Routes, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Nav />
    
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App