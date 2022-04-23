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
			<div className="print_not_show">
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
							First one is start with what you do now. What kanban is saying
							here is hey, you don't have to conform your whole organization
							around kanban like you have to do with some agile framework such
							as scrum, instead kanban will come in form to your organization.
							So start with what you do now.
						</li>
						<li>
							The second thing is agree to pursue incremental change, you have
							to understand, if you're doing a waterfall type of approach you're
							going to get a huge amount of value, but there's going to be a
							huge amount of time that is kind of wasted or utilized to provide
							that huge amount of value. Kanban and agile in general is really
							looking at incremental changes delivering value more often, but in
							much smaller increments and then incrementing on that change and
							building upon that change to build out that big piece of value.
						</li>
						<li>
							The third basic principle of kanban is to respect current
							processes, roles, responsibilities and titles. Simply this is
							saying you don't need to change everything with your organization
							to match kanban, you don't have to make new roles and have people
							learn new responsibilities. Instead you can utilize what you have
							and still use the kanban framework which is very very intriguing
							for many organizations.
						</li>
						<li>
							And the fourth basic principle is encourage acts of leadership at
							all levels. This comes down to the self-managing teams.
							Self-managing teams mean that the team really doesn't have one
							over looker, right. They don't have one manager that's watching
							them and keeping them on task. Instead they are managing
							themselves, if they need assistance they're reaching out and
							getting assistance. If there's some type of negotiation or issue
							that's happening as part of the project, they are all involved in
							that in helping to direct that in the correct way. So kanban is
							really looking and saying hey, be mature and really encourage
							those acts of leadership from your team members.
						</li>
					</ol>
					<Bita>
						Now the most iconic thing for kanban is the visual aspect. And in
						this case it's the kanban board and kanban cards. The kanban board
						helps to show status of the various work items as well as any of the
						bottlenecks that may be occurring throughout the project,
					</Bita>{" "}
					those work items being completed. Kanban cards they house the details
					of that particular work item, they house details of what that work
					item is, maybe when it's due. Obviously the status is derived from the
					column. So that's not usually noted directly on the card, but it's in
					the particular column for that status as well as any dates and times
					that that particular card has moved from one status to another. So
					let's kind of take a step back.
					<Next></Next>
					So kanban boards, they can be both physical or virtual.{" "}
					<Bita>
						Physical meaning it's a board inside of some type of office room,
						it's a white board that's been, you know, with markers drawn into a
						kanban board and then you use sticky notes or some type of note
						cards with a tack pen or note with a piece of tape that are actually
						hanging those kanban cards in the appropriate column of the kanban
						boards. So that's the physical side.
					</Bita>
					From a virtual side you can use various applications. My favorite
					application to utilize for kanban is Trello. It's trello.com And it's
					a completely free application where you can do basic kanban inside of
					that application. Another very popular one is Jira. Jira is a little
					bit bigger. It's a premium one. It's not free, you have to pay for it,
					but a lot of organizations that utilize kanban will use Jira or maybe
					some other type of premium software to track.
					<Next></Next>
					So it doesn't matter what piece of software you are utilizing, the
					look and the feel are going to be different, but the concepts of
					kanban are going to be the same.
					<Bita>
						{" "}
						So let's walk through and let's assume that this board is a physical
						kanban board. So this is, these columns are drawn on to a white
						board where our agile team resides, where our agile team is working
						and our kanban cards are sticky notes that are put up on that board
						in the appropriate column.
						<Next></Next>
						In this case, everything's in the to do. Now as a team member
						working on this, I don't get assigned or tasked with work items with
						kanban cards. Instead I go out there and this is, kanban is
						considered a pull methodology meaning that I go out there and I pull
						work. I make a determination as to what is the highest priority and
						what task needs to be completed next. So I look at my kanban board
						and in generally regardless of its physical or virtual.
						<Next></Next>
						Most teams will have the kanban card set up from the top being the
						most priority, the bottom being the least priority. So as we look
						here the highest priority sticky notes or cards that we have in this
						case are setting up a meeting with Frank, updating some server
						requirements and as we move on creating a process flowchart,
						ordering lunch etc.
					</Bita>{" "}
					<Next></Next>
					So usually it's top priority on down and it's not always like a list.
					Right, because I may not be able to do a code review, which is one of
					the items on this list. So you don't want like 1 through 10 type of
					thing. You want a generalized priority, a general idea. This is a
					higher priority or a lower priority. So you know what to choose. So
					anyways I'm a kanban team member, I need to pull some work, I need to
					do something and I look through here. I'm not really sure what this
					meeting with Frank is all about. So I'm going to skip that one.
					<Next></Next>
					Server requirements document. Not really my cup of tea, the networking
					guy is going to probably handle that one. Create a process flowchart.
					I can do that. That is a good one for me. It's a higher priority, it's
					towards the top so I'm going to go ahead and assign this task to me,
					I'm going to take ownership of this task and getting it completed. On
					a physical board, I would walk up I'd grab that sticky note and pull
					it off. And I'd simply stick it in the doing column. Now that task is
					assigned to me.
					<Next></Next>
					Now with a virtual board, you're going to have all your dates and
					times and who did it, audit it, automatically right. It's
					automatically in a track, so you can pull that later for some things
					that we will need. On a physical board, a little bit more difficult.{" "}
					<Bita>
						What I've seen a lot of people do to try to track those dates and
						times that these cards are moved from one status to another is to
						actually flip that card over and on the back of it write their name,
						the date and time and what the status was changed to.
					</Bita>{" "}
					<Next></Next>
					That way they're tracking when it was moved to doing it when it was
					moved to done. I've also seen a lot of organizations that do it that
					way when they create the initial card and they put it in the to do
					column. They do the same thing. They write the name of the person that
					created the work item, that particular card, they write the date and
					the time and that it's a status of to do. So when you look at the back
					of those cards you can see the audit trail of what that card did from
					date, and you know, from date to date or over time and kind of see how
					that card evolved and moved through the various statuses. So I've
					taken ownership of that particular work item. Now once I get done with
					that work item I would simply go grab the work item and physically
					move it to the done column.
					<Next></Next>
					In a virtual board, same type of thing like what you saw me do on the
					screen, in a virtual board is a lot of click and dragging to another
					column. The physical board obviously you got to walk up to it and
					remove the item and move it over to another column. But don't forget
					I'm going to flip it over and write my name, the date and the time and
					the updated status on the back of that card. Well, I have completed my
					process flowchart.
					<Next></Next>
					Next? Now I need to do another task so I'm going to look at these
					tasks, maybe ordering lunch is important. Maybe it's 10 a.m. now, we
					have a lunch meeting at 12:30 and which we're ordering lunch for the
					team and we're going to have kind of a in-house training or what have
					you. And so I need to order lunch for that particular meeting. So
					let's go ahead and take that and we're going to move that to the
					doing. We're going to flip that card over, write our name, the date,
					the time and the updated status for our audit records.
					<Next></Next>
					And you just keep going through this.
					<Bita>
						{" "}
						Now this kind of kanban isn't just for me. All team members, the
						network guy maybe he comes out and says, oh yeah, I'm going to
						update those server requirements, I'm going to do that. Setting up
						the meeting with Frank, maybe Betty, who has, needs to get more
						information from Frank had put that work item out there and she goes
						ahead and takes ownership of that particular task. So these tasks
						are moving, being created, put in the to oo column, moving to the
						doing and the done and everything is just very fluid. Everybody's
						taking ownership and they're working to get that particular work
						item started and completed.
					</Bita>
				</Np>

				<Np>
					<Bita>Post Script</Bita>
					<Next></Next>
					Now one thing to reiterate on the kanban cards is these cards aren't
					going to house just the words of what that particular work item is and
					the dates and times of the status moves. They also can house other
					details such as deadlines. They also can house different details like
					references to other materials that can be utilized to complete that
					particular task. Now those references are a lot easier to do in a
					virtual board where you can actually attach documents or attach a link
					to that particular card inside that online application, rather than a
					physical board where you're kind of writing notes as to where to find
					those details because you obviously can't have an actual link to it
					when it's a physical card taped or stuck up on to a kanban board. So
					what is one to make sure that that was absolutely clear. Kanban cards
					won't just have the details. They also have other information on them.
					And that information's going to vary depending on the various
					organizations you work with and work for. Because remember kanban
					conforms to the organization it's going to. It doesn't have that
					organization conform to it.
				</Np>
				<h1 className="fw-bold">Six general practices of kanban.</h1>
				<Np>
					<ol>
						<li>
							<Bita>
								One general practice for kanban is visualize the workflow.
							</Bita>
							<Next></Next>
							That's pretty obvious, you can visualize the workflow on that
							kanban board, whether it's physical or digital it doesn't matter.
							You can see those cards move, you can see them be created, you can
							see them move from the various statuses and you can see where
							they're at at any given time.
							<Next></Next>
							And that visualization is very important.{" "}
							<Bita>
								Seeing a spreadsheet with IDs of different tasks and dates and
								whatnot, that doesn't mean a lot to people, you really have to
								analyze it to understand it, but seeing a physical board, a
								picture if you will of what's happening can really open your
								eyes to some potential bottlenecks or problems or issues that
								the team is running into or is going to run into and you can
								then help to try to avoid those.
							</Bita>
						</li>
						<li>
							<Bita>
								Number two is limit the work in progress or also known as the
								WIP.
							</Bita>
							<Next></Next>
							We have talked a lot about this, but with kanban you have that to
							do column, you've got the doing and the done column.{" "}
							<Bita>
								The key thing here is you don't want to just take all those to
								do items and move them to doing because when you have that many
								items in progress you're not actually working on all of them at
								the same time. Instead you want to take items and limit the
								amount of them that you have in progress so people can focus on
								the particular items and get them finished.
							</Bita>{" "}
							<Next></Next>
							The thing about kanban is stop starting, start finishing. It's not
							about starting a million tasks, it's about completing tasks,
							delivering those small amounts of incremental value to the
							organization. So number two, limit your work in progress.
						</li>
						<li>
							<Bita>Number three is manage the flow.</Bita>
							<Next></Next>
							With the kanban board being visual, it's a lot easier to identify
							issues and problems in that particular flow, bottlenecks or things
							that are holding up tasks from being completed. So the third
							general practice is really manage the flow of those items, make
							sure that the items are continuing to be flown from status to
							status with ease and efficiency.
						</li>
						<li>
							<Bita>Number four is make policies explicit.</Bita>
							<Next></Next>
							<Bita>
								What this is referring to kanban is really a framework that can
								be structured to your organization, it can be adjusted. Well
								with that, there's not a lot of structure or rules or policies
								that kanban is really forcing on people. Instead kanban is
								saying to the organization you come up with those policies, you
								decide when you move things from various statuses and the
								various policies and procedures that you'll have in place to
								help manage that full workflow for kanban.
							</Bita>{" "}
							<Next></Next>
							So kanban is sayin: make those policies explicit, write them down,
							make sure everybody's aware of when you move task or how you
							manage block tasks or tasks that are in progress, but are stuck.
							By having those policies explicitly documented, not only will it
							make it easier for everybody in the team to ensure that they're
							following the same type of process, but also help continue to move
							those tasks as efficient as possible.
						</li>
						<li>
							<Bita>Number five is all about implementing feedback loops.</Bita>
							<Next></Next>
							This can be a fluid type of process. Things are always added to
							the to do's and there move through all the various statuses based
							on where that work item is and you just keep moving, as you move
							it to done you're releasing it out to the users, the production
							environment, getting the value from that as you start on your next
							task and you're moving through.
							<Next></Next>
							So what I'm saying is, it's a really fluid process. There's not a
							good place to do those feedback loops. So this is a general
							practice in here to make sure that you don't forget about them.
							Feedback loops are really important to give feedback to the team
							and to get{" "}
							<Bita>
								feedback so you can make adjustments to make the overall process
								better.
							</Bita>{" "}
							Now the main question I get asked is: well, when do we do this? If
							we're not doing like a time-box, a structure, you know really set
							structure or a sprint, how do we handle these feedback loops?
							<Next></Next>
							Well the easiest way I've seen it done is number one, you still
							have your daily standup, 15 minutes you're looking at the kanban
							board, people are discussing what they're working on, that work in
							progress and it really helps to have the full team understand what
							everybody's doing, as you're looking at that visual board and
							talking to people about what they accomplished yesterday, what
							they're working on today and any type of roadblocks or problems
							they're running into.
							<Next></Next>
							And the other thing that you can do, is you can still set up like
							a retrospective and this would just be a cadenced meeting, a
							meeting that happens every two weeks or three weeks or month or
							whatever works for your organization in your particular project
							team, where do you get together with the team and you just discuss
							overall how are things going, are there issues, are there things
							that we can adjust to make things easier etc. So you still want to
							make sure that you're implementing those feedback loops even if
							you're utilizing a very fluid kanban process.
						</li>
						<li>
							<Bita>
								Number six is collaborate for improvement, evolve
								experimentally.
							</Bita>
							<Next></Next>
							<Bita>
								What this is alluding to is you don't take a task and just work
								that solo all the time. There's times where tasks, you need
								other people, you need to collaborate.
							</Bita>{" "}
							You have to have a discussion about how you're going to handle
							that particular work item and how it's going to be completed. And
							so what this is saying is collaborate for improvement, collaborate
							together to make sure that that task is done appropriate and done
							in the right way. Experiment with different ways of doing it and
							accomplishing it and then test those results and see if that
							actually was successful.
							<Next></Next>
							<Bita>
								{" "}
								collaborate to make a good decision as to how to accomplish it
								and then evolve experimentally, learn from different experiment,
								things you fail on, things you succeed on and understand what
								works and what doesn't for other future work item tasks.
							</Bita>
						</li>
					</ol>
				</Np>
				<Nh3>Kanban Key Metrics</Nh3>
				<Np>
					<Bita>
						Kanban has some key metrics that it likes to utilize to understand
						how those tasks are flowing. You can visually see the task flow from
						the to do, doing and done and watch them, you can easily see
						bottlenecks, but metrics help to also give a bigger picture as to
						how is everything flowing.
					</Bita>{" "}
					<Next></Next>
					Is there areas of improvement and areas of adjustment that can help
					everything move a little bit smoother, a little bit faster?{" "}
					<Bita>
						So some of the key metrics that are common in kanban are lead time
						and cycle time. These are pretty much prevalent in every single
						kanban through all organizations. Now there's a lot of other metrics
						that could be measured. These are the two that we're going to hammer
						on because of their popularity and some of the kind of common nature
						in which they're utilized.
					</Bita>{" "}
					<Next></Next>
					<Bita>
						Lead time is all about the full time from the time that task was
						created and put into that to do column so that initial data till the
						date that it was completed. So as it moved through the to do column,
						to the doing column, to the done column. How long was that?
					</Bita>{" "}
					<Next></Next>
					<Bita>
						Cycle time is a little bit shorter. This is from the time it was
						picked up until the time it was completed. So for the cycle time we
						don't care about how much time from the time it was created and put
						in the to do until it was moved to the doing. Instead we're only
						looking at from the time it was a doing, so the time it was marked
						in progress, until the time it was completed. And that's called
						cycle time.
					</Bita>{" "}
					<Next></Next>
					<Bita>
						So as you can see in our example here, let's say that our task was
						created, nine days later it was put into the doing column, the work
						was started and then five days later after that, it was moved to the
						done column. While the lead time, the full lead time is 14 days.
						That's the time it was from creation to completion. Cycle time in
						this case would be five days. That would be the timeframe from in
						progress until done. So just remember lead time. The full time of
						that work item. Cycle time how long it takes for us to cycle through
						an in-progress to get it to complete.
					</Bita>{" "}
					<Next></Next>
					Now these metrics are really important because they can help to
					identify areas of issue. So if you're having too many items that are
					work in progress your cycle time they're going to be crazy. You're
					going to have really long cycle times for a lot of different tasks.
					It's going to show that you're not really focusing on one particular
					item, you have too many items in progress.
					<Next></Next>
					Maybe that's because you like to start and not finish which is a bad
					thing. You want to make sure you're finishing as much as you can.
					Maybe it's because you keep hitting roadblocks or you're waiting for a
					certain resource to be available to help you. And so you have to kind
					of table that one as an in progress item and grab another one to start
					working on.
					<Next></Next>
					Well it's good for that to be identified so they can get another
					resource to help out or free up that resource a little bit more so the
					cycle time for the overall work items isn't quite as long. So these
					metrics are really important to track and to take advantage of any
					adjustments that can be done to improve your overall processes.
				</Np>
			</div>
			<Nh3>Kanban Metrics Based on Board Type</Nh3>
			<Np>
				Now with these metrics in mind,{" "}
				<Bita>
					having a digital or virtual board is going to be a ton easier, it's
					automatically tracking those dates and times, who moved it. And so
					your cycle and your lead times can be created pretty easily, you can
					create a report and pull it out or for most of the different online
					applications you can just utilize their canned reports and pull the
					data out to your lead time and your cycle time. So it's pretty quick
					and painless.
				</Bita>{" "}
				<Next></Next>
				<Bita>
					Now the physical board, that gets a little harder, you have the dates
					and the times written on the back of that card or the back of that
					sticky note. Somebody needs to physically go through flip them all
					over, write all those dates and times down. So then they can generate
					a report that's going to provide the lead time and cycle time. Since
					this is done normally on a weekly basis that can be a lot of like
					wasted time getting that set up.
				</Bita>{" "}
				<Next></Next>
				So most teams nowadays that I see, that utilize kanban are utilizing the
				digital or the virtual boards to give them the that auditing. Now the
				one thing they miss,{" "}
				<Bita>
					with the physical board if you've never used a physical kanban board,
					it's so exhilarating to be able to take that sticky note orthat card
					and move it from doing to done. It feels so good, it feels like you've
					accomplished something and you feel great walking up and moving it to
					complete. So that is a great feeling that you can't really get in the
					digital side, you're going into a computer and moving the card.
				</Bita>{" "}
				<Next></Next>
				It still feels good, but not as good as a physical board. So one
				adaption I've seen a team do that was pretty ingenious actually is they
				used Trello, which is a digital kanban board. I'm actually going to be
				showing a demo of it in the next lecture, but they use Trello and so
				they have their digital board, but they had a{" "}
				<Bita>
					smart board that was inside of their room, so they had Trello up on
					the smart board.
				</Bita>{" "}
				<Next></Next>
				And so people could either go on their computer, if they're not at the
				office, not in that room and they can move the cards and everybody would
				see those cards moving through the process flow and they would get the
				audits or if people were in the room they could do it on their on their
				computer or they could walk up to the smart board and the smart board if
				you don't know, it's like a touch screen so they can walk up and they
				can physically move those cards with their finger to the next column.
				<Next></Next>
				So that was a way, like a really cool adaption, to give the benefits of
				a digital board while also empowering those people that are on site with
				some type of physical board.
			</Np>

			<Nh3>Kanban Board Statuses</Nh3>
			<Np>
				<Bita>
					Now, one thing to remember with Kanban. Kanban is looking to adjust
					its framework to match the processes and whatnot of the organization
					that's adopting that framework.
				</Bita>
				<Next></Next>
				And so this Kanban board. Everything that we've shown you, has been, to
				do, doing, and done.{" "}
				<Bita>
					And that is the base Kanban board, that, that is recommended. It's to
					do, doing and done. Three statuses, but, because Kanban is looking to
					conform to your organization. These really could be anything, you
					could have six different columns with statuses and those statuses
					could be created approved, in-progress, testing, moved to production
					or done.
				</Bita>{" "}
				<Next></Next>
				So you could have a lot of different statuses and really conform it to
				how your organization handles that. Now, one thing to keep in mind, when
				you utilize different statuses and columns in your Kanban board, is you
				generally are going to still be using those key metrics for Kanban. The
				lead time and the cycle time, while lead time will still generally be
				from creation to completion.
				<Bita>
					Cycle time may be a little different, you may have from in-progress
					through testing and to done. So, you may have an extra status in
					there, which is still accounting for that cycle time. So it's just
					something you have to think through and make a conscious, explicit,
					policy or decision on What is cycle time to us? What is considered a
					time, when that, when that work is in progress, until it's actually
					done, to really track that cycle time.
				</Bita>{" "}
				<Next></Next>
				<Bita>
					So I just want to take a moment and just say that to do, doing, and
					done is not how all Kanban boards are set up. And quite frankly, most
					organizations don't have it set up so simply. They usually have some
					other testing or approval phases in there. And so you, when you move
					it through you, get it to those different pieces. So I want to make
					sure that, towards the end of this section, I at least let you know
					that. And, so you can conform that, to meet your needs or the needs of
					your organization.
				</Bita>
			</Np>
			<Nh3>Kanban Swimlanes</Nh3>
			<Np>
				<Bita>
					Swim lanes in kanban are utilized to group tasks together. This could
					be grouping them together based on the department that is going to be
					responsible for completing them, could be grouped together based on
					the title or responsibilities of the person or people that are going
					to be completing them. You could have grouped based on high priority,
					medium priority, low priority, whatever you want to do you can group
					however you want and the swim lanes are done in a different way for
					every organization.
				</Bita>
				<Next></Next>
				So an example on the screen I've got our physical board or our digital
				board, it's got some coloring and so it's got red, green and blue. You
				can very faintly see that on the image, but that could be utilized to
				set up a different swim lane. So that red could mean highest priority
				items, green means medium priority and blue means not a lot of priority
				here. Low value items, work as you kind of can. And so that can be used
				to group them, so the swim lanes you can get really fancy. These are
				really simple. On a physical board, it could just literally be a few
				lines that make almost like a tic tac toe board, if you will, for your
				kanban board and then you have your different categories in groupings.
				<Next></Next>
				And you want to do this sometimes if you have a big team and let's say
				you have network people in the team, you have developers in the team,
				architects, business analyst what have you. And so everybody's working,
				everybody got their tasks in the to to column, it can be overwhelming
				sometimes like there's a lot of tasks out here and I'm not responsible
				for 90 percent of them.
				<Next></Next>
				So it can be helpful to break them apart a little bit into different
				groupings and so you've got to know where to look for your to do items
				that are coming up. So there's a lot more to do is swim lanes, but at
				least want to introduce the concept to use so in case you hear anything
				about it inside of the working world you understand what kanban swim
				lanes are quite simply they're there to help group task together based
				on different similarities.
			</Np>
			<Nh3>Post Script</Nh3>
			<Np>
				<Bita>
					Steps to Implement Kanban
					<ol>
						<li>Visualize your work</li>
						<li>Limit work in progress(WIP)</li>
						<li>Adapt, monitor, and improve</li>
					</ol>
				</Bita>
			</Np>
		</div>
	);
}
export default Kanban;
