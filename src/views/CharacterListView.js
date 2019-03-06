import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

import { getPeople } from '../actions/index'
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    if (this.props.fetching) {
      <div>Getting People In Progress...</div>;
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

function mapStateToProps(state) {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  };
}

export default connect(
  mapStateToProps,
  { getPeople }
)(CharacterListView);
