import { NextResponse } from 'next/server'
 
export function middleware(request) {
  const activePath = request.nextUrl.pathname
  let userCookie = request.cookies.get('user')

  if(activePath=='/login' || activePath=='/register'){
    if(userCookie && userCookie.value){
      return NextResponse.redirect(new URL('/', request.url))
    }
    else{
      return NextResponse.next()
    }
  }
  else{
    if((userCookie && userCookie.value) || activePath=='/landing'){
      return NextResponse.next()
    }
    else{
      return NextResponse.redirect(new URL('/landing', request.url))
    }
  }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
}