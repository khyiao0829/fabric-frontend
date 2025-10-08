import React from "react";

const products = [
  { id: 1, name: "코튼 트윌", price: "₩8,000", image: "/images/fabric1.jpg" },
  { id: 2, name: "리넨 블렌드", price: "₩10,000", image: "/images/fabric2.jpg" },
  { id: 3, name: "울 텍스처", price: "₩12,000", image: "/images/fabric3.jpg" },
];

export default function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-12 py-6 border-b border-gray-200">
        <div className="text-3xl font-light tracking-widest">ILWOO TEXTURE</div>
        <nav className="space-x-10 text-sm font-light">
          <a href="#" className="hover:text-gray-600">SHOP</a>
          <a href="#" className="hover:text-gray-600">ABOUT</a>
          <a href="#" className="hover:text-gray-600">CONTACT</a>
        </nav>
        <button className="text-sm hover:text-gray-600">LOGIN</button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-light tracking-widest mb-6">NEW SEASON</h1>
        <p className="text-gray-600 text-lg tracking-wide">
          심플함 속의 디테일, 모던한 원단 컬렉션
        </p>
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 pb-20">
        {products.map((p) => (
          <div key={p.id} className="relative group cursor-pointer">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-lg font-light">{p.name}</p>
              <p className="text-sm">{p.price}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
