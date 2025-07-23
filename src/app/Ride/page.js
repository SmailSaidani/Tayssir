"use client";

import { useState } from 'react';
import { MapPin, Navigation, Car, UtensilsCrossed, ShoppingBag, Users, Clock, Shield, Star } from 'lucide-react';
import { Poppins } from "next/font/google";

import {  Smartphone, CheckCircle } from 'lucide-react';



const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

const services = [
  {
    id: 'ride',
    title: 'Yassir Ride',
    subtitle: 'Take a ride with us!',
    description: 'Fast, safe, and reliable transportation at your fingertips. Book your ride in seconds.',
    image: 'https://images.pexels.com/photos/9878897/pexels-photo-9878897.jpeg',
    icon: Car,
    stats: [
      { value: '1M+', label: 'Happy Riders' },
      { value: '50K+', label: 'Trusted Drivers' },
      { value: '100+', label: 'Cities' },
      { value: '24/7', label: 'Support' }
    ],
    features: ['Live tracking', 'Safe rides', 'Quick booking']
  },
  {
    id: 'food',
    title: 'Yassir Food',
    subtitle: 'Delicious meals delivered!',
    description: 'Order from your favorite restaurants and get fresh, hot meals delivered to your doorstep.',
    image: 'https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg',
    icon: UtensilsCrossed,
    color: 'from-red-500 to-red-400',
    stats: [
      { value: '500K+', label: 'Food Orders' },
      { value: '10K+', label: 'Restaurants' },
      { value: '30min', label: 'Avg Delivery' },
      { value: '4.8★', label: 'Rating' }
    ],
    features: ['Fresh ingredients', 'Fast delivery', 'Wide selection']
  },
  {
    id: 'grocery',
    title: 'Yassir Grocery',
    subtitle: 'Fresh groceries at your door!',
    description: 'Shop for fresh groceries, household essentials, and daily needs with same-day delivery.',
    image: 'https://images.pexels.com/photos/7843966/pexels-photo-7843966.jpeg',
    icon: ShoppingBag,
    color: 'from-red-700 to-red-600',
    stats: [
      { value: '200K+', label: 'Products' },
      { value: '5K+', label: 'Stores' },
      { value: '2hrs', label: 'Quick Delivery' },
      { value: '99%', label: 'Fresh Quality' }
    ],
    features: ['Fresh produce', 'Same-day delivery', 'Best prices']
  }
];

export default function Home() {
  const [activeService, setActiveService] = useState(services[0]);
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');

  const handleBookRide = () => {
    if (departure && destination) {
      alert(`Booking ${activeService.title.toLowerCase()} from ${departure} to ${destination}`);
    } else {
      alert('Please fill in both departure and destination');
    }
  };

  const getInputPlaceholders = () => {
    switch (activeService.id) {
      case 'food':
        return {
          departure: 'Your delivery address',
          destination: 'Restaurant or cuisine type'
        };
      case 'grocery':
        return {
          departure: 'Your delivery address',
          destination: 'Store or product category'
        };
      case 'business':
        return {
          departure: 'Pickup location',
          destination: 'Business destination'
        };
      default:
        return {
          departure: 'Select your pick-up location',
          destination: 'Select your destination'
        };
    }
  };

  const placeholders = getInputPlaceholders();

  return (

    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 relative overflow-hidden ${poppins.className}`}>
      {/* Animated Grid Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `
              linear-gradient(rgba(198, 40, 40, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(198, 40, 40, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}
        />
      </div>

      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0l100 100M0 20l100 120M0 40l100 140M0 60l100 160M0 80l100 180M-20 0l100 120M-40 0l100 140M-60 0l100 160M-80 0l100 180' stroke='%23C62828' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-red-400/20 rounded-full animate-spin-slow" />
        <div className="absolute top-40 right-20 w-24 h-24 border border-red-300/20 rotate-45 animate-pulse" />
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-red-500/10 rounded-full animate-bounce" />
        <div className="absolute bottom-20 right-40 w-20 h-20 border border-red-400/20 rotate-12 animate-pulse" />
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <activeService.icon className="w-8 h-8 text-red-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
            </div>
            <h1 className="text-2xl font-bold text-white">Tayssir</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Column - Navigation & Form */}
            <div className="lg:col-span-7 space-y-8">
              {/* Service Navigation */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(service)}
                      className={`p-4 rounded-2xl border transition-all duration-300 transform hover:scale-105 ${
                        activeService.id === service.id
                          ? 'bg-red-600/20 border-red-400/50 shadow-lg shadow-red-500/25'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-red-400/30'
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <IconComponent className={`w-6 h-6 ${
                          activeService.id === service.id ? 'text-red-400' : 'text-gray-400'
                        }`} />
                        <span className={`text-sm font-medium ${
                          activeService.id === service.id ? 'text-white' : 'text-gray-300'
                        }`}>
                          {service.title.split(' ')[1]}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Content */}
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  {activeService.subtitle.split(' ').slice(0, -2).join(' ')}{' '}
                  <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
                    {activeService.subtitle.split(' ').slice(-2).join(' ')}
                  </span>
                </h2>
                <p className="text-lg text-white max-w-md">
                  {activeService.description}
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-3">
                {activeService.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                    <span className="text-sm text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Form */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="departure" className="text-white font-medium">
                      {activeService.id === 'ride' ? 'Departure' : 'From'}
                    </label>
                    <div className="relative group">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10 group-focus-within:text-red-400 transition-colors" />
                      <input
                        id="departure"
                        type="text"
                        placeholder={placeholders.departure}
                        value={departure}
                        onChange={(e) => setDeparture(e.target.value)}
                        className="w-full pl-12 pr-4 h-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder:text-gray-400 focus:bg-white/10 focus:border-red-400/50 focus:outline-none focus:ring-2 focus:ring-red-400/30 transition-all duration-300 hover:bg-white/10"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/10 to-red-300/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="destination" className="text-white font-medium">
                      {activeService.id === 'ride' ? 'Destination' : 'To'}
                    </label>
                    <div className="relative group">
                      <Navigation className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10 group-focus-within:text-red-400 transition-colors" />
                      <input
                        id="destination"
                        type="text"
                        placeholder={placeholders.destination}
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full pl-12 pr-4 h-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder:text-gray-400 focus:bg-white/10 focus:border-red-400/50 focus:outline-none focus:ring-2 focus:ring-red-400/30 transition-all duration-300 hover:bg-white/10"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/10 to-red-300/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleBookRide}
                  className={`relative w-full h-14 bg-gradient-to-r ${activeService.color} hover:shadow-2xl hover:shadow-red-500/25 text-white font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus:ring-4 focus:ring-red-400/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden group`}
                >
                  <span className="relative z-10">
                    {activeService.id === 'ride' ? 'Book a ride' : 
                     activeService.id === 'food' ? 'Order now' :
                     activeService.id === 'grocery' ? 'Shop now' : 'Get started'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>

            {/* Right Column - Dynamic Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 group">
                <img
                  src={activeService.image}
                  alt={`${activeService.title} service`}
                  className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-white font-medium">
                          {activeService.id === 'ride' ? 'Live tracking available' :
                           activeService.id === 'food' ? 'Real-time order tracking' :
                           activeService.id === 'grocery' ? 'Fresh quality guaranteed' :
                           'Business solutions ready'}
                        </span>
                      </div>
                      <activeService.icon className="w-5 h-5 text-red-400" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-red-500/20 to-red-300/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-red-600/20 to-red-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
              
              {/* Decorative Elements */}
              <div className="absolute top-10 -right-4 w-8 h-8 border-2 border-red-400/30 rounded-full animate-spin-slow" />
              <div className="absolute bottom-20 -left-4 w-6 h-6 bg-red-400/30 rounded-full animate-bounce" />
            </div>
          </div>
        </div>












        





      </main>
  <div className="min-h-screen }">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-12">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                How to order a ride
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Download the app and you ll find it out - ordering a ride has never been easier.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start space-x-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Open the app</h3>
                  <p className="text-gray-300">Open the app and select your destination.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Set your locations</h3>
                  <p className="text-gray-300">Tell us where you are and where you want to go, whether it s by typing in an address or choosing a spot on the map!</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Select your type of ride</h3>
                  <p className="text-gray-300">You can choose out of many types of rides which one fits your needs the most.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start space-x-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-600 to-red-600 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Enjoy your ride!</h3>
                  <p className="text-gray-300">Relax while we take you to your destination.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-full blur-3xl scale-150"></div>
              
              {/* Main Illustration Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
                {/* Person Illustration */}
                <div className="flex flex-col items-center space-y-8">
                  {/* Success/Simple Gesture */}
                  <div className="relative">
                    {/* Person with raised hands */}
                    <img src='https://i.postimg.cc/KYgpbsnj/Adobe-Express-file-1.png' />
                  </div>
                  
                  {/* Text below illustration */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-3">It s that simple!</h3>
                    <p className="text-gray-300 text-lg max-w-xs">
                      Download the app and you ll find it out - ordering a ride has never been easier.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-900 to-red-500 rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
              <p className="text-xl text-white/90 mb-8">Download our app and experience the simplicity yourself!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                  <Smartphone className="h-5 w-5" />
                  <span>Download for iOS</span>
                </button>
                <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                  <Smartphone className="h-5 w-5" />
                  <span>Download for Android</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
      {/* Bottom Stats - Dynamic */}
      <footer className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {activeService.stats.map((stat, index) => (
                <div key={index} className="space-y-2 group cursor-pointer">
                  <div className={`text-3xl font-bold bg-gradient-to-r text-white bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-white">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}