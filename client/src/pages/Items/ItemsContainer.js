import React, { Component } from "react";
import Items from "./Items";
import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import { ViewerContext } from "../../context/ViewerProvider";

class ItemsContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => (
          <Query query={ALL_ITEMS_QUERY} variables={{ filter: viewer.id }}>
            {({ loading, error, data }) => {
              if (loading) return <FullScreenLoader inverted />;
              if (error) return <p>{`Error! ${error.message}`}</p>;
              return (
                <div className={this.props.classes.base}>
                  <Items items={data.items} />
                </div>
              );
            }}
          </Query>
        )}
      </ViewerContext.Consumer>
    );
  }
}

export default withStyles(styles)(ItemsContainer);
