const useSlug = (value: string) => {
	const from = "àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;";
	const to = "aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------";
	const regex = new RegExp(from.split("").join("|"), "g");

	return value
		.toString()
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(regex, character => to.charAt(from.indexOf(character)))
		.replace(/&/g, "-and-")
		.replace(/[^\w\-]+/g, "")
		.replace(/\-\-+/g, "-")
		.replace(/^-+/, "")
		.replace(/-+$/, "");
};

export default useSlug;