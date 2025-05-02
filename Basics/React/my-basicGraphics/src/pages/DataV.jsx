import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/anztrax/7286f7ac6e684a7c79d25d4a91b5f5a7/raw/cssNamedColors.csv';

const DataV = () => {
  const [dataInfo, setDataInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(csvUrl);
      const text = await response.text();
      const data = d3.csvParse(text);

      setDataInfo({
        sizeKb: (text.length / 1024).toFixed(2),
        rows: data.length,
        columns: data.columns.length,
      });
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>CSS Named Colors Dataset Info</h2>
      {dataInfo ? (
        <ul>
          <li>Size: {dataInfo.sizeKb} KB</li>
          <li>Rows: {dataInfo.rows}</li>
          <li>Columns: {dataInfo.columns}</li>
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default DataV;
