import { connect } from 'react-redux';
import RepositoryList from './repositoryList';

const mapStateToProps = state => ({
    selectedRepositoryIds: state.selectedRepositoryIds,
});

export default connect(mapStateToProps)(RepositoryList);