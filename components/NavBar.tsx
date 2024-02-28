import React from 'react'
import { UserButton } from '@clerk/nextjs'
import Logo from '@/components/Logo'

export default function NavBar() {
	return (
		<nav className='flex w-full items-center justify-between p-4 px-8 h-[48px]'>
			<Logo />
			<div className='flex gap-4 items-center'>
				<UserButton afterSignOutUrl='/' />
			</div>
		</nav>
	)
}
