import React, { Component } from 'react';
import './SpecsBar.css';
import {ServingsSpec} from './ServingsSpec/ServingsSpec.js';
import {DurationSpec} from './DurationSpec/DurationSpec.js';
import {DifficultySpec} from './DifficultySpec/DifficultySpec.js';

export class SpecsBar extends Component {
	render() {
		return (
			<div className="specs-bar">
				<div className="row">
					<div className="spec-element" className="col-sm-4 text-center">
						<DifficultySpec/>
					</div>
					<div className="spec-element" className="col-sm-4 text-center">
						<ServingsSpec/>
					</div>
					<div className="spec-element" className="col-sm-4 text-center">
						<DurationSpec/>
					</div>
				</div>
			</div>
		);
	}
}