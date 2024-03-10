'use client'
import Features from "@/components/home/Features";
import Home from "@/components/home/Home";
import React from "react";
import { SessionProvider } from "next-auth/react";

function page() {
	return (
		<SessionProvider >
			<div className="w-full">
				<Home />
				<Features />
			</div>
		</SessionProvider>
	);
}

export default page;
