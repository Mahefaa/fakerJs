import {faker} from '@faker-js/faker';
import * as fs from 'fs';
const templateFiller=(first_name,last_name,nickname,birthday,gender,email,profile_pic,)=>{
    return (`('${first_name}','${last_name}','${nickname}','${birthday}','${gender}','${email}','${profile_pic}')`)
};
let total ="INSERT INTO account (first_name, last_name, nickname, birthday, gender, email, profile_pic) VALUES ";
let limit = 250_000_000;
for(let i = 0 ; i < limit; i++){
    const first_name = faker.name.firstName();
    const last_name =faker.name.lastName();
    const nickname = faker.name.firstName();
    const birthday = faker.date.between('1990-01-01','2004-12-31').toISOString().split('T')[0]
    const gender = faker.name.gender(true)[0];
    const email = faker.internet.email();
    const profile_pic = faker.internet.url();
    total+=templateFiller(first_name,last_name,nickname,birthday,gender,email,profile_pic)
    total+= (i < limit -1 )?",":""
}
fs.writeFileSync('250M.sql',total);
console.log(total.length);