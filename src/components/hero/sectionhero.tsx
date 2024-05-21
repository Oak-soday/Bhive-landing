import WorkLogo from '../../assets/bhive_work_design.svg'
import b1Icon from '../../assets/BG1.svg'
import b2Icon from '../../assets/BG_BACK.svg'
import './__herobanner.scss';

const Herobanner = () => {

    return <section className='herobanner'>
        <div className='herobanner__background'>
            <img className="herobanner__background--image2" src={b1Icon}></img>
            <img className="herobanner__background--image1" src={b2Icon}></img>


        </div>
        <div className='herobanner__section'>
            <div className='herobanner__titles'>
                <h1 className='herobanner__titles--t1'>Host your meeting with world-class amenities. Starting at <span className='price'>₹199/-!</span></h1>
            </div>
            <img className='herobanner__worklogo' src={WorkLogo}></img>
        </div>

    </section>
}

export default Herobanner;