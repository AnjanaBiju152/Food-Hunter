import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
       count :2,
    };
    console.log(this.props.name +"Child Constructor");
  }
componentDidMount() {
console.log(this.props.name +"Child Component Did Mount");

}
  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    console.log(this.props.name + "Child Render");

    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: anjana.biju200@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
