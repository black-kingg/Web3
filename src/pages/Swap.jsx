import { Link } from "react-router-dom";
import React, { useState } from "react";

export const SwapNav = () => {
	// Fixed function declaration
	return (
		<div className="fixed  bg-[#0b1111] bg-opacity-90 border-b border-gray-400 top-0 left-0 w-full z-10">
			<div className="flex pl-8 pr-20 py-4 m-auto place-content-between transition-all overflow-hidden">
				<Link
					to="/"
					className="text-5xl text-white"
				>
					LOGO
				</Link>

				<div className="text-gray-300 flex gap-6">
					<button
						className={`bg-gradient-to-r from-[#115f59] to-[#068f83] text-white ml-20 py-2 px-5 rounded-sm text-base`}
					>
						Connect Wallet
					</button>
				</div>
			</div>
		</div>
	);
};

export const Swap = () => {
	const [fromAmount, setFromAmount] = useState(0);
	const [toAmount, setToAmount] = useState(0);
	const [fromCurrency, setFromCurrency] = useState("BTC");
	const [toCurrency, setToCurrency] = useState("ETH");

	const handleSwap = () => {
		// Implement the swap logic here
	};
	return (
		<>
			<SwapNav />
			<div className="h-screen w-full pl-20 mx-auto flex flex-col items-center justify-center">
				<div className=" flex">
					<div className="bg-[#263634] p-8 rounded shadow-md w-96">
						<h1 className="text-2xl text-gray-100 font-bold mb-4">
							Crypto Swap
						</h1>

						<div className="mb-4">
							<label htmlFor="fromCurrency">From</label>
							<input
								type="number"
								value={fromAmount}
								onChange={(e) => setFromAmount(e.target.value)}
								className="bg-[#263634] p-3 w-full text-gray-100 text-sm border-b outline-none ease-in-out"
							/>
							<select
								id="fromCurrency"
								value={fromCurrency}
								onChange={(e) => setFromCurrency(e.target.value)}
								className="bg-[#1a2524] mt-3 p-3 w-full text-gray-100 text-sm  focus:outline-none ease-in-out"
							>
								<option value="BTC">Bitcoin (BTC)</option>
								<option value="ETH">Ethereum (ETH)</option>
								{/* Add more options for different cryptocurrencies */}
							</select>
						</div>

						<div className="mb-4">
							<label htmlFor="toCurrency">To</label>
							<input
								type="number"
								value={toAmount}
								onChange={(e) => setToAmount(e.target.value)}
								className="bg-[#263634] p-3 w-full text-gray-100 text-sm border-b outline-none ease-in-out"
							/>
							<select
								id="toCurrency"
								value={toCurrency}
								onChange={(e) => setToCurrency(e.target.value)}
								className="bg-[#1a2524] mt-3  p-3 w-full text-gray-100 text-sm  focus:outline-none ease-in-out"
							>
								<option value="ETH">Ethereum (ETH)</option>
								<option value="BTC">Bitcoin (BTC)</option>
								{/* Add more options for different cryptocurrencies */}
							</select>
						</div>

						<button
							onClick={handleSwap}
							className="bg-gradient-to-r from-[#115f59] to-[#068f83] text-white py-2 px-4 rounded w-full"
						>
							Swap
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
