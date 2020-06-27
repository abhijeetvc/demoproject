import React, { Component } from 'react'
import ApiService from "../../service/ApiService"

class AddUserComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            firstName:'',
            lastName:'',
            username:'',
            password:'',
            age:'',
            salary:'',
            message:null
        }
    }

    saveUser=(e)=>{
        e.preventDefault()
        let user={
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                password: this.state.password,
                age: this.state.age,
                salary: this.state.salary
        }

        //Call Post API
        console.log(user)
        ApiService.addUser(user)
            .then(res=>{
                this.setState({message: 'User added successfully'})
                console.log(this.state.message)
                this.props.history.push('/users')
            }) 
    }

    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
        return(
            <div>
                <h2 className="text-center">Add User</h2>
                <form>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" 
                        placeholder="Enter FirstName" 
                        name="firstName" 
                        className="form-control" value={this.state.firstName} 
                        onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" 
                        placeholder="Enter LastName" 
                        name="lastName" 
                        className="form-control" value={this.state.lastName} 
                        onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>User Name:</label>
                        <input type="text" 
                        placeholder="Enter UserName" 
                        name="username" 
                        className="form-control" value={this.state.username} 
                        onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Password :</label>
                        <input type="password" 
                        placeholder="Enter Password" 
                        name="password" 
                        className="form-control" value={this.state.password} 
                        onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Age:</label>
                        <input type="number" 
                        placeholder="Enter Age" 
                        name="age" 
                        className="form-control" value={this.state.age} 
                        onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Salary:</label>
                        <input type="number" 
                        placeholder="Enter Salary" 
                        name="salary" 
                        className="form-control" value={this.state.salary} 
                        onChange={this.onChange} />
                    </div>

                   <button className="btn btn-success" onClick={this.saveUser}>Save</button> 
                </form>
            </div>
        )
    }
}

export default AddUserComponent