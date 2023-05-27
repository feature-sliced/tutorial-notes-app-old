import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
	return [
		{ title: "FSD Notes" },
		{
			name: "description",
			content: "Make notes and synchronize them with the cloud!",
		},
	];
};

export default function Index() {
	return <div className="m-4">Start here!</div>;
}
