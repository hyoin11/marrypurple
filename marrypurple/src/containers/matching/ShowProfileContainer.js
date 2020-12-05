import React,{useState} from 'react';
import ShowProfile from '../../components/matching/ShowProfile'

const ShowProfileContainer = ({user_data, my_email}) => {
    // console.log(user_data.user_nick);
    // console.log(my_email);
    const [unfoldDiv, setUnfoldDiv] = useState({
        report: false
    });
    const onToggle = () => {
        setUnfoldDiv({
            ...unfoldDiv,
            report : !unfoldDiv.report
        })
    }
    return(
        <ShowProfile 
            user_data={user_data} 
            my_email={my_email} 
            unfoldDiv={unfoldDiv} 
            onToggle={onToggle}
        />
    )
}

export default ShowProfileContainer;