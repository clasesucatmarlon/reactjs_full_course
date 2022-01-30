import { memo } from 'react';
import PropTypes from 'prop-types';

const Header = memo(({title}) => {
  return (
    <>
      <h1>{ title }</h1>
      <hr />
    </>
  );
});

// Documentation
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;