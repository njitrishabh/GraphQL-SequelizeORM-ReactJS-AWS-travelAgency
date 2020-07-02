import React, { Component } from 'react';

class QuotesTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            tableData: this.props.data.map(function (item) {
                let result = {
                    id: item["id"],
                    name: item["name"],
                    destination: item["destination_location"]
                };
                return result;
            }),
            quoteId: '',
            show: false
        };
    }

    showModal = (event, rowId) => {
        this.setState({ show: true, quoteId: rowId });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    getKeys = function () {
        return Object.keys(this.state.tableData[0]);
    }

    getHeader = function () {
        var keys = this.getKeys();
        return keys.map((key, index) => {
            return <th key={key}>{key.toUpperCase()}</th>
        })
    }

    getRowsData = function (newdata) {
        var items = newdata;
        var keys = this.getKeys();
        return items.map((row, index) => {
            return <tr key={index}><RenderRow key={index} data={row} keys={keys} />
                <button className="button view-quote" onClick={e => this.showModal(e, row.id)}>View Details</button>
            </tr>
        })
    }

    render() {
        var items = this.state.tableData;
        var data = this.state.data;
        var quote = this.state.quoteId;

        return (
            <div className="table_container">
                <Modal show={this.state.show} handleClose={this.hideModal}>

                    <ul>
                        {
                            data.map(obj => {
                                if (obj.id === quote) {
                                    return (
                                        <li key={obj.id}>
                                            <div className="modal-body">
                                                <div className="left">
                                                    <div>{obj.name}</div>
                                                    <div>ID: {obj.id}</div>
                                                    <div>PHONE#: {obj.phone}</div>
                                                </div>
                                                <div className="right">
                                                    <table>
                                                        <tr>
                                                            <th>FROM</th>
                                                            <th>DESTINATION</th>
                                                            <th>DEPART DATE</th>
                                                            <th>RETURN DATE</th>
                                                            <th>PEOPLE</th>
                                                            <th>TRANSPORTATION</th>
                                                        </tr>
                                                        <tr>
                                                            <td>{obj.departure_location}</td>
                                                            <td>{obj.destination_location}</td>
                                                            <td>{obj.departure_date}</td>
                                                            <td>{obj.return_date}</td>
                                                            <td>{obj.total_travellers}</td>
                                                            <td>{obj.transportation}</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                                else {
                                    return null;
                                }
                            })
                        }
                    </ul>
                </Modal>
                <table>
                    <thead>
                        <tr>{this.getHeader()}</tr>
                    </thead>
                    <tbody>
                        {this.getRowsData(items)}
                    </tbody>
                </table>
            </div>

        )
    }
}

const Modal = ({ handleClose, show, children }) => {
    return (
        <div className={show ? "modal display-block" : "modal display-none"}>
            <section className="modal-main">
                {children}
                <button className="button view-quote" onClick={handleClose}>Close</button>
            </section>
        </div>
    );
};

const RenderRow = (props) => {
    return props.keys.map((key, index) => {
        return <td id={index} key={props.data[key]}>{props.data[key]}</td>
    })
}

export default QuotesTable;