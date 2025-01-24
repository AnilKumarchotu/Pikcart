import React, { useState } from "react";
import heartfill from "../Components/Images/heartfill.png";
import heartblank from "../Components/Images/heartblank.png";
import share from "../Components/Images/share.png";
import Itemlist from "../Components/Itemlists.json";

function Itemlists({ product }) {
  const [wishList, setwishList] = useState(false);
  const [addCart, setaddCart] = useState(false);

  const handlewish = () => {
    setwishList((prevWish) => !prevWish);
  };

  const handleaddcart = () => {
    setaddCart((prevcart) => !prevcart);
  };

  const importImage = (imagePath) => {
    try {
      return require(`${imagePath}`);
    } catch (err) {
      console.error("Image not found", err);
      return null;
    }
  };

  return (
    <div
      className="card shadow-sm position-relative"
      style={{
        borderRadius: "25px",
        backgroundColor: "rgba(108, 117, 125, 0.05)",
        height: "460px",
      }}
    >
      <div className="position-absolute top-0 end-0 p-2">
        <button
          className="btn btn-sm me-2"
          title="Add to Wishlist"
          onClick={handlewish}
        >
          <img
            src={wishList ? heartfill : heartblank}
            alt="Not wished"
            style={{ width: "25px" }}
          />
        </button>

        <button className="btn btn-sm" title="Share">
          <img src={share} alt="Share" style={{ width: "25px" }} />
        </button>
      </div>

      <img
        src={importImage(product.image)} // Dynamically import image
        className="card-img-top"
        alt={product.name}
        style={{
          height: "60%",
          objectFit: "cover",
          borderRadius: "25px 25px 0 0",
        }}
      />

      <div className="card-body d-flex flex-column justify-content-end">
        <span
          className="badge bg-orange mb-2"
          style={{
            fontSize: "12px",
            padding: "5px 10px",
            borderRadius: "5px",
            alignSelf: "flex-start",
          }}
        >
          ★ {product.rating}
        </span>

        <h6 className="card-title">{product.name}</h6>

        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="text-black-50">{product.subname}</span>

          <select
            className="form-select form-select-sm"
            style={{
              width: "auto",
              borderRadius: "5px",
              backgroundColor: "rgba(108, 117, 125, 0.05)",
            }}
          >
            {product.compatibility.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <p className="fw-bold mb-2">₹ {product.price}/-</p>

        <div className="d-flex justify-content-between">
          <button
            className="btn btn-secondary btn-sm"
            style={{ flex: "1", borderRadius: "15px", marginRight: "5px" }}
          >
            Bulk
          </button>

          <button
            className={
              addCart ? "btn btn-dark btn-sm" : "btn btn-success btn-sm"
            }
            style={{ flex: "1", borderRadius: "15px" }}
            onClick={handleaddcart}
          >
            {addCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Itemlists;
