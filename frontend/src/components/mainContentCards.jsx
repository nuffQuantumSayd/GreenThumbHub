import MediumPlantCard from "../smallComponents/mediumPlantCard";
import plants from "../plantList.js";
import SmallPlantCard from "../smallComponents/smallPlantCard.jsx";

const MainContentCards = () => {
    const plantOne = plants.at(5)
    const plantTwo = plants.at(7)

	// const renderPlants = (plantList) => {
	// 	return plantList.map(plant => <SmallPlantCard 
	// 										key={plant._id}
	// 										title={plant.title}
	// 										img={plant.img}
	// 										description={plant.description}
	// 									/>)
	// }
    
	const plantList = plants.slice(0, 6)

	return (
		<div>
			<p id="card-intro">Our Trendy Plants</p>
			<div id="medium-card-1">
				<MediumPlantCard
					image={plantOne.image}
					title={plantOne.title}
					description={plantOne.description}
					price={plantOne.price}
				/>
			</div>

			<div id="medium-card-2">
				<MediumPlantCard
					image={plantTwo.image}
					title={plantTwo.title}
					description={plantTwo.description}
					price={plantTwo.price}
				/>
			</div>
            <p id="card-intro">
                Our Top Selling
            </p>
            <div className="small-plant-card-grid">
                <div className="small-plant-card-grid-container">
                    {plantList.map((plant) => {
						return <SmallPlantCard 
							key={plant._id}
							img={plant.image}
							title={plant.title}
							description={plant.description}
						/>
					})}
                </div>
            </div>
		</div>
	);
};

export default MainContentCards;
