import * as React from "react";
import { Component } from "react";
import { Provider } from "mobx-react";
import { rootStore } from "./Store/RootStore";
import { Container } from "@material-ui/core";
import SearchScreen from "./Containers/SearchScreen/SearchScreen";

export class App extends Component {
  render() {
    return (
      <Provider {...rootStore}>
        <SearchScreen />
      </Provider>
    );
  }
}
