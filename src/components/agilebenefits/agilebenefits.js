import React from "react";
import "../../scss/agilebenefits.scss";

function Benefits() {
	return (
		<>
			<div className="benefits_all_of_it">
				<h1 className="fw-bold">Benefits of Agile</h1>
				<p className="fs-4">
					<span className="fw-bold">
						Agile was created because of the pitfalls and downfalls of a{" "}
						<span className="fst-italic">
							traditional waterfall methodology.
						</span>
					</span>
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
					phases.
					<br className="mb-2" />
					But if you're already in the development or testing and you identify
					some changes, to go back it takes a lot of work for that team to go
					back to requirements and push that as a separate piece through that
					waterfall process. As well, because of having to do those things step
					by step by step the value isn't delivered to the end user and to the
					customer until the end of the process and so it causes a lot of
					problem.
					<br className="mb-2" />
					As well,{" "}
					<span className="fw-bold">
						with waterfall it's a much longer period to deliver any type of
						value or gain any feedback from the users or the customer. that
						ultimately asked for this solution because you have to gather all
						the requirements, go through design development and testing, that is
						months, sometimes years to actually receive some type of solution
						that may or may not meet that business need. Agile was created to
						help solve those problems.
					</span>{" "}
					<br className="mb-2" />
					The number one thing that agile does is it allows you to deliver that{" "}
					<span className="fw-bold">
						value in smaller increments to the customer
					</span>
					. Not only as a customer that end users get to start utilizing that
					solution and seeing that value, but also they get to give you
					feedback. They really like it or they don't really like it or this
					should be adjusted or the business has changed. And now we said this,
					but it needs to really be this now.
					<br className="mb-2" />
					<span className="fw-bold">
						Agile allows you to do that, you deliver that little bit of value,
						you gain that critical feedback that will change and adjust the way
						you move forward on your project.
					</span>{" "}
					And it really helps to solve a lot of those problems before they
					become big problems. And because agile is more of an iterative
					process, the project team is actually able to get feedback on their
					performance as well. The project team can understand what they could
					do differently and what they could adjust to make them even more
					successful and make their solution even more successful.
				</p>
			</div>
		</>
	);
}
export default Benefits;
