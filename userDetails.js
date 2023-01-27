import React, { Component } from "react";

class UserDetails extends Component{
    user = this.props.user;
    render(){
        
        return(
            <div><h3>{this.user.name}</h3>
                        <h5>
                            Email : {this.user.email} <br/>
                            Phone Number: {this.user.phoneNumber}
                        </h5>
                        </div>
        )
    }
}
export default UserDetails;