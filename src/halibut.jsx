import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from './badge';
import Card from './card';
import Corner from './corner';
import COLORS, { WEATHERS } from 'chaetodon';

class Halibut extends Component {

    constructor(props) {
        super(props);
        this.renderColors = this.renderColors.bind(this);
    }

    render() {
        const TopCorner = this.props.corner;
        return (
            <div style={{ height: "100vh", position: "relative" }}>
                {COLORS(this.props.weather).map(this.renderColors)}
                {TopCorner ? <Corner><TopCorner /></Corner> : null}
                <Card>{this.props.children}</Card>
            </div>
        );
    }

    renderColors(value, index) {
        return <Badge color={value} key={index} />
    }
}

Halibut.propTypes = {
    weather: PropTypes.oneOf([
        WEATHERS.SUN,
        WEATHERS.BREEZE,
        WEATHERS.CLOUD,
        WEATHERS.FOG,
        WEATHERS.HAIL,
        WEATHERS.RAIN,
        WEATHERS.SNOW,
        WEATHERS.STORM,
        WEATHERS.WIND,
        WEATHERS.RANDOM,
        WEATHERS.STAR,
        WEATHERS.TWILIGHT,
        WEATHERS.MIDNIGHT,
        WEATHERS.NOVA,
        WEATHERS.ROSE,
        WEATHERS.CHAOS
    ])
};

Halibut.defaultProps = {
    weather: WEATHERS.RANDOM
};

export default Halibut;