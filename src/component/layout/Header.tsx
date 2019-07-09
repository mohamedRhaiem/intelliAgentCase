import * as React from 'react';
import { Link } from 'react-router-dom';
var PropTypes = require('prop-types');

const Header = props => {
    const { branding } = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">
                    {branding}
                </a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Apollo
              </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rest" className="nav-link">
                                Rest
              </Link>

                        </li>
                        <li className="nav-item">
                            <Link to="/restApollo" className="nav-link">
                                RestApollo
              </Link>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Header.defaultProps = {
    branding: 'My App'
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};

export default Header;
