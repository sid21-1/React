import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      userInfo: {
        name: "Dunny",
        location: "Default",
        avatar_url: "no  Photo",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sid21-1");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    // console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>{name}</h2>
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <h1>{location}</h1>
        {/* <h3>Location : Darjeeling </h3> */}
        {/* <h4>Contact: sid</h4> */}
        <img src={avatar_url} alt="" />
      </div>
    );
  }
}
export default UserClass;
