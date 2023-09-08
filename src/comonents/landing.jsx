import React from "react";
import Typography from "@mui/material/Typography";
import landing from "../assets/landing.png";
import Filter from "./filter";

function Landing({
  filterData,
  handleBrand,
  handlePerson,
  handleSize,
  handlePrice,
  handleSubmit,
}) {
  return (
    <>
      <div className="h-4/5 flex items-center justify-items-center	max-md:flex-col  ">
        {/* left */}
        <div>
          <Typography variant="h3" gutterBottom>
            Life Is Better In Running{" "}
            <span style={{ color: "white" }}>Shoes</span>
          </Typography>
          <Typography variant="h4" gutterBottom>
            Shoes change over tine as fashion taste evolve
          </Typography>
          <Filter
            filterData={filterData}
            handleBrand={handleBrand}
            handlePerson={handlePerson}
            handleSize={handleSize}
            handlePrice={handlePrice}
            handleSubmit={handleSubmit}
            title="Shop Now"
            formStyle="flex gap-10 justify-between"
            divStyle="p-4 rounded-md bg-white shadow-xl "
          />
        </div>
        {/* right */}
        <div className="w-2/4 max-md:hidden ">
          <img src={landing} alt="landing img" />
        </div>
      </div>
    </>
  );
}

export default Landing;
