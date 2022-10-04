import { useContext } from 'react';
import '../assets/css/galeria.css';
import { AppContext } from '../context/AppContext';
import { Photo } from './Photo';

export default function Home() {
  const { fotos, setFotos } = useContext(AppContext);

  const cambiarCorazon = (i) => {
    //saco el contenido del arreglo foto para modificar su estado
    const nuevaFoto = [...fotos];
    nuevaFoto[i].liked = !nuevaFoto[i].liked;
    setFotos(nuevaFoto);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {/* Recorro un Arreglo de fotos y le asigno el en backgroundImage el valor de src portrait (la propiedad donde sacamos la url de la foto) */}
      {fotos.map((e, i) => (
        <Photo key={i} onClick={() => cambiarCorazon(i)} photo={e} />
      ))}
    </div>
  );
}
