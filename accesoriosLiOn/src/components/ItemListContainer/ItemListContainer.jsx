import './ItemListContainer.css'

function ItemListContainer (props){
    const {greeting} = props
    return (
        <div className='ItemListContainer'>
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
            <img src="img/item10.png" alt="Imagen de un par de guantes"/>
        </div>
    )

}

export default ItemListContainer