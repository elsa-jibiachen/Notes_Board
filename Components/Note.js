import { useState } from 'react';

const Note = () => {
	const [noteText, setNoteText] = useState('');

	return (
		<div className='note new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
			></textarea>
		</div>
	);
};

export default Note;