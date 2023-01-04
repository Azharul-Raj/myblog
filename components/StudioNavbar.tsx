import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function StudioNavbar(props:any) {
  return (    
      <>
          <div className="">
              <div className="flex text-yellow-300">
                <ArrowUturnLeftIcon className='h-5 w-5 mx-5'/>
                  <Link href="/">Go back to Website</Link>
              </div>
          </div>
          {props.renderDefault(props)}
      </>
  )
}
