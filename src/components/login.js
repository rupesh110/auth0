import {GoogleLogin} from 'react-google-login';

const clientId = '1033784662442-tcbaokdikvjo8s49v8gq8p51lit1rjfp.apps.googleusercontent.com';

function Login(){
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
             
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;