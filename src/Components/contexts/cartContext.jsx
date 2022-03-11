import React, {useState} from 'react'

let eventWarning = "Event not implemented";

export const CartContext = React.createContext(
    {
        pets: [],
        showFinishButton: false,
        addItem: () => {console.warn(eventWarning)},
        removeItem: () => {console.warn(eventWarning)},
        clear: () => {console.warn(eventWarning)},
        showButton: () => {console.warn(eventWarning)}
    }
);

export const CartContextProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [showFinishButton, setShowButton] = useState(false);


    const addItem = (item, quantity) => {
        if(!isInCart(item.id) && quantity > 0) {
            items.push({
                item: item,
                quantity: quantity
            });
            setItems(items);
            alert(`Let's suppose you clone the pet ${quantity} time(s) and put it in your home cart`);
        }
        else{
            alert(`Item already exist`);
        }
    }

    const removeItem = (id) => {
        items.splice(id);
        setItems(items);
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
        showButton: showButton
    };

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    );
}

