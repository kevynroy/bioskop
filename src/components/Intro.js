import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SearchBar from "./SearchBar";

const Intro = () => {
  const handleSearch = (searchTerm) => {
    // Implement your search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">NONTON GRATIS</div>
            <div className="title">GAK PAKE KARCIS</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark">Lihat Semua List</Button>
            </div>
            <div className="searchBar mt-4">
              <SearchBar onSearch={handleSearch} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;