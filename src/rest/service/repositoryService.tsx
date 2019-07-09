import get from '../provider/api';
import * as React from 'react';

export function withRepositoriesRest() {
  return get
    .get('/orgs/the-road-to-learn-react/repos');
}

export const withFetching = (Cmp) =>
  class WithFetching extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        repositoriesFetch: {
          loading: false,
          repositories: []
        },
        error: null,
      };
    }

    componentDidMount() {
      this.setState({ repositoriesFetch: { loading: true } });

      get.get('/orgs/the-road-to-learn-react/repos')
        .then(result => this.setState(
          {
            repositoriesFetch: {
              loading: false,
              repositories: result.data.slice(0, 20),
            }
          }))
        .catch(error => this.setState({
          error,
          repositoriesFetch: {
            loading: false,
          }
        }));
    }

    render() {
      return <Cmp {...this.props} {...this.state} />;
    }
  };