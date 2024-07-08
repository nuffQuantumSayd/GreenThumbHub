import CommonButton from "./button";

const SmallPlantCard = ({ title, img, description, price }) => {
	const buttonTitle = "Buy Now";
	return (
		<div className="small-plant-card">
			<img src={img} />
			<div className="small-plant-card-info-group">
				<p className="small-plant-card-title">{title}</p>
				<p className="small-plant-card-description">{description}</p>
				<div className="small-plant-card-button-group">
					<p className="small-plant-card-price">${price}</p>
					<CommonButton title={buttonTitle} />
				</div>
			</div>
		</div>
	);
};

export default SmallPlantCard;
