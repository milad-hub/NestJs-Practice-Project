import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    signedUp() {
        return 'Signed Up';
    }

    signedIn() {
        return 'Signed in';
    }
}