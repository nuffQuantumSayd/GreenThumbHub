import CommonButton from "./button"

const MediumPlantCard = ({image, title, description, price}) => {
    return(
        <div className="medium-plant-card">
            <div className="medium-plant-card-container">
                <img src={image} />
                <div className="medium-plant-card-info-group">
                    <p className="medium-plant-card-title">{title}</p>
                    <p>{description}</p>
                    <p>${price}</p>
                    <CommonButton title="Buy Now"/>
                </div>
            </div>
        </div>
    )
}

export default MediumPlantCard