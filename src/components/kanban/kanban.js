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
			<Nh3>
				<Bita>
					Kanban is similar to scrum and that it provides and focuses on
					providing early value to the organization while also having
					collaborative and self-managing teams.Today, a lot of software
					companies and different organizations utilize kanban to help them
					achieve value in their various projects that they're working on.
				</Bita>
			</Nh3>
			<Np>
				<Bita>Four Principle of Kanban</Bita>
				<ol>
					<li>
						{" "}
						First one is start with what you do now. What kanban is saying here
						is hey, you don't have to conform your whole organization around
						kanban like you have to do with some agile framework such as scrum,
						instead kanban will come in form to your organization. So start with
						what you do now.
					</li>
					<li>
						The second thing is agree to pursue incremental change, you have to
						understand, if you're doing a waterfall type of approach you're
						going to get a huge amount of value, but there's going to be a huge
						amount of time that is kind of wasted or utilized to provide that
						huge amount of value. Kanban and agile in general is really looking
						at incremental changes delivering value more often, but in much
						smaller increments and then incrementing on that change and building
						upon that change to build out that big piece of value.
					</li>
					<li>
						The third basic principle of kanban is to respect current processes,
						roles, responsibilities and titles. Simply this is saying you don't
						need to change everything with your organization to match kanban,
						you don't have to make new roles and have people learn new
						responsibilities. Instead you can utilize what you have and still
						use the kanban framework which is very very intriguing for many
						organizations.
					</li>
					<li>
						And the fourth basic principle is encourage acts of leadership at
						all levels. This comes down to the self-managing teams.
						Self-managing teams mean that the team really doesn't have one over
						looker, right. They don't have one manager that's watching them and
						keeping them on task. Instead they are managing themselves, if they
						need assistance they're reaching out and getting assistance. If
						there's some type of negotiation or issue that's happening as part
						of the project, they are all involved in that in helping to direct
						that in the correct way. So kanban is really looking and saying hey,
						be mature and really encourage those acts of leadership from your
						team members.
					</li>
				</ol>
				<Bita>
					Now the most iconic thing for kanban is the visual aspect. And in this
					case it's the kanban board and kanban cards. The kanban board helps to
					show status of the various work items as well as any of the
					bottlenecks that may be occurring throughout the project,
				</Bita>{" "}
				those work items being completed. Kanban cards they house the details of
				that particular work item, they house details of what that work item is,
				maybe when it's due. Obviously the status is derived from the column. So
				that's not usually noted directly on the card, but it's in the
				particular column for that status as well as any dates and times that
				that particular card has moved from one status to another. So let's kind
				of take a step back.
				<Next></Next>
				So kanban boards, they can be both physical or virtual. Physical meaning
				it's a board inside of some type of office room, it's a white board
				that's been, you know, with markers drawn into a kanban board and then
				you use sticky notes or some type of note cards with a tack pen or note
				with a piece of tape that are actually hanging those kanban cards in the
				appropriate column of the kanban boards. So that's the physical side.
				From a virtual side you can use various applications. My favorite
				application to utilize for kanban is Trello. It's trello.com trello.com
				And it's a completely free application where you can do basic kanban
				inside of that application. Another very popular one is Jira. Jira is a
				little bit bigger. It's a premium one. It's not free, you have to pay
				for it, but a lot of organizations that utilize kanban will use Jira or
				maybe some other type of premium software to track.
				<Next></Next>
				So it doesn't matter what piece of software you are utilizing, the look
				and the feel are going to be different, but the concepts of kanban are
				going to be the same. So let's walk through and let's assume that this
				board is a physical kanban board. So this is, these columns are drawn on
				to a white board where our agile team resides, where our agile team is
				working and our kanban cards are sticky notes that are put up on that
				board in the appropriate column. In this case, everything's in the to
				do. Now as a team member working on this, I don't get assigned or tasked
				with work items with kanban cards. Instead I go out there and this is,
				kanban is considered a pull methodology meaning that I go out there and
				I pull work. I make a determination as to what is the highest priority
				and what task needs to be completed next. So I look at my kanban board
				and in generally regardless of its physical or virtual. Most teams will
				have the kanban card set up from the top being the most priority, the
				bottom being the least priority. So as we look here the highest priority
				sticky notes or cards that we have in this case are setting up a meeting
				with Frank, updating some server requirements and as we move on creating
				a process flowchart, ordering lunch etc. So usually it's top priority on
				down and it's not always like a list. Right, because I may not be able
				to do a code review, which is one of the items on this list. So you
				don't want like 1 through 10 type of thing. You want a generalized
				priority, a general idea. This is a higher priority or a lower priority.
				So you know what to choose. So anyways I'm a kanban team member, I need
				to pull some work, I need to do something and I look through here. I'm
				not really sure what this meeting with Frank is all about. So I'm going
				to skip that one. Server requirements document. Not really my cup of
				tea, the networking guy is going to probably handle that one. Create a
				process flowchart. I can do that. That is a good one for me. It's a
				higher priority, it's towards the top so I'm going to go ahead and
				assign this task to me, I'm going to take ownership of this task and
				getting it completed. On a physical board, I would walk up I'd grab that
				sticky note and pull it off. And I'd simply stick it in the doing
				column. Now that task is assigned to me. Now with a virtual board,
				you're going to have all your dates and times and who did it, audit it,
				automatically right. It's automatically in a track, so you can pull that
				later for some things that we will need. On a physical board, a little
				bit more difficult. What I've seen a lot of people do to try to track
				those dates and times that these cards are moved from one status to
				another is to actually flip that card over and on the back of it write
				their name, the date and time and what the status was changed to. That
				way they're tracking when it was moved to doing it when it was moved to
				done. I've also seen a lot of organizations that do it that way when
				they create the initial card and they put it in the to do column. They
				do the same thing. They write the name of the person that created the
				work item, that particular card, they write the date and the time and
				that it's a status of to do. So when you look at the back of those cards
				you can see the audit trail of what that card did from date, and you
				know, from date to date or over time and kind of see how that card
				evolved and moved through the various statuses. So I've taken ownership
				of that particular work item. Now once I get done with that work item I
				would simply go grab the work item and physically move it to the done
				column. In a virtual board, same type of thing like what you saw me do
				on the screen, in a virtual board is a lot of click and dragging to
				another column. The physical board obviously you got to walk up to it
				and remove the item and move it over to another column. But don't forget
				I'm going to flip it over and write my name, the date and the time and
				the updated status on the back of that card. Well, I have completed my
				process flowchart. Next? Now I need to do another task so I'm going to
				look at these tasks, maybe ordering lunch is important. Maybe it's 10
				a.m. now, we have a lunch meeting at 12:30 and which we're ordering
				lunch for the team and we're going to have kind of a in-house training
				or what have you. And so I need to order lunch for that particular
				meeting. So let's go ahead and take that and we're going to move that to
				the doing. We're going to flip that card over, write our name, the date,
				the time and the updated status for our audit records. And you just keep
				going through this. Now this kind of kanban isn't just for me. All team
				members, the network guy maybe he comes out and says, oh yeah, I'm going
				to update those server requirements, I'm going to do that. Setting up
				the meeting with Frank, maybe Betty, who has, needs to get more
				information from Frank had put that work item out there and she goes
				ahead and takes ownership of that particular task. So these tasks are
				moving, being created, put in the to oo column, moving to the doing and
				the done and everything is just very fluid. Everybody's taking ownership
				and they're working to get that particular work item started and
				completed.
			</Np>
		</div>
	);
}
export default Kanban;
