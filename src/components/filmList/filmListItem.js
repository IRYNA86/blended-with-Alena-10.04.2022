// Именованный экспорт, импортируем с фигурными скобками

export const FilmListItem = ({ img, title }) => {
    return (
        <>
            <img src={`https://image.tmdb.org/t/p/w500${img}`} alt="film" />
            <h2>{ title }</h2>
        </>
    )
}