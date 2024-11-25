import { Target, Compass, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About GreenHaven</h2>
          <p className="mt-4 text-lg text-gray-600">
            Pioneering sustainable agriculture for future generations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80"
              alt="Sustainable farming"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              At GreenHaven, we believe in harmonizing modern agricultural innovation with time-tested farming wisdom. 
              Founded with a passion for sustainable agriculture, we've been at the forefront of developing eco-friendly 
              farming solutions that benefit both farmers and the environment.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to organic practices, technological innovation, and community support has made us a trusted 
              partner in the agricultural sector, serving farmers and communities across the region.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To revolutionize agriculture through sustainable practices, ensuring food security 
              while preserving our planet for future generations.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Compass className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide innovative, eco-friendly agricultural solutions while supporting farmers 
              with sustainable practices and modern technology.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600">
              Sustainability, innovation, integrity, and community empowerment guide everything 
              we do in our pursuit of agricultural excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}