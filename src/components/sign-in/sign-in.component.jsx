import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import './sign-in.styles.scss';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';



class SignIn extends React.Component{
	constructor(props){
		super(props);
		this.state={
			email:'',
			password:''
		};

	}

	handleSubmit = event => {
		event.preventDefault();

		const {email,password}=this.state;

		try {
			auth.signInWithEmailAndPassword(email,password);
			this.setState({email:'', password:''})
		
		}catch(error){
			console.error(error)
		}
		this.setState({email:'',password:''})
	}

	handleChange=event=>{
		const {value,name}=event.target;
		this.setState({[name]:value})
	}

	render(){
		return (
			<div className='sign-in'>
				<h2> I already have an account </h2>
				<span> sign in with email and password </span>

				<form onSubmit={this.handleSubmit}>
				<FormInput 
					name='email' 
					type='email' 
					handleChange={this.handleChange} 
					value={this.state.email} 
					label='email'
					required
				/>
				
				<FormInput 
					name='password' 
					type='password' 
					value={this.state.password} 
					required
					label='password'
					handleChange={this.handleChange}	
				/>
				<div className='buttons'>
					<CustomButton type='submit'> Sign In </CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In with google </CustomButton>
				</div>
			</form>
			</div>
			
			)
	}

};


export default SignIn;