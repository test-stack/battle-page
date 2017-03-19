import React, {PureComponent} from 'react';

export default class TodoDeleteAllModal extends PureComponent {
  render() {
    const {deleteAllTodos} = this.props;
    return (
      <div className="modal fade" id="todo-delete-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="titleModal">Smazat všechny Todo</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Opravdu chcete smazat všechny todo?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" id="noCloseButton">Ne, zavřít
              </button>
              <button type="button" className="btn btn-danger" onClick={() => deleteAllTodos()} id="yesDeleteAllButton">
                Ano, smazat
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
