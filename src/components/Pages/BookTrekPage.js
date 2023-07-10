import {useEffect, useState} from "react";
import {Link,useParams,Navigate} from "react-router-dom";
import {BASE_URL} from "../../url";

function BookTrekPage() {

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

  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [whatsAppNumber,setWhatsAppNumber] = useState('');
  const [email,setEmail] = useState('');
  const [age,setAge] = useState('');
  const [totalTrekkers,setTotalTrekkers] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function trekkerDetails(ev, trekName) {
    const data = new FormData();
    data.set('firstName', firstName);
    data.set('lastName', lastName);
    data.set('phoneNumber', phoneNumber);
    data.set('whatsAppNumber', whatsAppNumber);
    data.set('email', email);
    data.set('age', age);
    data.set('totalTrekkers', totalTrekkers);
    data.set('trekName', trekName);
    ev.preventDefault();
    const response = await fetch(`${BASE_URL}/createTrekkerDetails`, {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      return <Navigate to={'/'} />
    }
  }
  
  let trekInfo;
  if(trekDetails != null) {
    trekInfo = trekDetails;
  }

  if(trekInfo){
    return (
      <form onSubmit={ev => trekkerDetails(ev, trekInfo.trekName)}>
      <div className="postForm">
        <h2 style={{color: "#5f5f5f"}}>BOOKING DETAILS - {(trekInfo.trekName)} </h2>
        <hr/>
        <div className="side-by-side">
          <input type="firstName" value={firstName} onChange={ev => setFirstName(ev.target.value)} className="input1" placeholder={'FIRST NAME'} required/>
          <input type="lastName" value={lastName} onChange={ev => setLastName(ev.target.value)} className="input2" placeholder={'LAST NAME'} required/>
        </div>
        <div className="side-by-side">
          <input type="number" value={phoneNumber} onChange={ev => setPhoneNumber(ev.target.value)} className="input1" placeholder={'PHONE NUMBER'} required/>
          <input type="number" value={whatsAppNumber} onChange={ev => setWhatsAppNumber(ev.target.value)} className="input2" placeholder={'WHATSAPP NUMBER'} required/>
        </div>
        <input type="email" value={email} onChange={ev => setEmail(ev.target.value)} className="input2" placeholder={'EMAIL ID'} required/>
        <div className="side-by-side">
          <input type="number" value={age} onChange={ev => setAge(ev.target.value)} className="input1" placeholder={'AGE'} required/>
          <input type="number" value={totalTrekkers} onChange={ev => setTotalTrekkers(ev.target.value)} className="input2" placeholder={'TOTAL PARTICIPANTS'} required/>
        </div>
        <input type="trekName" value={(trekInfo.trekName)} placeholder={'TREK NAME'} required/>
        <button className="createPost" style={{marginTop:'5px'}}>SUBMIT</button>
        </div>
      </form>
    )
  }
}

export default BookTrekPage