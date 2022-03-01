import React from 'react'
import { useParams } from 'react-router-dom';

export const ItemDetail = ({detail}) => {
  let {name, fullDescription, color, size, age, image} = detail;
  const {id} = useParams();

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-2xl title-font text-gray-500 tracking-widest">PET NAME</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{name}</h1>
              <div className="flex mb-4">
                <p className="flex-grow text-blue-500 border-b-2 border-blue-500 py-2 text-lg px-1">Description</p>
              </div>
              <p className="leading-relaxed mb-4">{fullDescription}</p>
              <div className="flex border-t mb-6 border-gray-200 py-2">
                <span className="text-gray-500">URL ID</span>
                <span className="ml-auto text-gray-900">{id}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Color</span>
                <span className="ml-auto text-gray-900">{color}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Size</span>
                <span className="ml-auto text-gray-900">{size}</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Age</span>
                <span className="ml-auto text-gray-900">{age}</span>
              </div>
              <div className="flex">
                <button className="flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Add to my home</button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-auto">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={image || 'https://dummyimage.com/400x400'} />
          </div>
        </div>
      </section>
    </div>
  )
}
