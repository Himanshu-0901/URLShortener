
export const cookieOptions = {
    httpOnly:true,
    secure : process.env.NODE_ENV === "production",
    secure:true,
    sameSite : "lax",
    path:"/"
    // maxAge : 1000*60*60,
}