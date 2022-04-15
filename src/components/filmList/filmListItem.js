// Именованный экспорт, импортируем с фигурными скобками
import propTypes from 'prop-types';

export const FilmListItem = ({
  img,
  title,
  id,
  onDeleteFilm,
  watched,
  onWatchedFilm,
}) => {
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500${img}`} alt="film" />
      <h2>{title}</h2>
      <button type="button" onClick={() => onDeleteFilm(id)}>
        Delete
      </button>
      <span onClick={() => onWatchedFilm(id)}>Watched: {watched + ''}</span>
    </>
  );
};
FilmListItem.propTypes = {
  img: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  onDeleteFilm: propTypes.func.isRequired,
  watched: propTypes.bool.isRequired,
  onWatchedFilm: propTypes.func.isRequired,
};
