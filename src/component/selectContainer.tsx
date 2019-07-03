import { connect } from 'react-redux';
import Select from "./select";

const mapDispatchToProps = (dispatch, { id, isSelected }) => ({
    toggleSelectRepository: () =>
        dispatch({
            type: 'TOGGLE_SELECT_REPOSITORY',
            id,
            isSelected,
        }),
});


export default connect(null, mapDispatchToProps)(Select);