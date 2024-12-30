import React from 'react';

interface ProductListProps {
  title: string;
  data: { name: string }[]; // Adjust the type according to your data structure
}

const ProductList: React.FC<ProductListProps> = ({ title, data }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {data.map((product, index) => (
          <li key={index}>{product.name}</li> // Adjust according to your data structure
        ))}
      </ul>
    </div>
  );
};

export default ProductList;