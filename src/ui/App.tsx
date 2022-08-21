import * as React from "react";

/**
 * Interface for React `props`
 */
export interface AppProps {

}

export default (props: AppProps) => {
	return <div className="columns is-vcentered is-centered is-full-height">
		<div className="column is-three-fifths">
			<div className="box">
				<h1 className="title">Welcome</h1>
				<div className="block">
					Thanks for stopping by! The content for my website is still under construction. Please check back again soon; until then, check out my <strong>LinkedIn</strong> and <strong>Github!</strong>
				</div>
				<div className="block">
					<strong>Tanner D. Mckenney</strong>
				</div>

				<div className="buttons has-addons is-centered">
					<a href="https://github.com/tdmckenney0" className="button">Github</a>
					<a href="https://www.linkedin.com/in/tmckenney7" className="button">LinkedIn</a>
					<a href="https://github.com/tdmckenney0/tmckenney.com" className="button">Source</a>
				</div>
			</div>
		</div>
	</div>;
};
