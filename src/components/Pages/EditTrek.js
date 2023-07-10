import React from 'react';
import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import {BASE_URL} from "../../url";

function EditTrek() {
  const {id} = useParams();
  const [trekName,setTrekName] = useState('');
  const [totalSpots,setTotalSpots] = useState('');
  const [numberOfDays,setNumberOfDays] = useState('');
  const [startDate,setStartDate] = useState('');
  const [endDate,setEndDate] = useState('');
  const [trekLocation,setTrekLocation] = useState('');
  const [trekGmapLocation,setTrekGmapLocation] = useState('');
  const [trekPrice, setTrekPrice] = useState('');
  const [expDate, setExpDate] = useState('');
  const [pickUpLocation,setPickUpLocation] = useState('');
  const [pickUpGmapLocation,setPickUpGmapLocation] = useState('');
  const [trekDescription,setTrekDescription] = useState('');
  const [difficultyLevel,setDifficultyLevel] = useState('');
  const [trekLength,setTrekLength] = useState('');
  const [altitude,setAltitude] = useState('');
  const [minAge,setMinAge] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function updateTrekDetails(ev) {
    const data = new FormData();
    data.set('trekName', trekName);
    data.set('totalSpots', totalSpots);
    data.set('numberOfDays', numberOfDays);
    data.set('startDate', startDate);
    data.set('endDate', endDate);
    data.set('trekLocation', trekLocation);
    data.set('trekGmapLocation', trekGmapLocation);
    data.set('trekPrice', trekPrice);
    data.set('expDate', expDate);
    data.set('pickUpLocation', pickUpLocation);
    data.set('pickUpGmapLocation', pickUpGmapLocation);
    data.set('trekDescription', trekDescription);
    data.set('difficultyLevel', difficultyLevel);
    data.set('trekLength', trekLength);
    data.set('altitude', altitude);
    data.set('minAge', minAge);
    data.set('id', id);
    ev.preventDefault();
    const response = await fetch(`${BASE_URL}/post`, {
      method: 'PUT',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      return <Navigate to={'/viewAllTreks'} />
    }
  }

  useEffect(() => {
    fetch(`${BASE_URL}/treks/`+id)
      .then(response => {
        response.json().then(trekData => {
          setTrekName(trekData.trekName);
          setTotalSpots(trekData.totalSpots);
          setNumberOfDays(trekData.numberOfDays);
          setStartDate(trekData.startDate);
          setEndDate(trekData.endDate);
          setTrekLocation(trekData.trekLocation);
          setTrekGmapLocation(trekData.trekGmapLocation);
          setTrekPrice(trekData.trekPrice);
          setExpDate(trekData.expDate);
          setPickUpLocation(trekData.expDate);
          setPickUpGmapLocation(trekData.pickUpLocation);
          setPickUpGmapLocation(trekData.pickUpGmapLocation);
          setTrekDescription(trekData.trekDescription);
          setDifficultyLevel(trekData.difficultyLevel);
          setTrekLength(trekData.trekLength);
          setAltitude(trekData.altitude);
          setMinAge(trekData.minAge);
        });
      });
  }, []);

  return (
    <form onSubmit={updateTrekDetails}>
    <div className="postForm">
      <h2 style={{color: "#eee"}}>EDIT TREK</h2>
      <hr/>
      <input type="trekName" value={trekName} onChange={ev => setTrekName(ev.target.value)} placeholder={"TREK NAME"} required/>
      <div className="side-by-side">
        <input type="number" value={totalSpots} onChange={ev => setTotalSpots(ev.target.value)} className="input1" placeholder={"TOTAL TREKKRS"} />
        <input type="number" value={numberOfDays} onChange={ev => setNumberOfDays(ev.target.value)} className="input2" placeholder={"NUMBER OF DAYS"} />
      </div>
      <div className="side-by-side">
        <input type="date" value={startDate} onChange={ev => setStartDate(ev.target.value)} className="input1 date" placeholder={"START DATE"} />
        <input type="date" value={endDate} onChange={ev => setEndDate(ev.target.value)} className="input2 date" placeholder={"END DATE"} />
      </div>

      <div className="side-by-side">
        <input type="trekLocation" value={trekLocation} onChange={ev => setTrekLocation(ev.target.value)} className="input1" placeholder={"TREK LOCATION"} />
        <input type="trekGmapLocation" value={trekGmapLocation} onChange={ev => setTrekGmapLocation(ev.target.value)} className="input2" placeholder={"TREK LOCATION GOOGLE MAP LINK"}/>
      </div>
      
      <div className="side-by-side">
        <input type="number" value={trekPrice} onChange={ev => setTrekPrice(ev.target.value)} placeholder={"PRICE"} required/>
        <input type="date" value={expDate} onChange={ev => setExpDate(ev.target.value)} className="input2 date" placeholder={"EXPIRY DATE"} />
      </div>
      

      <div className="side-by-side">
        <input type="pickUpLocation" value={pickUpLocation} onChange={ev => setPickUpLocation(ev.target.value)} className="input1" placeholder={"PICK UP LOCATION"} />
        <input type="pickUpGmapLocation" value={pickUpGmapLocation} onChange={ev => setPickUpGmapLocation(ev.target.value)} className="input2" placeholder={"PICK UP LOCATION GOOGLE MAP LINK"} />
      </div>

      <input type="trekDescription" value={trekDescription} onChange={ev => setTrekDescription(ev.target.value)} placeholder={"DESCRIPTION"} required/>

      <div className="side-by-side">
        <input type="difficultyLevel" value={difficultyLevel} onChange={ev => setDifficultyLevel(ev.target.value)} className="input1" placeholder={"DIFFICULTY LEVEL"} />
        <input type="trekLength" value={trekLength} onChange={ev => setTrekLength(ev.target.value)} className="input2" placeholder={"TREK LENGTH"} />
      </div>
      <div className="side-by-side">
        <input type="altitude" value={altitude} onChange={ev => setAltitude(ev.target.value)} className="input1" placeholder={"ALTITUDE"} />
        <input type="minAge" value={minAge} onChange={ev => setMinAge(ev.target.value)} className="input2" placeholder={"MINIMUM AGE"} />
      </div>

      <span></span> 

      <button className="createPost" style={{marginTop:'5px'}}>Update Trek Details</button>
      </div>
    </form>
  )
}

export default EditTrek;