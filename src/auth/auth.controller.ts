import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private _authService: AuthService) { }

    @Get('signin')
    singin() {
        return this._authService.signedIn();
    }

    @Get('signup')
    signup() {
        return this._authService.signedUp();
    }
}