'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import CreateCollectionSheet from '@/components/CreateCollectionSheet'

export default function CreateCollectionBtn() {
	const [open, setOpen] = useState(false)
	const handleOpenChange = (open: boolean) => setOpen(open)

	return (
		<div className='w-full rounded-md bg-gradient-to-br from-purple-400 to-blue-400 p-[1px]'>
			<Button
				variant={'outline'}
				className='dark:text-white w-full dark:bg-neutral-950 bg-neutral-50'
				onClick={() => setOpen(true)}
			>
				<span className='bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-transparent'>
					Create collection
				</span>
			</Button>
			<CreateCollectionSheet open={open} onOpenChange={handleOpenChange} />
		</div>
	)
}
