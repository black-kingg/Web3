import React, { useEffect, useState } from "react";
import axios from "axios";

const OpenSeaAPIKey = "94bf65e87c4d41af96367b3d0272e6c3";

export const Rankings = () => {
	const [nftData, setNFTData] = useState(null);

	useEffect(() => {
		const customHeaders = {
			"X-API-KEY": OpenSeaAPIKey,
		};
		const axiosConfig = {
			headers: customHeaders,
			params: {
				limit: "100",
			},
		};

		axios
			.get(`https://api.opensea.io/api/v1/assets`, axiosConfig)
			.then((response) => {
				console.log(response.data.assets);

				const filteredNFTData = filterAndLimitNFTs(response.data.assets);
				setNFTData(filteredNFTData);
			})
			.catch((error) => {
				console.error("Error fetching NFT data:", error);
			});
	}, []);

	const filterAndLimitNFTs = (assets) => {
		const nftCountMap = new Map();

		return assets.filter((nft) => {
			const collectionName = nft.collection.name;

			if (!nftCountMap.has(collectionName)) {
				nftCountMap.set(collectionName, 1);
				return true;
			}

			if (nftCountMap.get(collectionName) < 3) {
				nftCountMap.set(collectionName, nftCountMap.get(collectionName) + 1);
				return true;
			}

			return false;
		});
	};

	return (
		<div className="h-auto w-full pl-20 mx-auto mt-40 flex flex-col items-start justify-center p-8">
			{nftData && (
				<div className="p-4 rounded-md shadow-md">
					<h1 className="text-2xl font-bold mb-4">NFT Rankings</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{nftData.map((nft, index) => (
							<div
								key={index}
								className="border border-gray-200 flex flex-col space-x-5 mt-5 p-4 rounded-md"
							>
								<img
									className=""
									src={nft.asset_contract.image_url}
								/>
								<div className="mt-5">
									<h2 className="text-lg text-gray-100 font-semibold mt-2">
										{nft.name}
									</h2>
									<h2 className="text-lg text-gray-300 font-semibold mt-2">
										{nft.collection.name}
									</h2>
									<p className="text-sm text-gray-300 mt-1">
										Market Cap: ${nft.market_cap}
									</p>
									<p className="text-sm text-gray-300 mt-1">
										Floor Price: ${nft.floor_price}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
