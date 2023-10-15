import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navigation } from "../config";
import { GiAtlas } from "react-icons/gi";

export const Nav = (props) => {
	return (
		<div
			id="nav"
			className={`fixed top-0 left-0 w-full z-10 transition-opacity duration-500 `}
		>
			<div className="bg-[#0b1111] bg-opacity-90 border-b border-gray-400">
				<div className="flex pl-8 pr-20 py-4 m-auto place-content-between">
					<Link
						to="/"
						className="text-5xl text-white"
					>
						LOGO
					</Link>

					<div className="text-gray-300 space-x-8">
						{navigation.map((navigator, index) => (
							<Link
								to={navigator.href}
								className="text-base cursor-pointer"
								key={index}
							>
								{navigator.label}
							</Link>
						))}
						<button
							className={`bg-gradient-to-r from-[#115f59] to-[#068f83] text-white \ py-4 px-5 rounded-sm text-base`}
						>
							<Link to="/swap">Launch App</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
