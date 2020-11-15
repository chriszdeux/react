import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import BadgeForm from '../components/BadgeForm'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='BadgeNew__hero'>
          <img className='img-fluid' src={header} alt="Logo" />
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge 
              firstName='Chris' 
              lastName='Meza' 
              twitter='deuxengine' 
              jobTitle='Software NASA Engineer' 
              avatarUrl='https://mcuexchange.com/wp-content/uploads/2018/06/thor.jpg' />
            </div>

            <div className='col-6'>
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew;