import CommonButton from "./button.jsx";

const LargePlantCard = ({ image, description }) => {
	const buttonTitle = "Explore";

	return (
		<div className="large-plant-card">
			<img src={image} />
			<div className="large-plant-card-description-group">
				<p>{description}</p>
				<p>{description}</p>
				<CommonButton title={buttonTitle} />
			</div>
		</div>
	);
};

export default LargePlantCard;
