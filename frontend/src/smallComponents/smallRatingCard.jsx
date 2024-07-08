import star from "/images/icons/Star.png"
import halfStar from "/images/icons/half-star.png"

const SmallRatingCard = ({title, description}) => {
    

    return(
        <div className="small-rating-card">
            <p className="small-rating-card-title">{title}</p>
            <span>
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={halfStar} />
            </span>
            <p>{description}</p>
        </div>
    )
}
export default SmallRatingCard