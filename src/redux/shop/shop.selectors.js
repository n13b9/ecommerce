import {createSelector} from 'reselect';

const selectShop =state=>state.shop;

const selectCollections=createSelector(
		[selectShop],
		shop=>shop.shopItems
	)


