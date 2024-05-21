import mobileIcon from '../../assets/mobile.svg';
import googleStoreIcon from '../../assets/playstore.svg';
import appStoreIcon from '../../assets/appstore.svg';
import mobileBaseIcon from '../../assets/mobilebase.svg';
import './__appdownload.scss'


const Appdownload = (props: {
    state: any
}) => {


    return <section className='appdownload'>
        <h2 className='appdownload__title'>{props?.state?.appDownload?.head}</h2>
        <div className='appdownload__wrap'>
            <img className='mobilebase' src={mobileBaseIcon}></img>
            <img className='mobileTab' src={mobileIcon}></img>
            <div className='appdownload__tag'>
                <h4>{props.state.appDownload.text}</h4>

                <div className='appdownload__tag--images'>
                    <img src={googleStoreIcon}></img>
                    <img src={appStoreIcon}></img>
                </div>
            </div>
        </div>
    </section>
}

export default Appdownload;