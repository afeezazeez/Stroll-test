import {User} from "../database/models/User";
import {FindOptions} from 'sequelize';
import {BaseRepository} from "./base.repository";
import {IUserRepository} from "./interfaces/user.repository.interface";



export class UserRepository extends BaseRepository<User> implements IUserRepository{

    constructor() {
        super(User);
    }

    async getByEmail(email: string): Promise<User | null> {
        try {
            const options: FindOptions = {where: { email }};
            return await User.findOne(options) ;
        } catch (error) {
            throw error
        }
    }


}


