import './DescuentosMes.css'

function DescuentosMes (props){
    const {greeting} = props
    return (
        <>
        <div>
            <h3>{greeting}</h3>
            <img src="img/item11.png" alt="Imagen de un par de guantes" />
            <img src="img/item12.png" alt="Imagen de un par de guantes" />
            <img src="img/item13.png" alt="Imagen de un par de guantes" />
            <img src="img/item14.png" alt="Imagen de un par de guantes" />
            <img src="img/item15.png" alt="Imagen de un par de guantes" />
        </div>
        </>
    )

}

export default DescuentosMes