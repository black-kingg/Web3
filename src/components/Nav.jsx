import { Link } from "react-router-dom";
import { navigation } from "../config";

import { GiAtlas } from "react-icons/gi";
import "animate.css";

export const Nav = (props) => {
	return (
		<>
			<div className="fixed bg-[#0b1111] bg-opacity-90 border-b border-gray-400 top-0 left-0 w-full z-10">
				<div className=" flex pl-8 pr-20 py-4 m-auto place-content-between  transition-all overflow-hidden">
					<Link
						to="/"
						className="animate__animated animate__pulse animate__infinite	infinite"
					>
						<GiAtlas
							size={60}
							color="#07dabd"
						/>
					</Link>

					<div className="text-gray-300  flex gap-6">
						{navigation.map((navigator, index) => (
							<Link
								to={navigator.href}
								className="text-base cursor-pointer m-auto"
								key={index}
							>
								{navigator.label}
							</Link>
						))}
						<button
							className={`bg-gradient-to-r from-[#115f59] to-[#068f83] text-white ml-20 py-2 px-5 rounded-sm text-base`}
						>
							<Link to="/swap">Launch App</Link>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
