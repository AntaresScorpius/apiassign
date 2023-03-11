import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import {Card as Car, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
// import {FaRegAddressCard} from 'react-icons/fa';

import './views/card.css';

function Card() {
  return (
    <>
      <Car>
        <Car.Body>
          <div className="bg-light rounded p-2">
            <Row>
              <Col>
                <p className="small mb-0">Electricity</p>
              </Col>
              <Col>
                <p className="small mb-0 ms-3">Solar</p>
              </Col>
            </Row>
          </div>
          {/* <div className="d-flex justify-content-center mt-3">
            <FaRegAddressCard size={50} />
          </div> */}
          <div className="mt-3 text-center">
            <ListGroup className="mt-3" style={{border: 'none'}}>
              <ListGroupItem className="small rounded-0 border-0 py-1">
                12 - month Energy
              </ListGroupItem>
              <ListGroupItem className="small rounded-0 border-0 py-1">
                No Exit fees
              </ListGroupItem>
              <ListGroupItem className="small rounded-0 border-0 py-1">
                $100 credit
              </ListGroupItem>
            </ListGroup>
          </div>
          <div className="text-center ">
            <button>View Details</button>
          </div>
          <hr />
          <div>
            <div className="d-flex justify-content-between">
              <span>Price: $10.00</span>
            </div>
          </div>
          <div className="small mt-3 text-muted">
            By purchasing this item, you agree to the terms and conditions.
          </div>
        </Car.Body>
      </Car>
    </>
  );
}

export default Card;
