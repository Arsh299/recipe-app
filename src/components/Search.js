import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    const{handleChange,handleSubmit,search}=this.props;
    return (
    <div className="container">
        <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                <h1 className="text-slanted text-capitalize">
                search recipes with{" "} <strong className="text-orange">Food2fork</strong>
                </h1>
                <form  className="mt-3">
                <label htmlFor="search" className="text-capitalize">types recipes seperated by comma</label>
                <div className="input-group">
                    <input type="text" 
                    name="search" 
                    className="form-control form-control-lg my-3" 
                    placeholder="chicken,onion,carrots"
                    value={search}
                    onChange={handleChange}/>
                    <div className="input-group-append">
                        <button type="submit">
                            <i className="fas fa-search"/>
                        </button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
    )
  }
}