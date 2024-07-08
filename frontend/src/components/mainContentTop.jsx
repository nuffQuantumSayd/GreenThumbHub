import CommonButton from "../smallComponents/button";
import SmallPlantCard from "../smallComponents/smallPlantCard";
import SmallRatingCard from "../smallComponents/smallRatingCard";
import playButton from "/images/icons/play-button.png";
import calathea from "/images/calathea-plant.png"

const MainContentTop = () => {
	const buttonTitle = "Explore";

	return (
		<div className="content-top-container">
			<div className="content-top-container-demo-group">
				<p className="content-top-container-demo-group-title">
					Breathe Natural
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Modi, repellat maiores dolore unde quasi porro impedit nisi
					quia ratione consequatur commodi sunt rerum optio ex
					accusamus cumque, reiciendis autem magni.
				</p>
				<div className="content-top-container-demo-group-buttons">
					<CommonButton title={buttonTitle} />
					<img src={playButton} />
					<a href="#">Live Demo...</a>
				</div>
				<SmallRatingCard title="Alina Patel"
				num={4.5}
				description="Lorem ipsum dolor sit amet, consectetur adipiscing
				 elit, sed do eiusmod tempor incididunt..."/>
			</div>
			<div className="content-top-container-card">
				<SmallPlantCard img={calathea}
				title="Trendy House Plant"
				description="Calathea Plant"
				price={29.99}/>
			</div>
		</div>
	);
};

export default MainContentTop;
