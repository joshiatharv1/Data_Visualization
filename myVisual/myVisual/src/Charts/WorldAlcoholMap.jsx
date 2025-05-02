import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { feature } from 'topojson-client';

const WorldAlcoholMap = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 960;
    const height = 500;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('background', '#f9f9f9');

    const projection = d3.geoNaturalEarth1()
      .scale(150)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    // Create tooltip once
    const tooltip = d3.select('body')
      .append('div')
      .attr('class', 'tooltip')
      .style('position', 'absolute')
      .style('text-align', 'left')
      .style('background', 'black')
      .style('padding', '8px')
      .style('border', '1px solid #ccc')
      .style('border-radius', '4px')
      .style('pointer-events', 'none')
      .style('opacity', 0);

    Promise.all([
      d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'),
      d3.csv('https://gist.githubusercontent.com/gnawlirpa/c930d0236cf2b9a0b19e/raw/consumption.csv')
    ]).then(([worldData, alcoholData]) => {
      const countries = feature(worldData, worldData.objects.countries).features;

      // Create map from country to total consumption
      const consumptionMap = {};
      alcoholData.forEach(d => {
        const trimmedCountry = d.country.trim();
        consumptionMap[trimmedCountry] = +d.total;
      });

      // Color scale
      const colorScale = d3.scaleSequential()
        .domain([0, d3.max(alcoholData, d => +d.total)])
        .interpolator(d3.interpolateYlOrRd);

      // Draw map
      svg.selectAll('path')
        .data(countries)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('fill', d => {
          const name = d.properties.name;
          const value = consumptionMap[name];
          return value ? colorScale(value) : '#eee';
        })
        .on('mouseover', function (event, d) {
          const name = d.properties.name;
          const value = consumptionMap[name];
          tooltip.transition().duration(200).style('opacity', 0.9);
          tooltip.html(
            `<strong>${name}</strong><br/>Alcohol: ${value ? value + ' L/year' : 'No data'}`
          )
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 28) + 'px');
          d3.select(this).attr('stroke', '#333').attr('stroke-width', 1.2);
        })
        .on('mousemove', function (event) {
          tooltip
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 28) + 'px');
        })
        .on('mouseout', function () {
          tooltip.transition().duration(300).style('opacity', 0);
          d3.select(this).attr('stroke', null);
        });
    });
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">🌍 This is the total alcohol consumption in liters per capita for that country</h2>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default WorldAlcoholMap;
