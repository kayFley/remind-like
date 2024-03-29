import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet'
import { useForm } from 'react-hook-form'
import {
	createCollectionSchema,
	createCollectionSchemaType,
} from '@/schema/createCollection'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { CollectionColor, CollectionColors } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface Props {
	open: boolean
	onOpenChange: (open: boolean) => void
}

export default function CreateCollectionSheet({ open, onOpenChange }: Props) {
	const form = useForm<createCollectionSchemaType>({
		resolver: zodResolver(createCollectionSchema),
		defaultValues: {},
	})

	const onSubmit = data => {
		console.log()
	}

	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Add new collection</SheetTitle>
					<SheetDescription>
						Collections are used to group your tasks
					</SheetDescription>
				</SheetHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name='name'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Collection Name</FormLabel>
									<FormControl>
										<Input placeholder='' {...field}></Input>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='color'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Color</FormLabel>
									<FormControl>
										<Select onValueChange={color => field.onChange(color)}>
											<SelectTrigger
												className={cn(
													'w-full h-8 text-white',
													CollectionColors[field.value as CollectionColor],
												)}
											>
												<SelectValue
													placeholder='Color'
													className='w-full h-8'
												/>
											</SelectTrigger>
											<SelectContent className='w-full'>
												{Object.keys(CollectionColors).map(color => (
													<SelectItem
														key={color}
														value={color}
														className={cn(
															`w-full h-8 rounded-md my-1 text-white focus:text-white focus:font-bold focus:ring-2 ring-neutral-600 focus:ring-inset dark:focus:ring-white focus:px-8`,
															CollectionColors[color as CollectionColor],
														)}
													>
														{color}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	)
}
