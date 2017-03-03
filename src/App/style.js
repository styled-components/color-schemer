import styled from 'styled-components';

export const BigTile = styled.div`
	background: ${props => props.bg || '#6cc0e5'};
	width: 100%;
	height: 50vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Input = styled.input`
	background: transparent;
	border: none;
	color: ${props => props.color};
	font-size: 24px;
	font-family: monaco,Consolas,Lucida Console,monospace;
	width: ${props => `${props.value.length * 16 || 96}px`};
	text-align: center;
	border-bottom: 1px solid ${props => props.color};

	&:focus,
	&:hover {
		outline: none;
	}
`;

export const Title = styled.h1`
	position: absolute;
	top: 0;
	color: ${props => props.color};
`;

export const ForkBanner = styled.img`
	position: absolute;
	top: 0;
	right: 0;
	border: 'none';
`;

export const Link = styled.a``;

export const Wrapper = styled.div``;
