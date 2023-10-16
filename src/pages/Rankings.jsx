import React, { useEffect, useState } from "react";
import axios from "axios";
import altImage from "../assets/404_not_found.png";

const OpenSeaAPIKey = "94bf65e87c4d41af96367b3d0272e6c3";

export const Rankings = () => {
	const [nftData, setNFTData] = useState(null);

	useEffect(() => {
		const customHeaders = {
			"X-API-KEY": OpenSeaAPIKey,
		};
		const axiosConfig = {
			headers: customHeaders,
			params: {},
		};

		axios
			.get(`https://api.opensea.io/api/v1/assets`, axiosConfig)
			.then((response) => {
				console.log(response.data.assets);
				setNFTData(response.data.assets);
			})
			.catch((error) => {
				console.error("Error fetching NFT data:", error);
			});
	}, []);

	return (
		<div className="h-auto w-full pl-20 mx-auto mt-40 flex flex-col items-start justify-center p-8">
			{nftData && (
				<div className="h-auto p-4 rounded-md shadow-md">
					<h1 className="text-5xl font-bold mb-4 text-gray-100">
						NFT Rankings
					</h1>
					<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{nftData.map((nft, index) => (
							<div
								key={index}
								className="h-[30rem] overflow-hidden border border-gray-200 flex flex-col space-x-5 mt-5 p-4 rounded-md"
							>
								<img
									className="h-3/4 object-cover"
									src={nft.image_preview_url}
									onError={(e) => {
										e.target.src = altImage;
									}}
								/>
								<div className="mt-2">
									<h2 className="text-lg text-gray-100 font-semibold mt-2">
										{nft.name}
									</h2>
									<h2 className="text-lg text-gray-300 font-semibold mt-2">
										{nft.collection.name}
									</h2>
									<p className="text-sm text-gray-300 mt-1"></p>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
