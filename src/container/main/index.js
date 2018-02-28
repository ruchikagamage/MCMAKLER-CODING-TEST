import React, { Component } from "react";
import { Wrapper, StatusMessage } from "./../../component/view";
import ListItem from "./../../component/listItem";
import { connect } from "react-redux";
import * as HouseList from "./../../actions/houseList";
import { HouseListLoader } from "./../../component/loaders";
import ErrorType from "./../../errorMessages";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hosueList: null,
      errorMessage: null,
      status: null
    };
  }

  componentDidMount() {
    this.props.dispatch(HouseList.getHouseList(this.props));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.houses) {
      if (nextProps.houses === "ERROR") {
        this.setState({ errorMessage: ErrorType.ERROR_01, status: "ERROR" });
      } else if (nextProps.fetching === false && nextProps.houses.length <= 0) {
        this.setState({ errorMessage: ErrorType.ERROR_02, status: "WARNING" });
      } else {
        this.setState({ hosueList: nextProps.houses });
      }
    }
  }

  housesList(data) {
    return data.map((item, i) => {
      return <ListItem item={item} key={i} />;
    });
  }

  errorMsg(data) {
    return <StatusMessage status={this.state.status}>{data}</StatusMessage>;
  }

  render() {
    return (
      <Wrapper>
        {this.state.hosueList && this.housesList(this.state.hosueList)}
        {this.state.errorMessage && this.errorMsg(this.state.errorMessage)}
        {this.props.fetching && <HouseListLoader />}
        {this.props.fetching && <HouseListLoader />}
        {this.props.fetching && <HouseListLoader />}
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    houses: state.houseList.houses,
    fetching: state.houseList.fetching
  };
}

export default connect(mapStateToProps)(Main);
