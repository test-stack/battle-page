import React, {PureComponent} from 'react';

export default class TodoModal extends PureComponent {
  render() {
    const {_id} = this.props.todo;
    const {topic, tags, category, shareTodo, notification, description, timestamp} = this.props.todo;
    return (
      <div className="modal fade" id="todo-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                      id="modalCloseButtonHeader">
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title" id="todoTitle">{`${topic}`}</h4>
            </div>
            <div className="modal-body" id="todoBody">
              <p>Timestamp: <span id="timestamp">{timestamp}</span></p>
              <hr />
              <p>Popis: <span id="description">{description}</span></p>
              <hr />
              <p>Tagy: <span id="tags">{tags}</span></p>
              <hr />
              <p>Upozornění: <span className={ `badge badge-${notification ? 'success' : 'default'}` }>
                { notification && <span id="notification">Zapnuto</span> }
                { !notification && <span id="notification">Vypnuto</span> }
              </span>
              </p>
              <hr />
              <p>Sdílení: <span className={ `badge badge-${shareTodo === "shareOn" ? 'success' : 'default'}` }>
                { shareTodo === "shareOn" && <span id="shareTodo">Zapnuto</span> }
                { shareTodo === "shareOff" && <span id="shareTodo">Vypnuto</span> }
              </span>
              </p>
              <hr />
              <p>Kategorie: <span id="category">{category}</span></p>
            </div>
            <div className="modal-footer" id="modalFooter">
              <button type="button" className="btn btn-warning" data-dismiss="modal" id="modalCloseButtonFooter">
                Zavřít
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
