import React, { Component } from "react";
import { Wrapper } from "./../../component/view";
import ListItem from "./../../component/listItem";
import { connect } from "react-redux";
import * as HouseList from "./../../actions/houseList";
import { HouseListLoader } from "./../../component/loaders";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hosueList: null,
      errorMessage: null
    };
  }

  componentDidMount() {
    this.props.dispatch(HouseList.getHouseList(this.props));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.houses) {
      if (nextProps.houses === "Something Went Wrong") {
        this.setState({ errorMessage: nextProps.houses });
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
    return <h2>{data}</h2>;
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
