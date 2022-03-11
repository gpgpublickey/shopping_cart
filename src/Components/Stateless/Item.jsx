import {useState} from 'react'
import cardDefaultPets from '../../images/card-default-pets.png'
import { Link } from 'react-router-dom';

const Item = ({pet}) => {
    const {id, name, description, conditions, pictureUrl, isAvailable, qualities} = pet;
    const [counter, setContador] = useState(0);
    const [clicksDate, setLastClickDate] = useState([]);

    const styles = {
        animatedBorder: {
            fontSize: '17px',
            border: '5px solid black',
            padding: '0.5rem 0.5rem',
            minHeight: '1em',
            resize: 'both',
            with: '3em',
            borderImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 5s infinite linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ddeeff' /%3E%3Cstop offset='25%25' stop-color='%232a44ff' /%3E%3Cstop offset='50%25' stop-color='%233dfaf' /%3E%3Cstop offset='100%25' stop-color='%23aad1ff' /%3E%3C/linearGradient%3E %3Cpath d='M1.5 1.5 l97 0l0 97l-97 0 l0 -97' stroke-linecap='square' stroke='url(%23g)' stroke-width='3' stroke-dasharray='388'/%3E %3C/svg%3E") 1`
          }
    };

    const strings = {
        isAvailable: 'Needs an owner',
        notAvailable: 'Adopted!',
        viewed: `Viewed : ${counter} times`,
        adopt: 'More info'
    };

    function addClick() {
        setContador(counter+1);
        const dateWithouthSecond = new Date();
        const time = dateWithouthSecond.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit', second: '2-digit'});
        let clicks = clicksDate;
        clicks.push(time);
        setLastClickDate(clicks);
        console.info(`Analytics, users viewed this on ${clicksDate.toString()}`)
    }

  return (
    <div onClick={addClick} style={{float: 'left'}} className="m-5 shadow">
        <div tabIndex="0" className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
            <div>
                <img alt="Pet" src={pictureUrl || cardDefaultPets} tabIndex="0" className="focus:outline-none w-full h-44" />
            </div>
            <div className="bg-white">
                <div className="flex items-center justify-between px-4 pt-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" tabIndex="0" className="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                        </svg>
                    </div>
                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                        <p tabIndex="0" className="focus:outline-none text-xs text-yellow-700"><b>{isAvailable ? strings.isAvailable : strings.notAvailable}</b></p>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex items-center">
                        <h2 tabIndex="0" className="focus:outline-none text-lg font-semibold">
                            <div resize="true" className='bg-slate-50' style={styles.animatedBorder}>{name}</div>
                        </h2>
                        <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 pl-5">{conditions}</p>
                    </div>
                    <p tabIndex="0" className="focus:outline-none text-sm text-gray-600 mt-2">{description}</p>
                    <div className="flex mt-4">
                        {
                            qualities.map((q,i) => 
                                <div key={i} className='pl-2'>
                                    <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">{q}</p>
                                </div>
                            )
                        }
                    </div>
                    <div className="flex items-center justify-between py-4">
                        <h2 tabIndex="0" className="focus:outline-none text-indigo-700 text-xs font-semibold">{strings.viewed}</h2>
                        <Link to={`/item/${id}`}>
                            <button className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-full">{strings.adopt}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item