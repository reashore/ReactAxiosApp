
import React from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.url = this.props.url;
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    if (!this.state.data) {
      this.getData(this.url)
        .then(data => this.setState({data: data}))
        .catch(error => console.log(error));
    }
  }

  async getData(url) {
    const result = await axios(url);
    return result.data;
  }

  render() {
    return (
      <div>
        <h1>React Axios App</h1>
        {this.state.data ? this.formatTable(this.state.data) : "Loading..."}
      </div>
    );
  }

  formatTable(dataArray) {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Vendor Id</th>
            <th>Name</th>
            <th>OCG Number</th>
            <th>Managing QS Area</th>
            <th>Primary Address</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((data, n) => {
            return (
              <tr key={`row ${n}`}>
                <td>{data.vendorId}</td>
                <td>{data.name}</td>
                <td>{data.ocgNumber}</td>
                <td>{data.managingQsArea}</td>
                <td>{data.primaryAddress}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default App;
