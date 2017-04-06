import React from 'react';
import { shallow } from 'enzyme';
import { stub } from 'sinon';
import Todo from './Todo';

describe('<Todo />', () => {

  it('exist', () => {
    const todo = {
      _id: 1,
      i: 1,
      toggleModal: {},
      deleteTodo: {},
      _source: {
        topic: "",
        description: ""
      }
    }
    const wrapper = shallow(<Todo {...todo}/>);
  });

});