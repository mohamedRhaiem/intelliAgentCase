import * as React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { CALL_REST, CALL_APOLLO } from '../../redux/actionsThunk/types';
import { changeProviderSaga } from '../../redux/sagas/action';


const SelectProvider = (props) => {

    const handleChange = (e) => {
        if (e.target.value == props.provider) {
            return;
        }
        else {
            props.changeProviderSaga(e.target.value)
        }
    }
    return (
        <Row>
            <Col md={{ offset: 11 }}>
                <div className="btn-group" role="group">
                    <button type="button" className={props.provider === CALL_REST ? "btn-primary" : "btn-secondary"} onClick={handleChange} value={CALL_REST}>Rest</button>
                    <button type="button" className={props.provider === CALL_APOLLO ? "btn-primary" : "btn-secondary"} onClick={handleChange} value={CALL_APOLLO}>Apollo</button>
                </div></Col>

        </Row>
    )
}

const mapStateToProps = function (state) {
    return {
        provider: state.repository.provider
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeProviderSaga: (value) => dispatch(changeProviderSaga(value)),
  })

export default connect(mapStateToProps, mapDispatchToProps)(SelectProvider);