import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { OnAction } from "onaction";

let ONE_ACTION = "ONE_ACTION";

interface IOnActionListener {
  onAction(it: any): void;
}

// Check if OnAction is available
interface Video {
  title: string;
  videoUrl: string;
  speaker: string;
}

const getAction = () => {
  // Define the API URL
  const apiUrl =
    "https://my-json-server.typicode.com/kotlin-hands-on/kotlinconf-json/videos";

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      OnAction.getInstance().doAction(
        ONE_ACTION,
        data
      );
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

function App() {
  useEffect(() => {
    const action: IOnActionListener = {
      onAction: (it: Video[]) => {
       
        it.forEach((item: Video) => {
          document.getElementById(
            "mText"
          )!.innerHTML += `<h3>${item.title}</h3>`;
          document.getElementById(
            "mText"
          )!.innerHTML += `<a href="${item.videoUrl}" target="_blank">${item.videoUrl}</a>`;
          document.getElementById(
            "mText"
          )!.innerHTML += `<p>${item.speaker}</p>`;
        });
      },
    };

    // Register the action listener
    OnAction.getInstance().addOnAction(ONE_ACTION, action);

    document.getElementById("bAction")!.addEventListener("click", () => {
      getAction();
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>OnAction - Typescript</h1>
        <button id="bAction">User OnAction - Get some JSON</button>
        <p id="mText"></p>
      </header>
    </div>
  );
}

export default App;
