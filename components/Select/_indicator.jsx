import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Indicator = ({ colored = false, rotated = false }) => {
  return (
    <Icon rotated={rotated}>
      <Svg width="12" height="12" fill="none" viewBox="0 0 12 12">
        <Path
          d="M3 4.5L6 7.5L9 4.5"
          stroke={colored ? '#AFB1B8' : '#091E42'}
          stroke-linecap="round"
        />
      </Svg>
    </Icon>
  );
};

export default Indicator;

Indicator.propTypes = {
  colored: PropTypes.bool,
  rotated: PropTypes.bool,
};

const Icon = styled.div`
  display: flex;
  align-items: center;
  ${({ rotated }) =>
    rotated &&
    css`
      transform: rotate(180deg);
    `};
`;

const Svg = styled.svg``;

const Path = styled.path`
  fill: #fff;
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke-width: 1.5px;

  transition: stroke 0.2s ease-in-out;
`;
