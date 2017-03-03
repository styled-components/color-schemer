import styled from 'styled-components';

export const Wrapper = styled.button`
	background: ${props => props.bg};
	height: 50vh;
	width: 20%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	display: block;
	outline: none;
	cursor: pointer;

	@media screen and (max-aspect-ratio: 2/3) {
		width: 100%;
		height: 10vh;
	}
`;

export const Text = styled.p`
	font-size: 1.75em;
	color: ${props => props.color};
`;
