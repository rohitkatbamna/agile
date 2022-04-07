import React from "react";
import "../../scss/scrum2.scss";

function Scrum2() {
	return (
		<div className="scrum2_all_of_it">
			<div>
				<h1 className="fw-bold">Sprint</h1>
				<p className="fs-4 mt-3">
					<span className="fw-bold">
						Sprint is the heart of the scrum framework.
					</span>{" "}
					Sprint pretty much just means it is a{" "}
					<span className="fw-bold">time-box, it is a set of time.</span> Scrum
					recommends anywhere between{" "}
					<span className="fw-bold">one week to a month where you have</span>{" "}
					this time-box where <span className="fw-bold">team members</span> will
					plan the work along with the{" "}
					<span className="fw-bold">product owner</span> and{" "}
					<span className="fw-bold">scrum master</span> and they will{" "}
					<span className="fw-bold">deliver</span> something called a{" "}
					<span className="fw-bold">product increment</span> at the{" "}
					<span className="fw-bold">end of the sprint.</span> So the sprint
					comprises of all the{" "}
					<span className="fw-bold">scrum ceremonies.</span> So the{" "}
					<span className="fw-bold">daily standup</span> happens within the
					sprint, the <span className="fw-bold">sprint planning</span> happens
					within the sprint and the{" "}
					<span className="fw-bold">sprint review and retrospective</span> it's
					part of the sprint.
				</p>
				<h1 className="fw-bold">Roles in Scrum framework</h1>
				<p className="fs-4">
					<span className="fw-bold fs-2">Product Owner</span>
					<br className="mb-3" />
					<span className="fw-bold">
						One of the main responsibilities of a product owner is to talk to
						the stakeholders or the users and understand the product vision from
						them, understand their challenges and what kind of problem they are
						trying to solve.
					</span>
					<br className="mb-3" />
					Then the product comes back to the team and helps the team understand
					what are some of the needs and the challenges that the team will be
					solving with the product that they are developing. And, to do so{" "}
					<span className="fw-bold">
						product owner writes this very simple description of a feature from
						an end users perspective.{" "}
					</span>
					And they prioritized that user story in a way where the development
					team knows exactly which ones to work on.
					<ul>
						<li>
							So there's a lot of managerial type of stuff that really helps out
							as a product owner.
						</li>
					</ul>
					<br className="mb-3" />
					<span className="fw-bold fs-2">Scrum Master</span>
					<br className="mb-3" />
					<span className="fw-bold text-uppercase">
						Scrum Master is not a project manager. He's also not a team manager.
					</span>{" "}
					Scrum Master is a <span className="fw-bold">servant-leader role</span>{" "}
					that is there to{" "}
					<span className="fw-bold">remove the impediments</span> or the
					roadblocks in that iteration or time box where the team is very
					focused on working on those work items. Scrum Master also{" "}
					<span className="fw-bold">coaches teams on the scrum values</span> to
					live the scrum values and{" "}
					<span className="fw-bold">
						facilitate the various scrum meetings or ceremonies.
					</span>
					<ul>
						<li className="fw-bold">
							“What is a standup meeting?” According to The Scrum Guide, “the
							daily scrum is a 15-minute time-boxed event for the development
							team” to plan for the next 24 hours.
						</li>
						<li>
							In daily standup the Scrum Master generally asks the following:
							What did you do yesterday ? What are you going to focus on today ?
							And do you have impediments(roadblocks) ?.
						</li>
						<li>
							They go around and see how everyone is doing. They make a list of
							impediments so that they can{" "}
							<span className="fw-bold"> make visible impediments</span> or can
							work with a team member to go out there and resolve that
							impediment.
						</li>
						<li>
							In an environment where people didn't want to answer those three
							questions. They do did something called appreciative inquiry. So
							the question instead of asking 'what did you do yesterday?' what
							we said is 'what are you going to focus on today? Are we in track
							to meet our sprint goal?'
						</li>
						<li>
							Will facilitate sprint meetings. And do whatever Team needs. Scrum
							master <span className="fw-bold">facilitate Sprint review.</span>
							<span className="fw-bold">
								The sprint review is one of the most important ceremonies in
								Scrum where the team gathers to review completed work and
								determine whether additional changes are needed.{" "}
							</span>
							The official Scrum Guide describes it as a working session and
							makes the point that the “Scrum team should avoid limiting it to a
							presentation.”
						</li>
					</ul>
					<br className="mb-3" />
					<span className="fw-bold fs-2">The Development Team (Dev Team)</span>
					<br className="mb-3" />
					The Scrum framework says that{" "}
					<span className="fw-bold">
						everybody else except the product owner and the Scrum Master is a
						team.
					</span>{" "}
					For example, a QA - Quality Assurance Analyst or a business analyst or
					an architect. All of these roles come under the team.
					<span className="fw-bold">
						{" "}
						A team is a professional who can do the work of delivering a
						potentially releasable increment at the end of the sprint.
					</span>{" "}
					The team members are self-organizing,{" "}
					<span className="fw-bold">
						meaning that they don't need a manager to organize their work.
					</span>{" "}
					They will actually talk among each other and figure out which I am to
					work on next. Obviously looking at the priority provided by the
					product owner.
					<br className="mb-3" />
					They{" "}
					<span className="fw-bold">
						talk to the product owner in almost a daily basis
					</span>{" "}
					just to understand the priority and sequencing of the work. And there
					are also cross-functional.{" "}
					<span className="fw-bold">
						Cross-functional means they have all the skill sets that are
						required to develop that product or the feature for that team.
					</span>
					<ul>
						<li>
							{" "}
							In an Agile team, no matter what your title is you're just part of
							the team and you want to You are a self-organizing team. But we
							both want to help each other out.
						</li>
						<li>
							So when you are a developer, part of the Agile team. You're not
							saying that you can only do this. You still have to learn other
							components of what the team was developing.
						</li>
					</ul>
				</p>
			</div>
		</div>
	);
}
export default Scrum2;
