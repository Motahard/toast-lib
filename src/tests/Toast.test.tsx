import React from 'react';
import renderer from 'react-test-renderer';
import { Toast } from '../components/Toast';

it('rendering toast', () => {
  const component = renderer.create(
    <Toast 
      id='1'
      type='success'
      title='hi'
      description='hello'
      position='LEFT_TOP'
      animation='FROM_LEFT'
      space='0'
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});