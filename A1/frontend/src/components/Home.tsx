import { CssBaseline, Container, Typography } from "@mui/material";
import React from "react";

export const Home = () => {
	return (
		<React.Fragment>
			<CssBaseline />

			<Container maxWidth="xl">
				<Typography variant="h1" component="h1" gutterBottom>
					Welcome !
				</Typography>
			</Container>
		</React.Fragment>
	);
};