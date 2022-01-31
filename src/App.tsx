import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import {OnAction} from "onaction";

// class OnAction implements IOnActionListener {
//   private static _instance: OnAction = new OnAction();
//   private onActionListener = new Object();
//   private onActionHashMap = new Map();

//   constructor() {
//     if (OnAction._instance) {
//       throw new Error(
//         "Error: Instantiation failed: Use OnAction.getInstance() instead of new."
//       );
//     }
//     OnAction._instance = this;
//   }

//   public static getInstance(): OnAction {
//     return OnAction._instance;
//   }

//   onAction(it: any): void {
//     console.log("OnAction");
//   }

//   public doAction(type: string, it: any) {
//     (this.onActionHashMap.get(type) as IOnActionListener).onAction(it);
//   }

//   public addOnAction(
//     onActionType: string,
//     onActionWithListener: IOnActionListener
//   ) {
//     this.onActionListener = onActionWithListener;
//     this.onActionHashMap.set(onActionType, this.onActionListener);
//   }
// }

interface IOnActionListener {
  onAction(it: any): void;
}

function App() {
  useEffect(() => {
    let ONE_ACTION = "ONE_ACTION";

    var action: IOnActionListener = {
      onAction: (it: any) => {
        console.log(it);
        alert(it)
      },
    };

    OnAction.getInstance().addOnAction(ONE_ACTION, action);
    OnAction.getInstance().doAction(ONE_ACTION, "NEW TEXT");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
