import { useEffect, useState } from "react";

const FactWidget = () => {
    const [fact, setFact] = useState([]);
    useEffect(() => {
        getFact();
    }, []);

    const URL = "https://meowfacts.herokuapp.com/";
    const getFact = () => {
        fetch(URL)
        .then(r =>{
            return r.json()
        })
        .then(r => {
            setFact(r.data);
        })
        .catch(e =>{
            console.warn(e);
        })
    }

    return(
        <div>{fact}</div>
    )
}

export default FactWidget;