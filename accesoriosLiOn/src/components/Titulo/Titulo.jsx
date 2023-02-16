import './Titulo.css'
function Titulo (props){
    return (
        <div className='Titulo'>
        <h1>{props.greeting}</h1>
        </div>
    )

}

export default Titulo