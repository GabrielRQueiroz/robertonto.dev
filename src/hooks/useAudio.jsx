import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';

const useAudio = (url) => {
	const [audio] = useState(new Audio(url));
	const [playing, setPlaying] = useState(false);

	const toggle = useCallback(
		(options) => {
			audio.volume = options?.volume || 1;
			setPlaying(!playing);
		},
		[audio, playing]
	);

	useEffect(() => {
		playing ? audio.play() : audio.pause();
	}, [playing, audio]);

	useEffect(() => {
		audio.addEventListener('ended', () => setPlaying(false));
		return () => {
			audio.removeEventListener('ended', () => setPlaying(false));
		};
	}, [audio]);

	return [playing, toggle];
};

useAudio.propTypes = {
	url: PropTypes.string.isRequired,
};

export default useAudio;
