import * as React from 'react';
import { connect } from 'react-redux';
import { getRepositories } from '../../redux/actionsThunk/repositoryActions'
import RepositoryListRest from '../RestWay/repositoryListRest';
import HeaderTitle from '../layout/HeaderTitle';
import SelectProvider from './selectProvider';

interface IRecipeProps {
    repositories: [];
    getRepositories(type: number): any;
    provider: number
}

class Repositories extends React.Component<IRecipeProps, null> {
    componentDidMount() {
        this.props.getRepositories(this.props.provider);
    }

    render() {
        const { repositories } = this.props;
        return (
            <React.Fragment>
                <HeaderTitle title="MultiWayReduxThunk" />
                <SelectProvider />
                <br></br>
                <RepositoryListRest repositories={repositories} />
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => ({
    repositories: state.repository.repositories,
    provider: state.repository.provider
});

export default connect(
    mapStateToProps,
    { getRepositories }
)(Repositories);
