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
  this.setState(prevState => ({isVisible: !prevState.isVisible}))
  }

  render()
  {
    const {isVisible, films} = this.state
    return (
      <>
      <h1>Filmoteka</h1>
        <Button toggleVisibility={this.toggleVisibility} />
        {
          isVisible && <FilmList films = {films}
        />
        }
        
        </>
  )

  }
}

