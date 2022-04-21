import React from "react";
import "../../scss/kanban.scss";
import styled from "styled-components";

function Kanban() {
	const Bita = styled.span`
		font-weight: bold;
		font-style: italic;
	`;
	const Next = styled.br`
		margin-bottom: 26px;
	`;
	const Nh3 = styled.h3`
		font-weight: bold;
	`;
	const Np = styled.p`
		font-size: calc(1.275rem + 0.3vw) !important;
	`;
	return (
		<div className="kanban_all_of_it">
			<h1 className="fw-bold">Kanban</h1>
		</div>
	);
}
export default Kanban;
