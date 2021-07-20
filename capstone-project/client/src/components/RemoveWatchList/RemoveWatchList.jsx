import React from 'react';
import deleteIcon from "../../assets/icon/delete.png"
import "../RemoveWatchList/RemoveWatchList.scss"

function RemoveWatchList() {
	return (
		<>
			{/* <span className="remove-watchlist__style">Remove from favourites</span> */}
			<img className="delete-icon__style" src={deleteIcon} alt="delete-icon"/>
		</>
	);
};

export default RemoveWatchList;