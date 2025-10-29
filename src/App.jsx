import { Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';
import HomeRoute from './routes/HomeRoute';

import ContactUsRoute from './routes/ContactUsRoute';
import ProductsRoute from './routes/ProductsRoute';
import InscriptionsRoute from './routes/InscriptionsRoute';
import BlogRoute from './routes/BlogRoute';
import PetCoinsInfoRoute from './routes/PetCoinsInfoRoute';
import EmailSentRoute from './routes/EmailSentRoute';

import TeamRoute from './routes/TeamRoute';

import HistoryRoute from './routes/HistoryRoute';

import StrategicLinesRoute from './routes/strategic-lines/StrategicLinesRoute';
import NuestraTierraEducaRoute from './routes/strategic-lines/NuestraTierraEducaRoute';
import TerraInnovaRoute from './routes/strategic-lines/TerraInnovaRoute';
import MujeresNuestraTierraRoute from './routes/strategic-lines/MujeresNuestraTierraRoute';

import ProjectsRoute from './routes/projects/ProjectsRoute';
import FestivalNuestraTierraRoute from './routes/projects/FestivalNuestraTierraRoute';
import EcoReporterosRoute from './routes/projects/EcoReporterosRoute';
import ConectarteConElAmbienteRoute from './routes/projects/ConectarteConElAmbienteRoute';
import MujeresEnConstruccionRoute from './routes/projects/MujeresEnConstruccionRoute';
import MujeresAlCartelRoute from './routes/projects/MujeresAlCartelRoute';


export default function App() {

  return (
    <>
      <Header/>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<HomeRoute/>}></Route>

            <Route path='/history' element={<HistoryRoute/>}></Route>
            <Route path='/team' element={<TeamRoute/>}></Route>

          {/* |   Líneas Estratégicas */}
            <Route path='/strategic-lines' element={<StrategicLinesRoute/>}></Route>
            <Route path='/strategic-lines/nuestratierra-educa' element={<NuestraTierraEducaRoute/>}></Route>
            <Route path='/strategic-lines/terrainnova' element={<TerraInnovaRoute/>}></Route>
            <Route path='/strategic-lines/mujeres-nuestratierra' element={<MujeresNuestraTierraRoute/>}></Route>

            {/* Proyectos */}
            <Route path='/projects' element={<ProjectsRoute/>}></Route>
            <Route path='/projects/festival-nuestratierra' element={<FestivalNuestraTierraRoute/>}></Route>
            <Route path='/projects/ecoreporteros' element={<EcoReporterosRoute/>}></Route>
            <Route path='/projects/conectarte-medioambiente' element={<ConectarteConElAmbienteRoute/>}></Route>
            <Route path='/projects/mujeres-en-construccion' element={<MujeresEnConstruccionRoute/>}></Route>
            <Route path='/projects/mujeres-al-cartel' element={<MujeresAlCartelRoute/>}></Route>

            <Route path='/products' element={<ProductsRoute/>}></Route>
            <Route path='/petcoins' element={<PetCoinsInfoRoute/>}></Route>

            <Route path='/blog' element={<BlogRoute/>}></Route>
            <Route path='/inscriptions' element={<InscriptionsRoute/>}></Route>

            <Route path='/contact' element={<ContactUsRoute/>}></Route>
            <Route path='/email-sent' element={<EmailSentRoute/>}></Route>

            <Route path='*' element={<HomeRoute/>}></Route>
          </Routes>
      <Footer/>
    </>
  )
}
