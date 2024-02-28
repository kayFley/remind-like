import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet'

interface Props {
	open: boolean
	onOpenChange: (open: boolean) => void
}

export default function CreateCollectionSheet({ open, onOpenChange }: Props) {
	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Add new collection</SheetTitle>
					<SheetDescription>
						Collections are used to group your tasks
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}
