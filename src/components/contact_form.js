import React, {Component} from 'react';

class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            form: { 
                firstName: '',
                lastName: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        this.setState =({
            form: {...form}
        });
        console.log(event.target.value)
        console.log(event.target.name)
    }
    render(){
        const {firstName, lastName} = this.state.form;
        const {form}= this.state;
        form[name] = value; 
        return (
        <form>
            <div className="form-group">
            <label>First Name</label>
            <input onChange={this.handleInputChange} value = {firstName} name= "firstName" type="text" className="form-control"/>
            </div>

            <div className="form-group">
            <label>Last Name</label>
            <input onChange={this.handleInputChange} value = {lastName} name= "lastName" type="text" className="form-control"/>
            </div>
        </form>
        )
    }
}


export default ContactForm;