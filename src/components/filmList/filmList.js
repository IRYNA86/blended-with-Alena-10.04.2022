import { FilmListItem } from './filmListItem'

export const FilmList = ({ films }) => {
    return (
        <ul>
            {films.map(({ img, id, title }) => (<li key={id}>
                <FilmListItem
                    img={img}
                    title={title}
                />

            </li>) )}
    </ul >
)
}