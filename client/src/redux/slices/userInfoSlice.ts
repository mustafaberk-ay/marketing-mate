import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfoState } from '../../type';

const initialState: UserInfoState = {
  facebookUserAccessToken: '',
  gmailAddress: '',
  gmailAppPassword: '',
  isWhatsappSetupCompleted: false,
  salesPhoneNumber: '',
  isSetupCompleted: false,
  token: '',
  userId: '',
  isUserInfoExists: false
};

export const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setFacebookUserAccessToken: (state, action: PayloadAction<string>) => {
      state.facebookUserAccessToken = action.payload;
    },
    setGmailAddress: (state, action: PayloadAction<string>) => {
      state.gmailAddress = action.payload;
    },
    setGmailAppPassword: (state, action: PayloadAction<string>) => {
        state.gmailAppPassword = action.payload
    },
    setIsWhatsappSetupCompleted: (state, action: PayloadAction<boolean>) => {
        state.isWhatsappSetupCompleted = action.payload
    },
    setSalesPhoneNumber: (state, action: PayloadAction<string>) => {
        state.salesPhoneNumber = action.payload
    },
    setIsSetupCompleted: (state, action: PayloadAction<boolean>) => {
        state.isSetupCompleted = action.payload
    },
    setToken: (state, action: PayloadAction<string>) => {
        state.token = action.payload
    },
    setUserId: (state, action: PayloadAction<string>) => {
        state.userId = action.payload
    },
    setIsUserInfoExists: (state, action: PayloadAction<boolean>) => {
        state.isUserInfoExists = action.payload
    }
  },
});

export const {
  setFacebookUserAccessToken,
  setGmailAddress,
  setGmailAppPassword,
  setIsWhatsappSetupCompleted,
  setSalesPhoneNumber,
  setIsSetupCompleted,
  setToken,
  setUserId,
  setIsUserInfoExists
} = userSlice.actions;

export default userSlice.reducer;