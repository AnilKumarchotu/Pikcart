import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Itemlists from "./Itemlists";
import Itemlist from "./Itemlists.json";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputsearch, setinputsearch] = useState("");

  const itemsPerPage = 25;

  const filteredProducts = Itemlist.filter((item) =>
    item.name.toLowerCase().includes(inputsearch.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (e) => {
    setinputsearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="container my-4">
      <div
        className="bg-light p-3 rounded shadow-sm mb-3 d-flex justify-content-between align-items-center"
        style={{ borderRadius: "10px" }}
      >
        <h4 className="mb-0 text-orange">Product Listing</h4>
      </div>

      <div className="row align-items-center mb-4">
        <div className="col-md-3">
          <input
            type="search"
            placeholder="Search Product"
            className="form-control"
            onChange={handleSearch}
            value={inputsearch}
          />
        </div>

        <div className="col-md-9 d-flex justify-content-end">
          <nav>
            <ul className="pagination mb-0">
              {[1, 2].map((page) => (
                <li
                  key={page}
                  className={`page-item ${
                    currentPage === page ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(page)}
                  style={{ cursor: "pointer" }}
                >
                  <href className="page-link">{page}</href>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="row">
        {paginatedProducts.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <Itemlists product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
