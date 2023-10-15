import React from "react";
import { Link } from "react-router-dom";

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
	return (
		<div className="flex flex-col items-center w-full">
			<HomeSection />
			<DocsSection />
			<AboutSection />
			<GovSection />
			<Footer />
		</div>
	);
};

const HomeSection = () => {
	return (
		<Section>
			<div className="-ml-5 md:ml-0">
				<h1 className="text-4xl md:text-8xl text-gray-400 font-extrabold">
					<div className="flex gap-5 text-gray-100">
						All
						<p className="words-animation -mt-4 md:mt-0">
							<span className="grid text-transparent bg-gradient-to-r from-[#14595e] to-[#07dabd]  bg-clip-text">
								NFTs
								<br />
								Chain
							</span>
						</p>
					</div>
					One Platform
				</h1>
				<p className="text-sm md:text-base pt-10 md:pt-5 leading-snug text-gray-300 ">
					Create, buy, sell, swap, and earn NFTs
				</p>
			</div>
		</Section>
	);
};

const DocsSection = () => {
	return (
		<Section>
			<div className="mt-96  pt-10 md:pt-0 md:-mt-20">
				<div className="drop-shadow-lg bg-[#141616] flex flex-col md:flex-row gap-10 mt-0 lg:-mt-30 p-20">
					{contentConfig.map((item, index) => (
						<div
							key={index}
							className="w-auto lg:w-2/3 flex flex-col gap-5 items-center justify-center"
						>
							<item.icon
								size={80}
								color="#1e776b"
							/>
							<div className="border-t border-gray-400 flex flex-col gap-5 pt-4">
								<h1 className="text-base md:text-3xl font-bold text-gray-100 "></h1>
								<p className="text-[0.6rem] md:text-sm text-gray-300 ">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
};

const AboutSection = () => {
	return (
		<Section>
			<div className="mt-96 pt-96 md:pt-0 md:mt-8">
				<h2 className="text-xl md:text-[2.7rem] font-bold text-gray-100">
					The Future of NFT Trading
				</h2>
				<div className="">
					{aboutConfig.map((item, index) => (
						<div key={index}>
							<div className="w-10/12 md:w-7/12 mt-5 py-5 px-2 border-t border-gray-400">
								<div className="flex space-x-5">
									<BsCheck2Circle
										size={70}
										className="text-gray-300"
									/>
									<div className="space-y-3">
										<p className="text-base md:text-xl font-bold text-gray-100">
											{item.title}
										</p>
										<p className="text-[0.6rem] md:text-sm text-gray-300">
											{item.message}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
};

const GovSection = () => {
	return (
		<Section className="mx-auto items-center">
			<div className="mt-96 pt-[38rem] md:pt-0 md:mt-8">
				<div className="mt-8">
					<h2 className="text-gray-100 text-xl md:text-[2.7rem] font-bold text-center">
						Governance: Definition and Importance
					</h2>
					<div className="">
						{governConfig.map((item, index) => (
							<div key={index}>
								<div className="mt-5 py-5 px-2">
									<div className="flex flex-col md:flex-row space-x-20 space-y-2 md:space-y-0 items-start md:items-center mt-5 py-5 px-2">
										<div className="relative">
											<div className="absolute w-16 h-16 border-2 border-gray-600 rounded-full mt-[4rem] md:-mt-8 -mx-4 flex items-center justify-center">
												<item.icon
													size={50}
													color="#1e776b"
												/>
											</div>
										</div>
										<p className="text-base md:text-2xl font-bold text-gray-100">
											{item.title}
										</p>
										<p className="text-sm md:text-base w-9/12 md:w-7/12 text-gray-300">
											{item.message}
										</p>
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

const Footer = () => {
	return (
		<>
			<div className="bg-[#111a19] h-auto w-full pt-8 pb-2 max-w-full-2xl mt-[32rem] md:mt-10 px-5 md:px-32  md:pt-8 justify-center border-t">
				<div className="flex flex-col md:flex-row place-content-between space-y-10 md:space-y-6">
					<div className="p-5 md:p-8 rounded-md bg-[#263634] w-full md:w-[32rem] max-w-full">
						<form>
							<label
								for="email"
								className="text-[0.8rem] md:text-base text-gray-400 block mb-1 mt-8"
							>
								Sign Up to Receive Product Updates and More:
							</label>
							<div className=" ">
								<input
									type="email"
									name="email"
									id="email"
									placeholder="youremail@gmail.com"
									className="bg-[#263634] p-3 w-full text-gray-100 text-sm focus:border-0 border-b outline-none ease-in-out"
								/>
							</div>
						</form>
					</div>
					<div className="flex flex-row space-x-10">
						<div className="text-gray-300 flex flex-col">
							<Link
								to="#"
								className="font-bold text-white"
							>
								Menu
							</Link>
							<div className="text-sm flex flex-col pt-7 space-y-5 text-gray-300">
								<Link to="#">Home</Link>
								<Link to="#">About Us</Link>
								<Link to="#">Services</Link>
							</div>
						</div>
						<div className=" flex flex-col">
							<Link
								to="#"
								className="font-bold text-white"
							>
								Help
							</Link>
							<div className="text-sm flex flex-col pt-7 space-y-5 text-gray-300">
								<Link to="#">Privacy and Policy</Link>
								<Link to="#">Terms of Use</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="pt-5 md:pt-10 flex flex-row place-content-between text-[0.7rem] text-gray-400">
					<p className="cursor-pointer">2023. All Rights Reserved</p>
					<p className="cursor-pointer">Terms & Conditions Privacy</p>
					<div>Hey Suckers</div>
				</div>
			</div>
		</>
	);
};
