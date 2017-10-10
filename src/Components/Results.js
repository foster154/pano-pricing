import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from './_SharedStyles'
import { calculateResult } from './_calculateResult'

class Results extends Component {
  render() {
    const { currentValues } = this.props
    const results = calculateResult(currentValues)

    return (
      <Wrapper>
        {/* <Title>Result</Title> */}
        <Result>${results.customer}</Result>
        <SubResult>Photographer: ${results.photographer}</SubResult>
        <SubResult>Processor: ${results.processor}</SubResult>
      </Wrapper>
    )
  }
}

Results.propTypes = {
  currentValues: PropTypes.object
}

export default Results

const Wrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.accent};
  color: white;
  padding: 20px;
  // height: 184px;
  flex: 1;
`

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  // margin-bottom: 10px;
`

const Result = styled.div`
  font-size: 60px;
  font-weight: 600;
`

const SubResult = styled.div`
  font-size: 18px;
  font-weight: 300;
`
