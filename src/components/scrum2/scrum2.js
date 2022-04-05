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
					product owner. They talk to the product owner in almost a daily basis
					just to understand the priority and sequencing of the work. And there
					are also cross-functional. Cross-functional means they have all the
					skill sets that are required to develop that product or the feature
					for that team.
				</p>
			</div>
		</div>
	);
}
export default Scrum2;
