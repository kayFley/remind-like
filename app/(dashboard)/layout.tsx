import { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
	return (
		<div className='flex min-h-screen w-full flex-col items-center'>
			<div className='flex flex-grow w-full justify-center dark:bg-neutral-950'>
				<div className='max-w-[1080px] flex flex-col flex-grow px-4 py-12'>
					{children}
				</div>
			</div>
		</div>
	)
}
