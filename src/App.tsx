import React from "react";
import { observer } from "mobx-react";
import { action, observable } from "mobx";
import styled from "styled-components";

@observer
export class App extends React.Component {
  @observable private count = 0;
  @action private incrementCount = () => ++this.count;
  render() {
    return (
      <AppContainer>
        <code>COUNT = {this.count}</code>
        <button onClick={this.incrementCount}>Increment</button>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  display: flex;
  align-items: center;
`;
