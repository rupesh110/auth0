import { GoogleLogout } from 'react-google-login';

const clientId = '1033784662442-tcbaokdikvjo8s49v8gq8p51lit1rjfp.apps.googleusercontent.com';

function Logout(){

    const onSuccess = (res) => {
        console.log('logout successFully');
    };

    return(
        <div id="signOutButton">
            <GoogleLogout>
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}

            </GoogleLogout>
        </div>
    )
}

export default Logout;