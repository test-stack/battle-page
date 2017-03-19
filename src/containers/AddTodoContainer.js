import React, {Component} from 'react';
import AddTodoForm from '../components/AddTodoForm';

export default class AddTodoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: false,
      successSaved: false,
      saveInProgress: false,
      validationError: false,
      topic: '',
      tags: '',
      category: '',
      shareTodo: 'shareOff',
      notification: false,
      description: ''
    };
    this.submit = this.submit.bind(this);
    this.setItem = this.setItem.bind(this);
  }

  submit(e) {
    e.preventDefault();

    if (this.state.topic.length === 0) {
      this.setState({showAlert: true});
      this.setState({validationError: true});
      return;
    }
    this.setState({validationError: false});
    this.setState({saveInProgress: true});
    fetch('/api/todo', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify({
        topic: this.state.topic,
        tags: this.state.tags,
        category: this.state.category,
        shareTodo: this.state.shareTodo,
        notification: this.state.notification,
        description: this.state.description
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({saveInProgress: false});
        if (data.elastic.created === undefined) {
          this.setState({successSaved: false});
        } else if (data.elastic.created === true) {
          this.setState({successSaved: true});
        } else {
          this.setState({successSaved: false});
        }
        this.setState({showAlert: true});
      });
  }

  setItem(event) {
    if (document.getElementById('optionsRadios1').checked === true) {
      this.setState({shareTodo: 'shareOff'});
    } else {
      this.setState({shareTodo: 'shareOn'});
    }
    this.setState({topic: document.getElementById('topic').value});
    this.setState({tags: document.getElementById('tags').value});
    this.setState({category: document.getElementById('category').value});
    this.setState({notification: document.getElementById('notification').checked});
    this.setState({description: document.getElementById('description').value});
  }

  render() {
    return <AddTodoForm
      submit={this.submit}
      setItem={this.setItem}
      showAlert={this.state.showAlert}
      saveInProgress={this.state.saveInProgress}
      validationError={this.state.validationError}
      successSaved={this.state.successSaved}
    />
  }
}
