////////////////////////////////////////////////////////////////
//     _   _  _____     _____  _____  ___    _____  ___       //
//    ( ) ( )(  _  )   (_   _)(  _  )(  _`\ (  _  )|  _`\     //
//    | `\| || ( ) |     | |  | ( ) || ( (_)| (_) || (_) )    //
//    | , ` || | | |     | |  | | | || |  _ |  _  || ,  /     //
//    | |`\ || (_) |     | |  | (_) || (_( )| | | || |\ \     //
//    (_) (_)(_____)     (_)  (_____)(____/'(_) (_)(_) (_)    //
//                                                            //
////////////////////////////////////////////////////////////////


import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProgressBar from "../ProgressBar";

export default class Screen3 extends React.Component {
  render() {
    return (
      <div className="inside" id="screen3">
        <h4>Pantalla 3:</h4>
        <p>
          {"T2gsIG5vISBFbCB1cmFuaW8gZW5yaXF1ZWNpZG8gc2UgZXN04SByZWNhbGVudGFuZG8uIFBhcmEgYWN0aXZhciBlbCBtZWNhbmlzbW8gZGUgY29udHJvbCBkZSB0ZW1wZXJhdHVyYSBkZWJlcyBkZXNjdWJyaXIgc3UgY/NkaWdvIGRlIGFjdGl2YWNp824uIFBhcmEgaGFjZXJsbyByZWN1cnJlIGEgUmVhY3QgTmF0aXZl".unhashCode()}
        </p>
        <br/>
        <div className="codeInputContainer">
          <input type="number" className="codeInput" min="0" max="9999" maxLength="4" id="nativeInput"  autoFocus placeholder="****"/>
        </div>

        <br/>
        <p className="next3">
          {"SGFzIGFjdGl2YWRvIGVsIG1lY2FuaXNtbyBkZSBjb250cm9sIGRlIHRlbXBlcmF0dXJh".unhashCode()}
        </p>
        <p className="next3-w">
          {"RWwgY/NkaWdvIGludHJvZHVjaWRvIG5vIGVzIGNvcnJlY3Rv".unhashCode()}
        </p>
        <br/>
        <div className="actions">
          <Link to={`/${"2".hashCode()}`}>
            <button className="btn secondary">ANTERIOR</button>
          </Link>
        </div>
        <ProgressBar progress={75} />
      </div>
    );
  }
}

Screen3.propTypes = {
  /**
   * Components of the bomb
   */
  components: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Current status of the switch
       */
      status: PropTypes.bool,
      /**
       * Name of the component to deactivate
       */
      id: PropTypes.string
    })
  ),
  /**
   * Function to turn off the switch
   */
  deac: PropTypes.func,
};
