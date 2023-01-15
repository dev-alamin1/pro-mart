import React from "react";
import { Link } from "react-router-dom";

const Category = ({ cat }) => {
  const { _id, category_name, category_img, category_desc } = cat;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={category_img} alt={category_name} className="h-60 w-4/5" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <div className="badge badge-secondary p-2">{category_name}</div>
          </h2>
          <p>{category_desc}</p>
          <div className="card-actions justify-end">
          <Link to={`/category/${_id}`}>
             <button className="btn btn-sm hover:bg-orange-600 hover:text-white">Show All Product</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
