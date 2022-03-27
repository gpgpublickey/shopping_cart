import React, {useState} from 'react'

let eventWarning = "Event not implemented";
const defaultContext = {
    pets: [],
    showFinishButton: false,
    addItem: (item, quantity) => {console.warn(eventWarning)},
    removeItem: (id) => {console.warn(eventWarning)},
    clear: () => {console.warn(eventWarning)},
    showButton: () => {console.warn(eventWarning)},
    itemsInCart: 0,
    totalPrice: 0,
    resetCart: () => {console.warn(eventWarning)}
}
export const CartContext = React.createContext(defaultContext);

export const CartContextProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(0);
    const [showFinishButton, setShowButton] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItem = (item, quantity) => {
        if(!isInCart(item.id) && quantity > 0) {
            items.push({
                item: item,
                quantity: quantity,
            });
            setItems(items);
            setItemsInCart(itemsInCart + quantity);
            setTotalPrice(totalPrice + (quantity * item.price));
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
        setTotalPrice(totalPrice - (itemAggregator.quantity * itemAggregator.item.price));
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

    const resetCart = () => {
        setItems([]);
        setItemsInCart(0);
        setShowButton(false);
        setTotalPrice(0);
    }

    const context = {
        pets: items,
        showFinishButton: showFinishButton,
        itemsInCart: itemsInCart,
        totalPrice: totalPrice,
        addItem: addItem,
        removeItem: removeItem,
        clear: clear,
        showButton: showButton,
        resetCart: resetCart
    };

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    );
}

