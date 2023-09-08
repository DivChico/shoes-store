import React from "react";
import Filter from "./filter";
import ProductCard from "./productCard";
import Grid from "@mui/material/Unstable_Grid2";

function Products({
  filterData,
  handleBrand,
  handlePerson,
  handleSize,
  handlePrice,
  handleSubmit,
  products,
  handleCart,
  handleFav,
}) {
  let newArr = [...products];

  let filterdProducts = newArr.filter((product) => {
    return (
      (filterData.brand === "all"
        ? true
        : filterData.brand === product.brand) &&
      (filterData.person === "all"
        ? true
        : filterData.person === product.person) &&
      (filterData.size === "all" ? true : filterData.size === product.size) &&
      (filterData.price === "all" ? true : filterData.price >= product.price)
    );
  });
  return (
    <>
      <div className="h-4/5	 flex gap-2 max-md:flex-col">
        {/* left */}
        <div className="w-1/4 max-md:w-full h-full max-md:h-fit">
          <Filter
            filterData={filterData}
            handleBrand={handleBrand}
            handlePerson={handlePerson}
            handleSize={handleSize}
            handlePrice={handlePrice}
            handleSubmit={handleSubmit}
            title="filter"
            divStyle=" p-4 rounded-md bg-white py-10"
            formStyle="flex flex-col max-md:flex-row max-md:justify-between h-full  gap-10"
          />
        </div>
        {/* right */}
        <div className="w-3/4 max-md:w-full h-full overflow-y-auto no-scrollbar">
          <Grid container spacing={2}>
            {filterdProducts.map((product) => {
              return (
                <Grid xs={4} key={product.id} id={product.id}>
                  <ProductCard
                    product={product}
                    handleCart={handleCart}
                    handleFav={handleFav}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Products;
