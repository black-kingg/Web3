const Section = (props) => {
	const { children } = props;

	return (
		<section
			className={`
    h-screen w-screen pl-20  mx-auto flex flex-col items-start justify-center
    `}
		>
			{children}
		</section>
	);
};

export const Home = (props) => {
	const { setSection } = props;
	return (
		<div className="flex flex-col items-center ">
			<HomeSection setSection={setSection} />
			<DocsSection />
		</div>
	);
};

const HomeSection = (props) => {
	return (
		<Section>
			<>
				<h1 className="text-4xl md:text-8xl  text-gray-300 font-extrabold ">
					<div className="flex gap-5">
						All
						<p className="rotate-words">
							<span className="grid text-transparent bg-gradient-to-r from-[#14595e]  to-[#07dabd] bg-clip-text">
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
			</>
		</Section>
	);
};

const DocsSection = (props) => {
	return (
		<Section>
			<></>
		</Section>
	);
};
