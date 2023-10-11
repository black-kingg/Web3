import { BsFillShieldLockFill } from "react-icons/bs";
import { GiMultipleTargets } from "react-icons/gi";
import { TbLockAccessOff } from "react-icons/tb";

const Section = (props) => {
	const { children } = props;

	return (
		<section
			className={`
      h-screen w-screen ml-5 p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center
    `}
		>
			{children}
		</section>
	);
};

export const Home = (props) => {
	const { setSection } = props;
	return (
		<div className="flex flex-col items-center w-screen ">
			<HomeSection setSection={setSection} />
			<DocsSection />
			<AboutSection />
		</div>
	);
};

const HomeSection = (props) => {
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
				Create, buy, sell, swap and earn NFTs
			</p>
		</Section>
	);
};

const DocsSection = (props) => {
	return (
		<Section>
			<div className="flex flex-row gap-10 -mt-30 p-20 bg-[#0b1111]">
				<div className="shadow-xl p-4 text-gray-300 w-2/3 flex flex-col gap-2 items-center justify-center">
					<GiMultipleTargets
						size={100}
						color="#07dabd"
					/>
					<div className="border-t border-gray-400 flex flex-col gap-5 pt-4">
						<h1 className="text-3xl font-bold">Multi-Asset Baskets</h1>
						<p className="text-sm">
							Multi-Asset Baskets are diversified investment portfolios
							containing various asset classes, like stocks, bonds, and
							commodities, offering risk management and return potential to
							investors.
						</p>
					</div>
				</div>
				<div className="shadow-xl p-4 text-gray-300 w-2/3 flex flex-col gap-2 items-center justify-center">
					<BsFillShieldLockFill
						size={100}
						color="#07dabd"
					/>
					<div className="border-t border-gray-400 flex flex-col gap-5 pt-4">
						<h1 className="text-3xl font-bold">Decentralized Escrow</h1>
						<p className="text-sm">
							Decentralized escrow: Trustless, blockchain-based system holding
							funds until terms are met, reducing reliance on intermediaries in
							transactions for increased security.
						</p>
					</div>
				</div>
				<div className="shadow-xl p-4 text-gray-300 w-2/3 flex flex-col gap-2 items-center justify-center">
					<TbLockAccessOff
						size={82}
						color="#07dabd"
					/>
					<div className="border-t border-gray-400 flex flex-col gap-5 pt-4">
						<h1 className="text-3xl font-bold">Censorship Restraint</h1>
						<p className="text-sm">
							Censorship restraint is the practice of exercising moderation and
							discretion when implementing content restrictions or limitations
							to preserve freedom.
						</p>
					</div>
				</div>
			</div>
		</Section>
	);
};

const AboutSection = () => {
	return (
		<Section>
			<div className="text-gray-300">
				<div className="mt-8">
					<h2 className="text-3xl md:text-5xl font-bold ">
						The Future of NFT Trading
					</h2>
					<div className="mt-2 space-y-4 py-8 px-2 border-y border-gray-400">
						<div className="w-64 md:w-96 ">
							<h3 className="text-lg md:text-xl ">
								Data Analysis with problem factor
							</h3>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};
