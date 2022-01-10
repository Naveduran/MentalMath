import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './ItemList'
import CreateButton from './CreateButton'
import DeleteButton from './DeleteButton'

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };
  
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <CreateButton disabled={this.inputIsEmpty()} />
        </form>
        <DeleteButton onClick={this.deleteLastItem} disabled={this.noItemsFound()} />
        
		<ItemList items={this.state}/>
      </div>
    );
  }
}

export default App;
