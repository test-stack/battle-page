import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import Item from './Item';

export default class ListItemManager extends PureComponent {
  render () {
    const { list, toggleModal, deleteItem } = this.props;
    return (
      <div className="container scrollable" id="listNavBarCards">
        <div className="card" id="listNavBar">
          <div className="card-block">
            <Link to="/form" className="btn btn-success" id="listNavBarAddComponent">Pridat polozku</Link>
          </div>
        </div>
        <br/>
        <div className="row" id="listItems">
        {
          list
            .map((item, i) => {
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

    );
  }
}
