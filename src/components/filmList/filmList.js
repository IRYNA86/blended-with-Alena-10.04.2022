import { FilmListItem } from './filmListItem';
import propTypes from 'prop-types';

export const FilmList = ({ films, onDeleteFilm, onWatchedFilm }) => {
  return (
    <ul>
      {films.map(({ img, id, title, watched }) => (
        <li key={id}>
          <FilmListItem
            img={img}
            title={title}
            id={id}
            onDeleteFilm={onDeleteFilm}
            watched={watched}
            onWatchedFilm={onWatchedFilm}
          />
        </li>
      ))}
    </ul>
  );
};
FilmList.propTypes = {
  films: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      img: propTypes.string.isRequired,
      watcheed: propTypes.bool.isRequired,
    }).isRequired
    ).isRequired,
    onDeleteFilm: propTypes.func.isRequired,
    onWatchedFilm: propTypes.func.isRequired,
};
