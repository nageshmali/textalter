import React from "react";
import PropTypes from 'prop-types';



export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          </ul>

          <div className={`custom-control custom-switch mr-5 text-${props.theme==='light'?'dark':'light'}`}>
            <input type="checkbox" className="custom-control-input" id="customSwitches" onClick={props.toggleMode}/>
            <label className="custom-control-label" htmlFor="customSwitches">{props.modeText}</label>
          </div>

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-primary my-2"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

Navbar.defaultProps = {
    title : 'Enter your heading',
    aboutText : 'this is about us'
}

Navbar.propTypes = {
    title : PropTypes.string,
    aboutText : PropTypes.string
}