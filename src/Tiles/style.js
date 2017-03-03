import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;

	@media screen and (max-aspect-ratio: 2/3) {
		flex-direction: column;
	}
`
