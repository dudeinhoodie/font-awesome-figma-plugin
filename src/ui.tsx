import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.scss';
import { IIcon } from './types';

// components
import Icon from './components/Icon/index';
import Input from './components/Input/index';

// data
import icons from '../icons.json';

type AppState = {
    icons: IIcon[];
    searchQuery: string;
    searchResult: IIcon[];
};

type AppProps = {};

class App extends Component<AppProps, AppState> {
    constructor(props) {
        super(props);

        this.state = {
            icons: icons.items,
            searchQuery: '',
            searchResult: [],
        };
    }

    handleSearchChange = (value) => {
        console.warn('value');
        console.warn(value);
    };

    render() {
        const { icons, searchQuery, searchResult } = this.state;

        return (
            <div>
                <Input
                    id={'icon-name'}
                    label={'Icon name'}
                    value={searchQuery}
                    className={'search-field'}
                    onChange={this.handleSearchChange}
                />

                <div className="icon-list">
                    {icons.map((icon) => (
                        <Icon icon={icon} />
                    ))}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('react-page'));
