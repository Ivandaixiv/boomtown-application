import React, { Component } from "react";
import Share from "./Share";
import { Query } from "react-apollo";
import { ALL_TAGS_QUERY } from "../../apollo/queries";
import FullScreenLoader from "../../components/FullScreenLoader";
import { ViewerContext } from "../../context/ViewerProvider";

class ShareContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => (
          <Query query={ALL_TAGS_QUERY} variables={{ filter: viewer.id }}>
            {({ loading, error, data }) => {
              if (loading) return <FullScreenLoader />;
              if (error) return `Error! ${error.message}`;
              if (data) return <Share tags={data.tags} />;
            }}
          </Query>
        )}
      </ViewerContext.Consumer>
    );
  }
}

export default ShareContainer;
