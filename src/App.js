import React, { Component } from 'react'
import UserInfo from './Components/UserInfo'

class App extends Component {
  State = {
    user: [
      { firstName: "john", lastName: "Matthew", email: "therfdd@gmail.com", phoneNo: "0980798453" },
      { firstName: "Emmanuel", lastName: "fate", email: "shant@gmail.com", phoneNo: "090887655553" },
      { firstName: "SAmuel", lastName: "Godslove", email: "hteh@gmail.com", phoneNo: "087890444" },
      { firstName: "Mark", lastName: "Luke", email: "monalist@gmail.com", phoneNo: "078798773" },
      { firstName: "Cosmas", lastName: "Shammah", email: "ronket@gmail.com", phoneNo: "0975638476554" },
      ],
  }
  
  render() {
    return (
      <div>
         <UserInfo firstName={this.State.user[0].firstName}lastName={this.State.user[0].lastName} email={this.State.user[0].email} phoneNo={this.State.user[0].phoneNo}/>
        <br></br>
          <UserInfo firstName={this.State.user[1].firstName} lastName={this.State.user[0].lastName} email={this.State.user[0].email} phoneNo={this.State.user[0].phoneNo} />
          <br></br>
          <UserInfo firstName={this.State.user[2].firstName} lastName={this.State.user[0].lastName} email={this.State.user[0].email} phoneNo={this.State.user[0].phoneNo} />
          <br></br>
          <UserInfo firstName={this.State.user[3].firstName} lastName={this.State.user[0].lastName} email={this.State.user[0].email} phoneNo={this.State.user[0].phoneNo} />
          <br></br>
          <UserInfo firstName={this.State.user[4].firstName} lastName={this.State.user[0].lastName} email={this.State.user[0].email} phoneNo={this.State.user[0].phoneNo} />
      </div>
    )
  }
}


export default App;