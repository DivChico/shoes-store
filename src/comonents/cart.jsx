import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Cart({ products, handleCart, handleQuantity }) {
  let newArr = [...products];

  let filterdProducts = newArr.filter((product) => {
    return product.cart === true;
  });
  let totalBill = 0;
  filterdProducts.map((pro) => {
    let productBill = pro.price * pro.quantity;
    totalBill = totalBill + productBill;
    return pro;
  });

  return (
    <>
      <div className="flex gap-2  h-3/4 ">
        {/* left */}

        <div className="w-3/4  no-scrollbar  overflow-y-auto">
          <Grid container spacing={2}>
            {filterdProducts.map((product) => {
              return (
                <Grid xs={12} key={product.id} id={product.id}>
                  <div className=" flex  justify-between w-full  bg-white rounded-md p-4  ">
                    <div className="flex gap-2">
                      <img
                        src={product.img}
                        className="h-20"
                        alt={product.title}
                      />
                      <div className="ml-2">
                        <h3 className="mb-2">{product.title}</h3>
                        <h3 className="mb-2">Size: {product.size}</h3>
                        {product.cart ? (
                          <Button
                            variant="contained"
                            color="error"
                            onClick={handleCart}
                          >
                            Remove
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleCart}
                          >
                            Add
                          </Button>
                        )}
                      </div>
                    </div>
                    <div>
                      <TextField
                        id="outlined-basic"
                        label="Quantity"
                        variant="outlined"
                        value={product.quantity}
                        type="number"
                        onChange={handleQuantity}
                      />

                      <h3>Price : {product.price}$</h3>
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
        {/* right */}
        <div className="w-1/4 bg-white rounded-md p-4">
          <div className="flex justify-between">
            <h3>Total Amount</h3>
            <h3>{totalBill}$</h3>
          </div>

          <Button variant="contained" fullWidth>
            checkout
          </Button>
        </div>
      </div>
    </>
  );
}

export default Cart;
