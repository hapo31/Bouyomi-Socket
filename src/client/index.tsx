import {BouyomiService} from "./service";
import * as ReactDOM from "react-dom";
import * as React from "react";

document.addEventListener("DOMContentLoaded", ()=> {
    const client = new BouyomiService();
    client.connect();
    ReactDOM.render(<AppComponent />, document.getElementById("app"));
});

class AppComponent extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                hello!!!!!!!!!!!!
            </div>
        )
    }
}