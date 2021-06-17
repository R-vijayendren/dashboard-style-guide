import React, { useState } from 'react';
import './Dashboard.scss';

import { DASHBOARD_TODO_LIST_DATA } from './constants';

const DashboardToDoList = () => {
  const [todoList, setTodoList] = useState(DASHBOARD_TODO_LIST_DATA);
  const [todo, setTodo] = useState('');
  let selectedTodosLength = todoList.filter(item => item.selected).length;
  const handleCheckSelect = ({ target }) => {
    const prevTodo = [...todoList];
    const selectedTodo = prevTodo.findIndex(
      todo => todo.id === Number(target.id)
    );
    prevTodo[selectedTodo].selected = !prevTodo[selectedTodo].selected;
    setTodoList(prevTodo);
  };
  const handleNewTodo = () => {
    if (todo) {
      const prevTodo = [...todoList];
      prevTodo.push({ id: prevTodo.length + 1, selected: false, todo });
      setTodoList(prevTodo);
    }
  };
  return (
    <div className='todo-wrapper'>
      <div className='todo-list'>
        {todoList.map(todoItem => (
          <div
            key={todoItem.id}
            className={`todo-row ${
              todoItem.selected ? 'todo-active' : 'todo-inactive'
            }`}
          >
            <input
              type='checkbox'
              name={`todo-${todoItem.id}`}
              id={todoItem.id}
              checked={todoItem.selected}
              onChange={handleCheckSelect}
              className={
                todoItem.selected
                  ? 'todo-active-checkbox'
                  : 'todo-inactive-checkbox'
              }
            />
            <div className='todo-description'>{todoItem.todo}</div>
          </div>
        ))}
      </div>
      <div className='todo-new'>
        <input
          className='new-todo-input'
          type='text'
          placeholder='Write some to-do task here'
          onChange={({ target: { value } }) => setTodo(value)}
        />
        <button onClick={handleNewTodo} className='add-btn'>
          Add
        </button>
      </div>
      <div className='todo-status-container'>
        <div className='status-buttons'>
          <button className='all-status'>All</button>
          <button className='active-status'>Active</button>
        </div>
        <button className='todo-completed'>
          Clear Completed ({selectedTodosLength})
        </button>
      </div>
    </div>
  );
};

export default DashboardToDoList;
