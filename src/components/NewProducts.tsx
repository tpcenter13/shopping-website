import React from 'react';

const NewProducts = () => {
  const products = [
    {
      img: "/image1.jpg",
      title: "Casual T-Shirt",
      desc: "Comfortable and breathable cotton shirt.",
      category: "Apparel",
      rating: 4.5,
      price: 20,
    },
    {
      img: "/product2.jpg",
      title: "Leather Handbag",
      desc: "Stylish and durable leather bag for all occasions.",
      category: "Bags",
      rating: 4.7,
      price: 150,
    },
    {
      img: "product3.png",
      title: "Running Shoes",
      desc: "Lightweight shoes for all your running needs.",
      category: "Shoes",
      rating: 4.6,
      price: 80,
    },
    {
      img: "product4.jpg",
      title: "Denim Jacket",
      desc: "Classic denim jacket for a casual look.",
      category: "Apparel",
      rating: 4.4,
      price: 50,
    },
    {
      img: "product5.jpg",
      title: "Backpack",
      desc: "Spacious and durable backpack for everyday use.",
      category: "Bags",
      rating: 4.5,
      price: 60,
    },
    {
      img: "product6.jpg",
      title: "Hiking Boots",
      desc: "Rugged and comfortable boots for outdoor adventures.",
      category: "Shoes",
      rating: 4.8,
      price: 120,
    },
    {
      img: "product7.jpg",
      title: "Graphic Hoodie",
      desc: "Trendy hoodie with a unique graphic design.",
      category: "Apparel",
      rating: 4.3,
      price: 45,
    },
    {
      img: "product8.jpg",
      title: "Tote Bag",
      desc: "Eco-friendly tote bag for your daily essentials.",
      category: "Bags",
      rating: 4.2,
      price: 25,
    },
    {
      img: "product9.jpg",
      title: "Formal Shoes",
      desc: "Elegant and polished shoes for formal occasions.",
      category: "Shoes",
      rating: 4.6,
      price: 95,
    },
    {
      img: "product10.jpg",
      title: "Polo Shirt",
      desc: "Smart-casual polo shirt for any event.",
      category: "Apparel",
      rating: 4.4,
      price: 30,
    },
    {
      img: "product11.jpg",
      title: "Crossbody Bag",
      desc: "Compact and versatile crossbody bag.",
      category: "Bags",
      rating: 4.5,
      price: 40,
    },
    {
      img: "product12.jpg",
      title: "Casual Sneakers",
      desc: "Comfortable sneakers for everyday wear.",
      category: "Shoes",
      rating: 4.7,
      price: 70,
    },
  ];

  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-x-20 gap-y-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-lg max-w-xs"
            >
              {/* Adjusted Image with consistent size and aspect ratio */}
              <div className="relative w-full h-96 mb-4">
                <img
                  src={product.img}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="font-medium text-lg">{product.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{product.desc}</p>
              <p className="text-yellow-500 mb-2">Rating: {product.rating}⭐</p>
              <p className="font-bold text-lg text-accent">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
