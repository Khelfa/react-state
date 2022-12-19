import React, { Component } from "react";

let Style = {
  fontFamily: "Roboto",
  fontSize: "50px",
  textTransform: "uppercase",
  color: "cadetblue",
};

let bioTag = {
  fontFamily: "Roboto",
  fontSize: "18px",
  color: "rgb(226, 140, 60)",
  width: "70%",
  margin: "10px auto",
};
let prof = {
  width: "40%",
  fontFamily: "Roboto",
  fontSize: "15px",
  color: "rgb(87, 85, 85)",
  margin: "10px auto",
};
let pictureStyle = {
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  marginTop: "20px",
};

export default class Profile extends Component {
  constructor(props) {
    super();
    this.state = {
      fullName: "Walid Khalfa",
      bio: "Hi 👋 So glad to have you around !! I'm a FULLSTACK JS student (MERN STACK) 😉 I love writing code and making things messy sometimes !! its just fun 🤷‍",
      imgSrc:
        "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/35864556_10214058986220540_546942953906503680_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-JpwKtm23TkAX-JM6qe&_nc_ht=scontent.ftun1-2.fna&oh=00_AfAkHS6BymEXOxvV4Ji_VV8u9eY_n057BKcqzz3TOjCIRA&oe=63C7C10F",
      profession: "FULL STACK JS STUDENT",
      Time: 0,
      Shows: true,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ Time: this.state.Time + 1 });
    }, 1000);
  }
  Showing = () => {
    this.setState({ Shows: !this.state.Shows });
  };

  render() {
    return (
      <div>
        <img style={pictureStyle} src={this.state.imgSrc} alt="Img" />
        <h1 style={Style}>{this.state.fullName}</h1>
        <h2 style={bioTag}>{this.state.bio}</h2>
        <p style={prof}>{this.state.profession}</p>
        <br />
        <h2
          style={prof}
        >{`This component was last mounted ${this.state.Time}s ago`}</h2>
      </div>
    );
  }
}
