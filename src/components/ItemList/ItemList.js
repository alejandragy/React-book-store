import Item from "../Item/Item";

const ItemList = ({products}) => {
    return (
        <div className="flex flex-wrap justify-center gap-6 m-4">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList;