"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "../ui/select";

const SelectDropdown = ({
	search,
	status,
}: {
	search: string;
	status: string;
}) => {
	const router = useRouter();
	const handleSelectChange = (selectedStatus: string) => {
		const query = search
			? `?search=${search}&status=${selectedStatus}`
			: `?status=${selectedStatus}`;
		router.push(`/characters${query}`);
	};

	return (
		<Select onValueChange={handleSelectChange} value={status}>
			<SelectTrigger className="w-[180px] text-black">
				<SelectValue placeholder="Sort" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Status</SelectLabel>
					<SelectItem value="Dead">Dead</SelectItem>
					<SelectItem value="unknown">unknown</SelectItem>
					<SelectItem value="Alive">Alive</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default SelectDropdown;
