const MediumRatingCard = ({ image, name, rating, description }) => {
	return (
		<div className="medium-rating-card">
			<div className="medium-rating-card-image-group">
				<img src={image} className="medium-rating-card-image" />
				<div className="medium-rating-card-name-group">
					<p>{name}</p>
					<p>{rating}</p>
				</div>
			</div>
			<p className="medium-rating-card-description">{description}</p>
		</div>
	);
};

export default MediumRatingCard;
