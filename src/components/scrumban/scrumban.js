import React from "react";
import styled from "styled-components";
import "../../scss/scrumban.scss";

function Scrumban() {
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
		<div className="scrumban_all_of_it">
			<h1 className="fw-bold">Scrumban</h1>
			<Np>
				<Bita>
					Scrumban takes the best of both worlds, from scrum and kanban and
					smashes them together into a hybrid framework that a lot of people
					refer to as scrumban. This is a semi structured framework that takes
					some of the elements of both of the other frameworks and puts them
					together.
				</Bita>
				<Next></Next>
				So let's just go over some of the base rules and functionality of
				scrumban.
				<ol>
					<li>
						Number one is you use the kanban board for your visualization, the
						kanban board is still a major piece to be able to visually identify
						your workflow and understand bottlenecks and where the various work
						items are throughout the process.{" "}
					</li>
					<li>
						As well, you will also use the daily scrum. So the daily scrum,
						you're going to again have your project team in front of the kanban
						board discussing what you worked on yesterday, what you're working
						on today and any hurdles or obstacles that you're running into.
					</li>
					<li>
						{" "}
						You also go in and you pull the work, rather than being assigned the
						work. So in scrum you are really assigned that work. Those work
						items are committed for that iteration, that sprint and you're
						assigned to complete various tasks in various work items. But in
						kanban, you're pulling that work, you're going in and saying, yes, I
						can accomplish that high priority task. You take ownership of it and
						move it into the doing column and that is the same for scrumban,
						you're actually pulling that work, you're going and deciding what
						work you should be accomplishing and moving and taking ownership of
						that.
					</li>{" "}
					<li>
						With that as with kanban you need to have some strict work in
						progress or wip limits because if you move all of your to do items
						to in progress, that doesn't help anything you get spread out just
						like you would in kanban. So you have your strict work in progress
						limits just like you do in that kanban framework.
					</li>
					<li>
						As well like in kanban, the project team roles are really not
						clearly specified, in scrum you have the really structured team, you
						have the certain and specific roles on that team, in kanban you have
						really no titles, it's everybody is a part of that collaborative
						team. With scrumban, it goes more towards that kanban side, it says
						we don't need specific roles, you kind of format with whatever roles
						fit your company. So this framework will help to mold to your
						current organization structure.
					</li>
					<li>
						And then it also says that you will have more specialized team
						members. If you remember back to scrum we talked a little bit about
						cross-functional team members, team members that can do a multitude
						of things, that can help out in a lot of different areas. Well
						that's not the case for scrumban and scrumban goes more of the kabna
						side and says we're going to have specialized team members, if we
						need to do some design,we're going to go snag an architect and pull
						them as part of our team. We're going to go snag a developer and
						pull them as part of our team to help us achieve our various tasks
						or work items that are on the board.{" "}
					</li>
				</ol>
				So that gives you a general overview of some of the things that scrumban
				is known for. You're using the kanban board to visualize the workflow.
				<Next></Next>
				<Bita>
					You still have your daily scrums, you pull your work rather than
					assigned your work, you have work in progress limits that are set to
					help keep tasks moving. Stop starting and start finishing. You have
					your project teams that don't have any real specific roles, you kind
					of conform to the organizational roles and you have your specialized
					team members, rather than cross-functional team members. So you can
					get the right people on the team to help you complete those work
					items.
				</Bita>
			</Np>
			<Nh3>Scrumban Debate: Sprint</Nh3>
			<Np>
				<Bita>
					Now with scrumban, the tricky part is you really could call any type
					of framework where you take pieces of scrum and pieces of kanban you
					put them together, you could call them scrumban. The definition is
					saying that you're taking pieces of both frameworks. So there gets to
					be some areas of contention or hot topics and discussions and debates
					in various groups. So what we're going to do is we're going to talk
					about one of the biggest hot items and hot topics that are discussed
					and debated and that is the idea of a time-box or a sprint.
				</Bita>{" "}
				<Next></Next>
				<Bita>
					Some people have the scrumban being time-boxed or utilizing set
					sprints. Other people say no, we want to use the fluidity of the
					kanban framework and we're just going to continue to move items from
					the to do, to doing, to done and continue that process fluidly without
					any set breaks for a start and a finish of that particular segment or
					sprint.{" "}
				</Bita>
				<Next></Next>
				So we're going to do, is we're going to break down both if you would do
				more of a fluid and if you would do more of a time-boxed approach. So
				that way regardless of the organization you end up working for, if
				they're using scrumban or talking about or considering it, you at least
				know that it could go either way.
			</Np>
			<Nh3>Scrumban: Continuous Flow</Nh3>
			<Np>
				<Bita>
					So let's start with the scramban option of the continuous flow, which
					matches more towards the kanban side. So for those that are looking
					for the continuous flow, the big thing that they are being defined by
					is that there's a fluid movement of work. There's no time-boxes, there
					isn't a set start, a set end, it's just work is continuing up until
					that project deadline or that project due date. You are going to pull
					items from that to do and you're going to put them in that doing
					column, again same as kanban, you're going to take from the to do and
					you're going to take ownership of it and move it to the doing column
					for this continuous flow.{" "}
				</Bita>
				<Next></Next>
				<Bita>
					You're also going to do your planning when your to do list gets down
					to a certain number of work items. So you may have a rule that says
					hey, when our to do List is less than 5 work items, we need to plan
					additional to do items, additional features and functionality that
					we're going to be building out as part of this project. You have that.
					So then it triggers that planning action because when you're doing a
					continuous flow you don't have those set starts and ends where you're
					really identifying that.{" "}
				</Bita>
				<Next></Next>
				So when you hit that certain number that you've set then you go and you
				plan, you add those additional user stories, work items to your kanban
				board. And finally with the continuous flow, you're going to utilize
				more of that lead and cycle time which makes sense, right, you need to
				have a way to judge your performance, are you getting better, are there
				changes or bottlenecks or issues. And so with that lead and cycle time
				you're able to track that task, that work item from the creation all the
				way through the doing and done. So those key metrics that we talked
				about in the kanban section, those will play a big part if you're
				utilizing the continuous flow scrumban.
			</Np>
			<Nh3>Scrumban: Timebox</Nh3>
			<Np>
				<Bita>
					On the flip side let's talk about the time-box scrumban. This one is a
					little different because it utilizes sprints as a way to segment out
					that particular project. You're segmenting out pieces, you have a set
					start and a set end with a particular kind of section of that project
					where you're able to initiate planning and reviews and retrospectives.
					So that sprint is generally between one and four weeks. For scrumban,
					it's highly recommended that your sprint is two weeks long. One week
					is a little too short, you end of doing a lot of those planning,
					reviews and retrospective meetings.
				</Bita>{" "}
				<Next></Next>
				If you start going three or four weeks it's hard to really plan that far
				out, plan three weeks or a month worth of work. So two weeks is
				recommended. And as I alluded to in the time-box scrumban you are doing
				some of those scrum type of structured meetings. You have your sprint
				planning meeting where you're going in defining what you're committing
				to for that particular sprint. You have your sprint reviews where you're
				discussing how you guys performed in that sprint, were there things that
				you were expecting to get done that didn't get done. How did things work
				out compared to your estimates, that type of things you're reviewing the
				sprint overall and in discussing how things went.
				<Next></Next>
				And then you're also doing the retrospective after every sprint, which
				is the team getting together and discussing how they can better work
				with each other, are there bottlenecks or issues from a team standpoint
				that they can adjust, are there additional resources that are needed.
				You're able to release a resource that you no longer need, that type of
				things, so you're doing a retrospective on the team for that particular
				sprint or for the project as a whole up to that point.
				<Next></Next>
				Another key difference with the time-box scrumban is the kanban board.
				So if you look at the kanban board here, our to do column, our to do
				status has change to backlog could also be to do, it's just text, but a
				lot of teams change it to backlog because that's what they're used to.
				The backlog or that the old to do column is going to how is those user
				stories and work items that maybe aren't quite fully fleshed out yet. We
				haven't gotten all the details on it, it might be an idea, we might be
				starting to talk with various users or stakeholders about what they need
				in that. And once enough analysis has been done, enough details are on
				that particular user story or work item then it gets moved to the ready
				column, that means hey this is ready for work.
				<Next></Next>
				We have enough details here for a solution to be created or a feature to
				be created for this particular work item. So items go in the backlog.
				They get moved to ready once that's deemed that there's enough
				information and then it moves through the process like it would in any
				other kanban type of framework. You move it from the ready to the doing,
				once you actually starting to work on it that;s work in progress and
				then on to the done.
				<Next></Next>
				Teams will use that ready column a little bit differently some will load
				up that ready column with any backlog item that's ready to go. Other
				teams will flag various work items in that backlog saying that these are
				ready and then they only move them to ready once they're committed to
				for a particular sprint. There's no right or wrong way, it's really up
				to your team and the structure and the processes that you use within
				your organization to help move that forward successfully.
				<Next></Next>
				And then finally with the time-box scrumban and you can utilize
				different metrics. So most of that I see still utilize that lead and
				cycle time as their key metric because that really gives you a good idea
				of the flow and it helps to identify those bottlenecks. I have seen some
				using burndown charts for this. I wouldn't recommend it as much just
				because even if you're doing a time-box scrumban you're still trying to
				keep this as fluid as possible. You're trying to keep this moving
				forward and having that burndown chart it's just hard because do you do
				it based on the ready, do you do it based on the backlog, how are you
				supposed to know, the backlog items don't have estimates and it just
				gets really really messy. I think most of the organizations that use
				burndown charts in the scrumban are those that are coming from scrum to
				scrumban to try to get away from a little bit of that structure and
				maybe burndown charts are just what everybody's used to on the projects
				and so they continue to use it. But our recommendation is that you use
				lead and cycle times for your key metric for the time-box scrumban.
			</Np>
			<Nh3>Scrumban: Feature Freeze</Nh3>
			<Np>
				<Bita>
					The treasured feature frieze is utilized when the project deadline is
					approaching, you're getting close to the end of that project and you
					need to finalize what features you can get done, what work items you
					can get completed and done as part of that project. So what you do is
					the team and yourself, you go through and you identify what are those
					high priority tasks? What are those high priority tickets that need to
					be completed as part of this project? You obviously can work with
					users and other stakeholders to help determine that.
				</Bita>{" "}
				<Next></Next>
				Once you've got your your list of which ones are the most important,
				you're going to freeze all other work. You guys are not going to start
				on anything else that's not deemed the top priority. What that allows
				you to do then is to focus your team's energy on those top priority
				items. You can swarm on those items, get them completed, get them done,
				get them tested, get them into the product before that project deadline
				happens. So just to let you know, scramble and does use the triage and
				feature freeze, especially when you're doing the more continuous flow
				scrum von
			</Np>
		</div>
	);
}
export default Scrumban;
