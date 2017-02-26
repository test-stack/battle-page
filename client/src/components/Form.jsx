import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Form extends PureComponent {
  render () {
    return (
      <div className="card">
        <div className="card-block">
          <h1 className="card-title">Formular</h1>
          <h6 className="card-subtitle mb-2 text-muted">Povine polozky jsou oznaceny hvezdickou</h6>
          <br/>
          <form name="product-form" action="" onSubmit={(e) => this.props.submit(e)} noValidate>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={() => this.props.setItem()}/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" onChange={() => this.props.setItem()}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleSelect1">Example select</label>
              <select className="form-control" id="select" onChange={() => this.props.setItem()}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleTextarea">Example textarea</label>
              <textarea className="form-control" id="textarea" rows="3" onChange={() => this.props.setItem()}></textarea>
            </div>
            <fieldset className="form-group">
              <legend>Radio buttons</legend>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" onChange={() => this.props.setItem()} defaultChecked/>
                  Option one is this and that&mdash;be sure to include why it's great
                </label>
              </div>
              <div className="form-check">
              <label className="form-check-label">
                  <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" onChange={() => this.props.setItem()}/>
                  Option two can be something else and selecting it will deselect option one
                </label>
              </div>
              <div className="form-check disabled">
              <label className="form-check-label">
                  <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled/>
                  Option three is disabled
                </label>
              </div>
            </fieldset>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" name="optionsRadios" id="checkbox" onChange={() => this.props.setItem()}/>
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Odeslat</button>
          </form>
        </div>
      </div>
    );
  }
}
