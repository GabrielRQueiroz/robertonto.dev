import { useContext, useState } from 'react';

import emailjs from '@emailjs/browser';

import { faCircleNotch, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { toast } from 'react-hot-toast';

import { useTranslation } from 'react-i18next';
import SpringButton from '../../components/SpringButton/SpringButton';
import { ViewContext } from '../../contexts/ViewContext';
import { ContactContainer, ContactForm, ContactSection } from './Contact.styled';

const Contact = () => {
	const { nextView, currentView } = useContext(ViewContext);
	const [loading, setLoading] = useState(false);
	const { t } = useTranslation();
	const viewPaginationIndex = 5;

	const accessiblyGoToNextView = () => currentView.props.view !== 'Contact' && nextView();

	const checkMail = (email) => {
		const mailRegex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (mailRegex.test(email)) {
			return true;
		} else {
			return false;
		}
	};

	const submitMessage = (event) => {
		event.preventDefault();

		setLoading(true);

		const email = event.target.email.value;

		if (checkMail(email)) {
			emailjs
				.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, event.target, process.env.REACT_APP_EMAILJS_API_KEY)
				.then((res) => {
					toast.success(t('Contact.success'), {
						position: 'top-center',
						duration: 4000,
						style: {
							color: '#fff',
							backgroundColor: 'rgb(43, 45, 45)',
							fontSize: 'clamp(0.9em, 1.5vw, 1.1em)',
						},
					});
					event.target.reset();
					setLoading(false);
				})
				.catch((e) => {
					toast.error(t('Contact.net-error'), {
						position: 'top-center',
						icon: '🙁',
						duration: 2500,
						style: {
							color: '#fff',
							backgroundColor: 'rgb(43, 45, 45)',
							fontSize: 'clamp(0.9em, 1.5vw, 1.1em)',
						},
					});
					setLoading(false);
				});
		} else {
			toast.error(t('Contact.val-error'), {
				position: 'top-center',
				icon: '🚫',
				duration: 2500,
				style: {
					color: '#fff',
					backgroundColor: 'rgb(43, 45, 45)',
					fontSize: 'clamp(0.9em, 1.5vw, 1.1em)',
				},
			});
			setLoading(false);
		}
	};

	return (
		<ContactSection>
			<ContactContainer loading={loading}>
				<ContactForm onFocus={accessiblyGoToNextView} tabIndex={viewPaginationIndex * 100 + 1} onSubmit={submitMessage} method='POST' id='contact'>
					<div>
						<label htmlFor='name'>{t('Contact.name')}</label>
						<input tabIndex={viewPaginationIndex * 100 + 2} type='text' name='user_name' id='name' placeholder={t('Contact.name.placeholder')} required />
					</div>
					<div>
						<label htmlFor='email'>{t('Contact.email')}</label>
						<input tabIndex={viewPaginationIndex * 100 + 3} type='email' name='user_email' id='email' placeholder={t('Contact.email.placeholder')} required />
					</div>
					<div>
						<label htmlFor='message'>{t('Contact.message')}</label>
						<textarea tabIndex={viewPaginationIndex * 100 + 4} name='message' id='message' placeholder={t('Contact.message.placeholder')} required />
					</div>
				</ContactForm>
				<SpringButton disabled={loading} title={t('Contact.button.title')} tabIndex={viewPaginationIndex * 100 + 5} color='amethyst' form='contact' type='submit' value='Submit'>
					{loading ? t('Contact.button.loading') : t('Contact.button') } <FontAwesomeIcon icon={loading ? faCircleNotch : faPaperPlane} />
				</SpringButton>
			</ContactContainer>
		</ContactSection>
	);
};

export default Contact;
