import React from "react";
import "../../scss/scrum4.scss";

function Scrum4() {
	return (
		<div className="scrum4_all_of_it">
			<h1 className="fw-bold">Key Scrum Terms and Artifacts</h1>
			<h3 className="fs-3 fw-bold">User stories</h3>
			<p className="fs-4 mt-3">
				<span className="fw-bold">
					What are user stories ? User story is a simple description of a
					product feature that is written from end users point of view. That
					means whenever we are writing this product increment, we are thinking
					about the customer.{" "}
				</span>{" "}
				<br className="mb-3" />
				<span className="fw-bold">
					Now let's look at how do we capture this user story ? and what is
					captured in the user stories ?
					<ul>
						<li>
							The first thing that you want to look at is the who. Who is the
							user ? What kind of customers are they? This helps developers to
							really think about and empathize with the customer who's actually
							going to be using this software.
						</li>{" "}
						<li>
							When we deliver this product increment, what will we empower our
							customers to do ? What is their goal ?
						</li>
						<li>
							And then the last thing that we want to capture in these user
							stories is why. What kind of value will it bring? If you're able
							to deliver this user story to the customer.
						</li>
					</ul>
				</span>{" "}
				<br className="mb-3" />
				<span className="fw-bold">
					Let's look at the format that most of the companies use, as a user or
					type of a user. I want a goal, I want to solve a certain kind of
					problem or that is more for what. The third piece of the story is so
					that I can achieve some value or why. So the who, what, and why can be
					captured by using this format of the user story.
				</span>{" "}
				<br className="mb-3" />
				Now let's look at how do we write a good user story. Is the user story
				just a requirement document? or something that replaces the requirement
				document?{" "}
				<span className="fw-bold">
					The user story is not a document, a user story is more of a
					conversation. It's a lightweight description of what the user might
					want in this software.{" "}
				</span>
				<br className="mb-3" />
				There is a really neat way of thinking about a user story and this is an
				acronym called{" "}
				<span className="fw-bold">
					Three C's. 3C stands for card, conversation, and confirmation.
				</span>{" "}
				<ul className="fw-bold">
					<li>
						If you look at the first step, Card. This really means that Product
						Owner after he talks to the customer or the stakeholders come back
						to the team with a (3 / 5) three by five card that captures the who,
						what, and why. And this is just a high-level need of the user.
						Remember, how there is not a lot of description added or a lot of
						time spent in documentation. This is just a three by five card that
						this only has a necessary piece of information and that's brought to
						the team where the conversation actually happened.
					</li>{" "}
					<li>
						So that's the second piece, Conversation. Team members and Product
						Owner discuss about this card. Okay. Who is this user story for ?
						You say, this is a first time patient. Great. What did they want ?
						What kind of problem are we solving ? So that's what we discussed,
						the who, what, and why. This really helps developers to understand
						how they want to build this product increment.
					</li>
					<li>
						The third step is Confirmation. The team will then go talk to the
						product owner. The development team is confirming that what they
						have understood is the same as what product owner or customers have
						in mind, just to avoid any confusion.
					</li>
				</ul>{" "}
				So by just going through these three things, Card, Conversation, and
				Confirmation. You can write a quality user story.
			</p>
			<h3 className="fs-3 fw-bold">User Stories: Acceptance Criteria</h3>
			<p className="fs-4 mt-3">
				<span className="fw-bold">
					Acceptance criteria are simple notes or conditions added to the user
					story that tells you what the user story must do so that it can
					satisfy the need of the customer that is defined by the product owner.
				</span>{" "}
				<span className="fw-bold">
					<em>
						It should be clear, concise and product owner should be able to
						verify it.
					</em>
				</span>{" "}
				<br className="mb-3" />
				We talked about the 3 C's.{" "}
				<span className="fw-bold">
					<em> Acceptance criteria shows up in the confirmation phase,</em>
				</span>{" "}
				where our team members and product owner are collaborating with
				discussing and coming to an agreement on the acceptance criteria of the
				user story.{" "}
				<span className="fw-bold">
					Again these conditions of acceptance statements are known as
					acceptance criteria.
				</span>{" "}
				Acceptance criteria enriches the user story by making it testable and
				also it ensures the story by making a demo to the stakeholders or the
				product owner or the external customers.{" "}
				<span className="fw-bold">
					<em>
						The product owner writes the initial acceptance criteria and brings
						them to the team and they decide and come to an common agreement on
						what acceptance criteria should be part of that user story.
					</em>
				</span>{" "}
				<br className="mb-3" />
				So let's look at an example. Using our very simple user story format
				we're going to define who, what and why. As a new student, I want to be
				able to create a new account on theagilecoach.com so that I can enroll
				into a course. This is a very simple story. How can we add more details
				and how can we make the story more testable and clear? Well, we can add
				three acceptance criteria on this that defines the entry method. Create
				an account through Linked-In. create an account through Google and
				create an account through Facebook. These three conditions are very
				specific. These are three logging and account creation portals and it's
				really easy for developers to understand they need to integrate with
				these three platforms and allow the new students to log in and create
				accounts from these three social media platforms.
				<br className="mb-3" />
				Lastly you want to remember these three things:{" "}
				<span className="fst-italic fw-bold">
					<ol>
						<li>
							Acceptance criteria should be testable with clearly defined
							pass/fail results.
						</li>{" "}
						<li>
							The acceptance criteria should be clear and concise, the developer
							should be able to understand it. No poetic language or
							philosophical statements just to avoid any confusions.
						</li>{" "}
						<li>
							And acceptance criteria is established with shared understanding
							between the team and the product owner.
						</li>
					</ol>
				</span>{" "}
				<span className="fst-italic fw-bold">
					One might ask a question how many acceptance criteria per user story.
					This is totally up to teams. I recommend teams, right, anywhere
					between three to seven acceptance criteria and if it's more than that,
					they can always split that user story into two.
				</span>
			</p>
			<h3 className="fs-3 fw-bold">Writing Great User Stories</h3>
			<p className="fs-4 mt-3">
				Let's look at a technique called invest and we're going to look at this
				acronym to write quality user stories. Usually most of the people when
				<span className="fst-italic fw-bold">
					they think of a user story, they just think of this simple format as a
					user I want this goal so that I can achieve this.
				</span>{" "}
				You can compare this to an analogy of an iceberg, that is just the tip
				of the iceberg. Most of the value comes when you can pay attention to
				invest acronym of the story. What do I mean by that? Let's look at these
				guidelines on writing great user stories.
				<br className="mb-3" />
				<span className="fw-bold fs-3 ms-5">INVEST</span>
				<span className="fst-italic fw-bold">
					<ol>
						<li>
							The first one is independent. Independent just means that when
							you're writing a user story you don't have any dependency with any
							other user story and a team can spin it and get it to done without
							having to depend on any other user stories.
						</li>{" "}
						<li>
							The second one is negotiable. Whenever the product owner or the
							product manager is coming to the team and he's bringing the card,
							based on his understanding of the needs and the goals of the
							users, this user story should be negotiable. Meaning once after
							talking to the team, if the product owner has a better idea this
							user story should be flexible so that it can change and adapt to
							the needs of the user.
						</li>{" "}
						<li>
							The third one is valuable, that this user story has some concrete
							value to the users.
						</li>{" "}
						<li>
							The 4th one is estimatable, this just means if you have a user
							story, you should have some idea on how much complexity this user
							story has.
						</li>{" "}
						<li>
							The fifth thing is small. It should be small enough for team
							members to finish this in a few days.
						</li>{" "}
						<li>
							And the last thing is testable. Whenever you're writing a user
							story you should be able to test that user story.
						</li>{" "}
					</ol>
					And if you pay attention to these six things you will be able to come
					up with great user stories.
				</span>{" "}
			</p>

			<h3 className="fs-3 fw-bold">Product Backlog and Sprint Backlog</h3>
			<p className="fs-4 mt-3">
				So let's look at the product backlog.{" "}
				<span className="fst-italic fw-bold">
					The product backlog is a list of user stories collected by the product
					owner by talking to the users and stakeholders. And one of the most
					important thing about the product backlog is you prioritize, the
					highest priority items are on the top and the least priority are in
					the bottom. And this is an ever increasing list because the wishes and
					the needs of the user are infinite. Right. So it's up to the product
					owner. On the regular basis the product owner will update this and put
					the highest priority items on the top.
				</span>{" "}
				<br className="mb-3" />
				And this is where the scrum team can pull the story from the top because
				they know they're doing the highest priority item. So the product
				backlog should reflect the product vision. What are they trying to build
				?{" "}
				<span className="fst-italic fw-bold">
					The product backlog should have a pretty good sequence on how the
					product should be built. Sure, all the needs of the business, the huge
					long laundry list of the needs, the wants, the shoulds, the coulds.
					And then you can imagine that the team then selects ones that are on
					the top.{" "}
				</span>{" "}
				<br className="mb-3" />
				And so we kind of talked about the product backlog. So let's transition
				that into like a{" "}
				<span className="fst-italic fw-bold">
					sprint backlog. Yes, that is the second artifact.
				</span>{" "}
				So we the product owner's list of user stories that is called the
				product backlog, that the product owner owns,{" "}
				<span className="fst-italic fw-bold">
					In one of the scrum ceremonies which is sprint planning. This is what
					the product owner comes with, he comes with the product backlog's
					highest priority items and he says: these are the highest priority
					items.
				</span>{" "}
				<br className="mb-3" />
				Scrum team, let's discuss these, let's just look at the user stories.
				How many of these can get done in this iteration or the sprint? And if
				it took two weeks iteration, the team is thinking okay, we have two
				weeks and we have to whatever story that we say yes to, we have to get
				this to done. You have to fully design it, build it, test it, get ready
				and it should work. And he has accepted criteria too. So for them to
				understand what's the scope of the user story,
				<br className="mb-3" />
				<span className="fst-italic fw-bold">
					{" "}
					at the end of the sprint they will demo this work. It's will almost,
					surely do that for the user base or the stakeholders. That is your
					sprint backlog. So those are the committed user stories that will be
					completed in that sprint based on what the team says. Yes, this is
					what we can do. And who owns the sprint backlog? That would be the
					team.
				</span>
			</p>
			<h3 className="fs-3 fw-bold">Working Agreement</h3>
			<p className="fs-4 mt-3">
				<span className="fst-italic fw-bold">
					This is outside of a scrum framework, but working agreement is used by
					a lot of team members and just like it sounds like, working agreement
					is when you work in a team, what are some of the rules. what's your
					expectations, what are the expectations.
				</span>{" "}
				Those are some of the things that need to be there, explicitly there,
				where everybody can get access to it, so we all know that this is a
				multiplayer game.{" "}
				<span className="fst-italic fw-bold">
					There are some agreements there so everybody can play together and
					nobody is mad or nobody's unheard so we can make that very explicit
					for the team.
				</span>{" "}
				Yeah, I think a lot of that came up because we're collaborating as a
				team. <br className="mb-3" />
				<span className="fst-italic fw-bold">
					There's no manager, project manager dictating 'hey, you have to get
					your stuff done, why don't you get your stuff done, hey, you have to
					get your stuff done'. It's not that, it's a collaboration, so
					everybody needs to say yes, I agree to what the team is saying and I
					can do my part to make that happen.
				</span>{" "}
				The working agreement, you're going to find it in a lot of different
				organizations, it's not required by any means and it's not even part of
				scrum. But a lot of companies and a lot of organizations have picked
				that up to help them solve some of those problems before they become
				problems, truly get ahead of everything.
			</p>

			<h3 className="fs-3 fw-bold">Working Agreement: Definition of ready</h3>
			<p className="fs-4 mt-3">
				<span className="fst-italic fw-bold">
					Definition of ready is one of the most important part of the working
					agreement. Setting up the definition of ready is Scrum Master's one of
					the crucial responsibilities as well. Usually, in teams, definition
					already applies to the user story.
				</span>{" "}
				<br className="mb-3" />
				<span className="fst-italic fw-bold">
					Again, what is a user story ? A user story is a very simple brief
					statement, describing the feature or the work that has to be done by
					the developer from an end users perspective.
				</span>{" "}
				<br className="mb-3" />
				<span className="fst-italic fw-bold">
					So how does a team member know when the user story is ready? Most of
					the time, what we see is a definition ready has, that the user story
					actually has who, what, and why. Who is the customer? Who is going to
					use it? all the end users ? What did they want ? and why do we need it
					? What is the reason why we're working on this story? So those three
					things are crucial in a user story.{" "}
				</span>
				<br className="mb-3" />
				The other thing that's very crucial in a user story, is the{" "}
				<span className="fst-italic fw-bold">acceptance criteria.</span> So what
				are the criteria's for this user story to be done ? That needs to be
				there before a developer can pick up the story and start working at
				this. Overall, the definition already means the user story is
				actionable. The user story has what needs to be done and the amount of
				work and the complexity of the work. Obviously, having the acceptance
				criteria. So when you read the user story. It should be clear, concise,
				and actionable.
			</p>
			<h3 className="fs-3 fw-bold">Working Agreement: Definition of Done</h3>
			<p className="fs-4 mt-3">
				Let's look at what you mean by definition of done. This is an agreement
				document that team creates so that it's accessible by everybody and it
				is a common understanding that everybody has at that point of time and
				is it ever evolving document. What we mean by that is when a team starts
				with a checklist of items, when these items in the checklist are done we
				know this story is done.
				<br className="mb-3" />
				Let's look at a unit of work, take and user story. How do we know when
				we are done with the user story? One of the things that I've used in my
				team is starting with a very simple document. For one of the teams that
				I used to coach it was as simple as this,{" "}
				<span className="fst-italic fw-bold">
					that user story meets the acceptance criteria provided by the product
					owner. So whatever product owner said, those conditions of acceptance,
					that piece of work actually includes those. The other thing is it's
					properly tested. The other checklist in the definition of done
					document is there is code review or peer review in that story or that
					piece of code.
				</span>{" "}
				<br className="mb-3" />
				And once we have all that we need two more things we need a lightweight
				documentation on what was being done in that user story and the last
				thing is the story must be given to a product owner for review. And if
				we finish all those things we will consider this story or piece of work
				is done.
				<br className="mb-3" />
				Let's say for example, if there is a new team member who joins a team,
				it is so easy for the team member to look at the working agreement and
				part of that is definition of done and they can look at it and they can
				say, they can know exactly where the team's mindset and agreements are
				in place so they know what to do. Following the working agreement they
				would complete the story, they will make sure the story has all the
				acceptance criteria in place, they will test those stories or they will
				actually give it to another team member.
				<br className="mb-3" />
				There will be code review. There will be a lightweight update on
				conference or Jira on how the story was implemented and the last thing
				is they will pass that story to the product owner and explain the
				product owner here this story is done. And when a new team member agrees
				to this definition done then everybody is in the same page and it can
				really help team gain productivity versus getting into the argument: oh,
				this is not actually done or this is almost done and I just need to
				implement this, or I just need to test it in this browser. Those things
				can actually take a lot of time and you know there's a lot of hand-offs
				that can happen within the user story whenever you don't have an
				explicit definition of done.
				<br className="mb-3" />
				One of the things that you want to make sure is you want to make this
				document visual and you want to put in a place where everybody can
				access it. For example I had this document in a team room, in a poster
				and with some of the developers actually printed this definition of done
				and actually posted in their cubicle so that it almost reminds them what
				our definition of done means.
			</p>
			<h3 className="fs-3 fw-bold">Product Increment</h3>
			<p className="fs-4 mt-3">
				<span className="fst-italic fw-bold">
					According to the scrum guide, a product increment is a potentially
					shippable, vertical slice of a solution that's created as part of a
					sprint time-box.
				</span>{" "}
				<br className="mb-3" />
				That definition has a lot of terms and it can be very confusing. So what
				I want to do is actually use an illustration to explain what a product
				increment is.
				<br className="mb-3" />
				<span className="fst-italic fw-bold mt-3">
					Let's first start with your traditional methodology, such as a
					waterfall methodology. On the screen you'll see a little chart from
					left to right is time. So as time goes on we move towards the right.
					The way traditional methodologies have been broken up, is you have
					your various stages. So you have your analysis stage, once you're
					complete with your analysis, you're done with your analysis, you move
					on to your requirements stage, then your design stage and on
					throughout the project. You don't go back to a previous stage, you
					continue moving forward.
					<br className="mb-3" />
					The challenge with this is you don't actually release anything of use
					or value to the business until the end of the project, until that full
					cycle is done. So let's say pretty early on in the project, the
					business wants to stop the project or once again some value from it.{" "}
					I'm sorry you can't. We've completed our analysis and started our
					requirements, but there's really nothing to deliver to you to help you
					out. So that is a traditional methodology.
				</span>
				<br className="mb-3" />
				<span className="fst-italic fw-bold mt-3">
					Now let's take a look at an agile methodology. It takes these stages
					and it still uses them, but it flips them on their head. So instead of
					going from stage to stage to stage throughout time, the stages are
					listed vertically. So when you now have a slice and you do a vertical
					slice, that's where that term comes from, so you do a vertical slice
					on that product now you have this product increment. So at a certain
					point of time which is a sprint or a time-box or within that 1 to 4
					week time frame, you are creating a potentially shippable product
					increment. Now you do that over and over on every single sprint and
					you're creating these product increments.
				</span>{" "}
				<br className="mb-3" />
				To explain this with another type of example, everybody's had some type
				of application software either on their phone or on some type of desktop
				computer that once every couple weeks, once a month that you get some
				type of update it's now version 1.4.6 and then it's 1.4.7 little bit
				later and a couple of weeks, 1.4.8, what they're doing is they're
				shipping new product increments the shipping to new features and changes
				and updates that they've made to the application. And they're doing that
				over and over and over. So you can start to realize that value and that
				product increments it's only going to contain a couple of features, a
				couple of new things, a couple of changes, but when they do that over
				and over and over and they continue to deliver that to you, you're able
				to continue to realize that value rather than waiting for all of their
				features as part of this project to be complete.
				<br className="mb-3" />{" "}
				<span className="fst-italic fw-bold mt-3">
					So product increment is a vertical slice of a potentially shippable
					product that's developed as part of a sprint time-box.
				</span>
			</p>
		</div>
	);
}
export default Scrum4;
