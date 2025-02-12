import React from "react";
import { Episode } from "@/__generated__/graphql";

interface Props {
	episode: Episode;
	setSelectedEpisode: React.Dispatch<React.SetStateAction<Episode | null>>;
	setHighlightedEpisodeId: React.Dispatch<React.SetStateAction<string | null>>;
	highlightedEpisodeId: string | null;
}

export const EpisodeInfo: React.FC<Props> = ({
	episode,
	setSelectedEpisode,
	setHighlightedEpisodeId,
	highlightedEpisodeId,
}) => {
	const currentEpisode = () => {
		setSelectedEpisode(episode);
		setHighlightedEpisodeId(episode.id ? episode.id : null);
	};

	return (
		<aside
			className={`cursor-pointer border-b-4 ${
				highlightedEpisodeId === episode.id ? "text-orange-400" : "text-white"
			}`}
			onClick={currentEpisode}
		>
			<div>
				{episode.id}. {episode?.name}
			</div>
			<div>{episode.air_date}</div>
		</aside>
	);
};

export default EpisodeInfo;
