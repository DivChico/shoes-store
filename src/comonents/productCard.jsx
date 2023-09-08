import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function ProductCard({ product, handleCart }) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 150 }}
        image={product.img}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.price}$
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.title} <br />
          {product.brand} , {product.person} , {product.size}
        </Typography>
        {product.cart ? (
          <Button variant="contained" color="error" onClick={handleCart}>
            Remove
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleCart}>
            Add
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default ProductCard;
