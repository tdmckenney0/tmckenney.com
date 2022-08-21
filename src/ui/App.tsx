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
			</div>
		</div>
	</div>;
};
