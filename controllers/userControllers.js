const User = require('../models/User');
var csv = require('csvtojson');
const { response } = require('../routers/userRoute');


const importUser = async(req, res) =>{
    try {
        let userData = [];

        csv({delimiter: ','}).fromFile(req.file.path).then(async(data) =>{
            //Insertamos los encabezado a la coleccion con su Schema
            for(let x = 0; x < data.length; x++){
                 userData.push({
                    ID:data[x].ID,  
                    Name:data[x].Name,  
                    Age:data[x].Age,  
                    Photo:data[x].Photo,  
                    Nationality:data[x].Nationality,  
                    Flag:data[x].Flag,  
                    Overall:data[x].Overall,  
                    Potential:data[x].Potencial,  
                    Club:data[x].Club,  
                    ClubLogo:data[x].ClubLogo,  
                    Value:data[x].Value,  
                    Wage:data[x].Wage,  
                    Special:data[x].Special,  
                    PreferredFoot:data[x].PreferredFoot,  
                    InternationalReputation:data[x].InternationalReputation,  
                    WeakFoot:data[x].WeakFoot,  
                    SkillMoves:data[x].SkillMoves,  
                    WorkRate:data[x].WorkRate,  
                    BodyType:data[x].BodyType,  
                    RealFace:data[x].RealFace,  
                    Position:data[x].Position,  
                    JerseyNumber:data[x].JerseyNumber,  
                    Joined:data[x].Joined,  
                    LoanedFrom:data[x].LoanedFrom,  
                    ContractValidUntil:data[x].ContractValidUntil,  
                    Height:data[x].Height,  
                    Weight:data[x].Weight, 
                    Crossing:data[x].Crossing,  
                    Finishing:data[x].Finishing,  
                    HeadingAccuracy:data[x].HeadingAccuracy,  
                    ShortPassing:data[x].ShortPassing,  
                    Volleys:data[x].Volleys,  
                    Dribbling:data[x].Dribbling,  
                    Curve:data[x].Curve,  
                    FKAccuracy:data[x].FKAccuracy,  
                    LongPassing:data[x].LongPassing,  
                    BallControl:data[x].BallControl,  
                    Acceleration:data[x].Acceleration,  
                    SprintSpeed:data[x].SprintSpeed,  
                    Agility:data[x].Agility,  
                    Reactions:data[x].Reactions,  
                    Balance:data[x].Balance,  
                    ShotPower:data[x].ShotPower,  
                    Jumping:data[x].Jumping,  
                    Stamina:data[x].Stamina,  
                    Strength:data[x].Strength,  
                    LongShots:data[x].LongShots,  
                    Aggression:data[x].Aggression,  
                    Interceptions:data[x].Interceptions,  
                    Positioning:data[x].Positioning,  
                    Vision:data[x].Vision,  
                    Penalties:data[x].Penalties,  
                    Composure:data[x].Composure,  
                    Marking:data[x].Marking,  
                    StandingTackle:data[x].StandingTackle,  
                    SlidingTackle:data[x].SlidingTackle,  
                    GKDiving:data[x].GKDiving,  
                    GKHandling:data[x].GKHandling,  
                    GKKicking:data[x].GKKicking,  
                    GKPositioning:data[x].GKPositioning,  
                    GKReflexes:data[x].GKReflexes,  
                    BestPosition:data[x].BestPosition,  
                    BestOverallRating:data[x].BestOverallRating 
                 });
             }
            await User.insertMany(userData);
            console.log(userData);
        });
    } catch (error) {
        res.send({ status:400 ,success:false, msg: error.message});
    }
}

module.exports = {importUser}