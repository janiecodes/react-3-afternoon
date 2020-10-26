import React, { Component } from 'react';
import CompanyIcon from 'react-icons/lib/md/filter-hdr';
import ProfileIcon from 'react-icons/lib/md/person-outline';

import './Header.css';

import Search from './Search/Search';
import axios from 'axios'

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *APP* COMPONENT

export default class Header extends Component {
  constructor(){
    super()

    this.state={
      search: ''
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.searchPost = this.searchPost.bind(this)
  }

  searchPost(){
    axios.get(`https://practiceapi.devmountain.com/api/posts/filter?text=${this.state.search}`)
    .then(res => {
      this.setState({search: res.data})
    })

  }

  changeHandler(event){
    this.setState({
      search: event.target.value
    })
  }

  render() {
    return (
      <section className="Header__parent">
        <section className="Header__content">

          {/* Displays the mountain icon in the header */}
          <div className="Header__company-info">
            <CompanyIcon id="Header__company-icon" />
            <span>Social Mountain</span>
          </div>

          {/* Displays the search bar */}
          <div className="Header__right">
            <Search changeHandlerFn={this.changeHandler}/>

            {/* Displays the profile icon */}
            <div className="Header__profile">
              <ProfileIcon />
            </div>
          </div>

        </section>
      </section>
    )
  }
}