import React from 'react';
import { storiesOf } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from '../src/components/card';

storiesOf('Card', module)
  .addDecorator((story) => (
    <div style={{textAlign: 'center'}}>
      {story()}
    </div>
  ))
  .add('without props', () => (<Card />))
  .add('with some props', () => (<Card title="BOOM" linkText="GO" text="Basic Prop Text"/>));
