import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import User from "../../../../models/user";
import { connectToDB } from "../../../../utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "E-Mail",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        await connectToDB();
        // Logic to look up user in MongoDB
        const userExist = await User.findOne({
          email: credentials.email,
          password: credentials.password,
        });
        if (userExist) {
          return {
            id: userExist._id,
            name: userExist.firstName + " " + userExist.lastName,
            email: userExist.email,
            image: userExist.image,
          };
        } else {
          // throw new Error('NotMatchingCredentials');
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    error: "/sign-in",
  },
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: user.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            firstName: profile?.given_name,
            lastName: profile?.family_name,
            address: "-",
            postCode: "-",
            city: "-",
            tel: "-",
            email: profile?.email,
            nationality: "-",
            birthDate: "01.01.1900",
            image: user.image,
          });
        }
        if (!userExists) {
          throw new Error("FillDetails");
        }

        return true;
      } catch (error) {
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
