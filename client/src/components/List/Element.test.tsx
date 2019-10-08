import React from 'react';
import ReactDOM from 'react-dom';
import Element from './Element';
import { User } from "../../types/api";

it('renders with no element', () => {
  const users: User[] = [];

  const div = document.createElement('div');
  ReactDOM.render(
    <table><Element users={users} /></table>, div
  );

  expect(div.textContent).not.toContain('Peter');
  expect(div.textContent).not.toContain('Tess');
  ReactDOM.unmountComponentAtNode(div)
});
;

it('renders with one element', () => {
  const users: User[] = [{
    age: 5,
    id: 1,
    name: "Peter",
    status: "non-available"
  }];

  const div = document.createElement('div');
  ReactDOM.render(
    <table><Element users={users} /></table>, div
  );

  expect(div.textContent).toContain('Peter');
  expect(div.textContent).not.toContain('Tess');
  ReactDOM.unmountComponentAtNode(div)
});

it('renders with two elements', () => {
  const users: User[] = [{
    age: 5,
    id: 1,
    name: "Peter",
    status: "non-available"
  }, {
    age: 15,
    id: 2,
    name: "Tess",
    status: "available"
  }];

  const div = document.createElement('div');
  ReactDOM.render(
    <table><Element users={users} /></table>, div
  );

  expect(div.textContent).toContain('Peter');
  expect(div.textContent).toContain('Tess');
  ReactDOM.unmountComponentAtNode(div)
});
