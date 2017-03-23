import React from 'react';
import { shallow, mount } from 'enzyme';
import { stub } from 'sinon';
import AddTodoForm from './AddTodoForm';

describe('<AddTodoForm />', () => {

  it('exist', () => {
    const wrapper = shallow(<AddTodoForm/>);
    const inst = wrapper.instance();
    expect(inst).toBeInstanceOf(AddTodoForm);
  });

  it('should render h1 Nové Todo', () => {
    const wrapper = shallow(<AddTodoForm />);
    const h1 = <h1 className="card-title">Nové Todo</h1>;
    expect(wrapper.contains(h1)).toBeTruthy();
  });

  it('should render form', () => {
    const wrapper = shallow(<AddTodoForm />);
    expect(wrapper.find('form').exists()).toBeTruthy();
  });

  it('exist input topic', () => {
    const wrapper = shallow(<AddTodoForm />);
    expect(wrapper.find('input#topic').exists()).toBeTruthy();
  });

  it('input topic send change', () => {
    const setItem = stub();
    const AddTodoFormComponent = mount(<AddTodoForm setItem={setItem} />);
    AddTodoFormComponent.find('input#topic').simulate('change');
    expect(setItem.calledOnce).toBeTruthy();
  });

  it('exist input tags', () => {
    const wrapper = shallow(<AddTodoForm />);
    expect(wrapper.find('input#tags').exists()).toBeTruthy();
  });

  it('input tags send change', () => {
    const setItem = stub();
    const AddTodoFormComponent = mount(<AddTodoForm setItem={setItem} />);
    AddTodoFormComponent.find('input#tags').simulate('change');
    expect(setItem.calledOnce).toBeTruthy();
  });

  it('exist select category', () => {
    const wrapper = shallow(<AddTodoForm />);
    expect(wrapper.find('select#category').exists()).toBeTruthy();
  });

  it('exist select category with five options', () => {
    const wrapper = shallow(<AddTodoForm/>);
    const categories = wrapper.find('select#category option').map(node => node.text());
    expect(categories).toEqual(expect.arrayContaining(['Počítače','Práce','Osobní','Rodina','Nákupy']));
  });

  it('select category send change', () => {
    const setItem = stub();
    const AddTodoFormComponent = mount(<AddTodoForm setItem={setItem} />);
    AddTodoFormComponent.find('select#category').simulate('change');
    expect(setItem.calledOnce).toBeTruthy();
  });

  it('exist textarea description', () => {
    const wrapper = shallow(<AddTodoForm/>);
    expect(wrapper.find('textarea#description').exists()).toBeTruthy();
  });

  it('textarea description send change', () => {
    const setItem = stub();
    const AddTodoFormComponent = mount(<AddTodoForm setItem={setItem} />);
    AddTodoFormComponent.find('textarea#description').simulate('change');
    expect(setItem.calledOnce).toBeTruthy();
  });

  it('exist radioButton shareOff', () => {
    const wrapper = shallow(<AddTodoForm/>);
    expect(wrapper.find('input[type="radio"][name="optionsRadios"]#optionsRadios1').exists()).toBeTruthy();
  });

  it('radiobutton shareOff send change', () => {
    const setItem = stub();
    const AddTodoFormComponent = mount(<AddTodoForm setItem={setItem} />);
    AddTodoFormComponent.find('input#optionsRadios1').simulate('change');
    expect(setItem.calledOnce).toBeTruthy();
  });

  it('exist radioButton shareOn', () => {
    const wrapper = shallow(<AddTodoForm/>);
    expect(wrapper.find('input[type="radio"][name="optionsRadios"]#optionsRadios2').exists()).toBeTruthy();
  });

  it('radiobutton shareOn send change', () => {
    const setItem = stub();
    const AddTodoFormComponent = mount(<AddTodoForm setItem={setItem} />);
    AddTodoFormComponent.find('input#optionsRadios2').simulate('change');
    expect(setItem.calledOnce).toBeTruthy();
  });

  it('exist checkbox notification', () => {
    const wrapper = shallow(<AddTodoForm/>);
    expect(wrapper.find('input[type="checkbox"]#notification').exists()).toBeTruthy();
  });

  it('checkbox notification send change', () => {
    const setItem = stub();
    const AddTodoFormComponent = mount(<AddTodoForm setItem={setItem} />);
    AddTodoFormComponent.find('input#notification').simulate('change');
    expect(setItem.calledOnce).toBeTruthy();
  });

  it('exist button saveTodoButton', () => {
    const wrapper = shallow(<AddTodoForm/>);
    expect(wrapper.find('button[type="submit"]#saveTodoButton').exists()).toBeTruthy();
  });

  it('button saveTodoButton has text Ulozit todo', () => {
    const AddTodoFormComponent = mount(<AddTodoForm />);
    expect(AddTodoFormComponent.find('button#saveTodoButton').text()).toBe('Uložit Todo');
  });

  it('button saveTodoButton has text Ukládám ... when saving progress', () => {
    const saveInProgress = true;
    const AddTodoFormComponent = mount(<AddTodoForm saveInProgress={saveInProgress} />);
    expect(AddTodoFormComponent.find('button#saveTodoButton').text()).toBe('Ukládám ...');
  });

  describe('alertbox', () => {

    it('saved successfully', () => {
      const showAlert = true;
      const validationError = false;
      const successSaved = true;
      const wrapper = mount(<AddTodoForm showAlert={showAlert} validationError={validationError} successSaved={successSaved} />);
      expect(wrapper.find('div#textBox').text()).toBe('Todo úspěšně uloženo.');
    });

    it('saved failed', () => {
      const showAlert = true;
      const validationError = false;
      const successSaved = false;
      const wrapper = mount(<AddTodoForm showAlert={showAlert} validationError={validationError} successSaved={successSaved} />);
      expect(wrapper.find('div#textBox').text()).toBe('Todo se nezdařilo uložit.');
    });

    it('show validation error', () => {
      const showAlert = true;
      const validationError = true;
      const wrapper = mount(<AddTodoForm showAlert={showAlert} validationError={validationError} />);
      expect(wrapper.find('div#validationErrorBox').text()).toBe('Todo nelze uložit. Pole Téma musí být vyplněno.');
    });

  });

  it('submit form', () => {
    const submit = stub();
    const AddTodoFormComponent = mount(<AddTodoForm submit={submit} />);
    AddTodoFormComponent.find('form').simulate('submit');
    expect(submit.calledOnce).toBeTruthy();
  });

  it('should render h2 Todo Formulář Komponenta', () => {
    const wrapper = shallow(<AddTodoForm />);
    const h2 = <h2 className="card-title">Todo Formulář Komponenta</h2>;
    expect(wrapper.contains(h2)).toBeTruthy();
  });

});