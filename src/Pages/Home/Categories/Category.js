import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({cat}) => {
    const {_id,category_name,category_img,category_desc} =cat;
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <img
          src={category_img}
          className="object-cover w-full h-64"
          alt=""
        />
        <div className="p-5 border border-t-0">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              aria-label="Category"
              title="traveling"
            >
             {category_name}
            </a>
           
          </p>
          <a
            href="/"
            aria-label="Category"
            title="Visit the East"
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            {category_name}
          </a>
          <p className="mb-2 text-gray-700">
            {category_desc}
          </p>
          
          <Link to={`/category/${_id}`}>
             <button className='btn bnt-secondary'>Show All Product</button>
          </Link>
        </div>
      </div>

    );
};

export default Category;