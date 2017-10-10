import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SectionTitle, Button } from './_SharedStyles'

class HomeSize extends Component {
  render() {
    const { setHomeSize, currentHomeSize } = this.props

    return (
      <Wrapper>
        <SectionTitle>Home Size (Sq Ft)</SectionTitle>
        <ButtonSection>
          <Button
            onClick={() => setHomeSize(1500)}
            active={currentHomeSize === 1500}
          >
            under 2000
          </Button>

          <Button
            onClick={() => setHomeSize(2500)}
            active={currentHomeSize === 2500}
          >
            2000 - 2999
          </Button>
          <Button
            onClick={() => setHomeSize(3500)}
            active={currentHomeSize === 3500}
          >
            3000 - 3999
          </Button>
          <Button
            onClick={() => setHomeSize(4500)}
            active={currentHomeSize === 4500}
          >
            4000+
          </Button>
          <Button onClick={() => setHomeSize(0)} active={currentHomeSize === 0}>
            (none)
          </Button>
        </ButtonSection>
      </Wrapper>
    )
  }
}

HomeSize.propTypes = {
  currentHomeSize: PropTypes.number,
  setHomeSize: PropTypes.func
}

export default HomeSize

const Wrapper = styled.div`
  width: 100%;
`

const ButtonSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px 20px;
`
