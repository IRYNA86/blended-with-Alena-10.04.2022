import data from './data.json';
import { Component } from 'react';
import { mapper } from 'utils/mapper';
import { FilmList } from './filmList/filmList';
import {Button} from './button/button'


export default class App extends Component {
  state = {
    isVisible: false,
    films: mapper(data),
  }

  toggleVisibility = () => {
    this.setState(prevState => ({ isVisible: !prevState.isVisible }))
  }

  deleteFilm = (delId) => {
    this.setState(prevState => ({ films: prevState.films.filter(({ id }) => id !== delId) }))
  }
  toggleWatchedFilms = (currentId) => {
    this.setState(prevState => ({
      films: prevState.films.map(film => {
        if (currentId === film.id) {
          return {...film, watched:!film.watched}
        }
          return film
    })
    }))
    }

  render()
  {
    const {isVisible, films} = this.state
    return (
      <>
      <h1>Filmoteka</h1>
        <Button toggleVisibility={this.toggleVisibility} isVisible={isVisible} />
        {
          isVisible && <FilmList films = {films} onDeleteFilm={this.deleteFilm} onWatchedFilm={this.toggleWatchedFilms}
        />
        }
        
        </>
  )

  }
}

