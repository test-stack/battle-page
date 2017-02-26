import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import Item from './Item';

export default class ListItemManager extends PureComponent {
  render () {
    const { list } = this.props;
    return (
      <div className="container scrollable">
        <div className="card">
          <div className="card-block">
            <Link to="/form" className="btn btn-success">Pridat polozku</Link>
          </div>
        </div>
        <br/>
        <div className="row">
        {
          list
            .map((item, i) => {
              return (
                <Item  {...item}
                  key={item._id}
                  i={i}
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
