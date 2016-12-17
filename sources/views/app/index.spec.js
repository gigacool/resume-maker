import React from 'react';
import { shallow } from 'enzyme';
import { App } from './index';


describe('views', () => {
  describe('App', () => {

    beforeEach(() => {
    });


    function getWrapper() {
      return shallow(
        <App />
      );
    }

    it('should have a `h1` component', () => {
      const wrapper = getWrapper();
      const appHeader = wrapper.find('h1');
      expect(appHeader.length).toBe(1);
    });

  });
});
