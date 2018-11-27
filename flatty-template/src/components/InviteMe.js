import React from 'react';
const InviteMe = () =>{
  return (
    <form className="form-inline" role="form">
      <div className="form-group">
        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email address" />
      </div>
      <button type="submit" className="btn btn-warning btn-lg">Invite Me!</button>
    </form>
  );
}
export default InviteMe;
