import React, { Component } from 'react';
import Share from './Share';
import { Query } from 'react-apollo';
import { ALL_TAGS_QUERY } from '../../apollo/queries';
// import FullScreenLoader from '../../components/FullScreenLoader';
// import { Query } from 'react-apollo';
// Hint: query tags

class ShareContainer extends Component {
  render() {
    return (
      <Query query={ALL_TAGS_QUERY} variables={{filter : 1}} >
        {({ loading, error, data }) => {
          /* if (loading) return <FullScreenLoader />; */
          if( loading ) console.log(loading);
          if (error) return `Error! ${error.message}`;
          console.log(data)
          return <Share tags={data.tags}/>
        }}
      </Query>
    )

  }
}

export default ShareContainer;
