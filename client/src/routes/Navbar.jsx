import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function MyNavBar(props) {
	const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

	return (
		<>
			<Navbar sticky="top" className="nav-bar">
				<Container>
					{isAuthenticated ? (
						<>
							<Link className="nav-link" to="/">
								Home
							</Link>
							<Link className="nav-link" to="/game">
								Game
							</Link>
							<Link className="nav-link" to="/roster">
								Roster
							</Link>
							<Link className="nav-link" to="/cards">
								View Cards
							</Link>
							<Link className="nav-link" to="/create">
								Create Card
							</Link>
							<Link className="nav-link" to="/leaderboard">
								Leaderboard
							</Link>
						</>
					) : null}
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						{!user ? null : <Nav.Link href="/user-profile"></Nav.Link>}
						<Navbar.Text>
							{!isAuthenticated ? (
								<Link onClick={() => loginWithRedirect()} className="nav-link">
									Log In
								</Link>
							) : (
								<Link
									className="header-nav-link"
									onClick={() =>
										logout({
											logoutParams: { returnTo: window.location.origin },
										})
									}
								>
									{user.name} please Log Out
								</Link>
							)}
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
export default MyNavBar;
