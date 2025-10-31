import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import HomeRoute from './routes/HomeRoute';
import ProjectsRoute from './routes/ProjectsRoute';
import ContactUsRoute from './routes/ContactUsRoute';
import EmailSentRoute from './routes/EmailSentRoute';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header/>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<HomeRoute/>}></Route>
            <Route path='/servicios' element={<ProjectsRoute/>}></Route>
            <Route path='/proyectos' element={<ProjectsRoute/>}></Route>
            <Route path='/contacto' element={<ContactUsRoute/>}></Route>
            <Route path='/correo-enviado' element={<EmailSentRoute/>}></Route>
            <Route path='*' element={<HomeRoute/>}></Route>
          </Routes>
      <Footer/>
    </>
  )
}
