import React from 'react'
import LogoIcon from '/public/logo.svg';
import FacebookIcon from '/public/facebook.svg';
import TwitterIcon from '/public/twitter.svg';
import InstagramIcon from '/public/instagram.svg';
import Link from 'next/link';

export default function index() {
  return (
    <section className='pb-16'>
      <div className='mb-14'>
        <LogoIcon className="fill-darkPurple mr-auto ml-auto" />
      </div>

      <div className="flex items-center justify-center gap-7">
        <Link href="#" className="group">
          <FacebookIcon className="
                fill-davyGrey
          group-hover:fill-darkPurple group-active:fill-darkPurple" />
        </Link>
        <button className="group">
          <TwitterIcon className="
                fill-davyGrey
          group-hover:fill-darkPurple group-active:fill-darkPurple" />
        </button>
        <button className="group">
          <InstagramIcon className="
          fill-davyGrey
          group-hover:fill-darkPurple group-active:fill-darkPurple" />
        </button>
      </div>

    </section>
  )
}
