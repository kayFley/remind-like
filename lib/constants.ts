export enum CollectionColors {
	purpleToBlue = 'bg-gradient-to-br from-purple-500 to-blue-500',
	roseToRed = 'bg-gradient-to-br from-rose-400 to-red-800',
	cyanToIndigo = 'bg-gradient-to-br from-cyan-500 to-indigo-500',
	tealToLime = 'bg-gradient-to-br from-teal-400 via-green-500 to-lime-600',
	roseToPurple = 'bg-gradient-to-br from-rose-300 via-pink-500 to-purple-600',
	orangeToAmber = 'bg-gradient-to-br from-orange-500 via-yellow-400 to-amber-800',
}

export type CollectionColor = keyof typeof CollectionColors
