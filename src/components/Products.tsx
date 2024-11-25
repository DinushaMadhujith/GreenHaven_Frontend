const products = [
  {
    name: 'Organic Wheat',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80',
    description: 'Premium quality wheat grown using organic farming methods.'
  },
  {
    name: 'Fresh Vegetables',
    image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80',
    description: 'Locally grown, fresh vegetables from our sustainable farms.'
  },
  {
    name: 'Fruits',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80',
    description: 'Seasonal fruits grown with care and modern farming techniques.'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Products</h2>
          <p className="mt-4 text-lg text-gray-600">
          We offer you a wide range of high-quality agricultural products. From fresh produce to essential agricultural tools, we ensure that every item meets the highest standards of quality and freshness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-gray-200">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}