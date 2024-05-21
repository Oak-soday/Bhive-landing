import {createSlice} from "@reduxjs/toolkit";

export const workstationSlice = createSlice({
  name: "worstation",
  initialState: {
    value: 0,
    appDownload: {
      head: "Download our app now",
      text: "Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.",
    },
    footerTitle: "© Copyright 2023. Bhive Private Limited",
    workstation: {
      title: "Our Space Overview",
      data: [],
    },
  },
  reducers: {
    addWorkspace: (state, action) => {
      state.workstation.data = action.payload;
    },
  },
});

export const {addWorkspace} = workstationSlice.actions;

export default workstationSlice.reducer;
