import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe(' <About /> ', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.contains(<ul className="container-fluid"></ul>)).to.equal(true);
  });

});