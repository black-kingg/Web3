import { Link } from "react-router-dom";

export const SwapNav = (props) => {
	return (
		<>
			<div className="fixed top-0 left-0 w-full z-10">
				<div className=" flex pl-8 pr-20 py-4 m-auto place-content-between  transition-all overflow-hidden">
					<Link
						to="/"
						className="text-gray-100 text-5xl"
					>
						Logo
					</Link>

					<div className="text-gray-300  flex gap-6">
						<button
							className={`bg-gradient-to-r from-[#115f59] to-[#068f83] text-white ml-20 py-2 px-5 rounded-sm text-base`}
						>
							<Link to="/swap">Connect Wallet</Link>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export const Swap = () => {
	return (
		<>
			<SwapNav />
			<div className="h-screen w-screen pl-20  mx-auto flex flex-col items-start justify-center">
				<h1 className="text-9xl text-[#44db37]">Swap</h1>
			</div>
		</>
	);
};
