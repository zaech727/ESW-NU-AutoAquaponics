import { Box, FormControlLabel, Stack, Switch, Typography } from "@mui/material";
import { useState, useTransition } from "react";
import SelectMenu from "../Components/SelectMenu";
import GraphContainer from "../Components/GraphContainer";

const timescaleOptions = [ // in seconds, not milliseconds
	{ value: 60 * 60, display: "1 hour" },
	{ value: 24 * 60 * 60, display: "1 day" },
	{ value: 7 * 24 * 60 * 60, display: "1 week" },
];

const Dashboard = () => {
	const [zoom, setZoom] = useState(false); // whether to zoom in on available portion of graph
	const [timescale, setTimescale] = useState(timescaleOptions[0].value);
	const [endTime, setEndTime] = useState(timeNowInSeconds());
	const timeBounds = [endTime - timescale, endTime];

	return (
		<Box>
			<Typography variant="h2">System Sensors</Typography>
			<Stack direction="row" alignItems="center" spacing={2}>
				<Box sx={{ width: 200, my: 3 }}>
					<SelectMenu
						label="timescale"
						options={timescaleOptions}
						variable={timescale}
						setVariable={newTimescale => {
							setTimescale(newTimescale);
							setEndTime(timeNowInSeconds());
						}}
					/>
				</Box>
				<FormControlLabel
					control={<Switch/>}
					label="Zoom in on available data"
					checked={zoom}
					onChange={() => setZoom(!zoom)}
				/>
			</Stack>
			<GraphContainer timeBounds={timeBounds} zoom={zoom}/>
		</Box>
	);
};

function timeNowInSeconds() {
	return Math.floor((Date.now()) / 1000);
}

export default Dashboard;
