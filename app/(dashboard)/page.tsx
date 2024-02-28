import { currentUser } from '@clerk/nextjs'
import { wait } from '@/lib/wait'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import prisma from '@/lib/prisma'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import CollectionIcon from '@/components/icons/CollectionIcon'
import CreateCollectionBtn from '@/components/CreateCollectionBtn'

export default async function Home() {
	return (
		<>
			<Suspense fallback={<WelcomeMsgFallback />}>
				<WelcomeMsg />
			</Suspense>
			<Suspense fallback={<div>Loading Collections...</div>}>
				<CollectionList />
			</Suspense>
		</>
	)
}

async function WelcomeMsg() {
	const user = await currentUser()
	await wait(2000)

	if (!user) {
		return <div>error</div>
	}

	return (
		<div className='flex w-full mb-12'>
			<h1 className='text-4xl font-bold'>
				Howdy, <br /> {user.firstName}
			</h1>
		</div>
	)
}

function WelcomeMsgFallback() {
	return (
		<div className='flex w-full mb-12'>
			<h1 className='text-4xl font-bold'>
				<Skeleton className='w-[150px] h-[72px]' />
				{/*<Skeleton className='w-[150px] h-[36px]' />*/}
			</h1>
		</div>
	)
}

async function CollectionList() {
	const user = await currentUser()
	const collection = await prisma.collection.findMany({
		where: {
			userId: user?.id,
		},
	})

	if (collection.length === 0) {
		return (
			<div className='flex flex-col gap-5'>
				<Alert>
					<CollectionIcon />
					<AlertTitle>You don&apos;t have any collections yet</AlertTitle>
					<AlertDescription>
						Click the &ldquo;Create collection&ldquo; button
					</AlertDescription>
				</Alert>
				<CreateCollectionBtn />
			</div>
		)
	}
}
