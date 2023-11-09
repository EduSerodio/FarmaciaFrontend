import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import FormsCategorias from './components/categoria/formCategorias/FormsCategorias';
import ListaCategorias from './components/categoria/listaCategorias/ListaCategorias';
import DeleteCategorias from './components/categoria/deleteCategorias/DeleteCategorias';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categoria" element={<ListaCategorias />} />
          <Route path="/cadastroCategoria" element={<FormsCategorias />} />
          <Route path="/editarCategoria/:id" element={<FormsCategorias />} />
          <Route path="/deletarCategoria/:id" element={<DeleteCategorias />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;