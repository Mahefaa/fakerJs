import {faker} from '@faker-js/faker';
import * as fs from 'fs';
let base ="INSERT INTO account (first_name, last_name, nickname, birthday, gender, email, profile_pic) VALUES";
let sum=""
const templateFiller=(first_name,last_name,nickname,birthday,gender,email,profile_pic,)=>{
    return (`${base} ('${first_name}','${last_name}','${nickname}','${birthday}','${gender}','${email}','${profile_pic}');`)
};
let limit = 250_000;
for(let i = 0 ; i < limit; i++){
    const first_name = faker.name.firstName().replace("'","''");
    const last_name =faker.name.lastName().replace("'","''");
    const nickname = faker.name.firstName().replace("'","''");
    const birthday = faker.date.between('1990-01-01','2004-12-31').toISOString().split('T')[0]
    const gender = faker.name.gender(true)[0];
    const email = faker.internet.email();
    const profile_pic = faker.internet.url();
    sum+=templateFiller(first_name,last_name,nickname,birthday,gender,email,profile_pic)
}
fs.writeFileSync('data.sql',sum);
console.log(sum.length);