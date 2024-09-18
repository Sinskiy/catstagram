import passport from "passport";
import passportLocal, { VerifyFunction } from "passport-local";
import prisma from "./db.js";
import bcrypt from "bcryptjs";

const LocalStrategy = passportLocal.Strategy;

const verifyUser: VerifyFunction = async (email, password, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { email: email } });

    if (!user) {
      return done(null, false, { message: "Incorrect username" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return done(null, false, { message: "Incorrect password" });
    }

    done(null, user);
  } catch (err) {
    done(err);
  }
};

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (userId: number, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    done(null, user);
  } catch (err) {
    done(err);
  }
});

const localStrategy = new LocalStrategy({ usernameField: "email" }, verifyUser);
passport.use(localStrategy);

export default passport;
