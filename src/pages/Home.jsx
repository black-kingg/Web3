import React from "react";

import { BsFillShieldLockFill } from "react-icons/bs";
import { GiMultipleTargets } from "react-icons/gi";
import { TbLockAccessOff } from "react-icons/tb";
import { BsCheck2Circle } from "react-icons/bs";

import { aboutConfig, contentConfig, governConfig } from "../config";

const Section = (props) => {
	const { children } = props;

	return (
		<section
			className={`
     h-screen w-full p-8 max-w-full-2xl mx-auto flex flex-col justify-center
    `}
		>
			{children}
		</section>
	);
};

export const Home = (props) => {
	const { setSection } = props;
	return (
		<div className="flex flex-col items-center w-full">
			<HomeSection setSection={setSection} />
			<DocsSection />
			<AboutSection />
			<GovSection />
		</div>
	);
};

const HomeSection = () => {
	return (
		<Section>
			<h1 className="text-4xl md:text-8xl text-gray-300 font-extrabold ">
				<div className="flex gap-5">
					All
					<p className="words-animation">
						<span className="grid text-transparent bg-gradient-to-r from-[#14595e] to-[#07dabd] bg-clip-text">
							NFTs
							<br />
							Chain
						</span>
					</p>
				</div>
				One Platform
			</h1>
			<p className="text-base pt-5 leading-snug text-gray-300 ">
				Create, buy, sell, swap, and earn NFTs
			</p>
		</Section>
	);
};

const DocsSection = () => {
	return (
		<Section>
			<div className="drop-shadow-lg bg-[#141616] flex flex-row gap-10 -mt-30 p-20">
				{contentConfig.map((item, index) => (
					<div
						key={index}
						className="text-gray-300 w-2/3 flex flex-col gap-2 items-center justify-center"
					>
						{item.icon}
						<div className="border-t border-gray-400 flex flex-col gap-5 pt-4">
							<h1 className="text-3xl font-bold">{item.title}</h1>
							<p className="text-sm">{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</Section>
	);
};

const AboutSection = () => {
	return (
		<Section>
			<div className="text-gray-300">
				<div className="mt-8">
					<h2 className="text-[2.7rem] font-bold ">
						The Future of NFT Trading
					</h2>
					<div className="">
						{aboutConfig.map((item, index) => (
							<div key={index}>
								<div className="w-7/12 mt-5 py-5 px-2 border-t border-gray-400">
									<div className="flex space-x-5">
										<BsCheck2Circle size={70} />
										<div className="space-y-3">
											<p className="text-xl font-bold">{item.title}</p>
											<p className="text-sm">{item.message}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Section>
	);
};

const GovSection = () => {
	return (
		<Section className="mx-auto items-center">
			<div className="text-gray-300">
				<div className="mt-8">
					<h2 className="text-[2.7rem] font-bold text-center">
						Governance: Definition and Importance
					</h2>
					<div className="">
						{governConfig.map((item, index) => (
							<div key={index}>
								<div className=" mt-5 py-5 px-2 ">
									<div className="flex space-x-20 items-center mt-5 py-5 px-2">
										<BsCheck2Circle size={70} />
										<p className="text-2xl font-bold">{item.title}</p>
										<p className="text-base w-7/12 ">{item.message}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Section>
	);
};
