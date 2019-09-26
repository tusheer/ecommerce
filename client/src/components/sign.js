import React, { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import MainContext from '../context/mainContext';
function Sign() {
	const context = useContext(MainContext);

	const { id } = context;
	const responseGoogle = (response) => {
		console.log('failed to sign in');
	};
	const onsuccess = (response) => {
		id(response.profileObj);
	};

	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',

				// alignItems: 'center',
				backgroundColor: '#f51167',
				boxSizing: 'border-box',

				// padding: '70px 10px',
			}}
		>
			<div
				style={{
					maxWidth: '400px',
					minWidth: '330px',
					position: 'relative',
					backgroundColor: 'white',
					marginTop: '90px',
					borderRadius: '5px',
					marginBottom: '50px',
					padding: '0px 20px 20px 20px',
					boxSizing: 'border-box',
					height: '350px',
				}}
			>
				<div
					style={{
						width: '100px',
						height: '100px',
						backgroundImage: 'url("img/pic.jpg")',
						borderRadius: '50%',
						backgroundSize: '100% 100%',
						position: 'absolute',
						left: '50%',

						transform: 'translate(-50%,-50%)',
					}}
				/>
				<h4 className="pt-5 text-center">sign up</h4>

				<GoogleLogin
					clientId="822285594995-eglvm253jipvhgujr85b86709p61pcoi.apps.googleusercontent.com"
					render={(renderProps) => (
						<div
							style={{
								backgroundColor: '#D62D20',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								padding: '7px 50px',
								borderRadius: '5px',
								color: 'white',
								marginTop: '50px',
								cursor: 'pointer',
							}}
							onClick={renderProps.onClick}
							disabled={renderProps.disabled}
						>
							<img src="https://img.icons8.com/color/36/000000/google-logo.png" alt="google_icon" />
							<p className="text-white m-0 p-0">Sign up with google</p>
						</div>
					)}
					onSuccess={onsuccess}
					onFailure={responseGoogle}
					cookiePolicy={'single_host_origin'}
				/>
			</div>
		</div>
	);
}

export default Sign;
