import React from "react";
import { Form, Button } from "react-bootstrap";

const Authentication = () => {
	const test = (event:any) => {
		event.preventDefault();
		fetch("/users/signup", {
			method:"post",
			body:"test"
		})
			.then(response => {
				console.log(response);
				return response;
			})
			.then(data=> data.text())
			.then(servermessage => {console.log(servermessage);})
			.catch(error=>console.log(error));

		console.log(event);
	};

	return (
		<Form onSubmit={test}>
			  <Form.Group controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>
			<Form.Group controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="Check me out" />
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>

		</Form>
	);
};

export default Authentication;