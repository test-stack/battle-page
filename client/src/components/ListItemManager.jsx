import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import Item from './Item';

export default class ListItemManager extends PureComponent {
  render () {
    const { list, toggleModal, deleteItem } = this.props;
    let countOfItems = 0;
    return (
      <div className="container-fluid">
        <div className="row top-buffer">
          <div className="col-md-8" id="pageLeftBlock">
            <div className="container scrollable" id="listNavBarCards">
              <div className="card" id="listNavBar">
                <div className="card-block">
                  <Link to="/form" className="btn btn-success" id="listNavBarAddComponent">Přidat novou položku</Link>
                </div>
              </div>
              <br/>
              <div className="row" id="listItems">
              {
                list
                  .map((item, i) => {
                    countOfItems = i;
                    return (
                      <Item  {...item}
                        key={item._id}
                        i={i}
                        toggleModal={toggleModal}
                        deleteItem={deleteItem}
                      />
                    );
                  })
              }
              </div>
              <hr />
            </div>
          </div>
          <div className="col-md-4" id="pageRightBlock">
            <div className="card">
              <div className="card-block">
                <h2 className="card-title">Komponenta List</h2>
                <p className="card-text">Počet záznamů <strong><span id="countOfItems">{list.length}</span></strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
