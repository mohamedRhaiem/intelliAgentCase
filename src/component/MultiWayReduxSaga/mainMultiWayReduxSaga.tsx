import * as React from 'react';
import { connect } from 'react-redux';
import RepositoryListRest from '../RestWay/repositoryListRest';
import HeaderTitle from '../layout/HeaderTitle';
import { getRepositoriesSaga } from '../../redux/sagas/action';
import SelectProvider from './selectProvider';

interface IRecipeProps {
    repositories: [];
    provider: number;
    getRepositories(): any;
}

class Repositories extends React.Component<IRecipeProps, null> {
    componentDidMount() {
        this.props.getRepositories();
    }
    render() {
        const { repositories } = this.props;
        return (
            <React.Fragment>
                <HeaderTitle title="MultiWayReduxSaga" />
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

const mapDispatchToProps = {
    getRepositories: getRepositoriesSaga,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Repositories);
