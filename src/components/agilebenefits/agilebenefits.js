import React from "react";
import "../../scss/agilebenefits.scss";

function Benefits() {
	return (
		<>
			<div className="benefits_all_of_it">
				<h1 className="fw-bold">Benefits of Agile</h1>
				<p className="fs-4">
					<span className="fw-bold">
						Agile was created because of the pitfalls and downfalls of a
						traditional waterfall methodology.
					</span>{" "}
					You see with waterfall there's various phases and you can't move to
					the next phase until that previous phase is complete. And once you've
					moved past a phase, it's very difficult to go back to a previous
					phase.
					<br className="mb-2" />
					So for waterfall you need to identify all the requirements up front,
					then you need a model and analyze all those requirements. Then you
					need to develop some type of solution that meets those requirements.
					Then you need to develop some type of solution that meets those
					requirements. Then you go through the testing and move to production
					phases. But if you're already in the development or testing and you
					identify some changes, to go back it takes a lot of work for that team
					to go back to requirements and push that as a separate piece through
					that waterfall process. As well, because of having to do those things
					step by step by step the value isn't delivered to the end user and to
					the customer until the end of the process and so it causes a lot of
					problem. As well, with waterfall it's a much longer period to deliver
					any type of value or gain any feedback from the users or the customer.
				</p>
			</div>
		</>
	);
}
export default Benefits;
