import './cards.css'

const Cards = (props) => {
    const {imgSrc, productName, mrp, brand} = props;

    return (
        <div className="card-container valign-wrapper ">
            <img src={imgSrc} alt='img' className="card-image" />

            <div className="card-details-container">
                <div>
                 {productName}
                </div>
                <div>
                 {brand}
                </div>
                <div>
                 Rs. {mrp}
                </div>
            </div>
        </div>
    )
}

export default Cards;
