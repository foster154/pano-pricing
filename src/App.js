import React, { Component } from 'react'
import styled from 'styled-components'
import 'font-awesome/css/font-awesome.css'

import logoSrc from './Assets/pano-logo-black.svg'
import HomeSize from './Components/HomeSize'
import OtherOptions from './Components/OtherOptions'
import TravelCharge from './Components/TravelCharge'
import Results from './Components/Results'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      homeSize: null,
      mileage: '',
      intExtOnly: '',
      aerials: false,
      virtualTour: false,
      customPricing: ''
    }
  }

  updateValue(param, value) {
    console.log({ [param]: value })
    this.setState({ [param]: value })
  }

  render() {
    return (
      <Wrapper>
        <LogoWrapper>
          <Logo src={logoSrc} />
        </LogoWrapper>
        <HomeSize
          setHomeSize={value => this.updateValue('homeSize', value)}
          currentHomeSize={this.state.homeSize}
        />
        <OtherOptions
          currentValues={this.state}
          setIntExtOnly={value => this.updateValue('intExtOnly', value)}
          setAerials={value => this.updateValue('aerials', value)}
          setVirtualTour={value => this.updateValue('virtualTour', value)}
          setCustomPricing={value => this.updateValue('customPricing', value)}
        />
        <TravelCharge
          currentMileage={this.state.mileage}
          setMileage={value => this.updateValue('mileage', value)}
        />

        <Results currentValues={this.state} />
      </Wrapper>
    )
  }
}

export default App

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
`

const LogoWrapper = styled.div`
  text-align: center;
  margin-top: 10px;
`

const Logo = styled.img`
  max-width: 100%;
  width: 300px;
  height: 72px;
`
