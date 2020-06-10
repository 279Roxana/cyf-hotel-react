import React, { useState } from "react";
import TableRow from "./TableRow";

const SearchResults = (props) => {

  return (
    <div className="table">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result) => (
           <TableRow result={result} key={result.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
