import { useEffect, useState } from 'react';
import FormInput from '../../components/formInput';
import Heading from '../../components/heading';
import Text from '../../components/text';
import './contact.css';

const Contact = () => {
	const formFields = {
		name: 'name',
		lastname: 'lastname',
		phone: 'phone',
		message: 'message',
	};

	const [submitError, setSubmitError] = useState({
		hasError: false,
		error: '',
	});
	
	const [formData, setFormData] = useState({
		name: '',
		lastname: '',
		phone: '',
		message: '',
	});

	const handleChange = (e) => {
		/* get key-value input change */
		const { name, value } = e.target;
		/* spread previous state */
		const newFormData = {...formData};
		/* update value to a key (enforced by formFields object) */
		newFormData[name] = value;
		/* update state */
		setFormData(newFormData);
	}

	/** Checks if phone number matches 8-10 digits. Very simple & needs further work to include country codes or american ( ) */
	const validatePhoneNumber = (number) => new RegExp('(?=.{8,10}$)[0-9]{8,10}$').test(number);
	
	const onSubmit = (e) => {
		e.preventDefault();

		setSubmitError({ hasError: false, error: '' });

		if (!validatePhoneNumber(formData.phone)) {
			setSubmitError({
				hasError: true,
				error: 'Incorrect phone number. 8-10 digits only',
			})
		}

		// to-do: add code for sending data
	}

  	return (
    	<div className="contact">
			<div className="container">
				<div className="flex content">
					<div className="flex column info">
						<Heading className="heading" level={2}>Contact</Heading>

						<Text className="text w400" size={14}>Questions or concerns? Just fill out the form below and our support team will get back to you within 24 hours</Text>
					</div>

					<form className="flex column form" onSubmit={onSubmit}>
						<div className="flex names">
							<FormInput
								type="text"
								name={formFields.name}
								value={formData.name}
								placeholder="First Name"
								required
								onChange={handleChange}
							/>
							<FormInput
								type="text"
								name={formFields.lastname}
								value={formData.lastname}
								placeholder="Last Name"
								onChange={handleChange}
							/>
						</div>

						<FormInput 
							type="tel"
							name={formFields.phone}
							value={formData.phone}
							full
							required
							placeholder="Phone Number"
							onChange={handleChange}
							
						/>
						<FormInput 
							type="text"
							name={formFields.message}
							value={formData.message}
							full
							required
							placeholder="What Service are you interested in?"
							onChange={handleChange}
						/>
						
						{!!submitError.hasError && (
							<Text color="#d53000" className="text w500 margin-h1">
								{submitError.error}
							</Text>
						)}
						
						<button type="submit" className='margin-v1'>submit</button>
					</form>
				</div>
			</div>
    	</div>
  	)
};

export default Contact;
