import { useCallback, useEffect, useState } from 'react';

const useAudio = (url) => {
	const [audio] = useState(new Audio(url));
	const [playing, setPlaying] = useState(false);

	const toggle = useCallback(
		(options) => {
			audio.volume = options?.volume || 1;
			setPlaying(!playing);
		},
		[playing, audio]
	);

	useEffect(() => {
		playing ? audio.play() : audio.pause();
	}, [playing, audio]);

	useEffect(() => {
		audio.addEventListener('ended', () => setPlaying(false));
		return () => {
			audio.removeEventListener('ended', () => setPlaying(false));
		};
	}, [playing, audio]);

	return [playing, toggle];
};

export default useAudio;
