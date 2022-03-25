import React from "react";
import "./scss/App.scss";

function App() {
	return (
		<>
			<div className="main_app_all_of_it">
				<h1 className="main_app_main_header">The Agile Fundamentals</h1>
				<h2>
					Agile is a Philosophy guided by the Four Values and Twelve Principle.
				</h2>
				<h2>We Are Starting With Four Values</h2>
				<h2 className="main_app_value">
					Value No. 1 Individuals and Interactions Over Processes and Tools.
				</h2>
				<ul>
					<li>
						It's Important for People Building a software to interact with
						Stackeholders(Customer).This not to say that processes and tools are
						not important they are very important. But being Agile means placing
						more emphasis on Interactions.
					</li>
					<li>
						Interactions between team members or multiple team members are
						important. Sometimes team members are hung up on how big this
						software has to be, so what to do, the best way to solve this
						problem is to have a face-to-face conversation with the team to
						better develop and have a better estimation of work.
					</li>
				</ul>
				<h4>
					Key takaway here is Interactions are very important between
					Stackeholders and teammembers.
				</h4>
				<h2 className="main_app_value">
					Value No.2 Working Software Over Comprehensive Documentation.
				</h2>
				<ul>
					<li>
						This does not mean we need to stop Documentation because without it
						software navigation becomes very hard. The key word here is
						Comprehensive.
					</li>
					<li>
						What it means to say that focusing more on main deliverable software
						rather then wasting a lot of time on documentation.
					</li>
					<li>
						This can be achieved by{" "}
						<span className="fw-bold">Shared Undestanding</span>. Having more
						conversation between team and with the stakeholders and even the
						customers.
					</li>
					<li>
						This shared Undestanding can be achieve again by creating small
						increaments of software and putting it in the hands of the internal
						stakeholders or the customer so that they can gain feedback in the
						software they want.
					</li>
				</ul>
				<h4>
					Key Takeaway here is creating small increatment in software and rasing
					the shared understanding of customer and team without too much
					focusing on documentation.
				</h4>
				<h2 className="main_app_value">
					Value No.3 Customer Collaboration over Contract Negotiation.
				</h2>
				<ul>
					<li>
						We want to collaborate with customer because we want to delight our
						customer and also want them to come back to us and rely on our
						expertise for developing software.
					</li>
					<li>
						When we Write Contract we need to keep customer success in mind. So
						Don't Have strong Contract upfront, collaborate instead to create a
						win-win situation.
					</li>
					<li>
						In Customer Collaration it is actually not fair of development team
						to ask for all the reqiurement in day one,customer are coming to you
						in the first place for help, because they want this piece of
						software to be built by you.
					</li>
				</ul>
				<h4>
					Key Takeaway here Customer Collaboration in software devlopment is
					important over rigid forced contact and asking requirement for
					development in small parts over development period.
				</h4>
			</div>
		</>
	);
}

export default App;
