import React from 'react';
import {useEffect, useState, useContext} from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {BASE_URL} from "../../url";
import {Link} from "react-router-dom";
import { FaClock, FaRegCalendarAlt, FaMapMarker,FaCalendarTimes } from 'react-icons/fa';
import Col from 'react-bootstrap/Col';

function ViewTreksPage() {
  const [getAllTreks,setAllTreks] = useState(null);
  
  useEffect(() => {
    fetch(`${BASE_URL}/viewAllTreks`)
      .then(response => {
        response.json().then(getAllTreks => {
          setAllTreks(getAllTreks);
        });
      });
  }, []);

  let trekInfo;
  if(getAllTreks != null) {
    trekInfo = getAllTreks;
  }

  const deleteTrek = (trekId) => {
    if (window.confirm('Are you sure you want to delete this Trek?')) {
      fetch(`${BASE_URL}/deleteTrek/${trekId}`, {
        method: 'DELETE'
      })
      .then(response => {
        if (response.ok) {
          alert('Trek deleted successfully');
          window.location.reload();
        } else {
          alert('Failed to delete the Trek');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  };

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
            <FaRegCalendarAlt /> &nbsp; {(trekData.startDate)} To {(trekData.endDate)} <br/><br/>
            <FaMapMarker /> &nbsp; {(trekData.trekLocation)} <br/><br/>
            <FaCalendarTimes /> &nbsp; {(trekData.expDate)} <br/><hr/>
            <div className='side-by-side'>
              <Link to={`/editTrek/`+trekData._id}><a href="" className="input3">EDIT</a></Link>
              <div onClick={() => deleteTrek(trekData._id)}><a href="" className="input4">DELETE</a></div>
            </div>
            <br/>
            <Link to={`/viewAllParticipants/`+trekData.trekName} ><a href="" className="btn-get-started">VIEW TREKKERS</a></Link>
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      ))}
      </CardGroup>
    )
  }
}
export default ViewTreksPage