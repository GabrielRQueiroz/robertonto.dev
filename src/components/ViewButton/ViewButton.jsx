import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { ViewContext } from '../../contexts/ViewContext';
import { ViewButtonFace, ViewButtonWrapper } from './ViewButton.styled';

const ViewButton = ({ direction = 'right' | 'left' }) => {
	const { nextView, previousView, viewIndex, views, throwLastViewToast } = useContext(ViewContext);
	const [isDisabled, setIsDisabled] = useState(false);

	useEffect(() => {
		if (viewIndex === 0 && direction === 'left') {
			setIsDisabled(true);
		} else if (viewIndex === views.length - 1 && direction === 'right') {
			setIsDisabled(true);
		} else {
			setIsDisabled(false);
		}
	}, [viewIndex, views.length, direction]);

	const handleViewChange = () => {
		if (direction === 'right') {
			if (viewIndex === views.length - 1) {
				throwLastViewToast({ position: direction });
			} else {
				nextView();
			}
		} else if (direction === 'left') {
			if (viewIndex === 0) {
				throwLastViewToast({ position: direction });
			} else {
				previousView();
			}
		}
	};

	return (
		<>
			<ViewButtonWrapper isDisabled={isDisabled} direction={direction} type='button' tabIndex={-1} aria-label='Mais sobre mim' onClick={handleViewChange}>
				<ViewButtonFace isDisabled={isDisabled}>
					<FontAwesomeIcon icon={direction === 'right' ? faChevronRight : faChevronLeft} />
				</ViewButtonFace>
			</ViewButtonWrapper>
		</>
	);
};

export default ViewButton;
