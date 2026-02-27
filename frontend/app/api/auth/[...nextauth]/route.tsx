import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    Credentials({
      name: 'Strapi',
      credentials: {
        email: {
          label: 'Email',
          type: 'email'
        },
        password: {
          label: 'Password',
          type: 'password'
        },
      },
      async authorize(credentials) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              identifier: credentials.email,
              password: credentials.password,
            })
          }
        )
        const data = await res.json()
      
        if (!res.ok || !data.jwt)
          throw new Error(data.error?.message || 'Login failed.')

        return {
          id: String(data.user.id),
          name: data.user.username,
          email: data.user.email,
          firstName: data.firstName,
          lastName: data.lastName,
          jwt: data.jwt,
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = String(user.id)
        token.jwt = user.jwt
        
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id
      session.jwt = token.jwt

      return session
    }
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST}