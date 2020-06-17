import React from 'react';
import styled from 'styled-components';

const H3 = styled.h3`
	color : #420420;
	margin : 30px;
`
const Header = ()=>{
	return (
		<div>
			<H3 className="header text-center">Our Products</H3>
		</div>
	)
};

export default Header;