import React, { useEffect, useRef } from 'react';
import embed from 'vega-embed';

const First = () => {
  const chartRef = useRef();

  useEffect(() => {
    const spec = {
      $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
      description: 'Scatterplot of Acceleration vs Horsepower',
      data: {
        url: 'https://gist.githubusercontent.com/omarish/5687264/raw/mpg.csv',
        format: { type: 'csv' }
      },
      mark: 'point',
      width: 500, // TEST with fixed size first
      height: 400,
      encoding: {
        x: { field: 'acceleration', type: 'quantitative', title: 'Acceleration' },
        y: { field: 'horsepower', type: 'quantitative', title: 'Horsepower' },
        tooltip: [
          { field: 'name', type: 'nominal' },
          { field: 'horsepower', type: 'quantitative' },
          { field: 'acceleration', type: 'quantitative' }
        ]
      }
    };

    embed(chartRef.current, spec, { actions: false }).catch(err =>
      console.error("Vega Embed Error:", err)
    );
  }, []);

  return (
    <div className="mt-10 w-full">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">📉 Acceleration vs Horsepower</h2>
      <div ref={chartRef} className="rounded-lg shadow bg-white p-4 w-full min-h-[400px]" />
    </div>
  );
};

export default First;
