import { PacmanLoader } from "react-spinners";

const Loading = () => {
	return (
		<section className="py-24">
			<div className="mx-auto">
				<PacmanLoader color="rgba(231, 107, 28, 1)" size={50} />
			</div>
		</section>
	);
};

export default Loading;
