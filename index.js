import React from "react"
import { render } from "react-dom"
import injectTapEventPlugin from "react-tap-event-plugin"
import App from "./js/containers/App"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

injectTapEventPlugin()

render(
	<MuiThemeProvider>
		<App />
	</MuiThemeProvider>,
	document.getElementById("container")
);