import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  render() {
    console.log("Parent Render");

    return (
      <div>
        <h2>About Us</h2>

        <UserClass name={"Anjana"} location={"Kerala"} />
        <UserClass name={"Biju"} location={"Kerala"} />
      </div>
    );
  }
}
export default About;
