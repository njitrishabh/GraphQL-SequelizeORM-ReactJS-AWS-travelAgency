import React, { Component } from 'react';
import QuotesTable from './QuotesTable';

class Quotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/quotes')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    items: data,
                    isLoaded: true,
                })
            });
    }

    render() {
        var isLoaded = this.state.isLoaded;
        var items = this.state.items;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div className="dashboard">
                    <div className="table-header">
                        <i className="fa fa-chevron-circle-right"></i>
                        <h2>Quotes</h2>
                    </div>
                    <QuotesTable data={items} />
                </div>
            )
        }

    }
}
export default Quotes;