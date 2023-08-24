import React from "react";

const RecentBooking = () => {
  return (
    <>
      <div class="container">
        <table class="table table-borderless text-danger" id="myTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Journey Date</th>
              <th>Email</th>
              <th>Bus Details</th>
              <th>Set Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Demo</th>
              <th>11/11/2023</th>
              <th>Test@gmail.com</th>
              <th>Ambd / Rajkot</th>
              <th>23/24</th>
            </tr>
            <tr>
              <th>abc</th>
              <th>11/11/2023</th>
              <th>abc@gmail.com</th>
              <th>Ambd / Pbr</th>
              <th>23/24</th>
            </tr>
            <tr>
              <th>xyz</th>
              <th>11/11/2023</th>
              <th>xyz@gmail.com</th>
              <th>Pbr / Rajkot</th>
              <th>23/24</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RecentBooking;
