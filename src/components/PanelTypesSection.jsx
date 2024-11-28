import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const panelTypes = [
  {
    type: "Monocrystalline",
    description: "High efficiency and sleek design. Ideal for limited spaces.",
    image: "/cristalino.jpg",
    recommendedFor: "Residential areas with limited roof space.",
  },
  {
    type: "Polycrystalline",
    description: "Moderate efficiency and affordable. Best for large setups.",
    image: "/poly.webp",
    recommendedFor: "Commercial and large residential installations.",
  },
  {
    type: "Thin Film",
    description: "Lightweight and flexible, suitable for unconventional setups.",
    image: "/OIP.jpg",
    recommendedFor: "Portable or off-grid solutions.",
  },
];

const PanelTypesSection = ({ searchQuery }) => {
  const [show, setShow] = useState(false);
  const [selectedPanel, setSelectedPanel] = useState(null);

  const handleShow = (panel) => {
    setSelectedPanel(panel);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedPanel(null);
  };

  const filteredPanels = panelTypes.filter(
    (panel) =>
      panel.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      panel.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="panel-types" className="container my-5">
      <h2 className="text-center mb-4">Types of Solar Panels</h2>
      <div className="row">
        {filteredPanels.map((panel, index) => (
          <div key={index} className="col-md-4">
            <div className="card shadow-sm">
              <img
                src={panel.image}
                className="card-img-top"
                alt={panel.type}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{panel.type}</h5>
                <p className="card-text">{panel.description}</p>
                <Button variant="primary" onClick={() => handleShow(panel)}>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={show} onHide={handleClose} centered>
        {selectedPanel && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedPanel.type}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{selectedPanel.description}</p>
              <p><strong>Recommended for:</strong> {selectedPanel.recommendedFor}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default PanelTypesSection;