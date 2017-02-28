import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Form extends PureComponent {
  render () {
    return (
      <div className="container-fluid">
        <div className="row top-buffer">
          <div className="col-md-8" id="pageBlock">
            <div className="card" id="formCard">
              <div className="card-block">
                <h1 className="card-title">Formulář</h1>
                <br/>
                <form name="product-form" action="" onSubmit={(e) => this.props.submit(e)} noValidate>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Emailová adresa</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={() => this.props.setItem()}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Heslo</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={() => this.props.setItem()}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleSelect1">Výběr čísla</label>
                    <select className="form-control" id="select" onChange={() => this.props.setItem()}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleTextarea">Textové pole</label>
                    <textarea className="form-control" id="textarea" rows="3" onChange={() => this.props.setItem()}></textarea>
                  </div>
                  <fieldset className="form-group">
                    <legend>Radio buttons</legend>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" onChange={() => this.props.setItem()} defaultChecked/>
                        {' '}První volba
                      </label>
                    </div>
                    <div className="form-check">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" onChange={() => this.props.setItem()}/>
                        {' '}Druhá volba
                      </label>
                    </div>
                    <div className="form-check disabled">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled/>
                        {' '}Třetí volba
                      </label>
                    </div>
                  </fieldset>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" name="optionsRadios" id="checkbox" onChange={() => this.props.setItem()}/>
                      {' '}Checkbox
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary" id="formButtonSend">Uložit data z formuláře</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4" id="pageRightBlock">
            <div className="card">
              <div className="card-block">
                <h2 className="card-title">Komponenta Formulář</h2>
                <p>
                  <Link to="/list" className="" id="moveToListComponentButton">Přejít na komponentu List</Link>
                </p>
                {this.props.showAlert &&
                  <div className={ `alert alert-${this.props.successSaved ? 'success' : 'danger'}` } role="alert" id="alertSaved">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" id="alertCloseButton">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    { this.props.successSaved && <span>Data byla <strong>úspěšně</strong> uložena do Elasticsearch.</span>}
                    { this.props.successSaved === false && <span>Data se <strong>nezdařilo</strong> uložit do Elasticsearch.</span>}
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
