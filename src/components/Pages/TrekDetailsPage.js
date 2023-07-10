import React from 'react';
import {useEffect, useState} from "react";
import {Link,useParams} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BASE_URL} from "../../url";
import { FaClock, FaRegCalendarAlt, FaMapMarker, FaAngleRight, FaStar } from 'react-icons/fa';

function TrekPage() {
  const [trekDetails,setTrekDetails] = useState(null);
  const {id} = useParams();
  
  useEffect(() => {
    fetch(`${BASE_URL}/trekDetails/${id}`)
      .then(response => {
        response.json().then(trekDetails => {
          setTrekDetails(trekDetails);
        });
      });
  }, []);
  
  let trekInfo;
  if(trekDetails != null) {
    trekInfo = trekDetails;
  }

  if(trekInfo){
    return (
      <>
      <Card className='cardBody'>
        <Card.Header className="cardBodyNew"><h3>TREK DETAILS</h3></Card.Header>
        <Card.Body className="cardBodyNew">
          <Card.Title>{(trekInfo.trekName.toUpperCase())}</Card.Title><br/>
          <FaClock /> &nbsp; {(trekInfo.numberOfDays)} Days &nbsp;&nbsp;
          <FaRegCalendarAlt /> &nbsp; {(trekInfo.startDate)} TO {(trekInfo.endDate)} &nbsp;&nbsp;
          <FaMapMarker /> &nbsp; {(trekInfo.trekLocation)} <br/>
          <hr/>
          <Card.Text className="cardBodyNew">{(trekInfo.trekDescription)}</Card.Text>
          <hr/>
          <Card.Text className="cardBodyNew">
          1. Difficulty level : {(trekInfo.difficultyLevel)}<br/>
          </Card.Text>
          <Card.Text className="cardBodyNew">
          2. Trek Length : {(trekInfo.trekLength)} Kms in total (Two way)<br/>
          </Card.Text>
          <Card.Text className="cardBodyNew">
          3. Altitude : {(trekInfo.altitude)} Meter<br/>
          </Card.Text>
          <Card.Text className="cardBodyNew">
          4. Minimum Age : {(trekInfo.minAge)} Years <br/>
          </Card.Text>
          <Card.Text className="cardBodyNew">
          5. Price : Rs. {(trekInfo.trekPrice)} per/head <br/>
          </Card.Text>
          <hr/>
          <Card.Title>Inclusions/Exclusions</Card.Title>
          <div className='side-by-side'>
            <div>
            <Card.Header className="cardBodyNew">What's Included</Card.Header>
            <Card.Text className="cardBodyNew">
            <FaAngleRight/> Forest Permission Charges<br/>
            <FaAngleRight/> Non A/C Transport from Bangalore to Bangalore<br/>
            <FaAngleRight/> Accommodation in Tent or Dormitory <br/>
            <FaAngleRight/> Veg Meals (2 Breakfast, 1 lunch , 1 Snacks & 1 Dinner)<br/>
            <FaAngleRight/> Jeep Charges<br/>
            <FaAngleRight/> Basic First aid support<br/>
            </Card.Text>
            </div>
            <div>
              <Card.Header className="cardBodyNew">What's Not Included</Card.Header>
              <Card.Text className="cardBodyNew">
              <FaAngleRight/> GST<br/>
              <FaAngleRight/> Anything not mentioned above in Inclusion<br/>
              </Card.Text>
            </div> 
          </div>
          <hr/>
          <Card.Title>Things to carry</Card.Title>
            <Card.Text className="cardBodyNew">
            <FaStar/> &nbsp; Personal Medication (if any)<br/>
            <FaStar/> &nbsp; Strong Backpack (Preferably water proof)<br/>
            <FaStar/> &nbsp; Fresh pair of clothes for two days. <br/>
            <FaStar/> &nbsp; Empty Lunch Box<br/>
            <FaStar/> &nbsp; Toiletries.<br/>
            <FaStar/> &nbsp; Water bottles (at least 2 liters of water)<br/>
            <FaStar/> &nbsp; A torch with new batteries (must in case of emergency)<br/>
            <FaStar/> &nbsp; You can carry Energy Food (Chocolate bars, flavored milk, Electrolyte drinks - Glucose etc.)<br/>
            <FaStar/> &nbsp; Sunglasses, Sunscreen.<br/>
            <FaStar/> &nbsp; Rain Coat (Highly Suggested)<br/>
            <FaStar/> &nbsp; Trekking Shoes (Highly Suggested)<br/>
            </Card.Text>
            <hr/>
          <Card.Title>Pick up point</Card.Title>
            <Card.Text className="cardBodyNew">
            <FaMapMarker/> &nbsp; <a href={(trekInfo.pickUpGmapLocation)} target='_blank'>{(trekInfo.pickUpLocation)}</a> <br/>
            </Card.Text><hr/>
          <Link to={`/bookTrek/`+trekInfo._id}><a href="/" className="btn-get-started">BOOK NOW</a></Link>
        </Card.Body>
      </Card>
      </>
    )
  }
}

export default TrekPage
