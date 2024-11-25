import { Sprout, Droplets, Sun, Wind } from 'lucide-react';

const services = [
  {
    icon: Sprout,
    title: 'Organic Farming',
    description: 'Sustainable and chemical-free farming methods that protect the environment and produce healthy crops.'
  },
  {
    icon: Droplets,
    title: 'Smart Irrigation',
    description: 'Advanced irrigation systems that optimize water usage and ensure efficient crop hydration.'
  },
  {
    icon: Sun,
    title: 'Solar Agriculture',
    description: 'Renewable energy solutions for agricultural operations, reducing carbon footprint.'
  },
  {
    icon: Wind,
    title: 'Crop Protection',
    description: 'Modern techniques to protect crops from pests and diseases while maintaining ecological balance.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
          We provide a full spectrum of agricultural solutions designed to meet the needs of modern farming. From advanced farming techniques to sustainable practices, our services ensure increased productivity, efficiency, and long-term success. Whether you're a small-scale grower or a large farm, we offer tailored support to help you thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}