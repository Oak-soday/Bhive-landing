import ForwardImg from "./forwardImg";

const Bulkpass = (data: {
    day_pass_discounts_percentage: Object | any,
    day_pass_price: Object | any
}) => {
    let discountDays = Object.keys(data.day_pass_discounts_percentage)[1];
    let discountObject = data.day_pass_discounts_percentage[discountDays];
    let bulkPrice = data.day_pass_price * parseInt(discountDays);
    let discountPrice = bulkPrice - (bulkPrice * (discountObject.value / 100))
    return <div className="bulkpass">
        <div className="discount">{discountObject.value}% Discount</div>
        <div>
            <label>Bulk Pass</label>
            <div> <span>₹ {discountPrice}</span><span className="perDay">/{discountDays} Days</span></div>
        </div>
        <div>
            <ForwardImg></ForwardImg>
        </div>
    </div>
}

export default Bulkpass;