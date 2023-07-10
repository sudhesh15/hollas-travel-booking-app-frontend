import React from 'react'
import {useEffect, useState} from "react";
import {BASE_URL} from "../../url";
import { MDBDataTable } from 'mdbreact';
import {Link,useParams} from "react-router-dom";

function ViewParticipantsPage() {
  const [getAllTrekkers,setAllTrekers] = useState(null);
  const {trekName} = useParams();
  useEffect(() => {
    fetch(`${BASE_URL}/viewAllParticipants/${trekName}`)
      .then(response => {
        response.json().then(getAllTrekkers => {
          setAllTrekers(getAllTrekkers);
        });
      });
  }, []);

  let getTrekkerDetails;
  if(getAllTrekkers != null) {
    getTrekkerDetails = getAllTrekkers;
  }

  console.log("getTrekkerDetails==>", getTrekkerDetails)

  const data = {
    columns: [
      {
        label: 'First Name',
        field: 'firstName',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Last Name',
        field: 'lastName',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Phone',
        field: 'phoneNumber',
        sort: 'asc',
        width: 200
      },
      {
        label: 'WhatsApp Number',
        field: 'whatsAppNumber',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Size',
        field: 'totalTrekkers',
        sort: 'asc',
        width: 150
      }
    ],
    rows: getTrekkerDetails
  };

  if(getTrekkerDetails){
    return (
      <><MDBDataTable
      paging={true}
      data={data}
    />
      </>
    )
  }
}

export default ViewParticipantsPage