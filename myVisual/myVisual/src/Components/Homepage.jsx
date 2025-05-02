import React from 'react';
import First from '../Charts/First';
import BarChart from '../Charts/BarChart';
import WorldAlcoholMap from '../Charts/WorldAlcoholMap';
const dashboards = [
  {
    id: 1,
    title: 'Performance Scatterplot',
    description: 'Acceleration vs Horsepower for various cars using Vega-Lite-Api.',
    isVegaChart: true,
  },
  // Add other dashboard entries here
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-500 p-6">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">📊 My Dashboards</h1>
        <p className="text-gray-600">Explore the interactive dashboards I've created using D3 and Vega.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboards.map((dashboard) => (
          <div key={dashboard.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{dashboard.title}</h2>
            <p className="text-gray-600 mb-4">{dashboard.description}</p>
            {dashboard.isVegaChart ? (
             <>
             <First />
             <BarChart />
             <WorldAlcoholMap />
           </>
            ) : (
              <button className="mt-4 inline-block px-4 py-2 text-sm bg-orange-500 text-white rounded hover:bg-orange-600">
                View Dashboard
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
