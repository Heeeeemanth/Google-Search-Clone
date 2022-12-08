import React, { Component } from 'react'
import SearchResult from '../SearchResult/SearchResult'
import "./GoogleSearchPage.css"


export default class GoogleSearchPage extends Component {
  
  state = {
    'searchData':'',
  }
  getData = (event)=>{
    this.setState({searchData:event.target.value})
  }
  render() {
    const {searchData} = this.state
    const {searchDetailsList} = this.props
    const result = searchDetailsList.filter(eachData =>{
      return eachData.suggestion.toLowerCase().includes(searchData)
    })
    return (
      <>
      <header >
        <a href='https://mail.google.com/mail/u/0/#inbox'> Gmail</a>
        <a href='https://www.google.co.in/imghp?hl=en-GB&tab=ri&authuser=0&ogbl'>Images</a>
      </header>
      <div className='imgContainer'>
        <img className='img' src='https://assets.ccbp.in/frontend/react-js/google-logo.png' alt='google logo'/>
        <input type='search' placeholder=' Google here' onChange={this.getData}/>
        {result.map(e =>(<SearchResult key={e.id} result={e.suggestion}/>))}
      </div>
      <div>
      </div>
      </>
    )
  }
}
