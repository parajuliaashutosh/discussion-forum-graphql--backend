// src/services/WebTokenServices.ts
import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import { DotenvConfig } from '../config/env.config';

class WebTokenServices {
    sign(id: string): string {

        const token = jwt.sign(
            { id },
            DotenvConfig.JWT_SECRET as Secret,
            {
                expiresIn: DotenvConfig.JWT_TOKEN_EXPIRE as SignOptions['expiresIn'],
            }
        );
        return token;
    }

    verify(token: string): string | jwt.JwtPayload {
        return jwt.verify(token, DotenvConfig.JWT_SECRET);
    }
}

export default new WebTokenServices();