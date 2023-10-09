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

export const Interface = (props) => {
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
					Explore
					<br />
					<span className="text-transparent bg-gradient-to-r from-[#14595e]  to-[#07dabd] bg-clip-text">
						NFT Art Trading
					</span>
				</h1>
				<p className="text-sm pt-5 leading-snug text-gray-300 w-[45%]">
					NFT art trading involves the buying and selling of unique didgital
					artworks that are authenticated and verified using blockchain
					technology.
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
