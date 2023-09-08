import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-between  p-4  rounded-md bg-white mb-10 mt-10 shadow-xl">
      <Link to="/">
        <Button
          variant="text"
          sx={{
            color: "black",
          }}
        >
          Shoes store
        </Button>
      </Link>

      <div>
        <ul className="flex items-center justify-between gap-10">
          <li>
            <Link to={"products"}>
              <Button
                variant="text"
                sx={{
                  color: "black",
                }}
              >
                Products
              </Button>
            </Link>
          </li>
        </ul>
      </div>
      <Link to="cart">
        <Button variant="contained">cart</Button>
      </Link>
    </div>
  );
}

export default Navbar;
