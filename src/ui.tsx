import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.scss';

// components
import Icon from './components/Icon/index';
import Error from './components/Error/index';
import Input from './components/Input/index';

// data
import icons from '../icons.json';

// types
import { IIcon } from './types';

type AppState = {
  iconList: IIcon[];
  searchQuery: string;
  filteredIconList: IIcon[];
};

type AppProps = {};

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);

    this.state = {
      iconList: icons.items,
      searchQuery: '',
      filteredIconList: [],
    };
  }

  handleSearchChange = (value) => {
    const { iconList } = this.state;
    const filteredIconList = iconList.filter(
      (icon) => icon.name.indexOf(value.toLowerCase()) !== -1
    );

    this.setState({
      searchQuery: value,
      filteredIconList,
    });
  };

  handlePick = (icon: IIcon) => {
    parent.postMessage({ pluginMessage: { type: 'pick-icon', values: icon } }, '*');
  };

  renderIconList = () => {
    const { iconList } = this.state;

    return (
      <div className="icons-container__list">
        {iconList.map((icon) => (
          <Icon key={icon.name} icon={icon} onClick={this.handlePick} />
        ))}
      </div>
    );
  };

  renderFilteredIconList = () => {
    const { searchQuery, filteredIconList } = this.state;

    return (
      <div className="icons-container__list">
        {filteredIconList.length > 0 ? (
          filteredIconList.map((icon) => <Icon icon={icon} onClick={this.handlePick} />)
        ) : (
          <Error id={'not-found'} text={`Sorry, nothing was found for "${searchQuery}".`} />
        )}
      </div>
    );
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <div>
        <Input
          id={'icon-name'}
          label={'Icon name'}
          value={searchQuery}
          className={'search-field'}
          onChange={this.handleSearchChange}
          maxLength={20}
        />

        <div className="icons-container">
          {searchQuery === '' && this.renderIconList()}
          {searchQuery !== '' && this.renderFilteredIconList()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-page'));
