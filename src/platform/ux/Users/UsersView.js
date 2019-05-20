import React from "react";
import { Table, Spinner } from 'reactstrap';

const UsersView = ({ users, loading, handleScroll}) => {
  if(loading) {
    return  <Spinner color='primary' />;
  };

  return (
    <div>
      <Table onScroll={handleScroll}>
        <thead>
          <tr>
            <th>User Picture</th>
            <th>Full Name</th>
            <th>E-mail</th>
            <th>DOB</th>
            <th>Full Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            const { picture, name, email, dob, location, phone } = user;
            const { city, state, street } = location;
            return (
              <tr key={index}>
                <td><img alt='' src={picture.thumbnail}/></td>
                <td>{name.title} {name.first} {name.last}</td>
                <td>{email}</td>
                <td>{dob.date}</td>
                <td>{city} - {state} - {street}</td>
                <td>{phone}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default UsersView;

