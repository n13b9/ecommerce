import React from 'react';
import {connect} from 'react-redux';


import CollectionItem from '../../components/collection-item/collection-item.component';

import {selectCollection} from '../../redux/shop/shop.selectors';
 
import './collection.styles.scss';


const CollectionPage =(match)=>{
	return (
	<div className='category'>
		<h2> colelction Page </h2>

	</div>
	)};

const mapStateToProps=(state,ownProps)=>({
	collection:selectCollection(ownProps.map.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);


