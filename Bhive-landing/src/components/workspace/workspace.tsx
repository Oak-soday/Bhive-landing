import kmicon from '../../assets/6km.svg';
const apiUrl = 'https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/';
import './__workspace.scss';
import useFetch from "../../useFetch";
import Daypass from './daypass';
import Bulkpass from './bulkpass';
import Tag from './tag';


const Workspace = (props: any) => {
    const renderCard = (data: any, key: number) => {
        //  const ImgData = useFetch(`${apiUrl}${data.images[0]}`) ?? [];
        return <div key={key} className="workspace__wrap--card">

            <div className='workspace__top'><h4>{data.name}</h4>
                <img src={kmicon}></img></div>
            <Tag name={data?.name}></Tag>
            <img className='mainImg' width="346px" height="202px" src={`${apiUrl}${data.images[0]}`} >

            </img >
            <div className='pass'>
                {data.is_day_pass_enabled && <Daypass {...data}></Daypass>}
                <Bulkpass {...data}></Bulkpass>
            </div>

        </div >
    }
    return <section className='workspace'>
        <h2 className='workspace__title'>{props?.state?.workstation?.title}</h2>
        <div className='workspace__wrap'>
            {props?.state?.workstation?.data.map((_d: [], key: any) => {
                return <>{renderCard(_d, key)}</>
            })}
        </div>



    </section>
}

export default Workspace;