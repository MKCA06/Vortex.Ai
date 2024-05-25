import React from 'react';

const Table = () => {
  return (
    <div className="row mt-3">
      <div className="col">
        <div className="table-responsive">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col" style={{ textTransform: "uppercase" }}>Name</th>
                <th scope="col" style={{ textTransform: "uppercase" }}>Status</th>
                <th scope="col" style={{ textTransform: "uppercase" }}>Email</th>
                <th scope="col" style={{ textTransform: "uppercase" }}>Created Time</th>
                <th scope="col" style={{ textTransform: "uppercase" }}>Assignee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Active</td>
                <td>john.doe@example.com</td>
                <td>2022-05-25 10:30 AM</td>
                <td>Jane Smith</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>Inactive</td>
                <td>jane.smith@example.com</td>
                <td>2022-05-25 11:45 AM</td>
                <td>John Doe</td>
              </tr>
              <tr>
                <td>Alice Johnson</td>
                <td>Active</td>
                <td>alice.johnson@example.com</td>
                <td>2022-05-25 12:00 PM</td>
                <td>Bob Brown</td>
              </tr>
              <tr>
                <td>Bob Brown</td>
                <td>Inactive</td>
                <td>bob.brown@example.com</td>
                <td>2022-05-25 1:30 PM</td>
                <td>Alice Johnson</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
