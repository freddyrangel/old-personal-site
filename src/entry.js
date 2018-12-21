import React      from 'react';
import { render } from 'react-dom';
import App        from 'components/app';

function mount() {
  const mountingPoint = document.getElementById("app");
  render(<App/>, mountingPoint);
}

mount();
