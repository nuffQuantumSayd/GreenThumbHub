import reviews from "../reviews.js";
import LargePlantCard from "../smallComponents/largePlantCard.jsx";
import MediumRatingCard from "../smallComponents/mediumRatingCard";
import plants from '../plantList.js'

const MainContentReviews = () => {
	const review = reviews.slice(0, 3);
  const largePlantReview = plants.at(2)

	return (
		<div>
			<p id="card-intro">Customer Reviews</p>
			<div className="customer-reviews-container">
				{review.map((rev) => {
					return (
						<MediumRatingCard
							key={rev.id}
							image={rev.image}
							name={rev.name}
							rating={rev.rating}
							description={rev.review}
						/>
					);
				})}
			</div>
			<p id="card-intro">Our Best o2</p>
			<div className="large-plant-card-container">
				<LargePlantCard 
          image={largePlantReview.image}
          description={largePlantReview.description}
        />
			</div>
		</div>
	);
};

export default MainContentReviews;
