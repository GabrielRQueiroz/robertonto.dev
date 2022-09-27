import { useCallback, useEffect, useState } from 'react';

const useSoundFX = (url) => {
	const [audio] = useState(new Audio(url));
	const [playing, setPlaying] = useState(false);

	const toggle = useCallback(
		(options) => {
			audio.volume = options?.volume || 1;
			audio.currentTime = options?.currentTime || 0;
			setPlaying(true);
		},
		[audio]
	);

	useEffect(() => {
		playing && audio.play();
	}, [playing, audio]);

	useEffect(() => {
		audio.addEventListener('ended', () => setPlaying(false));
		return () => {
			audio.removeEventListener('ended', () => setPlaying(false));
		};
	}, [audio]);

	return toggle;
};

export default useSoundFX;
