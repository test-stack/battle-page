import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class AddTodoForm extends PureComponent {
  render () {
    return (
      <div className="container-fluid">
        <div className="row top-buffer">
          <div className="col-md-8" id="pageBlock">
            <div className="card" id="formCard">
              <div className="card-block">
                <h1 className="card-title">Nové Todo</h1>
                <br/>
                <form name="product-form" action="" onSubmit={(e) => this.props.submit(e)} noValidate>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Téma</label>
                    <input type="text" className="form-control" id="topic" aria-describedby="topicHelp" placeholder="Vyplňte téma Todo" onChange={() => this.props.setItem()}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Tagy</label>
                    <input type="text" className="form-control" id="tags" placeholder="Zadejte tagy oddělené čárkou" onChange={() => this.props.setItem()}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleSelect1">Kategorie</label>
                    <select className="form-control" id="category" onChange={() => this.props.setItem()}>
                      <option>Počítače</option>
                      <option>Práce</option>
                      <option>Osobní</option>
                      <option>Rodina</option>
                      <option>Nákupy</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="todoDescription">Popis</label>
                    <textarea className="form-control" id="description" rows="3" placeholder="Zadejte popis Todo" onChange={() => this.props.setItem()}></textarea>
                  </div>
                  <fieldset className="form-group">
                    <legend>Sdílet Todo</legend>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="shareOff" onChange={() => this.props.setItem()} defaultChecked/>
                        {' '}Ne
                      </label>
                    </div>
                    <div className="form-check">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="shareOn" onChange={() => this.props.setItem()}/>
                        {' '}Ano
                      </label>
                    </div>
                  </fieldset>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" name="optionsRadios" id="notification" onChange={() => this.props.setItem()}/>
                      {' '}Zapnout upozornění
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary" id="formButtonSend">Uložit Todo</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4" id="pageRightBlock">
            <div className="card">
              <div className="card-block">
                <h2 className="card-title">Todo Formulář Komponenta </h2>
                <p>
                  <Link to="/todo" className="" id="moveToListComponentButton">Zobrazit Todo</Link>
                </p>
                {this.props.showAlert &&
                  <div className={ `alert alert-${this.props.successSaved ? 'success' : 'danger'}` } role="alert" id="alertSaved">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" id="alertCloseButton">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    { this.props.successSaved && <span>Todo <strong>úspěšně</strong> uloženo.</span>}
                    { this.props.successSaved === false && <span>Todo se <strong>nezdařilo</strong> uložit.</span>}
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
