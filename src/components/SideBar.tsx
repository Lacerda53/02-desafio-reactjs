import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from './Button';
import '../styles/sidebar.scss';
import { useGenre } from '../Contexts/GenreIdContext'
import GenreResponseProps from "../interfaces/GenreResponseProps";

export function SideBar() {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const { selectedGenreId, setSelectedGenreId } = useGenre();

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={genre.id}
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => setSelectedGenreId(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}