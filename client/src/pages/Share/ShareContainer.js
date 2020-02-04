import React, { Component } from "react";
import Share from "./Share";
import { Query } from "react-apollo";
import { ALL_TAGS_QUERY } from "../../apollo/queries";
// import FullScreenLoader from '../../components/FullScreenLoader';
// Hint: query tags

class ShareContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Query query={ALL_TAGS_QUERY} variables={{ filter: 1 }}>
        {({ loading, error, data }) => {
          /* if (loading) return <FullScreenLoader />; */
          if (loading) return "Loading";
          if (error) return `Error! ${error.message}`;
          /* console.log("Share Data: ", data); */
          if (data) return <Share tags={data.tags} />;
        }}
      </Query>
    );
  }
}

export default ShareContainer;
