import React from 'react'
import {connect} from 'react-redux'
import { createTeas } from '../actions/teasFetch'


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
    }
handleChange = (event) => {
    this.setState({ 
        [event.target.name]: event.target.value
    })
}
handleSubmit = (event) =>{
        event.preventDefault()
        this.props.createTeas(this.state)
        this.setState({
            name: "",
            brand: "",
            price: "",
            img_url: "",
            description: "",
        })
}

    render(){
        return(
            <div style={{width: "400px"}}className="row center">
                <form onSubmit={this.handleSubmit}>

                <input name="name" style={{borderRadius: "80px", border: "solid 1px #2196F3",width: "200px,"}} placeholder="Name" onChange={this.handleChange} value={this.state.name}/><br/>
                <input name="brand" placeholder="brand" onChange={this.handleChange} value={this.state.brand}/><br/>
                <input name="description" placeholder="description" onChange={this.handleChange} value={this.state.description}/><br/>
                <input name="img_url" placeholder="img_url" onChange={this.handleChange} value={this.state.img_url}/><br/>
                <input name="price" placeholder="price" onChange={this.handleChange} value={this.state.price} /><br/>
                <input type="submit" value="Add Tea"/>
                
                </form>
            </div>
        )
    }
}//controlled form

export default connect (null, {createTeas})(TeasInput)