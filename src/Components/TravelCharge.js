import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors, SectionTitle, Button } from './_SharedStyles'

class TravelCharge extends Component {
  render() {
    const { setMileage, currentMileage } = this.props

    return (
      <Wrapper>
        <SectionTitle>Travel Charge</SectionTitle>
        <Content>
          <Label>
            Mileage<br />(round trip)
          </Label>
          <Input
            value={currentMileage}
            type="number"
            onChange={e => setMileage(e.target.value)}
          />
        </Content>
      </Wrapper>
    )
  }
}

TravelCharge.propTypes = {
  currentMileage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  setMileage: PropTypes.func
}

export default TravelCharge

const Wrapper = styled.div`
  width: 100%;
`

const ButtonSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px 20px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
  color: ${colors.accent};
`

const Label = styled.div`
  color: ${colors.black};
  font-size: 16px;
`

const Input = styled.input`
  width: 70%;
  background-color: transparent;
  border: 1px solid ${colors.inactiveGray};
  border-radius: 4px;
  color: ${colors.accent};
  text-align: right;
  font-size: 28px;
  font-weight: 600;
  padding: 8px;
`
