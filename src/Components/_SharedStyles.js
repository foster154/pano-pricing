import styled from 'styled-components'

export const colors = {
  accent: '#00BEEF',
  // background: '#2d2d2d'
  black: '#282828',
  inactiveGray: '#aeaeae'
}

export const SectionTitle = styled.div`
  color: ${colors.black};
  margin: 10px;
  font-size: 16px;
  border-bottom: 1px solid ${colors.black};
  text-transform: uppercase;
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  width: 100%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 4px;
  text-align: center;
  padding: 2px;
  margin: 5px;
  font-size: 13px;
  line-height: 13px;
  color: ${props => (props.active ? 'white' : colors.inactiveGray)};
  background-color: ${props => (props.active ? colors.accent : '#fff')};
  cursor: default;
  transition: transform 200ms;

  &:active {
    transform: scale(0.95);
  }
`
