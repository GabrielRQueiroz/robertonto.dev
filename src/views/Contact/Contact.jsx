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
		const mailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if (mailRegex.test(email)) {
			return true;
		} else {
			return false;
		}
	};

	const submitMessage = (event) => {
		event.preventDefault();

		const name = event.target.name.value;
		const email = event.target.email.value;
		const message = event.target.message.value;

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
				<ContactForm onFocus={accessiblyGoToNextView} onSubmit={submitMessage} method='POST' id='contact'>
					<div>
						<label htmlFor='name'>Nome:</label>
						<input type='text' name='user_name' id='name' placeholder='Seu nome' required />
					</div>
					<div>
						<label htmlFor='email'>E-mail:</label>
						<input type='email' name='user_email' id='email' placeholder='Seu e-mail' required />
					</div>
					<div>
						<label htmlFor='message'>Mensagem:</label>
						<textarea name='message' id='message' placeholder='Sua mensagem' required />
					</div>
				</ContactForm>
				<SpringButton color='amethyst' form='contact' type='submit' value='Submit'>
					Enviar <FontAwesomeIcon icon={faPaperPlane} />
				</SpringButton>
			</ContactContainer>
		</ContactSection>
	);
};

export default Contact;
