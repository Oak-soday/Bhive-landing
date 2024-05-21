import ForwardImg from "./forwardImg";

const Daypass = (data: any) => {
    return <div className="daypass">
        <div>
            <label>Day Pass</label>
            <div> <span>₹ {data.day_pass_price}</span><span className="perDay">/Day</span></div>
        </div>
        <div>
            <ForwardImg></ForwardImg>
        </div>
    </div>
}

export default Daypass;