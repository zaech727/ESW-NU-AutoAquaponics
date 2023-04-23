import React from "react";
import GraphCard from "./GraphCard";
import Grid from "@mui/material/Grid";
import { dashboardTrackedStats } from "../dashboardTrackedStats";
import { useFetchStats } from "../Hooks/useFetchStats";

const GraphContainer = ({ timescale }) => {
	const { stats, tolerances } = useFetchStats(timescale);

	return (
		<Grid
			container
			spacing={1}
			columns={{ xs: 1, md: 2, lg: 3 }}
		>
			{dashboardTrackedStats.map(({ key, name, unit }) => (
				<Grid item xs={1} key={key}>
					<GraphCard
						title={name}
						unit={unit}
						data={stats.map(({ unixTime, stats }) => ({
							x: new Date(unixTime * 1000),
							y: stats[key],
							t: tolerances[key],
						}))}
						timescale={timescale}
					/>
				</Grid>
			))}
		</Grid>
	);
}

export default GraphContainer;
