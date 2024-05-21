import platinumIcon from '../../assets/platinum.svg';
import honeyCombIcon from '../../assets/honeycomb.svg';
import premiumIcon from '../../assets/premium.svg';
import campusIcon from '../../assets/campus.svg';
import workspaceIcon from '../../assets/workspace.svg';

const Tag = (props: any) => {
    const getImage = () => {
        let key = "";
        if (props.name.toLowerCase().includes('platinum')) {
            key = 'platinum';
        } else if (props.name.toLowerCase().includes('campus')) {
            key = 'campus';
        } else if (props.name.toLowerCase().includes('workspace')) {
            key = 'workspace';
        } else if (props.name.toLowerCase().includes('honey komb')) {
            key = 'honey komb';
        } else if (props.name.toLowerCase().includes('premium')) {
            key = 'premium';
        }

        switch (key) {
            case 'platinum':
                return platinumIcon;
            case 'campus':
                return campusIcon;
            case 'workspace':
                return workspaceIcon;
            case 'honey komb':
                return honeyCombIcon;
            case 'premium':
                return premiumIcon;
            default:
                return workspaceIcon;
                break;
        }
    }
    return <div className='tag'>
        <img src={getImage()}></img>
    </div>
}

export default Tag;