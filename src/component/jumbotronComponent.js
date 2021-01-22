import React from "react";
import { Jumbotron, Container } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron fluid className="jumbo-custom-color">
        <Container>
          <h1 className="display-4 font-custom"><b>Zee Restaurant</b></h1>
          <p className="lead font-custom">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;