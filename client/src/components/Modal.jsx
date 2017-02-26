import React, { PureComponent } from 'react';

export default class Modal extends PureComponent {
  render () {
    const { _id, _index } = this.props;
    const { checkbox, email, password, radiobutton, select, textarea, timestamp} = this.props.item;
    return(
      <div className="modal fade" id="item-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title" id="email">{`${email}`}</h4>
            </div>
            <div className="modal-body">
              <p>Timestamp: {timestamp}</p>
              <hr />
              <p>Textarea: {textarea}</p>
              <hr />
              <p>Checkbox: {checkbox}</p>
              <hr />
              <p>Radiobutton: {radiobutton}</p>
              <hr />
              <p>Select: {select}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-warning" data-dismiss="modal">Zavrit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}