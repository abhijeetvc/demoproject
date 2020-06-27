import React, { Component } from 'react'
import ApiService from '../../service/ApiService';

class EditUserComponent extends Component{

    constructor(props){
        super(props)

        this.state={
            id:'',
            firstName:'',
            lastName:'',
            username:'',
            age:'',
            salary:''
        }
        
        this.saveUser=this.saveUser.bind(this)
        this.loadUser=this.loadUser.bind(this)
    }

    componentDidMount(){
        this.loadUser()
    }

    loadUser(){
        ApiService.fetchUserById(window.localStorage.getItem("userId"))
            .then((res)=>{
                let user= res.data.result;
                console.log(user)
                this.setState({
                    id:user.id,
                    firstName:user.firstName,
                    lastName:user.lastName,
                    username:user.username,
                    age:user.age,
                    salary:user.salary
                })
            })
    }

    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    saveUser=(e)=>{
        e.preventDefault()
        let user={
                id:this.state.id,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                password: this.state.password,
                age: this.state.age,
                salary: this.state.salary
        }

        //Call Post API
        console.log(user)
        ApiService.editUser(user)
            .then(res=>{
                this.setState({message: 'User added successfully'})
                console.log(this.state.message)
                this.props.history.push('/users')
            }) 
    }

    render(){
        return(
            <div>
                <h2 className="text-center">Add User</h2>
                <form>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" 
                        placeholder="FirstName" 
                        name="firstName" 
                        className="form-control" value={this.state.firstName} 
                        onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" 
                        placeholder="LastName" 
                        name="lastName" 
                        className="form-control" value={this.state.lastName} 
                        onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>User Name:</label>
                        <input type="text" 
                        placeholder="UserName" 
                        name="username" 
                        className="form-control" value={this.state.username} 
                        onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Age:</label>
                        <input type="number" 
                        placeholder="Age" 
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

                   <button className="btn btn-success" onClick={this.saveUser}>Update</button>
                   </form>
                </div>
        )
    }
}

export default EditUserComponent