import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'

class App extends React.Component {

    constructor() {
        super()

        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        this.state = {
            imgs: [],
            searchfield: date
        }
    }

    onSearchCange = (event) => {
        if(event.key === 'Enter') {
            this.setState({ searchfield: event.target.value });
            console.log(event.target.value);
            fetch(`https://api.nasa.gov/planetary/apod?date=${this.state.searchfield}&api_key=mPcKGxrUynHbCeiEacakVgzOCUwl8keRYTYBNbZC`)
                .then(resp => resp.json())
                .then(data => this.setState({ imgs: data}))
        }
    }
    
    componentDidMount() {
        fetch(`https://api.nasa.gov/planetary/apod?date=${this.state.searchfield}&api_key=mPcKGxrUynHbCeiEacakVgzOCUwl8keRYTYBNbZC`)
            .then(resp => resp.json())
            .then(data => this.setState({ imgs: data}))
    }

    render() {
        return(
            <div className='tc'>
                <nav className="zone blue">
                    <ul className="main-nav">
                        <li className='f1'>Daily NASA Photos</li>
                        <li className='push'><SearchBox searchchange={this.onSearchCange} /></li>
                    </ul>
                </nav>
                <CardList imgData={this.state.imgs} />
            </div>
        )
    }
}

export default App;