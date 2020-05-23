import React from 'react'
import {connect} from 'react-redux'
import { createTeas } from '../actions/teasFetch'
// import { editTea } from '../actions/teasFetch'


// const initialState = {
//     name: "",
//     brand: "",
//     price: "",
//     img_url: "",
//     description: "",
      
// }

class TeasInput extends React.Component{
    state = {
        name: "",
        brand: "",
        price: "",
        img_url: "",
        description: "",
        error: ""
    }
handleChange = (event) => {
    this.setState({ 
        [event.target.name]: event.target.value
    })
}
handleSubmit = (event) =>{
        event.preventDefault()
        let nameField = document.getElementById('BeName')
        if (!this.state.name){
            this.setState({
                error: 'please fill out the empty field'
            })
            nameField.className = 'redfield'
        } else
       { this.props.createTeas(this.state, this.props.history)
        this.setState({
            name: "",
            brand: "",
            price: "",
            img_url: "",
            description: "",
            error: ""
        })
    }
}

    render(){
        return(
            <div style={{width: "400px"}}className="row center">
                   
                <form onSubmit={this.handleSubmit}>

                <label className="black-text left"htmlFor="name">Tea Name: </label>
                <input name="name" placeholder="Name" id="BeName" onChange={this.handleChange} value={this.state.name}/><br/>

                 <label className="black-text left"htmlFor="name">Tea Brand</label>
                <input name="brand" placeholder="brand" onChange={this.handleChange} value={this.state.brand}/><br/>

                
                 <label className="black-text left"htmlFor="name">Tea Descipt:</label>
                <input name="description" placeholder="description" onChange={this.handleChange} value={this.state.description}/><br/>

                 <label className="black-text left"htmlFor="name">Tea Image:</label>
                <input name="img_url" placeholder="img_url" onChange={this.handleChange} value={this.state.img_url}/><br/>

                
                 <label className="black-text left"htmlFor="name">Tea Price:</label>
                <input name="price" placeholder="price" onChange={this.handleChange} value={this.state.price} /><br/>
                
                <input style={{borderRadius: "22px" , width: "100%"}}className="btn blue" type="submit" value="Add Tea"/>
                
                </form>
                <div className='errors'>
                    {this.state.error}
                </div>
            </div>
        )
    }
}//controlled form

export default connect (null, {createTeas})(TeasInput)