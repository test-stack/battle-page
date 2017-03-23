import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe('<About />', () => {

  it('should render card h1 Battle page', () => {
    const wrapper = shallow(<About />);
    const div = <h1 className="card-title">Battle page</h1>;
    expect(wrapper.contains(div)).toEqual(true);
  });

});