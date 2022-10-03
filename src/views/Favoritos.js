import { useContext } from 'react';
import { AppContext } from '../components/AppContext';
import { Photo } from '../components/Photo';

export default function Favoritos() {
  const { fotos } = useContext(AppContext);
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {fotos
          .filter((e) => e.liked)
          .map((e, i) => (
            <Photo key={i} photo={e} />
          ))}
      </div>
    </div>
  );
}
