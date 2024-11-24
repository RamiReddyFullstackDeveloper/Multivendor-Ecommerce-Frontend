import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; //it creates action types and action creators
import api from "../../api/api";

//create dispatch function for adminLogin
//this function will get invoke by Admin Login component , when admin click on the Login button from onSubmit() function in AdminLogin.js
export const adminLogin = createAsyncThunk(
  "auth/admin_login", ///this field is mandatory bcz it will tell clearly what operation  we do , but name we can specify any name
  async (adminLoginInfo, { rejectWithValue, fulfillWithValue }) => {
    //{rejectedWithValue, fulfillWithvalue} these two wre we destructed
    console.log(adminLoginInfo);
    try {
      const { data } = await api.post("/admin-login", adminLoginInfo, {
        withCredentials: true,
      });

      //from above data extract the acceessTokken that we set at authController.js in backend and add t the localStorage
      localStorage.setItem("accessToken", data.accessToken); //we can see this in browser dev tools under localstorage
      //localStorage comes in Storage class inbuilt class so no need to  import

      console.log("authReducer to express js call ===>", data);
      return fulfillWithValue(data);
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data); //these two reject and fulfilled with Value are passing the info to extraReducer function below as a payload
    }
  }
);

const authReducer = createSlice({
  name: "auth", //this is name of the out store
  initialState: {
    successMessage: "",
    errorMessage: "",
    userInfo: "",
    loader: false,
  },
  reducers: {
    //this message clearFunction wil call automatically when use clicks on the AdminLogin button from useEffect function and removing the old msg.
    messageClear: (state, payload) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    //here builder is the latest version that we are using only for
    builder.addCase(adminLogin.pending, (state, { payload }) => {
      //here payload nothing but response from the action when we hit the AdminLogin and it will hit the expree js admin-login function in controller and  that will return sme reponse. this is the payload
      //here state means above initalState that will cary here
      state.loader = true; //to debug whether value get changing or not use redux dev tool for chrome and check
      //here loader value get turned to true when user clicks on the admin login button from admin login component
    });

    //here success message and error messages are coming from backend authController.js file

    //this case for disabling the loader and setting error message to errorMessage and this errorMessage we are setting to toast at AdminLogin by using useSelector
    builder.addCase(adminLogin.rejected, (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error;
    });

    //this case for disabling the loader and setting success message to successMessage and this successMessage we are setting to toast at AdminLogin by using useSelector
    builder.addCase(adminLogin.fulfilled, (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message; //for this u can refer backend authController.js file
    });
  },
});

export const { messageClear } = authReducer.actions;
export default authReducer.reducer; //this is very important to call .reduce at end else in the console u will see msg like Store does not have valid reducer.
