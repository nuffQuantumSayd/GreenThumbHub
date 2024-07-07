import CommonButton from "../smallComponents/button";
import playButton from "/images/icons/play-button.png";

const MainContentTop = () => {
	const buttonTitle = "Explore";

	return (
		<div className="content-top-container">
			<div className="content-top-container-demo-group">
				<p className="content-top-container-demo-group-title">
					Breath Natural
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
			</div>
			<div>
				<h1>card component</h1>
			</div>
		</div>
	);
};

export default MainContentTop;
