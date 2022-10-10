import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ViewContext } from '../../contexts/ViewContext';
import { ViewButtonFace, ViewButtonWrapper } from './ViewButton.styled';

const ViewButton = ({ direction = 'right' | 'left' }, props) => {
	const { nextView, previousView, viewIndex, views } = useContext(ViewContext);
	const [isDisabled, setIsDisabled] = useState(false);
	const { t } = useTranslation();

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
				return;
			} else {
				nextView();
			}
		} else if (direction === 'left') {
			if (viewIndex === 0) {
				return;
			} else {
				previousView();
			}
		}
	};

	return (
		<>
			<ViewButtonWrapper
				isDisabled={isDisabled}
				direction={direction}
				type='button'
				tabIndex={-1}
				title={t('ViewButton.aria')}
				aria-label={t('ViewButton.aria')}
				onClick={handleViewChange}
				{...props}
			>
				<ViewButtonFace isDisabled={isDisabled}>
					<FontAwesomeIcon icon={direction === 'right' ? faChevronRight : faChevronLeft} />
				</ViewButtonFace>
			</ViewButtonWrapper>
		</>
	);
};

ViewButton.propTypes = {
	direction: PropTypes.oneOf(['right', 'left']),
	children: PropTypes.node,
};

ViewButton.defaultProps = {
	direction: 'right',
};

export default ViewButton;
