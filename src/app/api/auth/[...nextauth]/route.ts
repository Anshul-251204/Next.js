import NextAuth from "next-auth"
import otpion from "@/lib/authOption";

const handler = NextAuth(otpion);

export { handler as GET, handler as POST }