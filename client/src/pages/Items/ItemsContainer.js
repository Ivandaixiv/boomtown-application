import React, { Component } from "react";
import Items from "./Items";
// import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from "react-apollo";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";

class ItemsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Query query={ALL_ITEMS_QUERY} variables={{ filter: 1 }}>
        {({ loading, error, data }) => {
          /* if (loading) return <FullScreenLoader inverted />; */
          if (loading) return "Loading";
          if (error) return <p>{`Error! ${error.message}`}</p>;
          /* console.log("Data: ", data) */
          return (
            <div className={this.props.classes.base}>
              <Items items={data.items} />
            </div>
          );
        }}
      </Query>
    );
  }
}

// export default withStyles(styles)(ItemsContainer);

export default withStyles(styles)(ItemsContainer);
