import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function QueDisclosure({ que, ans }) {
	return (
		<div className="w-full p-2 mx-auto bg-white rounded-2xl">
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
							<span>{que}</span>
							<ChevronUpIcon
								className={`${
									open ? "transform rotate-180" : ""
								} w-5 h-5 text-purple-500 `}
							/>
						</Disclosure.Button>
						<Transition
							show={open}
							enter="transition duration-500 ease-in-out"
							enterFrom="transform scale-95 opacity-0"
							enterTo="transform scale-100 opacity-100"
							leave="transition duration-75 ease-out"
							leaveFrom="transform scale-100 opacity-100"
							leaveTo="transform scale-95 opacity-0"
						>
							<Disclosure.Panel
								static
								className="px-4 pt-4 pb-2 text-sm text-gray-500 "
							>
								{ans}
							</Disclosure.Panel>
						</Transition>
					</>
				)}
			</Disclosure>
		</div>
	);
}
