import React from 'react'
import Image from 'next/image'
import { logoutAccount } from '@/lib/actions/user.action'
import { useRouter } from 'next/navigation'
const Footer = ( { user , type = 'desktop'}: FooterProps ) => {
  const handleLogOut = async () => {
    const router = useRouter();
    const loggedOut = await logoutAccount();

    if(loggedOut) router.push('/sign-in')
  }
  return (
    <footer className="footer">
        <div className={type == 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
            <p className="text-xl font-bold text-gray-700">
                {user?.firstName[0]}
            </p>
        </div>
        <div className={type == 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
          <h1 className = "text-14 truncate font-normal text-gray-600">
            {user?.firstName}
          </h1>
            <p className="text-14 truncate font-normal text-gray-600">
              {user?.email}
            </p>
        </div>
        <div className="footer_image" onClick = {handleLogOut}>
          <Image src="icons/logout.svg" fill alt="IB"/>
        </div>
    </footer>
  )
}

export default Footer