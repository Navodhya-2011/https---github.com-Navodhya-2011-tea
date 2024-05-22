import React from 'react';
import GaugeChart from 'react-gauge-chart';
import './GaugeChartComponent.css'; // Import the CSS file

const GaugeChartComponent = ({ value }) => {
  return (
    <div className="gauge-container">
      <GaugeChart 
        id="gauge-chart"
        nrOfLevels={20}
        percent={value / 100}
        colors={['#FF5F6D', '#FFC371', '#00C851']}
        arcWidth={0.3}
        textColor="#000000"
        needleColor="#6C7674"
        needleBaseColor="#fff"
        hideText
      />
      <div className="gauge-value">
        {value}
      </div>
    </div>
  );
};

export default GaugeChartComponent;
