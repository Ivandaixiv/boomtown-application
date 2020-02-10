import React, { Component } from "react";
import Profile from "./Profile";
import FullScreenLoader from "../../components/FullScreenLoader";
import { ViewerContext } from "../../context/ViewerProvider";
import { Query } from "react-apollo";
import { ALL_USER_ITEMS_QUERY } from "../../apollo/queries";
import PropTypes from "prop-types";

class ProfileContainer extends Component {
  render() {
    const { userid } = this.props.match.params;
    return (
      this.props && (
        <ViewerContext.Consumer>
          {({ viewer }) => (
            <Query
              query={ALL_USER_ITEMS_QUERY}
              variables={{ id: (userid && userid) || viewer.id }}
            >
              {({ loading, error, data }) => {
                if (loading) return <FullScreenLoader inverted />;
                if (error) return <p>{`Error! ${error.message}`}</p>;
                return <Profile profile={data.user} />;
              }}
            </Query>
          )}
        </ViewerContext.Consumer>
      )
    );
  }
}
ProfileContainer.propTypes = {
  props: PropTypes.exact({
    match: PropTypes.bool.isRequired
  })
};
export default ProfileContainer;
