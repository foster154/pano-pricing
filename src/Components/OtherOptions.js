import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SectionTitle, Button } from './_SharedStyles'

class HomeSize extends Component {
  render() {
    const {
      currentValues,
      setIntExtOnly,
      setAerials,
      setVirtualTour,
      setCustomPricing
    } = this.props

    return (
      <Wrapper>
        <SectionTitle>Other</SectionTitle>
        <ButtonSection>
          <Button
            onClick={() => {
              currentValues.intExtOnly !== 'interiorsOnly'
                ? setIntExtOnly('interiorsOnly')
                : setIntExtOnly('')
            }}
            active={currentValues.intExtOnly === 'interiorsOnly'}
          >
            interiors only
          </Button>

          <Button
            onClick={() => {
              currentValues.intExtOnly !== 'exteriorsOnly'
                ? setIntExtOnly('exteriorsOnly')
                : setIntExtOnly('')
            }}
            active={currentValues.intExtOnly === 'exteriorsOnly'}
          >
            exteriors only
          </Button>

          <Button
            onClick={() => {
              currentValues.aerials ? setAerials(false) : setAerials(true)
            }}
            active={currentValues.aerials}
          >
            aerials
          </Button>

          <Button
            onClick={() => {
              currentValues.virtualTour
                ? setVirtualTour(false)
                : setVirtualTour(true)
            }}
            active={currentValues.virtualTour}
          >
            virtual tour
          </Button>

          <Button
            onClick={() => {
              currentValues.customPricing === 'New View'
                ? setCustomPricing('')
                : setCustomPricing('New View')
            }}
            active={currentValues.customPricing === 'New View'}
          >
            New View
          </Button>
        </ButtonSection>
      </Wrapper>
    )
  }
}

HomeSize.propTypes = {
  currentValues: PropTypes.object,
  setIntExtOnly: PropTypes.func,
  setAerials: PropTypes.func,
  setVirtualTour: PropTypes.func,
  setCustomPricing: PropTypes.func
}

export default HomeSize

const Wrapper = styled.div`
  width: 100%;
`

const ButtonSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin: 10px 20px;
`
