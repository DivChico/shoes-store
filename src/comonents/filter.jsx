import React from "react";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function Filter({
  filterData,
  handleBrand,
  handlePerson,
  handleSize,
  handlePrice,
  handleSubmit,
  title,
  formStyle,
  divStyle,
}) {
  return (
    <div className={divStyle}>
      <form className={formStyle} onSubmit={handleSubmit}>
        <div>
          {/* brand */}
          <InputLabel
            sx={{
              color: "black",
            }}
            variant="standard"
            htmlFor="select-brand"
          >
            Brand
          </InputLabel>
          <NativeSelect
            sx={{
              color: "black",
            }}
            defaultValue={filterData.brand}
            inputProps={{
              name: "Brand",
              id: "select-brand",
            }}
            onChange={handleBrand}
          >
            <option value={"nike"}>Nike</option>
            <option value={"adidas"}>Adidas</option>
            <option value={"all"}>All</option>
          </NativeSelect>
        </div>
        <div>
          {/* person */}
          <InputLabel
            sx={{
              color: "black",
            }}
            svariant="standard"
            htmlFor="select-person"
          >
            Person
          </InputLabel>
          <NativeSelect
            sx={{
              color: "black",
            }}
            defaultValue={filterData.person}
            inputProps={{
              name: "Person",
              id: "select-person",
            }}
            onChange={handlePerson}
          >
            <option value={"man"}>Man</option>
            <option value={"weman"}>Weman</option>
            <option value={"all"}>All</option>
          </NativeSelect>
        </div>
        <div>
          {/* size */}
          <InputLabel
            sx={{
              color: "black",
            }}
            variant="standard"
            htmlFor="select-size"
          >
            Size
          </InputLabel>
          <NativeSelect
            sx={{
              color: "black",
            }}
            defaultValue={filterData.size}
            inputProps={{
              name: "Size",
              id: "select-size",
            }}
            onChange={handleSize}
          >
            <option value={"sm"}>Small</option>
            <option value={"md"}>Medium</option>
            <option value={"lg"}>Large</option>
            <option value={"all"}>All</option>
          </NativeSelect>
        </div>
        <div>
          {/* price */}
          <InputLabel
            sx={{
              color: "black",
            }}
            variant="standard"
            htmlFor="select-price"
          >
            Price
          </InputLabel>
          <NativeSelect
            sx={{
              color: "black",
            }}
            autoWidth
            defaultValue={filterData.price}
            inputProps={{
              name: "Price",
              id: "select-price",
            }}
            onChange={handlePrice}
          >
            <option value={100}>Less than 100$</option>
            <option value={200}>Less than 200$</option>
            <option value={300}>Less than 300$</option>
            <option value={"all"}>All</option>
          </NativeSelect>
        </div>
        <Link to={"/products"}>
          <Button variant="contained" type="submit">
            {title}
          </Button>
        </Link>

        {/* <Button variant="contained" type="submit">
          {title}
        </Button> */}
      </form>
    </div>
  );
}

export default Filter;
