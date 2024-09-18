import {User} from '../model/user.model'
import {Strategy as GoogleStrategy} from 'passport-google-oauth20'

// Google Strategy
export const googleStrategy = new GoogleStrategy({
    clientID: process.env.CLIENT_ID as string,
    clientSecret:  process.env.CLIENT_SECRET as string ,
    callbackURL:'/auth/google/callback'
},
async (accessToken, refreshToken, profile, done) =>{
    try {

        let user = await User.findOne({googleId: profile.id})

        if(user){
            return done (null, user)
        }else{
            user = new User({
                googleId: profile.id,
                displayName: profile.displayName,
                email:  profile.emails ? profile.emails[0].value : null,
                profilePicture:profile.photos ? profile.photos[0].value : null 
            });

            await user.save();
            return done(null, user)
        }
        
    } catch (error) {
        console.log(error);
        return done(error, false)
    }
})


// SerializerUser
export const SerializeUser = (user:any, done:any ) =>{
    done(null, user.id)
}

   
// DeserializeUser
export const deserializeUser = async(id: string, done: any) =>{
    try {
        const user = await User.findById(id)
        done (null, user)
        
    } catch (error) {
        done(error, null)
    }
}