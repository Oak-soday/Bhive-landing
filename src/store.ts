import {configureStore} from "@reduxjs/toolkit";
import workstationReducer from "./features/workstationSlice";

export default configureStore({
  reducer: {
    workstation: workstationReducer,
  },
});
