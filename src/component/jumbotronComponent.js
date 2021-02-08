import React from "react";
import { Jumbotron, Container } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <React.Fragment>
      <Jumbotron fluid className="jumbo-custom">
        <Container>
          <h1 className="display-4 font-custom jumbo-header"><b>Zee Restaurant</b></h1>
          <p className="lead font-custom">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </React.Fragment>
  );
};

export default Jumbo;