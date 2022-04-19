import React from "react";
import "../../scss/scrum5.scss";

function Scrum5() {
	return (
		<div className="scrum5_all_of_it">
			<h1 className="fw-bold">Estimating in agile</h1>
			<h3 className="fs-3 fw-bold">Introduction to Estimating</h3>
			<p className="fs-4 mt-3">
				<span className="fst-italic fw-bold">
					So estimating, is the concept of roughly calculating. In this
					particular case, we're roughly calculating how long it's going to take
					us to complete a particular user story, how long it's gonna take for
					us to get from beginning to done done. Now that roughly calculating
					thing ? I don't know, calculating to me sounds a lot like you have all
					the information and you're just kind of putting it together or
					figuring things out- like a math problem. But to me, estimation is
					nothing like a calculation, it's more of a guess, but it's not just a
					wild guess. It's actually an educated guess.
				</span>{" "}
				<br className="mb-3" />
				You're using some information to help you come up with your best
				educated guess on how long this is going to take. Now the information
				you use, there's really three key pieces to it.
				<br className="mb-3" />
				<ol>
					<li>
						Number one- which is the most important- is the elicited
						information. So this is the information you've gathered from
						stakeholders. This is their various needs. This is their wants. This
						is ultimately what put together the core of that particular user
						story. So that obviously based on what they tell you there will
						dictate how long it's going to take you to actually solve that with
						some type of solution.
					</li>
					<li>
						Secondly, you want to utilize your past experiences. So this could
						be experiences on other projects or other user stories that are
						similar to this- where now you can utilize the lessons learned from
						that past user story- to actually help you create your best estimate
						for this user story.
					</li>
					<li>
						And finally, you can also use various documentation from your
						organization. So your organization may have some standards
						documentation for estimating. So some organizations are very mature
						in how they do it. Some organizations have some repetitive tasks and
						so they have some various documents that will help their team
						members to put together an accurate, or as accurate as possible,
						estimate.
					</li>
				</ol>
				So now that you understand what estimating is in general let's move on
				and talk about estimating specifically for Agile.
			</p>
			<h3 className="fs-3 fw-bold">Estimating in Agile</h3>
			<p className="fs-4 mt-3">
				Where I want to start is actually not looking at agile, I want to talk
				about estimating for non agile projects and these will help to give you
				some context prior to jumping into the agile side. So for non agile
				projects, is this more waterfall or iterative projects, you are going to
				get absolute estimates.
				<br className="mb-3" />
				What I mean by that is you've completed requirements and you've handed
				that those requirements for that particular item or task or feature over
				to a developer. And now that developer's are going to developer, I guess
				I should say developer or solution or because it may not be like a
				software developer. But anyways you handed over to the person that's
				going to be completing that particular feature. And they are going to
				read through everything and from a non agile standpoint they're are
				going to deliver back a number. So this is going to usually signify the
				number of days for the duration of that particular feature. I feel this
				particular feature is going to take me three days to complete. That
				would be an absolute estimate, you're giving a set number of days, in
				this case, for how long it's going to take to complete that particular
				feature.
				<br className="mb-3" />
				Agile is a little bit different. Agile looks at things relative to the
				other features, items, tasks that were estimated as part of that
				project. So agile looks at it and says:{" "}
				<span className="fst-italic fw-bold">
					Is this a small or is this a medium or is this a large item? We don't
					care about specifically how long we feel it's going to take us.
				</span>{" "}
				We just need to know if it's small, medium or large, what bucket does it
				go into. And now when we say a relative estimate the reason they say
				that is it's relative to the other items that have already been
				estimated as part of that project.
				<br className="mb-3" />
				So let's break that down a little further with an example. On the screen
				you'll see a fly, a frog and an elephant. The fly is small, the frog is
				medium and the elephant is large. So as we're working through if we were
				trying to categorize or bucket a whole bunch of animals we would use
				these as our relatives sizing, if we find a rhinoceros is going to be a
				large is going to go with that elephant. If we find a butterfly, maybe
				that goes with the frog because it's the same size of frog or maybe it's
				a really small butterfly and goes with the fly.{" "}
				<span className="fst-italic fw-bold">
					So you can start to do the sizing or the estimating based on
					relativity to the other things that were already estimated.
				</span>{" "}
				<br className="mb-3" />
				Now, the thing to recognize with the relative estimate is that
				relativity is really only inside of that project. So those team members
				are estimating tasks based on other tasks or features that were already
				estimated as part of that project. And so they're going to look to try
				to put it in that small, medium or large bucket. But those buckets don't
				necessarily apply to every other project. Let's look at another one. So
				here we've got a ladybug, an elephant and a tree. The Ladybug here
				represents the small, the elephant is now a medium, in this particular
				project ,and the tree is a large. So as you can see even though that
				elephant was a large estimated item as part of the previous project,
				that exact same item or a requirement or feature could be estimated as a
				medium as part of a different project. It's just, it's all relative to
				the other items, the other tasks, the other features that are being
				estimated out. So it's a really important concept to grasp.
				<br className="mb-3" />
				So I hope that makes sense in regards to a relative estimate from an
				agile standpoint, to an absolute estimate in not agile. Personally from
				an estimation standpoint agile is so much easier so much easier to do a
				relative estimate than it is to do an absolute estimate for a couple of
				reasons. One is you can just kind of place it in a bucket comparing it
				to other things rather than detailing out in your mind every step that
				you need to complete to then come up with an absolute estimate. So
				that's one big thing and the other big thing is the third bullet points
				that I have listed here. In agile updates usually don't affect a whole
				lot in the project, they usually have a pretty minor effect. And what I
				mean by updates is an estimation update. So let's say we put it into a
				small bucket and it ends up turning into a medium sized feature. OK,
				well it could hurt us in our sprint a little bit.
				<br className="mb-3" />
				<span className="fst-italic fw-bold">
					We could maybe not get everything done that we wanted to get done, but
					it's ok, we can bump another thing out to the next sprint. From a non
					agile standpoint it can have pretty dire consequences for a project.
					What I mean by that is let's say it was estimated at two days and then
					it actually took four days to complete, that two extra days has to
					come from somewhere and I guarantee on the plan there were other
					features and items and tasks that were lined up to be completed after
					that. Well now that that first one got pushed back has to cascade
					across all of those other tasks, moving them back or trying to find a
					way to make up that additional two days that was unaccounted for
					because of the incorrect or invalid estimate.
				</span>
			</p>
			<h3 className="fs-3 fw-bold">Estimating in Agile: Why Estimate?</h3>
			<p className="fs-4 mt-3">
				Let's talk a little bit about why it's important.
				<ol>
					<li>
						Number one and this is the most obvious one is an estimate is
						providing you an estimated duration for completion. About how long
						do you think it's going to take you to complete this feature based
						on the requirements you were given? From an agile standpoint,
						they'll put it into a bucket in the examples we gave earlier small,
						medium, large. But that could be different buckets based on various
						techniques, . But that's the most obvious one, you are giving them
						the requirement. They're telling us an estimated duration. Now we
						can use that for our planning and moving forward on that particular
						feature or deciding if, you know what, let's go ahead and table
						that, it's going to take a little bit longer than what we're
						expecting.{" "}
					</li>
					<li>
						The second thing that estimating does for you is it helps to drive
						out clarification questions. When you're asking somebody to commit
						something. You're asking them to commit an estimate for a particular
						task they're going to spend a little bit extra time making sure that
						they read the feature, they read all those requirements, they read
						the acceptance criteria and they have a good understanding of how
						they would go to accomplish this particular feature. Now with doing
						that, they're going to also drive out additional clarification
						questions or unknowns that weren't defined there. So by asking for
						an estimate, not only are you going to potentially get a duration
						back, you also are going to get clarifying questions of things that
						you need to dig in further to and make sure that you have defined as
						part of the requirement prior to that requirement actually being
						able to be completed by that developer or the person creating that
						solution. So that's number two it helps to drive out clarifying
						questions.
					</li>
					<li>
						Number three is it highlights complex or high risk tasks. As you're
						working in projects more and more you get a sense of how long things
						take. When you're writing your user stories or features. You have an
						idea. This is a small, medium or large type of task. Now that's
						going to be really useful when you hand that to somebody that's
						going to be creating it and then they give you an estimate back and
						they say OK, I think this is a this is a medium requirement or
						medium feature you may say wait a minute I was thinking it was a
						small. So let's talk through a little bit. What are some of the
						complexities? What are some of the risk items that made you consider
						it a medium? So it helps to bring conversation and highlight some of
						those complexities and risky issues that you may not have been aware
						of or accounted for. Now by highlighting and by knowing that
						information you can make adjustments, maybe you tweak the
						requirements a little bit, maybe tweak that feature to make it less
						complex by taking very little away from it or changing it very
						little. Maybe you look to mitigate or remove those protect potential
						risks that were identified as part of that feature. And so then it
						can be reduced in size. Ultimately, the goal isn't to reduce the
						size, but it's to make sure that it's in line with expectations and
						with what would want to be done for the value that feature provides.
					</li>{" "}
					So those are the big reasons why we estimate in agile. Provides that
					estimated duration, drives out additional clarification questions and
					can help to highlight or point out areas of complexity or high risk
					that were previously unidentified accounted for.
				</ol>
			</p>
			<h3 className="fs-3 fw-bold">Common Agile estimation techniques</h3>
			<p className="fs-4 mt-3">
				Big/Uncertain/Small also known as the BUS, we have T-shirt sizes and we
				have the Fibonacci sequence.
				<br className="mb-3" />
				<span className="fw-bold">
					Big/Uncertain/Small also known as the BUS
				</span>
				<br className="mb-3" />
				We're going to start with the most simple one the BUS. The
				Big/Uncertain/Small estimation technique has three buckets. You have a
				bucket for big user stories, you have a bucket for uncertain user
				stories and you have a bucket for small user stories. All of the
				features, all the items that are being estimated get placed into one of
				those three buckets. Ideally, you want as many features in the small
				bucket as possible.
				<br className="mb-3" />
				Those features are small and bite size and can be done in a relatively
				short amount of time. Now with any of the stories that are in the big
				bucket, the first thing you should try to do is break them up. Is there
				a way that we can take that existing user story and break it up into
				multiple user stories, ultimately, parse out that user story and then
				have those be estimated at small that way their bite size they're easy
				to complete and provide value. Not all big user stories can be broken up
				and still maintain the same amount of value delivered to the
				stakeholders or the users in this case.
				<br className="mb-3" />
				So some of them will stay big. But you do want to make an attempt to try
				to break up as many of those as possible. Any stories that are part of
				the uncertain bucket that means that the requirements, the user stories
				are too vague, maybe the concepts behind it are bleeding edge and so
				it's really difficult to estimate how long it's going to take. These
				ones most definitely need to be broken up, defined and redefined and
				then reestimated to hopefully get them into either the big or the small
				buckets. So BUS is a fairly simple agile estimation technique. The most
				often I see this utilized by companies that are just switching to agile
				from more predictive methodologies such as waterfall.
				<br className="mb-3" />
				<span className="fw-bold">T-shirt sizes.</span>
				<br className="mb-3" />
				This one has multiple buckets, you actually usually have five buckets as
				part of this you have an extra small, a small, a medium, a large and an
				extra large. So those are the five buckets that the features can be
				estimated into and they go along with relative t-shirt sizes. The reason
				I think T-shirts are used is because it's very global. Everybody
				understands what a size of a shirt is regardless of what language
				they're in, what country they work for or what project methodology
				they've used in the past. And so this one has also become a fairly
				popular estimation technique for organizations switching to agile.
				<br className="mb-3" />
				But some of them just stay on these T-shirts sizes, they don't need it
				more complex than that. So each user story obviously is compared to each
				other based on how long it's going to take, it's placed into the one of
				five buckets extra small, small, medium, large and extra large.
				<br className="mb-3" />
				The large and extra large user stories are the ones that you should look
				at and see if you can break them up if possible into smaller user
				stories, ones that would fit into that extra small, small or medium
				sized buckets. It's not always going to be possible, but highly
				recommended that you don't have many if any large or extra large stories
				as you move forward to begin some of your sprint planning. So that's the
				T-shirt sizes estimation technique.
				<br className="mb-3" />
				<span className="fw-bold">Fibonacci sequence</span>
				<br className="mb-3" />
				The Fibonacci sequence has the team grouping together their user stories
				into buckets. They're determining the groups by pulling together the
				user stories of approximately the same size of effort to complete. Okay,
				so we have these buckets. Let's call them A through G. So we have Bucket
				A, Bucket B, Bucket C, D, E, F, and G. The "A" bucket represents the
				smallest effort user stories. The "G" bucket represents the largest
				effort user stories. So the team grabs a user story, analyzes and
				discusses the details, and then determines the appropriate bucket it
				would fit into. But with our current naming convention, it's hard to
				know the real difference between a lot of those middle buckets.
				<br className="mb-3" />
				Like what's the real difference between Bucket C and D? Or a buckets D
				and E? It's hard. So what we'll do instead, is use a sequence of
				numbers, called the Fibonacci sequence, to name the buckets. So using
				the Fibonacci sequence, the first bucket is going to be 1. The second
				bucket will be 2. Now, the way the Fibonacci sequence works is you add
				together the two previous numbers to get the next one. So with that, our
				first bucket is 1, second bucket is 2, 1 + 2 is 3, so the third bucket
				is 3. As we continue on following the same pattern, 2 and 3 makes 5. So
				the next bucket is 5, 3 and 5 is 8, 5 and 8 is 13, and 8 and 13 is 21.
				So now our bucket groupings are following that Fibonacci sequence. With
				the bucket being labeled with numbers, it's naturally easier for So the
				next bucket is 5, 3 and 5 is 8, 5 and 8 is 13, and 8 and 13 is 21. So
				now our bucket groupings are following that Fibonacci sequence. With the
				bucket being labeled with numbers, it's naturally easier for the team to
				group those user stories by similar size, and be able to tell apart
				those that were estimated at a medium -ish size. Well, I hope that helps
				to explain it.
				<br className="mb-3" />
				So the sequence goes like this. 1, 2, 3, 5, 8, 13, 21 etc.. So those
				numbers it may seem a little random at first, but the sequence says add
				the two numbers prior to the number, and you'll get that number. So 1and
				2 is 3, 2 and 5, 2 and 3 is 5, 3 and 5 is 8, 5 and 8 is 13, 13 and 8 is
				21. So if we would go to the next one, it'll be 13 and 21 is 34. So as
				it... as you get larger, the numbers gets larger exponentially a lot
				faster. Right? And you... you add up a lot quicker. And the concept
				around that is, the bigger the story, the more complexities, the more
				uncertainties, and the more risks, that are [going to] be around in
				completing that estimate in that... the kind of estimated or relative
				time frame that's being expected. So, the numbers, like I mentioned for
				the Fibonacci sequence, are kind of abstract, but they're used to help
				provide some more details to the team as to what they can commit to for
				that Sprint. So these numbers are called story points. It's how many
				points that story will been... will need, in order to be completed.
				<br className="mb-3" />
				As in a lot of the other techniques, any user stories that are larger,
				really should be broken down. In this case, 13 and 21, for sure should
				be broken down into smaller user stories that can be estimated and put
				into smaller buckets. Take less time to complete to deliver that value.
				As well, a lot of times the 8, is kind of looked at in and determined,
				hey can this be broken up at all? Because the smaller the stories are,
				and the smaller story points are assigned, the easier that task is going
				to be completed, and the more likely you're going to be able to get it
				done within the estimated timeframe that you're expecting.
			</p>
		</div>
	);
}
export default Scrum5;
