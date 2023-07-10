import React from 'react';
import {useEffect, useState, useContext} from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {BASE_URL} from "../../url";
import {Link} from "react-router-dom";
import { FaClock, FaRegCalendarAlt, FaMapMarker } from 'react-icons/fa';
import Col from 'react-bootstrap/Col';

function DisplayTreks() {
  const [getAllTreks,setAllTreks] = useState(null);
  useEffect(() => {
    fetch(`${BASE_URL}/getAllTreks`)
      .then(response => {
        response.json().then(getAllTreks => {
          console.log("getAllTreks====>", getAllTreks)
          setAllTreks(getAllTreks);
        });
      });
  }, []);

  let trekInfo;
  if(getAllTreks != null) {
    trekInfo = getAllTreks;
  }

  if(trekInfo){
    return (
      <CardGroup>
      {trekInfo.map((trekData, k) => (
        <Col key={k} xs={12} md={3} lg={4}>
        <Card className='cardBody'>
          <Card.Body className="cardBodyNew">
            <Card.Title>{(trekData.trekName)}</Card.Title><hr/>
            <Card.Text className="cardBodyNew">
            <FaClock /> &nbsp; {(trekData.numberOfDays)} Days<br/><br/>
            <FaRegCalendarAlt /> &nbsp; {(trekData.startDate)} to {(trekData.endDate)} <br/><br/>
            <FaMapMarker /> &nbsp; {(trekData.trekLocation)} <hr/>
            <Link to={`/trekDetails/`+trekData._id}><a href="" className="btn-get-started">VIEW DETAILS</a></Link>
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        ))}
      </CardGroup>
    );
  }
}

export default DisplayTreks;