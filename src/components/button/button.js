export const Button = ({toggleVisibility, isVisible}) => {
    return(
        <button type="button" onClick={toggleVisibility} >{ isVisible ? 'Hide films' : 'Show films'}</button>
    )
}