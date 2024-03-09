import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductDetailsState } from '../../type';

const initialState: ProductDetailsState = {
	productName: '',
	productFeatures: '',
	targetAudience: '',
	contentTone: '',
	isRequestedImage: false,
	generatedContent: ''
};

export const productDetailsSlice = createSlice({
	name: 'productDetails',
	initialState,
	reducers: {
		setProductName: (state, action: PayloadAction<string>) => {
			state.productName = action.payload;
		},
		setProductFeatures: (state, action: PayloadAction<string>) => {
			state.productFeatures = action.payload;
		},
		setTargetAudience: (state, action: PayloadAction<string>) => {
			state.targetAudience = action.payload;
		},
		setContentTone: (state, action: PayloadAction<string>) => {
			state.contentTone = action.payload;
		},
		setIsRequestedImage: (state, action: PayloadAction<boolean>) => {
			state.isRequestedImage = action.payload;
		},
		setGeneratedContent: (state, action: PayloadAction<string>) => {
			state.generatedContent = action.payload
		}
	},
});

export const {
	setProductName,
	setProductFeatures,
	setTargetAudience,
	setContentTone,
	setIsRequestedImage,
	setGeneratedContent
} = productDetailsSlice.actions;

export default productDetailsSlice.reducer