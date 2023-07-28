//Aquí se estan importando componentes necesarios como el router-dom.

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Nosotros } from './components/Nosotros';
import { Accesorios } from './components/Accesorios';
import { Componentes } from './components/Componentes';
import { Productos } from './components/Productos';
import { Formulario } from './components/Formulario';

import { Multimedia } from './components/Multimedia';
import { Usuarios } from './components/Usuarios';
import { Home } from './components/Home';

function App() {
  return (

<div className='contenedor'>
<BrowserRouter> 
<Header/>
<Routes>
<Route path='/' element={<Home />}/>
<Route path='/nosotros' element={<Nosotros/>}/>
<Route path='/nuestros-productos' element={<Productos/>} />
<Route path='/componentes' element={<Componentes/>} />
<Route path='/accesorios' element={<Accesorios/>} />
<Route path='/multimedia' element={<Multimedia/>} />
<Route path='/formulario' element={<Formulario/>} />
<Route path='/usuarios' element={<Usuarios/>} />

//En el segmento anterior se muestra cómo se configuran las rutas utilizando React Router.

</Routes> 
<Footer/>
</BrowserRouter>
</div>

  );
}

export default App;

