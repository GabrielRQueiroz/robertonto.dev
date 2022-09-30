import { useContext } from 'react';

import emailjs from '@emailjs/browser';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { toast } from 'react-hot-toast';

import SpringButton from '../../components/SpringButton/SpringButton';
import { ViewContext } from '../../contexts/ViewContext';
import { ContactContainer, ContactForm, ContactSection } from './Contact.styled';

const Contact = () => {
	const { nextView, currentView } = useContext(ViewContext);

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

		const email = event.target.email.value;

		if (checkMail(email)) {
			emailjs
				.sendForm('service_41d089p', 'template_n2ssqra', event.target, 'fAt-v202bzW3D0fe6')
				.then((res) => {
					toast.success(`Mensagem enviada com sucesso! Obrigado por entrar em contato! 😀`, {
						position: 'top-center',
						duration: 4000,
						style: {
							color: '#fff',
							backgroundColor: 'rgb(43, 45, 45)',
							fontSize: 'clamp(0.9em, 1.5vw, 1.1em)',
						},
					});
					event.target.reset();
				})
				.catch((e) =>
					toast.error('Ocorreu um erro. Peço que tente novamente.', {
						position: 'top-center',
						icon: '🙁',
						duration: 2500,
						style: {
							color: '#fff',
							backgroundColor: 'rgb(43, 45, 45)',
							fontSize: 'clamp(0.9em, 1.5vw, 1.1em)',
						},
					})
				);
		} else {
			toast.error('Insira todas as informações corretamente.', {
				position: 'top-center',
				icon: '🚫',
				duration: 2500,
				style: {
					color: '#fff',
					backgroundColor: 'rgb(43, 45, 45)',
					fontSize: 'clamp(0.9em, 1.5vw, 1.1em)',
				},
			});
		}
	};

	return (
		<ContactSection>
			<ContactContainer>
				<ContactForm onFocus={accessiblyGoToNextView} tabIndex={300} onSubmit={submitMessage} method='POST' id='contact'>
					<div>
						<label htmlFor='name'>Nome:</label>
						<input tabIndex={301} type='text' name='user_name' id='name' placeholder='Seu nome' required />
					</div>
					<div>
						<label htmlFor='email'>E-mail:</label>
						<input tabIndex={302} type='email' name='user_email' id='email' placeholder='Seu e-mail' required />
					</div>
					<div>
						<label htmlFor='message'>Mensagem:</label>
						<textarea tabIndex={303} name='message' id='message' placeholder='Sua mensagem' required />
					</div>
				</ContactForm>
				<SpringButton tabIndex={304} color='amethyst' form='contact' type='submit' value='Submit'>
					Enviar <FontAwesomeIcon icon={faPaperPlane} />
				</SpringButton>
			</ContactContainer>
		</ContactSection>
	);
};

export default Contact;
