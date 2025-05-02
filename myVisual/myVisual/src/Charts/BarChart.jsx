import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 700;
    const height = 400;
    const margin = { top: 20, right: 40, bottom: 30, left: 150 };

    svg.selectAll('*').remove();

    d3.csv(
      'https://gist.githubusercontent.com/uKiJo/e07b7e0fc030a7dc893c8f6d9cfe74a5/raw/2021pop.csv',
      d3.autoType
    ).then((data) => {
      data.forEach((d) => {
        const raw = d['2021_last_updated'];
        d.population = typeof raw === 'string' ? +raw.replace(/,/g, '') : raw;
      });

      // Take top 6
      const top6 = data.slice(0, 6);

      // Scales
      const y = d3
        .scaleBand()
        .domain(top6.map((d) => d.country))
        .range([margin.top, height - margin.bottom])
        .padding(0.2);

      const x = d3
        .scaleLinear()
        .domain([0, d3.max(top6, (d) => d.population)])
        .nice()
        .range([margin.left, width - margin.right]);

      // X Axis
      svg
        .append('g')
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(x).ticks(6).tickFormat(d3.format(".2s")));

      // Y Axis
      svg
        .append('g')
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(y));

      // Bars
      svg
        .selectAll('.bar')
        .data(top6)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('y', (d) => y(d.country))
        .attr('x', x(0))
        .attr('width', (d) => x(d.population) - x(0))
        .attr('height', y.bandwidth())
        .attr('fill', '#fb923c');

      // Title
      svg
        .append('text')
        .attr('x', width / 2)
        .attr('y', margin.top - 8)
        .attr('text-anchor', 'middle')
        .attr('font-size', '18px')
        .attr('font-weight', 'bold')
        .text('Top 6 Countries by 2021 Population');
    });
  }, []);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">📊 Top 6 Populated Countries (2021)</h2>
      <svg ref={svgRef} width={700} height={400} className="bg-white shadow rounded-lg" />
    </div>
  );
};

export default BarChart;
