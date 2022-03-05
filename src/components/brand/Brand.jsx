import NavbarBrand from 'react-bootstrap/NavbarBrand';
import { Link } from 'react-router-dom';

export const Brand = (props) => {
  return (
    <NavbarBrand as={Link} to="/">
      <img
        alt=""
        src="/assets/favicon.ico"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Definion
    </NavbarBrand>
  );
};
