import "./styles.css";
import React from 'react';
//Dependencies:
import styled from "@emotion/styled";
// Child Component
import AccordionItem from "./AcordionItem";

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  border-radius: 0.4rem;
  box-shadow: 0 0 0.8rem 0.1rem rgba(15, 72, 179, 0.06),
    0 20px 30px -10px rgba(15, 72, 179, 0.2);
`;
const Li = styled.li`
  border-bottom: ${props => props.theme.borderBottom};
  padding-bottom: 10px;

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const Acordion = ({ data, theme }) => {

	const lightTheme = {
		background: '#EBF4F8',
		color: '#2C2738',
		text: '#2C2738',
		accent: '#0880AE',
	}
	return (
		<Ul>
			{data.map((data, key) => {
				return (
					<Li key={data.title}>
						<AccordionItem data={data} theme={theme} />
					</Li>
				);
			})}
		</Ul>
	);
};

export default Acordion;
