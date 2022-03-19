import React, {useState} from 'react'

let eventWarning = "Event not implemented";

export const CartContext = React.createContext(
    {
        pets: [],
        showFinishButton: false,
        addItem: (item, quantity) => {console.warn(eventWarning)},
        removeItem: (id) => {console.warn(eventWarning)},
        clear: () => {console.warn(eventWarning)},
        showButton: () => {console.warn(eventWarning)},
        getItemsInCart: () => 0
    }
);

export const CartContextProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(0);
    const [showFinishButton, setShowButton] = useState(false);

    const addItem = (item, quantity) => {
        if(!isInCart(item.id) && quantity > 0) {
            items.push({
                item: item,
                quantity: quantity
            });
            setItems(items);
            setItemsInCart(itemsInCart + quantity);
        }
        else{
            alert(`Item already exist`);
        }
    }

    const removeItem = (id) => {
        let itemAggregator = items.find(i => i.item.id == id);
        items.splice(items.indexOf(itemAggregator), 1);
        setItems(items);
        setItemsInCart(itemsInCart - itemAggregator.quantity);
    }

    const clear = () => {
        setItems([]);
    }

    const isInCart = (id) => {
        return items.find(x => x.item.id === id) !== undefined;
    }

    const showButton = () => {
        setShowButton(true);
    }

    const context = {
        pets: items,
        showFinishButton: showFinishButton,
        addItem: addItem,
        removeItem: removeItem,
        clear: clear,
        showButton: showButton,
        itemsInCart: itemsInCart
    };

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    );
}

