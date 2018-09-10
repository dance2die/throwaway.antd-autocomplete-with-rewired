import React from "react";
import ReactDOM from "react-dom";
import { AutoComplete, Icon, Input } from "antd";

import "antd/dist/antd.css";
import "./styles.css";

function onSelect(value) {
  console.log("onSelect", value);
}

class App extends React.Component {
  state = {
    dataSource: []
  };

  handleSearch = value => {
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value]
    });
  };

  render() {
    const { dataSource } = this.state;
    return (
      <AutoComplete
        dataSource={dataSource}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={this.handleSearch}
        placeholder="input here"
      >
        <Input suffix={<Icon type="search" />} />
      </AutoComplete>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
