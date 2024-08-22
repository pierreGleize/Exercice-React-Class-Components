
import ContentData from './ContentData';

const ProfileData = ({info}) => {
    return (
        <div>
            <p>
                <a href="#collapseExemple"className='btn btn-primary' data-toggle="collapse">
                    Information sur {info.name} ?
                </a>
            </p>
            <ContentData info={info}/>
        </div>
    );
};

export default ProfileData;