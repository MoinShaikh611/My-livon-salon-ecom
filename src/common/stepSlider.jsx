import React from "react";
import PropTypes from "prop-types";
import Slider from 'react-rangeslider'

export function StepSlider({ step, label }) {
    return (
        <div className='slider'>
            <Slider
                min={0}
                max={100}
                value={step}
                // onChangeStart={this.handleChangeStart}
                // onChange={this.handleChange}
                // onChangeComplete={this.handleChangeComplete}
            />
            <div className='value'>{label}</div>
        </div>
    )
}

export default StepSlider;
StepSlider.prototype = {
    loading: PropTypes.bool,
};
StepSlider.defaultProps = {
    loading: false,
};
