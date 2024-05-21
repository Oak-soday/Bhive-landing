import card1 from '../../assets/card_events.svg';
import card2 from '../../assets/card_dumbell.svg';
import card3 from '../../assets/card_wifi.svg';
import card4 from '../../assets/card_tea.svg';
import card5 from '../../assets/card_efford.svg';
import card6 from '../../assets/card_lounge.svg';
import card7 from '../../assets/card_quick.svg';
import card8 from '../../assets/card_sports.svg';
import './__choose.scss';

const SectionChooseUS = () => {
    const Chooseus_object: {
        icon: string;
        title: string;
    }[] = [{
        icon: card1,
        title: 'Community Events'
    }, {
        icon: card2,
        title: 'Gym Facilities'
    }, {
        icon: card3,
        title: 'High-Speed WiFi'
    }, {
        icon: card4,
        title: 'Cafe & Tea Bar'
    }, {
        icon: card5,
        title: 'Affordable'
    }, {
        icon: card6,
        title: 'Comfort Lounges'
    }, {
        icon: card7,
        title: 'Quick Booking'
    }, {
        icon: card8,
        title: 'Sports Area'
    }]

    const renderCard = (image: string | undefined, title: string | undefined) => {
        return <div className='chooseus__cardwrap--card'>
            <img width="32px" src={image}></img>
            <h5>{title}</h5>
        </div>
    }
    return <section className='chooseus'>
        <h2 className='chooseus__title'>Why Choose us?</h2>
        <div className='chooseus__container'>
            {Chooseus_object.map((data, key: any) => {
                return <div className="chooseus__cardwrap" key={key}>
                    {renderCard(data.icon, data.title)}
                </div>
            })}

        </div>

    </section>
}

export default SectionChooseUS;