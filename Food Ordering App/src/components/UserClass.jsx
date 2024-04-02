import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { name } = this.props;
    return (
      <div className="user-card">
        <h1>{name} Gupta</h1>
        <h3>Location : Darjeeling </h3>
        <h4>Contact: sid</h4>
      </div>
    );
  }
}
export default UserClass;
