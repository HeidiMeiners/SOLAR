import React from "react";

const InfoSection = () => (
  <div id="info" className="container my-5">
    <h2 className="text-center mb-4">About Solar Panels</h2>
    <div className="row">
      {/* Card 1: Types of Customers */}
      <div className="col-md-4">
        <div
          className="p-3 rounded"
          style={{ backgroundColor: "#d4edda", border: "1px solid #c3e6cb" }}
        >
          <h4>Types of Customers</h4>
          <p>
            <strong>Homeowners:</strong> Often combine solar panels with government incentives or tax credits.
          </p>
          <p>
            <strong>Businesses:</strong> Enhance their brand image as environmentally sustainable.
          </p>
          <p>
            <strong>Governments and Public Organizations:</strong> Deploy large-scale systems on public infrastructure.
          </p>
        </div>
      </div>

      {/* Card 2: Cost Recovery Time */}
      <div className="col-md-4">
        <div
          className="p-3 rounded"
          style={{ backgroundColor: "#d4edda", border: "1px solid #c3e6cb" }}
        >
          <h4>Cost Recovery Time</h4>
          <p>
            On average, users recover their investment in <strong>5 to 7 years</strong>, depending on location and system size.
          </p>
          <p>
            Sunny regions like California and Australia often have shorter payback periods due to high sunlight exposure.
          </p>
        </div>
      </div>

      {/* Card 3: Environmental Impact */}
      <div className="col-md-4">
        <div
          className="p-3 rounded"
          style={{ backgroundColor: "#d4edda", border: "1px solid #c3e6cb" }}
        >
          <h4>Environmental Impact</h4>
          <p>
            A typical solar panel system reduces <strong>3-4 tons of CO2 annually</strong>, equivalent to planting 100+ trees.
          </p>
          <p>
            Solar panels also reduce air pollution and dependence on non-renewable energy sources.
          </p>
        </div>
      </div>
    </div>

    <div className="row mt-4">
      {/* Card 4: Countries with Most Solar Panels */}
      <div className="col-md-4">
        <div
          className="p-3 rounded"
          style={{ backgroundColor: "#d4edda", border: "1px solid #c3e6cb" }}
        >
          <h4>Countries with Most Solar Panels</h4>
          <ul>
            <li><strong>China:</strong> 392 GW installed (largest globally).</li>
            <li><strong>United States:</strong> 150 GW installed.</li>
            <li><strong>India:</strong> Rapidly growing, 70 GW installed.</li>
            <li><strong>Germany:</strong> Leader in Europe with 66 GW.</li>
            <li><strong>Japan:</strong> Focuses on rooftop systems, 78 GW.</li>
          </ul>
        </div>
      </div>

      {/* Card 5: Cost of Solar Panels */}
      <div className="col-md-4">
        <div
          className="p-3 rounded"
          style={{ backgroundColor: "#d4edda", border: "1px solid #c3e6cb" }}
        >
          <h4>Cost of Solar Panels</h4>
          <p>
            The average cost of a residential system is <strong>$20,000</strong> for a 6kW system.
          </p>
          <p>
            Prices range from <strong>$15,000 to $25,000</strong>, depending on size, location, and installation complexity.
          </p>
        </div>
      </div>

      {/* Card 6: Energy Savings */}
      <div className="col-md-4">
        <div
          className="p-3 rounded"
          style={{ backgroundColor: "#d4edda", border: "1px solid #c3e6cb" }}
        >
          <h4>Energy Savings</h4>
          <p>
            Households save an average of <strong>$1,000 to $2,000 annually</strong> on electricity bills.
          </p>
          <p>
            Businesses with solar installations save over <strong>$10,000 annually</strong>.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default InfoSection;
