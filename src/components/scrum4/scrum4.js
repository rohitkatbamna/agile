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
				guidelines on writing great user stories. <br className="mb-3" />
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
			<p className="fs-4 mt-3"></p>
		</div>
	);
}
export default Scrum4;
