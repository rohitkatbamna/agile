import React from "react";
import "../../scss/scrum7.scss";
import styled from "styled-components";
function Scrum7() {
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
		<div className="scrum7_all_of_it">
			<div className="do_not_print">
				<h1 className="fw-bold">Digging Deeper</h1>
				<h3 className="fw-bold">Team Velocity</h3>
				<Np>
					<Bita>
						Team Velocity. Team Velocity in short, is how many points of stories
						can the team, this project team, complete in a given Sprint. So,
						ultimately, what's the average number of story points that can be
						completed every Sprint?
					</Bita>
					<Next></Next>
					Now let's break that down a little bit, with an example. So imagine,
					here we have our Product Backlog. We've got a number of stories out
					there. Every rectangle is a user story. The numbers inside of it is
					the estimate that was applied to it, utilizing the Fibonacci Sequence.
					One (1), being the smallest user story. In our Product Backlog, 5
					being the largest user story. So there's our full Product Backlog. Now
					we have a pretty small team. And so that team has gone through, looked
					at the priority, understood what the points are and they have
					committed to twelve total story points.
					<Next></Next>
					They've committed to twelve (12) story points, to be completed as part
					of that Sprint. So that becomes their Sprint Backlog. So that, team's
					estimated velocity is twelve (12) points. Now throughout that Sprint,
					the team has actually only been able to complete ten (10) of those
					story points. So two (2) of them are going to roll over to the next
					Sprint. So the actual velocity of the team is ten (10) points. Now,
					over time, over Sprints, you're able to look back and understand.
					<Next></Next>
					Okay, how many points were we actually be able to complete in that
					particular Sprint? And then if you look, over Sprint over Sprint, you
					are able to start to understand your Team's Velocity. This is going to
					help you, not only understand how long it's going to take you to get
					through the full backlog potentially. But it's also going to help you
					as you're committing every Sprint, to not overcommit. If you know that
					you guys can complete ten (10) points, every single Sprint. Well, then
					commit to ten (10) points and work through them, get them done.
					<Bita>
						{" "}
						So that Team Velocity is going to really help in your Sprint
						commitment planning, as well as, the commitment of the overall
						project timeline.
					</Bita>
				</Np>

				<Nh3>Burndown Chart</Nh3>
				<Np>
					<Bita>
						A Burndown chart is a visual representation of work being completed,
						throughout the various Sprints of the project.
					</Bita>{" "}
					Now the design of this particular chart will be different, depending
					on the tool you utilize to create it. But ultimately,{" "}
					<Bita>
						they show the same sort of data. On the vertical axis, we have our
						work, our story points. On the horizontal axis, we have our time,
						our Sprints. And in the middle, we have two lines. The orange line,
						is representative of what we want from a trending standpoint.
					</Bita>{" "}
					<Next></Next>
					<Bita>
						For us, to achieve our hundred and twenty story points, in our ten
						Sprints. That orange line is, taking into that account. This is
						where we need to be, in order to complete that at the end of this
						project. The blue line is the actual.
					</Bita>{" "}
					This is the work that's left remaining after that Sprint is completed.
					So as we look at Sprint Zero, we're at a hundred and twenty story
					points. Obviously, we haven't done any work yet. So hundred and twenty
					points, as part of the project and a hundred twenty story points that
					need to be completed yet. As we move into Sprint one, you can see that
					we fell behind a little bit.
					<Next></Next>
					We were slightly behind there, because our number of points that we
					completed, was actually less than what our trend was showing. Now this
					happens a lot on teams, especially new teams. When you're just forming
					your team together, you've got to go through, you've got to make sure
					everybody knows their role and kind of get into a good fluid rhythm,
					before the scrum really takes off. And before you can really achieve
					your full Team Velocity, in every single Sprint.
					<Next></Next>
					So this happens a lot. That first Sprint, you tend to fall a little
					behind on that trend line, just because of that. Then as we move into
					our second Sprint, you can see we caught up a little bit. We are able
					to complete some additional story points and kind of catch up towards
					that trend. As we look to Sprint three, we actually got ahead of
					schedule. We were able to complete more story points, than what we
					needed to in order to achieve those four hundred and twenty story
					points, at the end of the project.
					<Next></Next>
					In this case, 10 Sprints. Sprint four. We completed a little bit but
					we didn't make much progress. Sprint five, same thing. Sprint six,
					same thing and we actually fell behind. Because through sprints three,
					four, five, and six. You can see that the line doesn't really change
					much. We didn't really get many story points completed. As we look at
					Sprint six and seven, were now behind schedule and we're getting
					towards the end of the project. We've gone above the trend line and so
					we need to make some adjustments, to make sure that we can get
					completed with this particular project, in our 10 Sprint timeline.
					<Next></Next>
					Or look ahead to potentially adding sprints, if we need to, in order
					to get all of our work done. In Sprint eight, we get back on track.We
					get our story points completed and now we're ahead of the trend line,
					heading into the final two Sprints. We're able to knock it out, stay
					on task, on target, and complete our project on time. So, as you can
					tell, this Burndown chart is very helpful to a project team. So they
					understand where they're at, in the grand scheme of things. In a Scrum
					project, you're so focused on that particular Sprint. You're so
					narrowly focused, working hard to get those requirements and design,
					development or solution created, tested, and ready to be delivered, at
					the end of that Sprint.
					<Next></Next>
					But you're not really focusing on the big picture. So it's really easy
					to get lost in where the project is overall. The Burndown chart was
					created to help give a visual representation to where you're at. That
					way you can make adjustments. You know that you're behind or you're
					ahead. You might be able to add some additional, nice to have
					features, and stay on the same task. Or maybe you can move up your
					delivery date and deliver that overall project value sooner.
				</Np>
			</div>
			<Nh3>Burn Up Chart</Nh3>
			<Np>
				<Bita>
					Now one of the big challenges with the burndown chart is it doesn't do
					a good job to show changes in the project. We're working in an agile
					environment in the burndown chart is kind of assuming that the amount
					of work that was estimated at the beginning is the amount of work that
					needs to be completed for the project. And we know that's not going to
					be true, it's going to change. We can't guess at the beginning 120
					story points based on our estimates of our user stories and assume
					that no user stories will going to be added or removed or estimates
					are going to be changes. That's just unrealistic.{" "}
				</Bita>
				<Next></Next>
				<Bita>
					And so, there's an alternative tool that some organizations utilize.
					And the alternative tool's called a burn up chart. This is very
					similar to a burndown chart in the vertical axis you have your story
					points. your horizontal axis you have your sprints and you have two
					lines. The details that are shown within those lines are slightly
					different. The orange line in our example is showing the total number
					of story points that need to be completed for that project to be
					considered done. The blue line is showing the total number of story
					points that have actually been completed by the team. By putting both
					of these on the chart, now you're able to compare and see are you
					really actually making progress and the team actually make good
					progress or did something change overall.
				</Bita>{" "}
				<Next></Next>
				So let's compare that to our burndown chart. And actually these two
				different charts that we created for this example are the same project.
				So you wouldn't know that by looking at it, but we're going to be able
				to make some very key discoveries with the burn up chart that we would
				never be able to see with the burndown chart. First of both of the
				examples show that there's a 120 story points to be completed for the
				project as of sprint zero. So before the project started hundred twenty
				story points.
				<Next></Next>
				Now as we move forward if we look at the burndown chart between sprint 2
				and 3 it looks like the team completed a heck of a lot of work. We took
				a great decrease in the amount of work that needs to be done yet for
				this particular project. So it looks like the team did a great job just
				to get a lot knocked out. But when we look at the burn up chart it's
				actually because work was removed. The team did make progress. We can
				see that, the completed story points did go up in Sprint 3 on our burn
				up chart, but it did not go up as drastically as what the burndown chart
				is making you believe it did. And the biggest reason is because work was
				removed. We removed like 25 points or so from the overall project and
				that's not the only thing.
				<Next></Next>
				Let's look ahead to sprint 3 and 4 so comparing for looking at the
				burndown chart it looks like the team didn't really complete much, it's
				stayed pretty steady. There weren't many points that were completed, but
				when we look at the burn up chart we can see all those work added. We
				actually added 35 story points as part of that sprint. So likely a new
				feature was recommended as part of the the project. And so in sprint 3
				they removed a feature that they deemed not as important, in sprint 4
				they added a feature that they wanted as part of the project or maybe it
				was a redesigned look at that same feature. Whatever the case the burn
				up chart helps to show that work was actually added there and that
				wasn't that the team just didn't get done with their work.
				<Next></Next>
				Looking back at the burndown chart between sprints 6 and 7 again it
				looks like we made pretty decent progress. We made some some good
				progress on that but it doesn't take into account that there were some
				adjusted estimates, we actually reduced our total number of story points
				for the project from 125 to 120. So again something the burndown chart
				doesn't show. Between sprint 7 and 8 looks like the team did a great job
				catching up. And in fact they did an awesome job. There was actually
				five or or 10 story points that were added as part of that sprint that
				were able to get knocked out, the burn up chart helps to show that, it
				helps to show that there was work added and we still were able to make
				progress up to it.
				<Next></Next>
				So as you can see the burn up chart, while very similar and showing the
				same type of data it shows it in a different way to help point out some
				various changes to the project that the burndown chart may not be
				showing you.
			</Np>
			<Nh3>Something remember</Nh3>
			<Bita>
				<Np>
					Well really it comes down to usually the scrum master. The scrum
					master's usually the one that's put in charge of making sure that
					these are created and shared with the team every single sprint. I've
					actually been part of quite a few teams that will create these and
					they'll put them up inside of the rooms that the project team members
					are in. It's a constant reminder of where we need to be and where
					we're at. And it can help to keep the team focused on driving things
					forward.
				</Np>
			</Bita>
			<h2 className="fw-bold">Small List of Major one line defination </h2>
			<h3>
				<ol>
					<li>
						{" "}
						<Bita>Sprint</Bita> Is a time-box - a specific set of time{" "}
					</li>
					<li>
						{" "}
						<Bita>Courage Value</Bita>: Do the right thing and work on tough
						problems
					</li>
					<li>
						<Bita>Definition of Ready</Bita> User story contains enough details
						to be worked
					</li>
					<li>
						<Bita>Product Increment</Bita> Vertical slice of a potentially
						shippable product
					</li>
					<li>
						<Bita>Burndown Chart</Bita> Visual aid that shows trending of user
						stories completed
					</li>
					<li>
						<Bita>Sprint Retrospective</Bita> Share lessons learned from the
						previous iteration
					</li>
					<li>
						<Bita>Scrum Master</Bita> Servant leader that removes roadblocks
					</li>
					<li>
						<Bita>Focus Value:</Bita>Complete the right work based on sprint
						goals
					</li>
					<li>
						<Bita>Sprint Review</Bita> Meeting to demo progress made during the
						iteration
					</li>
					<li>
						<Bita>User Story</Bita> Simple description of a feature from a
						user’s perspective
					</li>
					<li>
						<Bita>Sprint Backlog</Bita> Committed user stories for upcoming
						iteration
					</li>
					<li>
						<Bita>Product Owner</Bita> Tasked with understanding the product
						vision
					</li>
					<li>
						<Bita>Sprint planning</Bita> Discussion and commitment for the next
						iteration’s work
					</li>
					<li>
						<Bita>Respect</Bita> Value: Treat everyone as a capable team member
					</li>
					<li>
						<Bita>Product Backlog</Bita> Prioritized list of user stories that
						grows and changes
					</li>
					<li>
						<Bita>Definition of Done</Bita> Common understanding of when
						something is complete
					</li>
					<li>
						<Bita>Daily Standup</Bita> Discussion of yesterday’s progress,
						today’s plan, and issues
					</li>
					<li>
						<Bita>Working Agreement</Bita> Team-created list of rules,
						expectations, and procedures
					</li>
					<li>
						<Bita>Openness Value:</Bita> Discuss the work and challenges of the
						project
					</li>
					<li>
						<Bita>Team Velocity</Bita> Number of story points that are completed
						per iteration
					</li>
					<li>
						<Bita>CommitmentValue:</Bita> Give 100% effort to achieve project
						team’s goals
					</li>
					<li>
						<Bita>Work in Progress</Bita> Work that is currently being completed
					</li>
				</ol>
			</h3>
		</div>
	);
}
export default Scrum7;
