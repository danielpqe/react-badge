import React from 'react'

class BadgeForm extends React.Component {

    // handleChange = e =>{
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
    handleSubmit = e=>{
        e.preventDefault()

    }

    render(){
        return(
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input value={this.props.formValues.firstName}  onChange={this.props.onChange} className="form-control" name="firstName"/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input value={this.props.formValues.lastName} onChange={this.props.onChange} className="form-control" name="lastName"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input value={this.props.formValues.email} type="email" onChange={this.props.onChange} className="form-control" name="email"/>
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input value={this.props.formValues.jobTitle} onChange={this.props.onChange} className="form-control" name="jobTitle"/>
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input value={this.props.formValues.twitter} onChange={this.props.onChange} className="form-control" name="twitter"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
            )
    }
}

export default BadgeForm