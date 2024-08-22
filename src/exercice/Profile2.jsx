
import ProfileData from './ProfilData';
import lisa from "../images/phototest.jpg"

const Profile2 = ({info}) => {
    return (
        
       <div>
        <h1>{info.name}</h1>
        <img src={lisa}className='img-thumbnail mb-3' alt="lisa" />
        <ProfileData info={info}/>
       </div>
    );
};

export default Profile2;