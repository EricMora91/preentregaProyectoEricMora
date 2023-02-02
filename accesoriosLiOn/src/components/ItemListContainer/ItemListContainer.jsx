import './ItemListContainer.css'
import DescuentosMes from "../DescuentosMes/DescuentosMes"

function ItemListContainer (props){
    const {greeting} = props
    return (
        <>
        <div>
            <h3>{greeting}</h3>
            <img src="img/item1.png" alt="Imagen de un par de guantes" />
            <img src="img/item2.png" alt="Imagen de un par de guantes" />
            <img src="img/item3.png" alt="Imagen de un par de guantes" />
            <img src="img/item4.png" alt="Imagen de un par de guantes" />
            <img src="img/item5.png" alt="Imagen de un par de guantes" />
            <img src="img/item6.png" alt="Imagen de un par de guantes" />
            <img src="img/item7.png" alt="Imagen de un par de guantes" />
            <img src="img/item8.png" alt="Imagen de un par de guantes" />
            <img src="img/item9.png" alt="Imagen de un par de guantes" />
            <img src="img/item10.png" alt="Imagen de un par de guantes" />
            <DescuentosMes greeting= "¡Hola, mira nuestros descuentos del mes!" />
        </div>
        </>
    )

}

export default ItemListContainer