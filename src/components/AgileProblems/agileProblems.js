import React from "react";
import "../../scss/agileproblems.scss";

function AgileProblems() {
	return (
		<div className="agile_problems_all_of_it">
			<h1 className="fw-bold">Some of the challenges to using agile</h1>
			<p className="fs-4">
				<span className="fw-bold">
					Well the first thing is agile is actually difficult for existing
					companies and organizations to implement if they're using some type of
					methodology like waterfall or other methodology today.{" "}
				</span>
				And the biggest reason is agile changes everything. It really has to
				change the whole mindset of the company. It sometimes has to change the
				organizational structure, has to change the way people and teams in
				various roles work with each other.{" "}
				<span className="fw-bold">
					And it really has to be an all or nothing process.
				</span>
				<br className="mb-3" />
				So a lot of companies will kind of go into and want to move in the agile
				and they'll do it half heartedly because oh yeah we want to get better
				and we want our solutions to be out faster and we want to receive all
				those benefits of using it. But they do it half heartedly and in the end
				years down the line, they're still using a half agile half not an agile
				approach. And let's just say it doesn't work.
				<br className="mb-3" />
				<span className="fw-bold">
					So that's one of the big challenges is companies have to be all in and
					ready to spend some money and a lot of time in making that adjustment.
				</span>
				Now we're seeing that new companies starting up have a much easier time
				of making this work. And that's because they don't have existing
				processes or various things that need to be adjusted. And that company
				culture can just be built around that agile philosophy and that agile
				mindset.
				<br className="mb-3" />
				One of the really nice things that a{" "}
				<span className="fw-bold">
					lot of team members like about agile is the real lack of
					documentation,
				</span>{" "}
				honestly, agile really focuses on more on conversation and communication
				than writing all of these requirements out in building models and all
				that stuff. Agile really has that all done through let's sit down, let's
				discuss it, let's hammer it out and then we'll move forward on whatever
				is decided there.{" "}
				<span className="fw-bold">
					That can pose some real challenges when the project's over. And now
					you have maybe a support team handling this solution that was created.
					well, there's not any real documentation to tell that support team how
					it works or some of the common things that come up, it can be a big
					challenge for them to actually learn and support that particular
					solution.
				</span>
				<br className="mb-3" />
				And while we're talking more documentation,{" "}
				<span className="fw-bold">
					another challenge for the lack of documentation is reusing features or
					components.
				</span>{" "}
				In a traditional methodology such as waterfall you're documenting those
				features out, your document the design, your document all the analysis
				points that you've really thought about as you've designed it and as
				you've developed that solution and that feature, that component can be
				utilized on additional projects so if you have additional projects later
				that are very similar, you can utilize that documentation to implement
				that feature on that next project.
				<span className="fw-bold">
					{" "}
					Because of agile not having much documentation and really that
					information only being stored or really siloed by the project team
					members that worked on that particular project, it can be much more
					difficult in agile to take a feature from a previous project and
					successfully apply it to the new one.
				</span>
				<br className="mb-3" />
				And the last challenge we're going to talk about is really there's not a
				clear role in that agile that takes control or has ownership of that
				particular project. Instead the team works together collaboratively and
				everybody chips in and does their part to make sure that the project
				meets that eventual business need.{" "}
				<span className="fw-bold">
					The challenge arises when the project goes off course, when it kind of
					goes into an area that wasn't planned for. Now there's no real role
					inside of that team to help bring it back. Everybody in the
					collaborative teams kind of looking at each other and not really sure
					who should be stepping up to correct the path and get back on plan.
				</span>
			</p>
		</div>
	);
}
export default AgileProblems;
