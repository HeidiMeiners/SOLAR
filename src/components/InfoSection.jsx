import React from "react";

const InfoSection = ({ searchQuery }) => {
  const infoCards = [
    {
      title: "Types of Customers",
      content: [
        "Homeowners: Often combine solar panels with government incentives or tax credits.",
        "Businesses: Enhance their brand image as environmentally sustainable.",
        "Governments and Public Organizations: Deploy large-scale systems on public infrastructure.",
      ],
    },
    {
      title: "Cost Recovery Time",
      content: [
        "On average, users recover their investment in 5 to 7 years, depending on location and system size.",
        "Sunny regions like California and Australia often have shorter payback periods due to high sunlight exposure.",
      ],
    },
    {
      title: "Environmental Impact",
      content: [
        "A typical solar panel system reduces 3-4 tons of CO2 annually, equivalent to planting 100+ trees.",
        "Solar panels also reduce air pollution and dependence on non-renewable energy sources.",
      ],
    },
    {
      title: "Countries with Most Solar Panels",
      content: [
        "China: 392 GW installed (largest globally).",
        "United States: 150 GW installed.",
        "India: Rapidly growing, 70 GW installed.",
        "Germany: Leader in Europe with 66 GW.",
        "Japan: Focuses on rooftop systems, 78 GW.",
      ],
    },
    {
      title: "Cost of Solar Panels",
      content: [
        "The average cost of a residential system is $20,000 for a 6kW system.",
        "Prices range from $15,000 to $25,000, depending on size, location, and installation complexity.",
      ],
    },
    {
      title: "Energy Savings",
      content: [
        "Households save an average of $1,000 to $2,000 annually on electricity bills.",
        "Businesses with solar installations save over $10,000 annually.",
      ],
    },
  ];

  const filteredInfoCards = infoCards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.content.some((text) => text.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div id="info" className="container my-5">
      <h2 className="text-center mb-4">About Solar Panels</h2>
      <div className="row">
        {filteredInfoCards.map((card, index) => (
          <div key={index} className="col-md-4">
            <div
              className="p-3 rounded"
              style={{ backgroundColor: "#d4edda", border: "1px solid #c3e6cb" }}
            >
              <h4>{card.title}</h4>
              {card.content.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;