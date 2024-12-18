import App from "../src/App";
import React from "react";
import { hydrateRoot } from "react-dom/client";

const initialData = window.__INITIAL_DATA__;


hydrateRoot(document.getElementById("root"),<App serverData={initialData.serverData}/>)